import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import {Route, Routes, useLocation, useParams} from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Friends from "./components/Friends/Friends";
import Index from "./components/Index/Index";
import Bottom from "./components/Bottom/Bottom";
import AnimatedBackground from "./components/UI/AnimatedBackground/AnimatedBackground";
//import mysql from 'mysql';

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
  wind.style.height = 'var(--tg-viewport-stable-height)';
  wind.style.overflow = 'hidden';
  spinner.style.width = 'var(--tg-viewport-stable-width)';
  spinner.style.height = 'var(--tg-viewport-stable-height)';
  spinner.style.backgroundSize = 'var(--tg-viewport-stable-width)'+" "+"var(--tg-viewport-stable-height);";

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ref = params.get('tgWebAppStartParam');



  return (
      <div className="App">
        <AnimatedBackground/>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path={'tasks'} element={<Tasks/>}/>
          <Route path={'friends'} element={<Friends/>}/>
        </Routes>
        <Bottom/>
      </div>
  );
}

export default App;
