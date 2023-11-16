import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {useSelector} from "react-redux";
import "./header.css";


const Header = () => {
  const [open, setOpen] = useState(false);

  const {cartItems} = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <header className="header">
      {/* logo */}
      <div className="image-wrapper">
        <img src={logo} alt="logo" width={"350px"} />
      </div>

      {/* nav menu for desktop view */}
      <nav className="nav-menu">
        <span>Home</span>
        <span>About</span>
        <span>Contact Us</span>
        <span>Login</span>

        <span className="cartIcon-wrapper">
          <AiOutlineShoppingCart size={"25px"} />
          {
            cartItems.length>0 && <p>
            {
              cartItems.reduce((acc,currEl) => acc + currEl.qty,0)
            }
            </p>
          }
          
          
        </span>
      </nav>

      {/* nav menu for mobile view */}
      
        <div className="ham-icon" onClick={() => setOpen(!open)}>
          {open ? <ImCross size={"20px"} /> : <GiHamburgerMenu size={"25px"} />}
        </div>
    

      {open && (
        <nav className="mobile-nav-menu">
          <span>Home</span>
          <span>About</span>
          <span>Contact Us</span>
          <span>Login</span>
          <span>
            <AiOutlineShoppingCart size={"30px"} />
          </span>
        </nav>
      )}

    </header>
  );
};

export default Header;
