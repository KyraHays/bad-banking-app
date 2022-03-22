import React from "react";
import { createContext } from "react";
import {
    Routes,
    HashRouter,
    Route,
  } from "react-router-dom";
import Balance from './balance.js';
import CreateAccount from './createaccount.js';
import Home from './home.js';
import Login from './login.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js'; 
import NavBar from './navbar.js'
import AllData from "./alldata.js";

const UserContext = createContext(null);

function Spa(){
    return (
        <HashRouter>
          <NavBar/>
          <UserContext.Provider value={{users:[{name:'kyra', email:'kyra101w@gmail.com', password:'secret', balance:100}]}}>
              <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/createaccount' element={<CreateAccount/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/deposit' element={<Deposit/>} />
                <Route path='/withdraw' element={<Withdraw/>} />
                <Route path='/balance' element={<Balance/>} />
                <Route path='/alldata' element={<AllData/>} />
              </Routes>
          </UserContext.Provider>
        </HashRouter>
        
    );
}

export default Spa;