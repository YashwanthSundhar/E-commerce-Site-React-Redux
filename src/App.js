import logo from './logo.svg';
import './App.css';
import './Site.css'
import { useRef, useState } from 'react';
import Form from './Form';
import {useSelector, useDispatch} from 'react-redux'
import {UserSignin} from './SiteActions/SignupAction'

import { BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';
import Login from './Login';
import UserSignUp from './UserSignUp';
import Home from './Home'
import Purchase from './Purchase';
import Cart from './Cart'
import Shipment from './ShipmentPage';
import history from './history';
import Summary from './Summary';
function App() {
  return(
  <Router  history={history}>
      <div className="App">
        <Routes>

            <Route 
            exact path="/App" 
            element={<UserSignUp />} 
            />

            <Route 
            path="/Home" 
            element={<Home/>}/>


            <Route 
            path="/Purchase" 
            element={<Purchase/>}/>

            <Route 
            path="/Cart" 
            element={<Cart/>}/>

            <Route 
            path="/Shipment" 
            element={<Shipment/>}/>

            <Route 
            path="/Summary" 
            element={<Summary/>}/>  
            


        </Routes>
      </div>
  </Router>
  );
}

export default App;

