import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchIconImg from '../../assets/icon-search.svg';
import mainLogo from '../../assets/Logo-our.svg';
import Modal from '../Etc/Modal';
import Menu from '../../assets/icon-hamburger.svg';
import Close from '../../assets/icon-delete-colored.svg';

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 90px;
    padding-top: 20px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;
    
    @media screen and (max-width: 768px) {
        width: 540px;
        margin: 0;
    }
`

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    
    @media screen and (max-width: 768px) {
        gap: 0px;
    }
`

export const SearchInput = styled.input`
    width: 400px;
    height: 46px;
    padding: 0 62px 0 22px;
    border: 2px solid var(--main);
    border-radius: 50px;

    @media screen and (max-width: 768px) {
        width: 340px;
        margin-left: 30px;
    }
`

export const LogoIcon = styled.div`
    display: flex;
    align-items: center;
    width: 94px;
    height: 47px;
    background-image: url(${mainLogo}) ;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 30px;
    }
`

export const SearchButton = styled.button`
    display: inline-block;
    position: relative;
    right: 80px;
    width: 28px;
    height: 28px;
    background-image: url(${SearchIconImg});
    cursor: pointer;

    @media screen and (max-width: 768px) {
        right: 50px;
    }
`;

export const HeaderBtnDiv = styled.div`
    display: flex;
    position: relative;
    gap: 26px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MenuBtn = styled.button`
    display: none;
    width: 30px; 
    height: 30px;
    background-image: url(${props => props.isOpen ? Close : Menu});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
    }
`

// 판매자 센터 헤더 css
export const SellerHeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 47px;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 540px;
    }
`

export const SellerHeaderTitle = styled.p`
    width: 145px;
    height: 38px;
    margin-left: 20px;
    font-weight: var(--semi-bold);
    font-size: 30px;
    line-height: 38px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`

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

const MenuUl = styled.ul`
    position: relative;
    width: 100%;
    height: ${props => (props.isOpen ? 'fit-content' : '0')};
    top: 70px;
    border-top: 1px solid var(--main);
    transition: opacity 0.3s linear, height 0.3s linear;
    background-color: white;
    opacity: ${props => (props.isOpen ? '0.8' : '0')};
    z-index: 1;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

const MenuLi = styled.li`
    height: 60px;
    border-bottom: 1px solid var(--main);
    text-align: center;
    line-height: 60px;

    &:hover {
        background-color: var(--main-light);
    }
`

export const MenuList = ({list, isOpen}) => {

    return (
        <MenuUl isOpen={isOpen}>
            <MenuLi>장바구니</MenuLi>
            <MenuLi>로그인</MenuLi>
        </MenuUl>
    )
}