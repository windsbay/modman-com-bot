import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import {Route, Routes, useLocation, useParams} from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Friends from "./components/Friends/Friends";
import Index from "./components/Index/Index";
import Bottom from "./components/Bottom/Bottom";
//import mysql from 'mysql';

function App() {
  const {tg} = useTelegram();

  /*const conn = mysql.createConnection({
    host: 'mysql.b559fbfa7208.hosting.myjino.ru',
    port: 3306,
    user: 'j03809714_modman',
    password: "aLeksey2011!",
    database: 'j03809714_modmancomm'
  });

  const fetchData = async () => {
    const data = await conn.query('SELECT * FROM users WHERE user_id='+tg.initDataUnsafe?.user?.id);
    if(data){
      console.log('Successfully fetching users');
      return data;
    }
    else {
      if(ref === tg.initDataUnsafe?.user?.id){
        await addData(tg.initDataUnsafe?.user?.id, "");
      }
      else await addData(tg.initDataUnsafe?.user?.id, ref);
    }
  }

  const addData = async (user_id, referer) => {
    const data = {
      user_id: user_id,
      referer: referer,
      date_reg: Date.now(),
      score: 0,
      wallet: null
    }
    const query = 'INSERT INTO users SET?';
    const res = await conn.query(query, data);
    console.log(res);
  };*/

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
        <canvas id="canvas"></canvas>
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
