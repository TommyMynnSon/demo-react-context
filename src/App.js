import { useContext, useState } from 'react';
import Info from 'pages/Info';
import Login from 'pages/Login';
import 'App.css';
import CounterProvider from 'providers/CounterProvider';
import { authContext } from 'providers/AuthProvider';

export default function App() {

  const { auth, user, logout } = useContext(authContext);

  return (
    <div className="App">
      <h1>My App</h1>

      <CounterProvider>
        {!auth && <Login />}
        {auth && <Info />}
      </CounterProvider>
    </div>
  );
};