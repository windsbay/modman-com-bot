import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks";
import Friends from "./pages/Friends/Friends";
import Index from "./pages/Index/Index";

function App() {
  const {tg} = useTelegram();

  useEffect(() =>{
    tg.ready();
  }, []);

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  /*if(spinner){
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    },8000)
  }*/
  const wind = document.getElementById('windowsize');
  wind.style.height = window.innerHeight+'px';
  wind.style.overflow = 'hidden';
  spinner.style.width = window.innerWidth+'px';
  spinner.style.height = window.innerHeight+'px';
  spinner.style.backgroundSize = window.innerWidth+'px'+" "+window.innerHeight+'px'+';';


  return (
        <div className="App">

          <Routes>
              <Route index element={<Index />} />
              <Route path={'tasks'} element={<Tasks />} />
              <Route path={'friends'} element={<Friends />} />
          </Routes>
        </div>
  );
}

export default App;
