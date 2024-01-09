import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './_style';

const SellerHeader = () => {
    return (
        <S.HeaderDiv>
            <S.SellerHeaderContent>
                <Link to={'/'}>
                    <S.LogoIcon alt="로고 이미지" />
                </Link>
                <S.SellerHeaderTitle>판매자 센터</S.SellerHeaderTitle>
            </S.SellerHeaderContent>
        </S.HeaderDiv>
    );
};

export default SellerHeader;
