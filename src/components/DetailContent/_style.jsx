import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BtnM } from '../Etc/Button';
import BasePrice from '../Etc/Price';
import Modal from '../Etc/Modal';

export const DetailDiv = styled.div`
    display: flex;
    width: 100%;
    max-width: 1280px;
    height: 600px;
    margin: 80px auto 140px;
    gap: 50px;
    opacity: 0;
    transition: opacity 1s, transform 1s; 
    transform: translateY(10px);

    &.show{
        opacity: 1;
        transform: translateY(0);
    }
    
    @media screen and (max-width: 1280px) {
        max-width: 900px;
        margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const InfoDiv = styled.div`
    display: inline-block;
    width: 100%;
    max-width: 630px;

    @media screen and (max-width: 1280px) {
        max-width: 450px;
    }
`

export const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-width: 350px;
    height: 45px;
    margin: 32px 0 30px;
    box-sizing: border-box;

    @media screen and (max-width: 1280px) {
        max-width: 450px;
    }
`

export const PriceDiv = styled.div`
    display: flex;
    align-items: baseline;
`

export const DetailImg = styled.img`
    width: 600px;
    height: 600px;
    box-sizing: border-box;
    object-fit: cover;

    @media screen and (max-width: 1280px) {
        min-width: 450px;
        min-height: 450px;
        max-width: 450px;
        max-height: 450px;    
    }
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: var(--disabled);

    @media screen and (min-width: 768px) and (max-width: 1280px) {
        margin-top: 30px;
        margin-bottom: 15px
    }
`

export const Line2 = styled(Line)`
    margin-top: 30px;

    @media screen and (min-width: 768px) and (max-width: 1280px) {
        margin-top: 15px
    }
`

export const StoreName = styled.p`
    display: inline-block;
    font-size: 18px;
    line-height: 22.54px;
    color: var(--dark-gray);
`

export const ProductName = styled.p`
    margin: 16px 0 20px;
    font-size: 36px;
    line-height: 45.07px;
    color: var(--black);
    
    @media screen and (max-width: 1280px) {
        margin: 10px 0;
        font-size: 24px;
    }
`

export const Shipping = styled.p`
    margin: 138px 0 20px;
    font-size: 16px;
    line-height: 20.03px;
    color: var(--dark-gray);

    @media screen and (max-width: 1280px) {
        margin-top: 20px;
    }
`

export const TotalPrice = styled(StoreName)`
    font-weight: var(--semi-bold);
    color: var(--black);

`

export const Amount = styled(StoreName)`
    margin-right: 28px;
    font-weight: var(--semi-bold);
    text-align: inherit;
`

export const AmountSpan = styled.span`
    font-weight: var(--bold);
    color: var(--main);
`

export const BtnDiv = styled.div`
    display: flex;
    gap: 14px;
    margin-bottom: 100px;
`

export const TabDiv = styled.div`
    display: flex;
    width: 1280px;
    height: 200px;
    margin: 0 auto;

    @media screen and (max-width: 1280px) {
        width: 900px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const OrderBtn = styled(BtnM)`
    max-width: 416px;
`

export const CartBtn = styled(BtnM)`
    max-width: 200px;
`

export const Price = ({price, color}) => {
    return (
        <BasePrice price={price} numsize={36} margin={2} txtsize={18} color={color} />
    )
}

export const CartModal = ({isOpenModal, setIsOpenModal}) => {
    const navigate = useNavigate();

    return (
        <Modal 
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            padding_top={50} 
            content={<p>이미 장바구니에 있는 상품입니다.<br/>장바구니로 이동하시겠습니까?</p>}
            whiteBtn={'아니오'} 
            greenBtn={'예'}
            onClickYes={()=>{navigate('/cart')}}
        />
    )
}

export const LoginModal = ({isOpenModal, setIsOpenModal}) => {
    const navigate = useNavigate();

    return (
        <Modal 
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            padding_top={50} 
            content={<p>로그인이 필요한 서비스입니다.<br/>로그인 하시겠습니까?</p>}
            whiteBtn={'아니오'} 
            greenBtn={'예'}
            onClickYes={()=>{navigate('/login')}}
        />
    )
}

