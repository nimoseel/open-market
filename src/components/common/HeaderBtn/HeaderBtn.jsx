import React from 'react';
import { Link } from 'react-router-dom';
import bagIcon from '../../../assets/icon-shopping-bag.svg';
import * as S from '../HeaderBtn/_style';

import { ReactComponent as CartIcon } from '../../../assets/icon-shopping-cart.svg';
import { ReactComponent as UserIcon } from '../../../assets/icon-user.svg';

export const MyPage = ({ onClick }) => {
    return (
        <S.Button type="button" onClick={onClick}>
            <UserIcon stroke={'var(--txt-color)'} />
            <S.MyPageSpan>마이페이지</S.MyPageSpan>
        </S.Button>
    );
};

export const Seller = ({ onClick }) => {
    return (
        <S.SellerBtn type="button" onClick={onClick}>
            <img src={bagIcon} alt="판매자 센터 버튼" />
            판매자 센터
        </S.SellerBtn>
    );
};

export const Cart = ({ onClick }) => {
    return (
        <S.Button type="button" onClick={onClick}>
            <Link>
                <CartIcon stroke={'var(--txt-color)'} />
                <S.Span>장바구니</S.Span>
            </Link>
        </S.Button>
    );
};

export const Login = () => {
    return (
        <S.Button type="button">
            <Link to={'/login'}>
                <UserIcon stroke={'var(--txt-color)'} />
                <S.Span>로그인</S.Span>
            </Link>
        </S.Button>
    );
};
