import React, { useEffect, useState, useCallback } from "react";
import CurrencySelect from "./CurrencySelect";
import Loader from "./Loader";

export default function ConverterForm() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setfromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rate, setRate] = useState(null); // store exchange rate to avoid redundant API calls

  //   fetch exchange rate and calculate the result
  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

    console.log(API_URL);

    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch exchange rate");

      const data = await response.json();
      const exRate = data.conversion_rates[toCurrency];
      setRate(exRate); // update rate state

    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // fetch new rate when fromCurrency or toCurrency changes
  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  // recalc locally when amount OR rate changes
  useEffect(() => {
    if (rate !== null) {
      const converted = (rate * Number(amount)).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${converted} ${toCurrency}`);
    }
  }, [amount, rate, fromCurrency, toCurrency]);


  const handleSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  const swapCurrencies = useCallback(() => {
    setfromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  return (
    <div
      className="relative
      m-auto
      w-2/3
      p-8
      bg-slate-900
      rounded-lg
      shadow-lg
      border border-purple-500/30
      transition-all duration-500 ease-in-out
"
    >
      <h2 className="text-4xl font-bold font-mono text-center mb-6 text-purple-400 drop-shadow-neon">
        JoyToDev Currency Converter 💱
      </h2>

      <form onSubmit={handleSubmit}>
        {/* div amount */}
        <div>
          <label
            htmlFor="amount"
            className="block text-teal-400 text-2xl font-mono mb-2"
          >
            Enter Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="w-full p-2 text-2xl bg-slate-800 text-teal-400 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 shadow-neon-sm mb-2"
            required
          />
        </div>

        {/*currency selection */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
          <div className="flex-1 w-full">
            {/* from */}
            <label>From</label>
            <CurrencySelect
              currency={fromCurrency}
              onCurrencyChange={(e) => setfromCurrency(e.target.value)}
            />
          </div>

          {/* exchange icon */}
          <button
            type="button"
            onClick={swapCurrencies}
            title="Swap currencies"
            className="mt-6 md:mt-0"
          >
            <img src="/swap.png" alt="Swap icon" className="w-12 h-12" />
          </button>

          {/* to */}
          <div className="flex-1 w-full">
            <label>To</label>
            <CurrencySelect
              currency={toCurrency}
              onCurrencyChange={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center text-center m-6">
          
          {isLoading ? <Loader /> : "Get Exchange Rate"}
        </div>

        {/* result */}
        {result !== null && (
          <div
            className="w-full
            mt-6
            p-4
            font-bold
            uppercase
            rounded-md
            bg-purple-600
            hover:bg-purple-700
            focus:outline-none focus:ring-2 focus:ring-purple-400
            transition-all duration-300
            shadow-neon-button"
          >
            <p className="text-xl font-mono text-white text-center  ">
              <span className="text-yellow-100 border-b-2 text-2xl">
                Result: {result}
              </span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
