import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import './product.scss';

export function ProductImage(props) {
  return(
    <div className='container-img-product'>
      <img src={props.src} alt={props.alt} {...props} />
    </div>
  )
}

export function ProductContainer(props){
  return (
    <div className='container-product'>
      {props.children}
    </div>
  )
}

export function ButtonSelect({handleType, data}){
  const [activeClass, setActiveClass] = useState('classic');

  const handleActiveClass = (e) => {
    const dataType = e.target.dataset.type;
    setActiveClass(dataType);
    handleType(dataType);
  }

  return(
    <div className='container-button-select'>
      <p>select mattress type</p>
      <div className='button-select'>
        {
          Object.keys(data.mattresses).map((item, i) => {
            return (
              <div 
                data-type={item}
                onClick={(e) => handleActiveClass(e)} 
                className={`${activeClass == item ? 'active-product' : ''}`}
                key={i}
              >
                {data.mattresses[item].name}
              </div>   
            )
          })
        }
      </div>
    </div>
  )
}

export function ProductDetail(props) {
  const {name, price, reviewRating} = props.data;

  return(
    <div className='detail-product'>
      <div className='detail-product-1'>
        <p>{name}</p>
        <span>${price}</span>
      </div>
      <div className='detail-product-2'>
        <StarRatings
          rating={reviewRating}
          starRatedColor="orange"
          numberOfStars={5}
          name='rating'
          starDimension='20px'
          starSpacing='0px'
        />
      </div>
    </div>
  )
}