import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import {Route, Routes, useLocation, useParams} from "react-router-dom";
import Tasks from "./Pages/Tasks/Tasks";
import Friends from "./Pages/Friends/Friends";
import Index from "./Pages/Index/Index";
import Bottom from "./components/Bottom/Bottom";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {$host} from "./http";

const App = observer(() => {
  const {tg} = useTelegram();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let ref = params.get('tgWebAppStartParam');

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true);
  if(!ref) ref = null;

  const check = async (user_id, referer) => {
    try {
      const responce = await $host.get(`user/${user_id}`);
      if(responce.data.exist){
        return responce.data;
      } else {
        const userData = {
          user_id: user_id,
          referer: referer ? referer : null,
          balance: 10000
        }

        const createUserResponce = await $host.post('user/', userData);
        return createUserResponce.data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const nameConst = async () =>  await check(tg.initDataUnsafe?.user?.id, ref);

  useEffect(() => {
    check(tg.initDataUnsafe?.user?.user_id, ref).then(data => {
      user.setUser(true)
    }).finally(() => setLoading(false))
  }, []);

  /*if(loading) {
    const spinner = document.getElementById('spinner');
    const wind = document.getElementById('windowsize');
    wind.style.height = 'var(--tg-viewport-stable-height)';
    wind.style.overflow = 'hidden';
    spinner.style.width = 'var(--tg-viewport-stable-width)';
    spinner.style.height = 'var(--tg-viewport-stable-height)';
    spinner.style.backgroundSize = 'var(--tg-viewport-stable-width)'+" "+"var(--tg-viewport-stable-height);";
    return (
        <div id="spinner">
          <div id="windowsize"></div>
          <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
          </div>
        </div>
    );
  }*/



  return (
      <div className="App">
        <Routes>
          <Route index element={<Index data={nameConst} />}/>
          <Route path={'tasks'} element={<Tasks/>}/>
          <Route path={'friends'} element={<Friends/>}/>
        </Routes>
        <Bottom/>
      </div>
  );
});

export default App;
