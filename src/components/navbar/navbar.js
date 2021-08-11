import React from 'react';
import Cart from '../cart/cart';
import './navbar.scss';

function Navbar(){
  return(
    <section className='section-navbar'>
      <div className='container'>
        <nav>
          <h3>saatva</h3>
          <Cart />
        </nav>
      </div>
    </section>
  )
}

export default Navbar;