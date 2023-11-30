import styled from 'styled-components';
import { BtnS } from '../Etc/Button';
import DelIcon from '../../assets/icon-delete.svg';
import BasePrice from '../Etc/Price';
import Modal from '../Etc/Modal';

export const Li = styled.li`
    display: flex;
    position: relative;
    width: 1280px;
    height: 200px;
    box-sizing: border-box;
    margin: 0 auto 10px;
    padding: 18px 100px 20px 28px;
    border: 2px solid var(--menu);
    border-radius: 10px;
    align-items: center;
`

export const Img = styled.img`
    width: 160px;
    height: 160px;
    margin: 2px 36px 0 40px;
    object-fit: cover;
    border-radius: 10px;
`

export const TxtInfoDiv = styled.div`
    width: 418px;
    margin-right: 50px;
`

export const StoreName = styled.p`
    margin-top: 8px;
    font-weight: var(--regular);
    font-size: 14px;
    color: var(--dark-gray);
    line-height: 17.53px;
`

export const ProductName = styled.p`
    margin: 10px 0;
    font-weight: var(--regular);
    font-size: 18px;
    color: var(--black);
    line-height: 22px;
`

export const Shipping = styled(StoreName)`
    margin: 40px 0 16px;
`

export const OrderBtn = styled(BtnS)`
    width: 130px;
    margin-top: 26px;
`

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 438px;
    align-items: center;
`

export const OrderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    height: 88px;
    text-align: center;
`

export const DeleteBtn = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    width: 22px;
    height: 22px;
    background: url(${DelIcon}) no-repeat;
`

export const ProductPrice = ({price}) => {
    return (
        <BasePrice price={price} numsize={16} margin={0} txtsize={16} color={'--black'} />
    )
}

export const TotalPrice = ({price}) => {
    return (
        <div>
            <BasePrice price={price} numsize={18} margin={0} txtsize={18} color={'--main'} />
        </div>
    )
}

export const DeleteModal = ({isOpenModal, setIsOpenModal, onClickYes}) => {
    return (
        <Modal 
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            padding_top={60} 
            content={'상품을 삭제하시겠습니까?'}
            whiteBtn={'취소'} 
            greenBtn={'삭제'}
            onClickYes={onClickYes}
        />
    )
}

export const EditAmountModal = ({isOpenModal, setIsOpenModal, content, onClickYes, onClickNo}) => {
    return (
        <Modal 
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                padding_top={44} 
                content={content}
                whiteBtn={'취소'} 
                greenBtn={'수정'}
                onClickYes={onClickYes}
                onClickNo={onClickNo}
            />
    )
}