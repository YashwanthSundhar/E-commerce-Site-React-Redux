import React, { useState } from 'react'
import NavBar from './NavBar'
import './CartPage.css'


// import './ProductContainer.css'
import {Add_Item} from './SiteActions/PurchaseAction'
import {RemoveCart} from './SiteActions/CartAction'
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


function Cart() {
    const UserState = useSelector(state => state.SiteOverview.UserDetails)
    //userDetails Fetch
    const UserCart = useSelector(state => state.CartOverview.CartSummary)
  //Cart Details Fetch 
    const UserCartAmount = useSelector(state => state.CartOverview.Amount)
    //Cart Amt Fetch
    const Dispatch = useDispatch()
    const history = useNavigate()

   async function Change(id,amt,qty){

        Dispatch(RemoveCart(id,amt,qty))

    }

    function next(){
      history('/Shipment')
    }

    function Back(){
      history('/Home')
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
                    
            </>

          );

        })}
        <button 
          onClick={Back}>
          Back
          </button>
        
      </div>
      <div className='Cart-Container'>
        <h4>Cart Summary</h4>
          <table>
            <tbody>
              <tr>
                <th>Product Name</th>
                <th>Product Id</th>
                <th>Product Quantity</th>
                <th>Size</th>
                <th>Price</th>
                <th>Gross-Price</th>
              </tr>
           
              {UserCart.map((CartItems)=>{
                return(
                  <>
                    <tr key={CartItems.ProductId}>
                      <td  key = {CartItems.UserId}> {CartItems.Productname}</td>
                      <td > {CartItems.ProductId}</td>
                      <td > {CartItems.ProductQuantity}</td>
                      <td > {CartItems.Productsize}</td>
                      <td > {CartItems.ProductPrice}</td>
                      <td > {CartItems.NetPrice}</td>
                      <td>
                          <button 
                            onClick={() => Change(CartItems.ProductId,
                            CartItems.NetPrice,
                            CartItems.ProductQuantity)} >
                            Remove
                            </button>
                      </td>
                    </tr>
                    
                  </>
                      
                );

              })}

            </tbody> 
          </table>

        <h4>Total Amount : {UserCartAmount}</h4>
          <div className='Shipment'>
              <button 
                onClick={next}>
                Next
                </button>
          </div>
      </div>

      <div className='Footer-Cart'>
          
      </div>

        
  </>
  )
}

export default Cart

