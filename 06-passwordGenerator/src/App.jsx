import { useState,useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [limit, setLimit] = useState("10");
  const [password, setPassword] = useState("");
  const [allowSpecialCharater,setAllowSpecialCharater] = useState(false)
  const [allowNumericCharater,setAllowNumericCharater] = useState(false)


  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowNumericCharater){
      str+="0123456789"
    }
    if(allowSpecialCharater){
      str+="!@#$%^&*(){}[]"
    }
    for (let i = 0; i < limit; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);

    }
    setPassword(pass)
  }, [limit,allowNumericCharater,allowSpecialCharater]);

  useEffect(() => {
    passwordGenerator();
  }, [limit,allowNumericCharater,allowSpecialCharater]);
  return (
    <div
      className="relative p-2 bg-wrap"
      style={{
        background: "#000",
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="rounded-xl p-10 bg-[rgb(24,24,24)] text-center absolute input-wrap">
        <h1 className="text-3xl font-bold text-white mb-10">
          Password Generator
        </h1>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            name="input-box"
            value={password}
            id="input-box"
            className="input-box font-bold outline-none rounded-xl px-4 py-2 w-full"
            placeholder="Password"
            readOnly
            onChange={setPassword}
            ref={passwordRef}
          />
          <button
            type="button"
            className="text-white outline-none font-bold rounded-xl bg-green-700 p-2 w-[120px]" onClick={copyPassword}
          >
            COPY
          </button>
        </div>
        <div className="range-wrap flex gap-3 items-center">
          <input
            type="range"
            name="range-box"
            id="range-box"
            value={limit}
            min={10}
            max={99}
            className="range-box w-full"
            onChange={(e) => setLimit(e.target.value)}
          />
          <label
            htmlFor="range-box"
            className="text-white font-bold text-[16px] whitespace-nowrap select-none"
          >
            Limit {limit}
          </label>
          <input
          defaultChecked={allowSpecialCharater}
          onChange={() => setAllowSpecialCharater((prev) => !prev)}
            type="checkbox"
            name="special-charater"
            id="special-charater"
            className="special-charater"
          />
          <label
            htmlFor="special-charater"
            className="text-white font-bold text-[16px] whitespace-nowrap select-none"
          >
            Special Charater
          </label>
          <input
            defaultChecked={allowNumericCharater}
            onChange={() => setAllowNumericCharater((prev) => !prev)}
            type="checkbox"
            name="numeric-charater"
            id="numeric-charater"
            className="numeric-charaters"
          />
          <label
            htmlFor="numeric-charater"
            className="text-white font-bold text-[16px] whitespace-nowrap select-none"
          >
            Numeric Charater
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
