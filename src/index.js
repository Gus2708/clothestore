import React from 'react';
import "./App.css"
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='login' element={<LogIn />}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
