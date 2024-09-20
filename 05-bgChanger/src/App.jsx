import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('#264653');

  return (
    <div className="main-container" style={{background:color}}>
      <div className="btn-wrap">
      <button className="bg-[#8ecae6] text-white font-bold py-2 px-4 rounded-xl" onClick={() => setColor('#8ecae6')}>
        Button
      </button>
      <button className="bg-[#219ebc] text-white font-bold py-2 px-4 rounded-xl" onClick={() => setColor('#219ebc')}>
        Button
      </button>
      <button className="bg-[#023047] text-white font-bold py-2 px-4 rounded-xl" onClick={() => setColor('#023047')}>
        Button
      </button>
      <button className="bg-[#ffb703] text-white font-bold py-2 px-4 rounded-xl" onClick={() => setColor('#ffb703')}>
        Button
      </button>
      <button className="bg-[#fb8500] text-white font-bold py-2 px-4 rounded-xl" onClick={() => setColor('#fb8500')}>
        Button
      </button>
    </div>
    </div>
  )
}

export default App
