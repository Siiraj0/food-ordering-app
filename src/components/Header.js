import { LOGO_URL } from "../utils/contants";
import { useEffect, useState } from "react";

// Header Component
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

useEffect(()=>{
  console.log('Header rendered');
},[btnNameReact])
   
  return (
    <div className="header">
      <div id="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>  
          <button
            className="Login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
