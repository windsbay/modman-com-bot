import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import mysql from 'mysql';
const root = ReactDOM.createRoot(document.getElementById('root'));

const conn = mysql.createConnection({
    host: 'mysql.b559fbfa7208.hosting.myjino.ru',
    port: 3306,
    user: 'j03809714_modman',
    password: "aLeksey2011!",
    database: 'j03809714_modmancomm'
});

conn.connect(function (err) {
    if (err) {
        return "Ошибка соединения с базой данных";
    }
    else {
        console.log("Connection successful");
    }
})
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
