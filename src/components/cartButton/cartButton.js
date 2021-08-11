import React from 'react';
import {useDispatch} from 'react-redux';
import './cartButton.scss';
import { addAnimationCartClass, addImgCartProduct, addDataCart } from '../../actions';

function CartButton({data, name, img}){
  const dispatch = useDispatch();

  const handleCartButton = () => {
    dispatch(addDataCart(data));
    dispatch(addAnimationCartClass('runAnimationCart'));
    dispatch(addImgCartProduct(img));
  }

  return(
    <button className='button-cart' onClick={() => handleCartButton()}>
      {name}
    </button>
  )
}

export default CartButton;