import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Purchase.css'
function Purchase() {
    let historynext = useNavigate()

    function Goback()
    {
        historynext('/Home')
    }
  return (
    <>
    <div className='PurchaseProduct'>
        <div class="Product-left-container">
       
            <div className='Image-Flex'>

                <div className='Box1'>
                <img src={require('./Images/Img1.jpg')}
                    alt=""
                    width="299px"/> 
                </div>
                <div className='Box1'>
                <img src={require('./Images/Img2.jpg')}
                    alt=""
                    width="299px"/> 
                </div>
                <div className='Box1'>
                <img src={require('./Images/Img5.jpg')}
                    alt=""
                    width="299px"/> 
                </div>
                <div className='Box1'>
                <img src={require('./Images/Img3.jpg')}
                    alt=""
                    width="299px"/> 
                </div>

            </div>

        </div>

        <div className='Product-right-container'>
        <h2>Hello</h2>
        </div>
    </div>
    <div className='Footer'>
        <h1></h1>
    </div>
   
    </>
    
  )
}

export default Purchase