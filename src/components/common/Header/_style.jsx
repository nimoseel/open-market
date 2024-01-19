import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchImg } from '../../../assets/icon-search.svg';
import { ReactComponent as LogoImg } from '../../../assets/icon-logo.svg';

import Modal from '../Etc/Modal';

export const HeaderDiv = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: center;
    width: 100%;
    height: 90px;
    padding-top: 18px;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px 0px var(--shadow);
    z-index: 100;
`;

export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;

    @media screen and (max-width: 1280px) {
        max-width: 900px;
    }

    @media screen and (max-width: 768px) {
        width: 450px;
    }
`;

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media screen and (max-width: 768px) {
        gap: 0px;
    }
`;

export const SearchInput = styled.input`
    width: 400px;
    height: 46px;
    padding: 0 62px 0 22px;
    border: 2px solid var(--main);
    border-radius: 50px;

    @media screen and (max-width: 1280px) {
        width: 360px;
    }
    @media screen and (max-width: 768px) {
        width: 310px;
        margin-left: 20px;
    }
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    width: 94px;
    height: 47px;

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 30px;
    }
`;

export const LogoIcon = () => {
    return (
        <LogoDiv>
            <LogoImg fill={'var(--main)'} alt="로고 이미지" />
        </LogoDiv>
    );
};

export const SearchButtonWrapper = styled.button`
    display: inline-block;
    position: relative;
    right: 80px;
    width: 28px;
    height: 28px;

    @media screen and (max-width: 768px) {
        right: 50px;
    }
`;

export const SearchButton = ({ onClick }) => {
    return (
        <SearchButtonWrapper onClick={onClick}>
            <SearchImg stroke={'var(--main)'} alt="검색 버튼 이미지" />
        </SearchButtonWrapper>
    );
};

export const HeaderBtnDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 26px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ToggleBtn = styled.button`
    width: 28px;
    height: 28px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MenuBtnWrapper = styled.button`
    display: none;
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

// 판매자 센터 헤더 css
export const SellerHeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 47px;
    margin: 0 auto;

    @media screen and (max-width: 1280px) {
        max-width: 900px;
    }

    @media screen and (max-width: 768px) {
        width: 450px;
    }
`;

export const SellerHeaderTitle = styled.p`
    width: 145px;
    height: 38px;
    margin-left: 20px;
    font-size: 30px;
    font-weight: var(--semi-bold);
    line-height: 38px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`;

export const LoginModal = ({ isOpenModal, setIsOpenModal }) => {
    const navigate = useNavigate();

    return (
        <Modal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            padding_top={50}
            content={
                <p>
                    로그인이 필요한 서비스입니다.
                    <br />
                    로그인 하시겠습니까?
                </p>
            }
            whiteBtn={'아니오'}
            greenBtn={'예'}
            onClickYes={() => {
                navigate('/login');
            }}
        />
    );
};

export const MenuUl = styled.ul`
    position: relative;
    top: 70px;
    width: 100%;
    height: fit-content;
    border-top: 1px solid var(--main);
    transition:
        opacity 0.3s linear,
        height 0.3s linear;
    background-color: var(--bg-color);
    box-shadow: 0px 10px 30px 0px rgba(121, 30, 247, 0.1);
    z-index: 1;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const MenuLi = styled.li`
    height: 60px;
    border-bottom: 1px solid var(--main);
    text-align: center;
    line-height: 60px;
    cursor: pointer;

    &:hover {
        background-color: var(--menu-main-light);
    }
`;
