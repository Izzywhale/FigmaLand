import { Link, NavLink } from "react-router-dom";
import {  useState } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import vector from "../../images/Vector.png";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="mainHeader">
      <div className="header">
        <Link to="/" className="logoFlex">
          <img src={logo} alt="" />
        </Link>

        <nav className={`headerLinks ${open && "slide"}`}>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about">Contact</NavLink>
          </div>
          <div>
            <Link to="/login" className="lg">
              Login
            </Link>
          </div>
        </nav>

        <button onClick={() => setOpen((prev) => !prev)}>
          <img src={vector} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;

// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//         <h1>The Dojo Block</h1>
//         <div className='links'>
//             <a href="/">Home</a>
//             <a href="/create" style={{
//                 color: 'white',
//                 backgroundColor: '#f1356d',
//                 borderRadius:'8px',
//             }}>New Blog</a>
//         </div>
//     </nav>
//   )
// }

// export default Navbar
