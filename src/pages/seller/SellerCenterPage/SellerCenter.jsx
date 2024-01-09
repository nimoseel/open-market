import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { getSellerProduct } from '../../../API/sellerApi';
import Header from '../../../components/Header/SellerCenterHeader';
import SellerItem from '../../../components/SellerItem/SellerItem';
import Loading from '../../../components/Loading/Loading';
import * as S from '../SellerCenterPage/_style';

const SellerCenter = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [sellerItems, setSellerItems] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        getSellerProduct(token).then((res) => {
            setSellerItems(res.results);
            setLoading(false);
        });

        setIsFocused(true);
    }, []);

    const store_name = sellerItems[0]?.store_name;
    const product_number = sellerItems?.length;

    const handleAlert = () => {
        alert('페이지 준비중입니다.');
    };

    return (
        <>
            <Header />
            {loading && <Loading />}
            <S.TitleDiv>
                <S.Title>
                    대시보드<S.StoreName>{store_name}</S.StoreName>
                </S.Title>
                <S.UploadBtn
                    onClick={() => {
                        navigate('/productupload');
                    }}
                />
            </S.TitleDiv>
            <S.MainDiv>
                <S.MenuUl>
                    <S.MenuLi
                        content={`판매중인 상품 (${product_number})`}
                        isFocused={isFocused}
                    />
                    <S.MenuLi content={'주문/배송'} onClick={handleAlert} />
                    <S.MenuLi content={'문의/리뷰'} onClick={handleAlert} />
                    <S.MenuLi content={'통계'} onClick={handleAlert} />
                    <S.MenuLi content={'스토어 설정'} onClick={handleAlert} />
                </S.MenuUl>
                <S.ContentDiv>
                    <S.ItemIndexUl>
                        <S.ItemIndexLi>상품정보</S.ItemIndexLi>
                        <S.ItemIndexLi>판매가격</S.ItemIndexLi>
                        <S.ItemIndexLi>수정</S.ItemIndexLi>
                        <S.ItemIndexLi>삭제</S.ItemIndexLi>
                    </S.ItemIndexUl>
                    <S.UlWrapper>
                        <ul>
                            {sellerItems?.map((item) => (
                                <SellerItem {...item} key={item.product_id} />
                            ))}
                        </ul>
                    </S.UlWrapper>
                </S.ContentDiv>
            </S.MainDiv>
        </>
    );
};

export default SellerCenter;
