function InputBox({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className={`bg-black px-3 py-6 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label className="text-white/70 mb-2 inline-block">{label}</label>
        <input
          className="outline-none text-white/70 w-full bg-transparent py-1.5 border-2 border-white/70 px-2 py-1 rounded-md"
          type="number"
          placeholder="Amount"
          min={1}
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="text-white/70 mb-2 w-full">Currency Type</label>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none min-w-[100px]"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
