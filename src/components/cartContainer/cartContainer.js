import React from 'react';
import './cartContainer.scss';

function CartContainer(props){
  return(
    <div className='container'>
      <div className='container-cart'>
        {props.children}
      </div>
    </div>
  )
}

export default CartContainer;