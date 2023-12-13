import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import MyPageDropdown from '../Etc/MyPageDropdown';
import useInput from '../../hooks/useInput';
import * as Btn from '../HeaderBtn/HeaderBtn';
import * as S from '../Header/_style';


const Header = () => {
    const navigate = useNavigate();
    const { token, userType } = useContext(AuthContext);
    
    const [ isOpenMyPageDropdown, setIsOpenMyPageDropdown ] = useState(false);
    const [ isOpenLoginModal, setIsOpenLoginModal ] = useState(false);
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    const searchWord = useInput('', null, 'searchWord');

    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpenMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    const checkToken = () => {
        if(token){
            setIsOpenLoginModal(false);
            navigate('/cart');
        }else{
            setIsOpenLoginModal(true);
        }
    }

    const searchData = async() => {
        try {
            const encodedSearchValue = encodeURIComponent(searchWord.value);
            navigate(`/search?search=${encodedSearchValue}`);
            searchWord.setValue('');
        } catch (error) {
            console.error(error);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if(e.nativeEvent.isComposing === false){ 
                searchData();
            }
        }
    };

    const clickMyPageBtn = () => {
        setIsOpenMyPageDropdown(!isOpenMyPageDropdown);
    }

    const clickSellerBtn = () => {
        navigate('/sellercenter');
    }

    const isSeller = () => {
        return userType === 'SELLER';
    };

    const handleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    const setList = () => {

    }

    return (
        <S.HeaderDiv>
            <S.HeaderContent>
                <S.MainDiv>
                    <Link to={'/'}>
                        <S.LogoIcon alt='로고 이미지'/>
                    </Link>
                        <S.SearchInput 
                            type='text' 
                            placeholder='상품을 검색해보세요 !' 
                            onKeyDown={handleKeyDown} 
                            {...searchWord}
                        />
                        <S.SearchButton onClick={searchData}/>
                </S.MainDiv>

                <S.MenuBtn onClick={handleMenu} isOpen={isOpenMenu}/>
                {isSeller() ?
                    <>
                        <S.HeaderBtnDiv>
                            <Btn.MyPage onClick={clickMyPageBtn}/>
                            <Btn.Seller onClick={clickSellerBtn}/>
                            <MyPageDropdown 
                                isOpen={isOpenMyPageDropdown} 
                                setIsOpen={setIsOpenMyPageDropdown} 
                                isSeller={isSeller()}
                            />
                        </S.HeaderBtnDiv>
                    </>
                    :
                    <>
                        <S.HeaderBtnDiv>
                            <Btn.Cart onClick={checkToken}/>
                            { token ? 
                                <Btn.MyPage onClick={clickMyPageBtn}/>
                                : 
                                <Btn.Login/>
                            }
                            <MyPageDropdown 
                                isOpen={isOpenMyPageDropdown} 
                                setIsOpen={setIsOpenMyPageDropdown} 
                                isSeller={isSeller()}
                            />
                        </S.HeaderBtnDiv>
                    </>
                }         
            </S.HeaderContent>
            <S.MenuList isOpen={isOpenMenu} list={"unlogin"}/>
            
            <S.LoginModal 
                isOpenModal={isOpenLoginModal}
                setIsOpenModal={setIsOpenLoginModal}
            />
        </S.HeaderDiv>
    )
};

export default Header;
