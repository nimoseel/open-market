import styled from 'styled-components';
import { BtnS } from '../../common/Etc/Button';
import Modal from '../../common/Etc/Modal';

export const ItemLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
    border-bottom: 1px solid var(--disabled);
    background-color: var(--bg-color);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: 16px 16px;
    }
`;

export const ItemImg = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 30px;
    border-radius: 100px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }
`;

export const ItemTxtDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
    gap: 10px;

    @media screen and (max-width: 1280px) {
        width: 125px;
    }

    @media screen and (max-width: 768px) {
        width: 115px;
    }
`;

export const ItemName = styled.p`
    font-size: 18px;
    font-weight: var(--regular);
    line-height: 22px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ItemStock = styled.p`
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 20px;
    color: var(--dark-gray);
`;

export const ItemBtn = styled(BtnS)`
    width: 80px;
    margin: 0 10px;

    &:focus {
        border-color: var(--disabled);
    }

    @media screen and (max-width: 768px) {
        width: 50px;
        font-size: 14px;
    }
`;

const StyledPrice = styled.p`
    display: inline-block;
    width: 200px;
    text-align: center;
    font-size: 18px;
    font-weight: var(--regular);

    @media screen and (max-width: 768px) {
        width: 100px;
        font-size: 14px;
    }
`;

export const Price = ({ price }) => {
    return (
        <StyledPrice>
            {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
        </StyledPrice>
    );
};

export const ItemInfoDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const DeleteModal = ({ isOpenModal, setIsOpenModal, onClickYes }) => {
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
    );
};
