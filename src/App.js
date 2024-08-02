import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner){
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    },2000)
  }

  const onClose = () => {
    tg.close();
  }

  return (
    !loading && (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={onClose}>Закрыть</button>
          </header>

        </div>
    )
  );
}

export default App;
