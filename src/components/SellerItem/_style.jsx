import styled from 'styled-components';
import { BtnS } from '../Etc/Button';
import Modal from '../Etc/Modal';

export const ItemLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
    background-color: var(--white);
    border-bottom: 1px solid var(--disabled);
    cursor: pointer;
`

export const ItemImg = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 100px;
    margin-right: 30px;
`

export const ItemTxtDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 350px;
`

export const ItemName = styled.p`
    font-size: 18px;
    font-weight: var(--regular);
    line-height: 22px;
`

export const ItemStock = styled.p`
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 20px;
    color: var(--dark-gray);
`

export const ItemBtn = styled(BtnS)`
    width: 80px;
    margin: 0 10px;
    &:focus{
        border-color: var(--disabled);
    }
`

const StyledPrice = styled.p`
    display: inline-block;
    font-weight: var(--regular);
    font-size: 18px;
    width: 200px;
    text-align: center;
`

export const Price = ({price}) => {
    return (
            <StyledPrice>
                {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
            </StyledPrice>
    )
};

export const ItemInfoDiv = styled.div`
    display: flex;
    align-items: center;
`

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