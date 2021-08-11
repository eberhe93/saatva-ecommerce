import React, { useEffect } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { clearStateAnimation } from '../../actions/animationCartActions';
import './cart.scss';

function Cart(){
  const {itemTotal, cartTotal, cartItems} = useSelector(state => state.dataCart);
  const {classAnimationCart, imgProductAnimation} = useSelector(state => state.animationCart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearStateAnimation());
    }, 1100 )
  }, [itemTotal])

  return(
    <section className='section-basket-shop'>
      <IoCartOutline />
      <div className='cart'>
        <p>{itemTotal}</p>
      </div>
      <div className={`container-animation-cart ${classAnimationCart}`}>
        <img src={imgProductAnimation} alt="product"/>
      </div>

      {/* Cart detail */}
      <div className='cart-detail'>
        <div className='cart-box'>

          {/* Item cart */}
        {Object.keys(cartItems).map((item, i) => (
          <div className='item-cart' key={i}>
            <div className='thumb-img-cart'>
              <img src={ `/images/${cartItems[item].imageFileName}`} alt="product"/>
            </div>
            <div className='info-cart'>
              <p>{item.length > 15 ? `${item.substring(0, 15)}...` : item}</p>
              <span> {cartItems[item].quantity} X ${cartItems[item].price}</span>
            </div>

          </div>
        ))}
          {/* Total */}
          <div className='total'>
            <h3>total: </h3>
            <h3>${cartTotal}</h3>
          </div>

          {/* Checkout */}
          <button className='checkout'>checkout</button>
        </div>
      </div>
    </section>
  )
}

export default Cart;
