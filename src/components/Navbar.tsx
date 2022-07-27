import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingBag from "./icons/ShoppingBag";

export default function Navbar() {
  return (
    <nav className='navbar__container'>
      <NavLink to='/'>
        <h5>TomCrew Ceramics</h5>
      </NavLink>
      <div className='navbar__links'>
        <NavLink to='/shop'>
          <h5>Shop</h5>
        </NavLink>
        <NavLink to='/stores'>
          <h5>Stores</h5>
        </NavLink>
        <NavLink to='/about'>
          <h5>About</h5>
        </NavLink>

        <button className='btn__shopping-bag'>
          <div className='btn__item-quantity'>3</div>
          <ShoppingBag />
        </button>
      </div>
    </nav>
  );
}
