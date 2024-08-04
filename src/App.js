import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import {Route, Routes, useLocation, useParams} from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Friends from "./components/Friends/Friends";
import Index from "./components/Index/Index";
import Header from "./components/Header/Header";

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

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const {tgWebAppStartParam} = useParams();

  return (
      <div className="App">
        <div>
          <h1>{tgWebAppStartParam}</h1>
        </div>

        <Routes>
          <Route index element={<Index/>}/>
          <Route path={'tasks'} element={<Tasks/>}/>
          <Route path={'friends'} element={<Friends/>}/>
        </Routes>
      </div>
  );
}

export default App;
