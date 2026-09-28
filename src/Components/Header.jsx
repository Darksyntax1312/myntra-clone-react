import React from 'react'
import Myntralogo from "../assets/Myntralogo.png"
import { FaUserAlt } from "react-icons/fa";
import { IoHappy } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SecretContext } from './Vault';

const Header = () => {

    const { cartItems, updateCartItems } = useContext(SecretContext)

    return (
        <React.Fragment>
            <div className="Container">

                <div><img src={Myntralogo} className='myntraImage' alt="Image not available..." /></div>

                <div className='forTypes'>
                    <Link className='homeLink' to="/">HOME</Link>
                    <div>MEN</div>
                    <div>WOMEN</div>
                    <div>KIDS</div>
                    <div>HOME & LIVING</div>
                    <div>BEAUTY</div>
                    {/* <div>STUDIO</div> */}
                </div>

                <input type="text"
                    placeholder='Search for products,brands and more' className='searchBox' />

                <div className='userProfile'>
                    <div>
                        <div><FaUserAlt /></div>
                        <div>Profile</div>
                    </div>
                    <div className='userWishlist'>
                        <div><IoHappy /></div>
                        <div>Wishlist</div>
                    </div>
                    {/* <div>
                        <div><BsHandbagFill /></div>
                        <div>Bag</div>
                    </div> */}


                    <Link to="/cart" className='bagItem' >

                        <div className="btn  position-relative">
                            <div className='bagButton'>
                                <BsHandbagFill className='bagIcon' />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger redIconBar">
                                    {cartItems.length}
                                    {/* <span className="visually-hidden">unread messages</span> */}
                                </span>
                                <div>Bag</div>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>

            <div className='mobileHeaderContainer '>
                <div className="iconInputContainer">
                    <div><img src={Myntralogo} className='myntraImage' alt="Image not available..." /></div>

                    <div className='forTypes'>
                        <Link className='homeLink' to="/">HOME</Link>

                    </div>

                    <input type="text"
                        placeholder='Search for products,brands and more' className='searchBox2' />
                </div>

                <div className='userProfile userProfile2'>
                    <div>
                        <div><FaUserAlt /></div>
                        <div>Profile</div>
                    </div>
                    <div className='userWishlist'>
                        <div><IoHappy /></div>
                        <div>Wishlist</div>
                    </div>
                    {/* <div>
                        <div><BsHandbagFill /></div>
                        <div>Bag</div>
                    </div> */}


                    <Link to="/cart" className='bagItem' >

                        <div className="btn  position-relative">
                            <div className='bagButton'>
                                <BsHandbagFill className='bagIcon' />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger redIconBar">
                                    {cartItems.length}
                                    {/* <span className="visually-hidden">unread messages</span> */}
                                </span>
                                <div>Bag</div>
                            </div>
                        </div>
                    </Link>
                </div>



            </div>




        </React.Fragment>
    )
}

export default Header;