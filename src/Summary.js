import React from 'react'
import NavBar from './NavBar'
import {useSelector, useDispatch} from 'react-redux'
import './Summary.css'
import ShipmentDetails from './SiteReducers/Shipment'

function Summary() {
    const UserState = useSelector(state => state.SiteOverview.UserDetails)
    const UserCart = useSelector(state => state.CartOverview.CartSummary)
    const UserShipment = useSelector(state => state.ShipmentDetails.UserShipment)
    const UserCartAmount = useSelector(state=>state.CartOverview.Amount)
    console.log('Shipment',UserShipment)
    console.log('State',UserState)
  return (
<>

<div className="topnav">
<button className='Proceed'>Proceed</button>
                 
    </div>

        <div className='TotalSummary'>
            <div className='User-Data-Fetched'>
                <h2>Customer-Details</h2>
                {UserState.map((details)=>{
                    return(
                        <>
                        <label>Customer Name</label>
                         <h4>{details.Username}</h4>
                         <label>Email</label>
                         <h4>{details.Email}</h4>
                         <label>Contact Number</label>
                         <h4> {details.Contact}</h4>
                        </>
                    )

                })}

                {UserShipment.map((Shipmentdata)=>{
                    return(
                        <>
                        <label>Address</label>
                        <h4>{Shipmentdata.Address}</h4>

                        <label>State</label>
                        <h4>{Shipmentdata.State}</h4>

                        <label>City</label>
                        <h4>{Shipmentdata.City}</h4>

                        <label>Pincode</label>
                        <h4>{Shipmentdata.Pincode}</h4>

                        <label>Secondary contact</label>
                        <h4>{Shipmentdata.SecondaryContact}</h4>
                        </>
                    )
                })}



            </div>
            <div className='Product-Data-Fetched'>
                {UserCart.map((CartData)=>{
                    return(
                        <>
                       <div className='Product-cart'>
                           <div className='Product-left'>
                           <h4>Product : {CartData.Productname}</h4>
                           <h4>Size: {CartData.Productsize}</h4>
                           </div>
                           <div className='Product-mid'>
                           <h4>Total Amount : {CartData.NetPrice}</h4>
                          

                           </div>
                           <div className='Product-right'>

                           <h4>Base Price: {CartData.NetPrice}</h4>
                           <h4>Qty: {CartData.ProductQuantity}</h4>

                           <h4>Total Sum :{CartData.ProductPrice}</h4>
                           </div>

                        </div>
                        
                        
                        </>
                    )
                })}
                 <h4>Total Amount: {UserCartAmount}</h4>

            </div>
            

           
        </div>
       <div className='Total-Sum'>

              

       </div>
   
</>
   
  )
}

export default Summary