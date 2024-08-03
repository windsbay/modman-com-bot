import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
  const {tg} = useTelegram();

  useEffect(() =>{
    tg.ready();
  }, []);

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner){
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    },8000)
  }
  const wind = document.getElementById('windowsize');
  wind.style.height = window.innerHeight+'px';
  wind.style.overflow = 'hidden';
  spinner.style.width = window.innerWidth+'px';
  spinner.style.height = window.innerHeight+'px';
  spinner.style.backgroundSize = window.innerWidth+'px'+" "+window.innerHeight+'px'+';';


  return (
    !loading && (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Header />
          </header>
        </div>
    )
  );
}

export default App;
