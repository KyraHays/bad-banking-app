import React from "react";
import {
    Routes,
    HashRouter,
    Route,
  } from "react-router-dom";
import CreateAccount from './createaccount.js';
import Home from './home.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js'; 
import NavBar from '../navbar.js'
import AllData from "./alldata.js";
import { UserContext } from "./userContext.js";
import Login from "./login.js";

function Spa(){
    return (
        <HashRouter>
          <NavBar/>
          <UserContext.Provider value={{users:[{name:'kyra', email:'kyra101w@gmail.com', password:'secret', balance:100, history:[]}],
        currentUser:null,
        userIndex:null,
        }
        }>
              <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/createaccount' element={<CreateAccount/>} />
                <Route path='/deposit' element={<Deposit/>} />
                <Route path='/withdraw' element={<Withdraw/>} />
                <Route path='/alldata' element={<AllData/>} />
                <Route path='/login' element={<Login/>} />
              </Routes>
          </UserContext.Provider>
        </HashRouter>
        
    );
}

export default Spa;