import React from 'react'
import {useSelector} from 'react-redux'
import './NavBar.css'
import './Home.css'
import NavBar from './NavBar'
import './CartPage.css'
// import './ProductContainer.css'
import { useNavigate } from 'react-router-dom';

// import './ProductDisplay.css'
import ProductFiles from './ProductFile'
import ProductCard from './ProductCard'

export default function Home() {
    const UserState = useSelector(state => state.SiteOverview.UserDetails)
    const UserCart = useSelector(state=>state.CartOverview.CartItems)
    const UserCartAmount = useSelector(state=>state.CartOverview.Amount)
    const history = useNavigate()
  
 function ViewCart()

{
    if(UserCartAmount === 0)
    {
        alert("Empty Cart")
    }
    else{
        history('/Cart')
    }
    
}
return(
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
        
    </div>
        <div className='RootContainer'>
            <div className='FixedContainer'>
                <h2>Redux Site</h2>
                <div className='MiniCart'>
                        <h4>Cart Summary</h4>
                        <h4>Items Added:{UserCart}</h4>
                        <h4>Total Amount: 
                            {UserCartAmount}$</h4>
                        <button className='Cart' onClick={ViewCart}>View Cart</button>
                </div>
                
            </div>
            <div className='Shoe-Container'>
                <div className='Container-Header'>
                    <h4>Latest Shoe's</h4>
                    <div className='Shoes-Display'>
                        {ProductFiles.map((Product=>{
                        return(
                        <>
                            <ProductCard 
                                ProductId={Product.id}
                                ProductName={Product.title}
                                ProductPrice={Product.price}
                                ProductImg={Product.img}                         
                            />
                        </>

                        );            
                        }))}
                    </div>
                </div>
            </div>
            
       
        </div>
        <div className='FooterContainer'>             
        </div>
       
        </>

  )
}
