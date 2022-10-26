import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(0);
  const [str, setStr] = useState('');
  const [rotatedStr, setRotatedStr] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    var charCode = 0;

    setRotatedStr(
      str
        .split('')
        .map((itm) => {
          charCode = parseInt(itm.charCodeAt(0));
          if (charCode > 96 && charCode < 123)
            return String.fromCharCode(
              charCode + key > 122 ? charCode + key - 26 : charCode + key
            );
          if (charCode > 64 && charCode < 89) {
            return String.fromCharCode(
              charCode + key > 89 ? charCode + key - 26 : charCode + key
            );
          }
          return itm;
        })
        .join('')
    );
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
          onClick={() => setShow(!show)}
        />
        {show && (
          <form>
            <div>
              <label> Enter your key(integer) :- </label>
              <input
                value={key}
                onChange={(e) => setKey(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label> Enter your text :- </label>
              <input value={str} onChange={(e) => setStr(e.target.value)} />
            </div>
            <div>
              <button type='submit' onClick={handleClick}>
                Rotate
              </button>
            </div>
            {rotatedStr && <label>Here is the result {rotatedStr}</label>}
          </form>
        )}
      </header>
    </div>
  );
}

export default App;
