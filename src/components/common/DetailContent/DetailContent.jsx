import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { getDetail } from '../../../API/productApi';
import { getCart, postCart } from '../../../API/cartApi';
import Loading from '../../common/Loading/Loading';
import { BtnTab } from '../../common/Etc/Button';
import AmountBtn from '../../common/Etc/AmountBtn';
import * as S from '../DetailContent/_style';

const DetailContent = () => {
    let { product_id } = useParams();

    const navigate = useNavigate();
    const { token, userType } = useContext(AuthContext);

    const [detail, setDetail] = useState({});
    const [cartLists, setCartLists] = useState({});
    const [isOpenCartModal, setIsOpenCartModal] = useState(false);
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                if (userType === 'BUYER') {
                    const [detailData, cartData] = await Promise.all([
                        getDetail(product_id),
                        getCart(token),
                    ]);
                    setDetail(detailData);
                    setCartLists(cartData);
                } else {
                    const detailData = await getDetail(product_id);
                    setDetail(detailData);
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [product_id, token, userType]);

    const [num, setNum] = useState('1');
    const [isMax, setIsMax] = useState(false);

    const handleMinus = () => {
        if (parseInt(num) === 1) {
            alert('최소 수량은 1개 입니다.');
        }
        if (parseInt(num) > 1) {
            setNum(parseInt(num) - 1);
            setIsMax(false);
        }
    };

    const handlePlus = () => {
        if (parseInt(num) === detail.stock) {
            setIsMax(true);
        }
        if (parseInt(num) < detail.stock) {
            setNum(parseInt(num) + 1);
        }
    };

    const navigateToPayment = () => {
        if (token) {
            navigate('/payment', {
                state: {
                    order_data: [
                        {
                            product_id: product_id,
                            image: detail?.image,
                            store_name: detail?.store_name,
                            product_name: detail?.product_name,
                            quantity: num,
                            shipping_fee: detail?.shipping_fee,
                            price: detail?.price,
                            order_kind: 'direct_order',
                        },
                    ],
                },
            });
        } else {
            setIsOpenLoginModal(true);
        }
    };

    const postItemToCart = () => {
        if (token) {
            const addCartData = {
                product_id: product_id,
                quantity: num,
                check: cartLists?.results.find(
                    (v) => v.product_id === parseInt(product_id),
                ),
            };

            if (addCartData.check) {
                setIsOpenCartModal(true);
            } else {
                try {
                    postCart(addCartData, token);
                    navigate('/cart');
                } catch (error) {
                    console.error(error);
                }
            }
        } else {
            setIsOpenLoginModal(true);
        }
    };

    const returnBtnDiv = () => {
        if (userType === 'SELLER') {
            return (
                <>
                    <S.OrderBtn type={'disabled'} disabled>
                        바로 구매
                    </S.OrderBtn>
                    <S.CartBtn type={'disabled'} disabled>
                        장바구니
                    </S.CartBtn>
                </>
            );
        }
        if (userType === 'BUYER' && detail.stock === 0) {
            return (
                <>
                    <S.OrderBtn type={'disabled'} disabled>
                        품절
                    </S.OrderBtn>
                    <S.CartBtn type={'disabled'} disabled>
                        품절
                    </S.CartBtn>
                </>
            );
        }
        if ((userType === 'BUYER' && detail.stock !== 0) || !token) {
            return (
                <>
                    <S.OrderBtn type={'green'} onClick={navigateToPayment}>
                        바로 구매
                    </S.OrderBtn>
                    <S.CartBtn type={'dark'} onClick={postItemToCart}>
                        장바구니
                    </S.CartBtn>
                </>
            );
        }
    };

    return (
        <>
            {loading && <Loading />}
            <S.DetailDiv className={loading ? '' : 'show'}>
                <S.DetailImg src={detail.image} alt={detail.product_name} />
                <S.InfoDiv>
                    <S.StoreName>{detail.store_name}</S.StoreName>
                    <S.ProductName>{detail.product_name}</S.ProductName>
                    <S.Price
                        price={parseInt(detail.price)}
                        color={'--txt-color'}
                    />
                    {detail.shipping_fee !== 0 ? (
                        <S.ShippingDiv>
                            <S.Shipping>택배배송 </S.Shipping>
                            <S.ShippingPrice
                                price={parseInt(detail.shipping_fee)}
                            />
                        </S.ShippingDiv>
                    ) : (
                        <S.Shipping>무료배송</S.Shipping>
                    )}
                    <S.Line />
                    {userType === 'SELLER' ? (
                        <AmountBtn num={1} isMax={1} />
                    ) : (
                        <AmountBtn
                            num={num}
                            isMax={isMax}
                            handleMinus={handleMinus}
                            handlePlus={handlePlus}
                        />
                    )}
                    <S.Line2 />

                    <S.TotalDiv>
                        <S.TotalPrice>총 상품 금액</S.TotalPrice>
                        <S.PriceDiv>
                            <S.Amount>
                                총 수량 <S.AmountSpan>{num}</S.AmountSpan>개
                            </S.Amount>
                            <S.Price
                                price={parseInt(detail.price) * num}
                                numColor={'--main'}
                                txtColor={'--txt-color'}
                            />
                        </S.PriceDiv>
                    </S.TotalDiv>

                    <S.BtnDiv>{returnBtnDiv()}</S.BtnDiv>

                    <S.CartModal
                        isOpenModal={isOpenCartModal}
                        setIsOpenModal={setIsOpenCartModal}
                    />
                    <S.LoginModal
                        isOpenModal={isOpenLoginModal}
                        setIsOpenModal={setIsOpenLoginModal}
                    />
                </S.InfoDiv>
            </S.DetailDiv>
            <S.TabDiv>
                <BtnTab type={'disabled'}>버튼</BtnTab>
                <BtnTab type={'disabled'}>리뷰</BtnTab>
                <BtnTab type={'disabled'}>Q&A</BtnTab>
                <BtnTab type={'disabled'}>반품/교환정보</BtnTab>
            </S.TabDiv>
        </>
    );
};

export default DetailContent;
