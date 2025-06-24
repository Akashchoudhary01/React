import { useState } from 'react';
import './App.css';
import InputFild from './Components/InputFild.jsx';
import useCurrencyInfo from './Hooks/UseCurrencyInfo.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-screen-sm h-screen border border-gray-600 rounded-lg p-5  backdrop-blur-sm bg-white/50 fixed top-0 right-0">
        <h1 className='from-neutral-950 text-3xl'>Currency Converter</h1>
        <p className="text-xl text-black mt-2">
  Convert between currencies using real-time exchange rates.
</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            e
          >
            <div className="w-full mb-1 mt-32">
              <InputFild
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(value) => setAmount(value)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                SWAP
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputFild
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
