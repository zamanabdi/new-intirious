import {useNavigate} from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import { LinkContainer } from "react-router-bootstrap";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async() => {
    try {

      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');


      
    } catch (err) {
      console.log(err);
    }
    
  };

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


        {
          userInfo? (<NavDropdown title={userInfo.name} id="username">
          <LinkContainer to="/profile">
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logoutHandler}>logout</NavDropdown.Item>
        </NavDropdown>) : (<span>Login</span>)
        }
        
          
        

        <span className="cartIcon-wrapper">
          <AiOutlineShoppingCart size={"25px"} />
          {cartItems.length > 0 && (
            <p>{cartItems.reduce((acc, currEl) => acc + currEl.qty, 0)}</p>
          )}
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
        

          {
            userInfo? (<NavDropdown title={userInfo.name} id="username">
            <LinkContainer to="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>logout</NavDropdown.Item>
          </NavDropdown>) : (<span>Login</span>)
          }

          <span className="cartIcon-wrapper">
            <AiOutlineShoppingCart size={"25px"} />
            {cartItems.length > 0 && (
              <p>{cartItems.reduce((acc, currEl) => acc + currEl.qty, 0)}</p>
            )}
          </span>
        </nav>
      )}
    </header>
  );
};

export default Header;
