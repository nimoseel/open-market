import React from 'react';
import MinusIcon from '../../assets/icon-minus2.svg'
import PlusIcon from '../../assets/icon-plus2.svg'
import Price from '../Etc/Price';
import * as S from '../CartTotal/_style';

const total = ({totalPrice, totalFee}) => {
    return (
        <S.TotalUl>
            <S.TotalLi>
                <S.TotalTxt>총 상품금액</S.TotalTxt>
                <Price price={totalPrice} numsize={24} margin={2} txtsize={16} color={'--black'} />
            </S.TotalLi>
            <img src={MinusIcon} alt='' />
            <S.TotalLi>
                <S.TotalTxt>상품 할인</S.TotalTxt>
                <Price price={'0'} numsize={24} margin={2} txtsize={16} color={'--black'} />
            </S.TotalLi>
            <img src={PlusIcon} alt='' />
            <S.TotalLi>
                <S.TotalTxt>배송비</S.TotalTxt>
                <Price price={totalFee} numsize={24} margin={2} txtsize={16} color={'--black'} />
            </S.TotalLi>
            <S.TotalLi>
                <S.TotalTxt>결제 예정 금액</S.TotalTxt>
                <Price price={totalPrice+totalFee} numsize={36} margin={2} txtsize={18} color={'--main'} />
            </S.TotalLi>
        </S.TotalUl>
    );
};

export default total;
