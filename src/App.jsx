import './App.css'
import React, { useEffect } from 'react'
import Header from './Components/Header'
import { useState } from 'react'
import { SecretContext } from './Components/Vault'
import cargoLShorts from './assets/cargoLShorts.jpeg'
import cargoPants from './assets/cargoPants.jpeg'
import chinoShorts from './assets/chinoShorts.webp'
import corduroyPants from './assets/corduroyPants.jpeg'
import denimShorts from './assets/denimShorts.jpeg'
import fleecePants from './assets/fleecePants.jpeg'
import formalTrousers from './assets/formalTrousers.webp'
import Joggers from './assets/Joggers.webp'
import khakiPants from './assets/khakiPants.jpeg'
import linenPants from './assets/linenPants.webp'
import parachutePants from './assets/parachutePants.webp'
import Product1 from './assets/Product1.jpg'
import Shorts from './assets/Shorts.jpeg'
import sweatPants from './assets/sweatPants.jpg'
import trackPants from './assets/trackPants.jpeg'
import Chinos from './assets/Chinos.jpeg'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {

  let [productImage, updateProductImage] = useState([Product1, Chinos, cargoPants, Shorts, trackPants, Joggers, sweatPants, corduroyPants, khakiPants, denimShorts, cargoLShorts, formalTrousers, linenPants, parachutePants, chinoShorts, fleecePants]);

  let [cartList, updateCartList] = useState(["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"])

  let [itemNameList, updateItemName] = useState([
    "Jeans",
    "Chinos",
    "Cargo Pants",
    "Shorts",
    "Track Pants",
    "Joggers",
    "Sweatpants",
    "Corduroy Pants",
    "Khaki Pants",
    "Denim Shorts",
    "Cargo Shorts",
    "Formal Trousers",
    "Linen Pants",
    "Parachute Pants",
    "Chino Shorts",
    "Fleece Pants"
  ])

  let [ratingList, updateRating] = useState([3.2, 4.5, 2.8, 4.9, 3.7, 1.5, 4.2, 3.9, 2.4, 4.8, 3.1, 4.6, 2.9, 4.3, 3.5, 4.7]);

  let [reviewList, updateReviewList] = useState([353, 65, 128, 942, 47, 215, 780, 156, 89, 634, 12, 421, 299, 58, 873, 190]);

  let [itemDetails, updateItemDetails] = useState([
    "Slim Fit Stretch Jeans - Dark Blue - Size 30-38 - Levi's",
    "Regular Fit Denim Jeans - Light Blue - Size 28-36 - Wrangler",
    "Skinny Fit Jeans - Black - Size 30-34 - Pepe Jeans",
    "Straight Fit Jeans - Mid Blue - Size 32-40 - Lee",
    "Distressed Slim Jeans - Grey - Size 28-34 - Spykar",
    "Baggy Fit Jeans - Washed Blue - Size 30-38 - Levi's",
    "Tapered Fit Jeans - Dark Grey - Size 28-36 - Allen Solly",
    "Bootcut Jeans - Navy Blue - Size 30-40 - Wrangler",
    "Low Rise Skinny Jeans - Jet Black - Size 28-32 - Pepe Jeans",
    "Relaxed Fit Jeans - Faded Blue - Size 32-42 - Lee",
    "Ripped Slim Fit Jeans - Light Grey - Size 28-34 - Spykar",
    "High Rise Straight Jeans - Dark Indigo - Size 26-34 - Levi's",
    "Cargo Denim Jeans - Olive Blue - Size 30-38 - Wrangler",
    "Wide Leg Jeans - Sky Blue - Size 28-36 - Allen Solly",
    "Stretchable Jogger Jeans - Charcoal - Size 30-36 - Pepe Jeans",
    "Classic Straight Fit Jeans - Deep Blue - Size 32-40 - Lee"
  ]);

  let [itemPrice, updateItemPrice] = useState([1299, 999, 1499, 1199, 1799, 1399, 1099, 1249, 1599, 1049, 1699, 1349, 1549, 1149, 1449, 1199]);

  let [offPercent, updateOffPercent] = useState([10, 20, 30, 15, 25, 35, 5, 40, 12, 18, 22, 28, 8, 45, 32, 16]);

  let [originalPrice, updateOriginalPrice] = useState([1443, 1249, 2141, 1411, 2399, 2152, 1157, 2082, 1817, 1279, 2178, 1874, 1684, 2089, 2131, 1427]);

  let [discountAmount, updateDiscountAmount] = useState([144, 250, 642, 212, 600, 753, 58, 833, 218, 230, 479, 525, 135, 940, 682, 228])

  let [clicked, updateClicked] = useState(["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"]);


  const [cartItems, updateCartItems] = useState([])
  const [totalPriceList, updateTotalPriceList] = useState([]);
  // const [totalPrice, updateTotalPrice] = useState();
  const [totalDiscountPrice, updateTotalDiscountPrice] = useState([]);
  // const [discountPrice1, updateDiscountPrice1] = useState();
  const [convenienceFee, updateConvenienceFee] = useState(99);
  // const [totalAmount, updateTotalAmount] = useState(0);

  // Add button handler


  let shopBtnHandler = (index) => {

    const newClicked = clicked.map((item, i) => {
      if (i === index && clicked[index] === "yes") {
        updateCartItems([...cartItems, index])


        updateTotalPriceList([...totalPriceList, { itemName: itemNameList[index], itemPrice: originalPrice[index] }])



        updateTotalDiscountPrice([...totalDiscountPrice, { itemName: itemNameList[index], discountedPrice: discountAmount[index] }])



        console.log(totalPriceList)
        alert(itemNameList[index] + " is added to cart")
        return clicked[index] = "No"
      }
      return item
    }
    )
    updateClicked(newClicked)
  }

  const totalPrice = totalPriceList.reduce((accumulator, item) => accumulator + item.itemPrice, 0)
  const discountPrice1 = totalDiscountPrice.reduce((accumulator, item) => accumulator + item.discountedPrice, 0)
  const totalAmount = totalPrice - discountPrice1 + convenienceFee
  // useEffect(() => {


  //   let newPrice = totalPriceList.reduce((accumulator, item) => {
  //     return accumulator + item.itemPrice
  //   }, 0)
  //   updateTotalPrice(newPrice)


  //   let newDiscountedPrice = totalDiscountPrice.reduce((accumulator, item) => {
  //     return accumulator + item.discountedPrice
  //   }, 0)
  //   updateDiscountPrice1(newDiscountedPrice)



  //   alert(newPrice)
  // }, [totalPriceList])






  // Remove button handler



  let removeBtnHandler = (index) => {

    const newClicked = clicked.map((item, i) => {
      if (i === index && clicked[index] === "No") {

        let newPrice2 = totalPriceList.filter((items) => {
          return items.itemName !== itemNameList[index]
        })
        updateTotalPriceList(newPrice2)

        let newDiscountedList = totalDiscountPrice.filter((item)=>{
          return item.itemName !== itemNameList[index]
        })

        updateTotalDiscountPrice(newDiscountedList)

        let newItemList = cartItems.filter((items, i) => {
          return items !== index
        })
        alert(itemNameList[index] + " is removed from cart")
        updateCartItems(newItemList)

        return clicked[index] = "yes"
      }
      return item
    }
    )
    updateClicked(newClicked)
    // console.log(newClicked);
  }

  return (
    <React.Fragment>

      <SecretContext value={{ cartList, updateCartList, itemNameList, updateItemName, ratingList, updateRating, reviewList, updateReviewList, itemDetails, updateItemDetails, itemPrice, updateItemPrice, offPercent, updateOffPercent, originalPrice, updateOriginalPrice, productImage, updateProductImage, discountAmount, updateDiscountAmount, clicked, updateClicked, shopBtnHandler, removeBtnHandler, cartItems, updateCartItems, totalPriceList, updateTotalPriceList, totalPrice, discountPrice1, convenienceFee, updateConvenienceFee, totalAmount}}>

        <Header></Header>
        <Outlet />
      </SecretContext>
      <Footer></Footer>
    </React.Fragment>
  )
}


export default App
