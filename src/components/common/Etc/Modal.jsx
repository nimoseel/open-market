import React from 'react';
import styled from 'styled-components';
import ModalPortal from '../../../Portal';
import { BtnS } from '../../common/Etc/Button';
import DeleteIcon from '../../../assets/icon-delete.svg';

const ModalBg = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 150;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
    visibility: ${(props) =>
        props.isOpenModal === false ? 'hidden' : 'visible'};
`;

const ModalContent = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 360px;
    height: 200px;
    padding: 0 70px 40px;
    box-sizing: border-box;
    border: 1px solid var(--disabled);
    transform: translate(-50%, -50%);
    background-color: var(--bg-color);
    text-align: center;
`;

const ModalBtnDiv = styled.div`
    display: flex;
    width: 210px;
    margin: 0 auto;
    gap: 10px;
`;
const ModalTxt = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
    padding-top: ${(props) => `${props.padding_top}px`};
    box-sizing: border-box;
    line-height: 20.03px;
`;

const ModalDelBtn = styled.button`
    position: fixed;
    top: 18px;
    right: 18px;
    width: 22px;
    height: 22px;
    background: url(${DeleteIcon}) no-repeat center;
`;

const ModalBtn = styled(BtnS)`
    width: 100px;
`;

const Modal = ({
    padding_top,
    content,
    whiteBtn,
    greenBtn,
    isOpenModal,
    setIsOpenModal,
    onClickYes,
    onClickNo,
}) => {
    return (
        <ModalPortal>
            <ModalBg isOpenModal={isOpenModal}>
                <ModalContent>
                    <ModalDelBtn
                        onClick={() => {
                            setIsOpenModal(false);
                            onClickNo();
                        }}
                    />
                    <ModalTxt padding_top={padding_top}>{content}</ModalTxt>
                    <ModalBtnDiv>
                        <ModalBtn
                            width={100}
                            type={'white'}
                            onClick={() => {
                                setIsOpenModal(false);
                                onClickNo();
                            }}
                        >
                            {whiteBtn}
                        </ModalBtn>
                        <ModalBtn
                            width={100}
                            type={'green'}
                            onClick={onClickYes}
                        >
                            {greenBtn}
                        </ModalBtn>
                    </ModalBtnDiv>
                </ModalContent>
            </ModalBg>
        </ModalPortal>
    );
};

export default Modal;
