import { useState, useEffect } from 'react';
import './App.css';
import UseCurrencyInfo from './hooks/UseCurrencyInfo';
import { InputBox } from './components/index.jsx';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('lkr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today's date
  const currencyInfo = UseCurrencyInfo(from, date);
  const options = Object.keys(currencyInfo);

  useEffect(() => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className='w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/4968383/pexels-photo-4968383.jpeg?auto=compress&cs=tinysrgb&w=800)` }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <div className='w-full mb-1'>
            <label htmlFor="date" className="text-xl  rounded-md bg-blue-950 text-white px-2 py-0.5">Date:</label>
            <br></br>

            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-2"
              max={new Date().toISOString().slice(0, 10)} // Set max date to current date
            />
            <br></br>
          </div>
          
          <div className='w-full mb-1'>
            <InputBox
              label='from'
              amount={amount}
              currencyOptions={options}
              onCurrentChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-950 text-white px-2 py-0.5'
              onClick={swap}
            >
              SWAP
            </button>
          </div>
          <div className='w-full mb-1'>
            <InputBox
              label='to'
              amount={convertedAmount}
              amountDisabled
              currencyOptions={options}
              onCurrentChange={(currency) => setTo(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={to}
            />
          </div>
          <div className='w-full mb-1 text-center'>
            <br></br>
            <button onClick={()=>setConvertedAmount} className='text-xl  rounded-md bg-blue-950 text-white px-2 py-0.5'>CONVERT {from.toUpperCase()} TO {to.toUpperCase()}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
