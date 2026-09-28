import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Mainpage from "./Components/Mainpage.jsx"
import Cartcomp from './Components/Cartcomp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<App />}>
    <Route index element ={<Mainpage/>}/>
    <Route path='/cart' element = {<Cartcomp/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
