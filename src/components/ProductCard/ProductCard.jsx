import React from 'react';
import Price from '../Etc/Price';
import * as S from '../ProductCard/_style';

const ProductCard = (props) => {
    const {product_id, product_name, store_name, price, image} = props;
    
    return (
        <S.ProductLi key={product_id}>
            <S.ItemImg src={image} alt={product_name}/>
            <S.StoreName>{store_name}</S.StoreName>
            <S.ProductName>{product_name}</S.ProductName>
            <Price price={price} numsize={24} margin={2} txtsize={16} color={'--black'}/>
        </S.ProductLi>
    );
};

export default ProductCard;