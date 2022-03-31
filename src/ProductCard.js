import React from 'react'
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Add_Item} from './SiteActions/PurchaseAction'

function ProductCard(ProductFileProps) {
    const [defaultQtn,setdefaultQtn] = useState(1)
    const [defaultsize, setdefaultsize] = useState("Uk-7")
  
    const UserState = useSelector(state => state.SiteOverview.UserDetails)

    const UserCartList = useSelector(state=>state.CartOverview.CartSummary)
    const Dispatch = useDispatch()
    
    function btnaction()
    {
      
        const Productname = ProductFileProps.ProductName
        const ProductId = ProductFileProps.ProductId
        const ProductAmount = ProductFileProps.ProductPrice

        // eslint-disable-next-line array-callback-return
        UserState.map((UserDetail) => {
            const CurrentUser = UserDetail.Username
            const CurrentUserId = UserDetail.id
            
            Dispatch(Add_Item(Productname,
                ProductId,
                CurrentUserId,
                CurrentUser,
                defaultsize,
                defaultQtn,
                ProductAmount))

                ///payload check
                console.log('Payload:',
                Productname,
                ProductId,defaultQtn,
                ProductAmount,CurrentUser,
                CurrentUserId,
                defaultsize,
                defaultQtn)
            
        })
      
    }
        console.log(UserCartList)
        console.log('Qty:',defaultQtn)
   
  return(
   
    <div className='ProductDisplay' id={ProductFileProps.ProductId}>
         
        <img src={ProductFileProps.ProductImg}
            alt="podsPRo"
            width="299px"/> 

        <h1>{ProductFileProps.ProductName}</h1>
        <h2>Price:${ProductFileProps.ProductPrice}</h2>

        <input type="number"
         value={defaultQtn} 
         onChange={(e)=>setdefaultQtn(e.target.value)}
         />

        <select name="Size" 
        value={defaultsize} 
        id={ProductFileProps.ProductId} 
        onChange={(e)=>setdefaultsize(e.target.value)}
        >
                <option value="uk-7">Uk 7</option>
                <option value="uk-7.5">Uk 7.5</option>
                <option value="uk-8">Uk 8</option>
                <option value="uk-8.5">Uk 8.5</option>
                <option value="uk-9">Uk 9</option>
                <option value="uk-9.5">Uk 9.5</option>
                <option value="uk-10">Uk 10</option>
                <option value="uk-10.5">Uk 10.5</option>
        </select>

        <button className='ProductView-Btn' onClick={btnaction}>Add to Cart</button>
       
    </div>


  );
}

export default ProductCard

  