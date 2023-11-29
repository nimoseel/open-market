import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchIconImg from '../../assets/icon-search.svg';
import mainLogo from '../../assets/Logo-our.svg';
import Modal from '../Etc/Modal';

export const HeaderDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 90px;
    padding-top: 20px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
`

export const SearchInput = styled.input`
    width: 400px;
    height: 46px;
    padding: 0 62px 0 22px;
    border: 2px solid var(--main);
    border-radius: 50px;
`

export const LogoIcon = styled.div`
    display: inline-block;
    width: 124px;
    height: 47px;
    background-image: url(${mainLogo}) ;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
`

export const SearchButton = styled.button`
    display: inline-block;
    position: relative;
    top: 9px;
    right: 50px;
    width: 28px;
    height: 28px;
    background-image: url(${SearchIconImg});
    background-repeat: no-repeat;
    background-size: contain;
    border: none; 
    cursor: pointer;
`;

export const HeaderBtnDiv = styled.div`
    display: flex;
    position: relative;
    gap: 26px;
`

// 판매자 센터 헤더 css
export const SellerHeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 1280px;
    margin: 0 auto;
`

export const SellerHeaderTitle = styled.p`
    width: 145px;
    height: 38px;
    font-weight: var(--semi-bold);
    font-size: 30px;
    line-height: 38px;
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