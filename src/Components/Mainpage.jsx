import React from 'react'
import { useContext } from 'react';
import { SecretContext } from './Vault';
import { MdDelete } from "react-icons/md";

const Mainpage = () => {

  const { cartList, updateCartList, itemNameList, updateItemName, ratingList, updateRating, reviewList, updateReviewList, itemDetails, updateItemDetails, itemPrice, updateItemPrice, offPercent, updateOffPercent, originalPrice, updateOriginalPrice, productImage, updateProductImage, discountAmount, updateDiscountAmount, clicked, updateClicked , shopBtnHandler , removeBtnHandler ,discountPrice1 , updateDiscountPrice1 } = useContext(SecretContext);



  return (
    <React.Fragment>

      <div className="cartContainer wrapper">
        {cartList.map((item, index) => (

          <div key={index} className='itemContainer'>
            <div><img src={productImage[index]} alt="" className='productImage' />
            </div>

            <div className='ratingBox'>
              <div>{ratingList[index]}</div>
              <div>⭐</div>
              <div>|</div>
              <div className='reviewList'>{reviewList[index]}</div>
            </div>

            <div className='productName'>{itemNameList[index]}</div>
            <div className='itemDetails'>{itemDetails[index]}</div>


            <div className='priceContainer'>
              <div className='discountedPrice'>Rs {itemPrice[index]}</div>
              <div className='originalPrice'>Rs {originalPrice[index]}</div>
              <div className='offPercent'>({offPercent[index]}% OFF)</div>

            </div>

            {clicked[index] === "No" ?



              <div className='removeButtonContainer'><button className='removeButton' onClick={() => removeBtnHandler(index)}>remove <MdDelete /></button></div>

              :


              <div className='btnContainer'>    <button className='shopButton' onClick={() => shopBtnHandler(index)}>Add to Bag</button> </div>
            }
          </div>

        ))}
      </div>


    </React.Fragment>

  )
}

export default Mainpage;