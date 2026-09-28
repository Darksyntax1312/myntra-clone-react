import React, { useEffect } from 'react'
import { ImFilesEmpty } from "react-icons/im";
import { useContext } from 'react';
import { SecretContext } from './Vault';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

const Cartcomp = () => {

  const { cartList, updateCartList, itemNameList, updateItemName, ratingList, updateRating, reviewList, updateReviewList, itemDetails, updateItemDetails, itemPrice, updateItemPrice, offPercent, updateOffPercent, originalPrice, updateOriginalPrice, productImage, updateProductImage, discountAmount, updateDiscountAmount, clicked, updateClicked, shopBtnHandler, removeBtnHandler, cartItems, updateCartItems, totalPriceList, updateTotalPriceList, totalPrice, updateTotalPrice, discountPrice1, convenienceFee, updateConvenienceFee, totalAmount } = useContext(SecretContext);





  return (
    <React.Fragment>
      {/* <center>  <ImFilesEmpty className='emptyIcons' />  </center>
      <center><h5 className='sorryMessage'>Sorry this section is currently empty</h5></center> */}

      <div className="cartCompContainer">
        {cartItems.length > 0 ?

          <div className="cartContainer1">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItemsContainer">

                <div className='cartProductImage'><img src={productImage[item]} alt="Image not available" /></div>
                <div className='itemDetails2'>

                  <div>{itemNameList[item]}</div>
                  <div className='productDetails'>{itemDetails[item]}</div>

                  <div className='priceContainer'>
                    <div className='discountedPrice'>Rs {itemPrice[item]}</div>
                    <div className='originalPrice'>Rs {originalPrice[item]}</div>
                    <div className='offPercent'>({offPercent[item]}% OFF)</div>

                  </div>
                  <div>14 days return available</div>
                  <div>Delivery by <span className='deliveryDate'>10 oct 2023</span></div>

                </div>
                <div className='deleteButton'><MdDelete onClick={() => removeBtnHandler(item)} /></div>
              </div>
            ))}
          </div> : <div className='emptyMessage'>Opps...! Your cart is empty!</div>}
        <div className="priceChartContainer">
          <div className="totalPriceContainer">
            <div className='cartQuantity'>PRICE DETAILS ({cartItems.length} Items)</div>
            <div className='priceList priceList1'>
              <div>Total MRP</div>
              <div>₹{totalPrice}</div>
            </div>
            <div className='priceList'>
              <div>Discount on MRP</div>
              <div className='discountPrice'>₹{discountPrice1}</div>
            </div>
            <div className='priceList'>
              <div>Convenience Fee</div>
              <div>₹{convenienceFee}</div>
            </div>
            <div className='seperationLineContainer'><div className='seperationLine'></div></div>
            <div className='priceList totalAmount'>
              <div>Total Amount</div>
              <div>₹{cartItems.length > 0 ? totalAmount : 0}</div>
            </div>
            <div className='placeOrderButtonContainer'>
              <button className='placeOrderButton'>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cartcomp;




//implement the feature so that if there will not be any cart item then it will show . cart empty