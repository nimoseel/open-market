import styled from 'styled-components';
import { BtnS } from '../../common/Etc/Button';
import DelIcon from '../../../assets/icon-delete.svg';
import BasePrice from '../../common/Etc/Price';
import Modal from '../../common/Etc/Modal';

export const Li = styled.li`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 200px;
    margin: 0 auto 10px;
    padding: 18px 100px 20px 28px;
    box-sizing: border-box;
    border: 2px solid var(--menu);
    border-radius: 10px;

    @media screen and (max-width: 1280px) {
        width: 900px;
        height: fit-content;
    }

    @media screen and (max-width: 768px) {
        width: 450px;
        height: fit-content;
    }
`;

export const Img = styled.img`
    width: 160px;
    height: 160px;
    margin: 2px 36px 0 40px;
    border-radius: 10px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 110px;
        height: 110px;
        margin: 0 10px;
    }
`;

export const TxtInfoDiv = styled.div`
    width: 100%;
    max-width: 468px;

    @media screen and (max-width: 768px) {
        min-width: 120px;
    }
`;

export const StoreName = styled.p`
    margin-top: 8px;
    font-size: 14px;
    font-weight: var(--regular);
    line-height: 17.53px;
    color: var(--dark-gray);

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ProductName = styled.p`
    margin: 10px 0;
    font-size: 18px;
    font-weight: var(--regular);
    line-height: 22px;
    color: var(--black);

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Shipping = styled(StoreName)`
    margin: 40px 0 16px;

    @media screen and (max-width: 768px) {
        margin: 10px 0;
    }
`;

export const EditBtn = styled(BtnS)`
    display: none;
    width: 90px;
    height: 30px;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const OrderBtn = styled(BtnS)`
    width: 130px;
    margin-top: 26px;

    @media screen and (max-width: 768px) {
        width: 90px;
        height: 30px;
        margin-top: 10px;
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 438px;
`;

export const EditDiv = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const OrderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 88px;
    margin-left: 50px;
    box-sizing: border-box;
    text-align: center;

    @media screen and (max-width: 768px) {
        height: 100%;
        margin-left: 10px;
    }
`;

export const DeleteBtn = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    width: 22px;
    height: 22px;
    background: url(${DelIcon}) no-repeat;
`;

export const ProductPrice = ({ price }) => {
    return (
        <BasePrice
            price={price}
            numsize={16}
            margin={0}
            txtsize={16}
            color={'--black'}
        />
    );
};

export const TotalPrice = ({ price }) => {
    return (
        <div>
            <BasePrice
                price={price}
                numsize={18}
                margin={0}
                txtsize={18}
                color={'--main'}
            />
        </div>
    );
};

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

export const EditAmountModal = ({
    isOpenModal,
    setIsOpenModal,
    content,
    onClickYes,
    onClickNo,
}) => {
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
    );
};
