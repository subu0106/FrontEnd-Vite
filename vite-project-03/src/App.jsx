import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('white');

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center w-full max-w-2xl space-x-4'>
          <button onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red
          </button>
          <button onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Blue
          </button>
          <button onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
