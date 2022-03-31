import React, { useState } from 'react'
import NavBar from './NavBar'
import {useSelector, useDispatch} from 'react-redux'
import './Shipment.css'
import { Shipment } from './SiteActions/ShipmentSubmit'
import Form from './Form';
import { useNavigate } from 'react-router-dom';

function ShipmentPage() {
    const UserState = useSelector(state => state.SiteOverview.UserDetails)
  

    const [address,setAddress] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')
    const [pincode,SetPincode] = useState('')
    const [secPhone,SetSecPhone] = useState('')

    const SummaryDispatch = useDispatch()
    const history = useNavigate()

async function Submit()
{
    // eslint-disable-next-line array-callback-return
    UserState.map((UserDetail)=>{
        const CurrentUser = UserDetail.Username
        const CurrentUserId = UserDetail.id
        
        SummaryDispatch(Shipment(
            CurrentUserId,
            CurrentUser,
            address,
            state,
            city,
            pincode,
            secPhone))
            ///payload check
        console.log('Payload:',
        CurrentUserId,
        CurrentUser,
        address,
        state,
        pincode,
        secPhone)

        history('/Summary')


        
    })

}
  return (
  <>
  <div className="topnav">
            {UserState.map((value)=>{
            return(
                <> 
               
                    <div className="topnav-right">
                        <NavBar
                        classProp=''
                        href=''
                        name={value.Username}
                        key={value.Id}
                        />
            
                    </div>
                   
                    <button>Back</button>
                    
                </>
               
                
                );

            })}
            
        
        </div>
        <div className='Shipment-Detail'>
        <h4>Shipping Details</h4>
          <Form 
          type="text"
             value={address}
          onChange={e=>setAddress(e.target.value)}
          placeholder="Enter Address"
          /> 

       
         <h4>State</h4>
          <Form 
          type="text"
          value={state}
          onChange={e=>setState(e.target.value)}
          placeholder="State"
          />
           <h4>City</h4>
           <select name="Size" 
              value={city} 
              className='Shipment-select' 
              onChange={(e)=>setCity(e.target.value)}
              >
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
               
        </select>
           <h4>Pin Code</h4>
          <Form 
          type="text"
          value={pincode}
          onChange={e=>SetPincode(e.target.value)}
          placeholder="Pin Code"
          />

        <h4>Secondary-Contact </h4>
        <Form 
          type="email"
          value={secPhone}
          onChange={e=>SetSecPhone(e.target.value)}
          placeholder="Secondary Contact"
          />

            <button onClick={Submit}>Submit</button>
        </div> 
  
  
  </>
  )
}

export default ShipmentPage