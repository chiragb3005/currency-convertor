import React, { useId } from "react";

function InputBox({
    label,
    // for "to/from"
    amount,
   // will ask from user how much amount he wants to give
    onAmountChange = () => {},
    // passing a method so when amount changes new convertable amount comes
    onCurrencyChange = () => {},
    // user selects a new currency, need to change the UI
    currencyOptions = [],
    // keeping an empty array so no ccrash scene comes
    selectedCurrency = "usd",
     // default value when page loaded first
     amountDisable = false,
    // giving no access for the output input
     currencyDisable = false,
     className = "",
     // in case user want to give its own css style formatting
}) {

     const amountInput = useId();

    return (
        <div
        className={`bg-white p-4 rounded-xl text-sm flex gap-4 w-full max-w-md ${className}`}
        >
        {/* LEFT SIDE (Amount) */}
            <div className="w-1/2">
                <label
                htmlFor={amountInput}
                className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>

                <input
                id={amountInput}
                type="number"
                min={0}
                placeholder="Amount"
                className="outline-none w-full bg-transparent py-2 border rounded-md px-2"
                disabled={amountDisable}
                value={amount}
                onChange={(e) =>
                    onAmountChange(
                    e.target.value === "" ? "" : Number(e.target.value)
                    )
                }
                />
            </div>

            {/* RIGHT SIDE (Currency) */}
            <div className="w-1/2 flex flex-col items-end">
                <p className="text-black/40 mb-2 w-full text-right">
                Currency Type
                </p>

                <select
                className="rounded-md px-2 py-2 bg-gray-400 cursor-pointer outline-none w-full max-w-30"
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
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