import React, { Fragment, useEffect, useState } from 'react';
import CartContainer from '../../components/cartContainer/cartContainer';
import { ButtonSelect, ProductContainer, ProductDetail, ProductImage } from '../../components/product/product';
import CartButton from '../../components/cartButton/cartButton';
import MattressData from '../../modules/mattresses.json';

function MattressView() {
  const [productType, setProductType] = useState('classic');
  const [data, setData] = useState(MattressData.mattresses[productType]);
  const img = MattressData.mattresses[productType].name === data.name && `/images/${data.imageFileName}`;

  useEffect(() => {
    setData(MattressData.mattresses[productType]);
  }, [productType])

  return (
    <Fragment>
      <CartContainer>
        <ProductImage
          src={img}
          alt={data.name}
        />
        <ProductContainer>
          <h2>Choose Your Mattress</h2>
          <ButtonSelect
            handleType={(product) => setProductType(product)}
            data={MattressData}
          />
          <ProductDetail data={data} />
          <CartButton name='Add to Cart' img={img} data={data} />
        </ProductContainer>
      </CartContainer>
    </Fragment>
  )
}

export default MattressView;