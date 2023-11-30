import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BtnM } from '../Etc/Button';
import BasePrice from '../Etc/Price';
import Modal from '../Etc/Modal';

export const DetailDiv = styled.div`
    display: flex;
    width: 1280px;
    height: 600px;
    margin: 80px auto 140px;
    gap: 50px;
    opacity: 0;
    transition: opacity 2s;
    &.show{
        opacity: 1;
    }
`

export const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 45px;
    margin: 32px 0 30px;
    box-sizing: border-box;
    align-items: flex-end;
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
`

export const Line = styled.div`
    width: 630px;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: var(--disabled);
`

export const Line2 = styled(Line)`
    margin-top: 30px;
`

export const StoreName = styled.p`
    display: inline-block;
    font-size: 18px;
    color: var(--dark-gray);
    line-height: 22.54px;
`

export const ProductName = styled.p`
    margin: 16px 0 20px;
    font-size: 36px;
    color: var(--black);
    line-height: 45.07px;
`

export const Shipping = styled.p`
    margin: 138px 0 20px;
    font-size: 16px;
    color: var(--dark-gray);
    line-height: 20.03px;
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
`

export const TabDiv = styled.div`
    display: flex;
    width: 1280px;
    height: 200px;
    margin: 0 auto;
`

export const OrderBtn = styled(BtnM)`
    width: 416px;
`

export const CartBtn = styled(BtnM)`
    width: 200px;
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

