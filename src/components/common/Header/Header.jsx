import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import { AuthContext } from '../../../contexts/AuthContext';
import MyPageDropdown from '../../common/Etc/MyPageDropdown';
import useInput from '../../../hooks/useInput';
import * as Btn from '../HeaderBtn/HeaderBtn';
import * as S from '../Header/_style';

import { ReactComponent as MoonIcon } from '../../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../../assets/icon-sun.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icon-delete-colored.svg';

const Header = () => {
    const navigate = useNavigate();
    const { token, userType, logout } = useContext(AuthContext);

    const [isOpenMyPageDropdown, setIsOpenMyPageDropdown] = useState(false);
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const searchWord = useInput('', null, 'searchWord');

    const { toggleTheme, isDarkMode } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpenMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const checkToken = () => {
        if (token) {
            setIsOpenLoginModal(false);
            navigate('/cart');
        } else {
            setIsOpenLoginModal(true);
        }
    };

    const searchData = async () => {
        try {
            const encodedSearchValue =
                searchWord.value.trim() === ''
                    ? ''
                    : encodeURIComponent(searchWord.value);

            navigate(`/search?search=${encodedSearchValue}`);
            searchWord.setValue('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.nativeEvent.isComposing === false) {
                searchData();
            }
        }
    };

    const clickMyPageBtn = () => {
        setIsOpenMyPageDropdown(!isOpenMyPageDropdown);
    };

    const clickSellerBtn = () => {
        navigate('/sellercenter');
    };

    const isSeller = () => {
        return userType === 'SELLER';
    };

    const handleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const setMenuList = () => {
        let menuItems;

        const handlelogout = () => {
            logout();
            alert('로그아웃 되었습니다.');
            setIsOpenMenu(false);
            navigate('/');
        };

        if (!token) {
            menuItems = (
                <>
                    <S.MenuLi onClick={checkToken}>장바구니</S.MenuLi>
                    <S.MenuLi
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        로그인
                    </S.MenuLi>
                </>
            );
        }
        if (token && userType === 'BUYER') {
            menuItems = (
                <>
                    <S.MenuLi onClick={checkToken}>장바구니</S.MenuLi>
                    <S.MenuLi onClick={handlelogout}>로그아웃</S.MenuLi>
                </>
            );
        }
        if (token && userType === 'SELLER') {
            menuItems = (
                <>
                    <S.MenuLi onClick={clickSellerBtn}>판매자센터</S.MenuLi>
                    <S.MenuLi onClick={handlelogout}>로그아웃</S.MenuLi>
                </>
            );
        }

        return <S.MenuUl isOpen={isOpenMenu}>{menuItems}</S.MenuUl>;
    };

    return (
        <S.HeaderDiv>
            <S.HeaderContent>
                <S.MainDiv>
                    <Link to={'/'}>
                        <S.LogoIcon alt="로고 이미지" />
                    </Link>
                    <S.SearchInput
                        type="text"
                        placeholder="상품을 검색해보세요 !"
                        onKeyDown={handleKeyDown}
                        {...searchWord}
                    />
                    <S.SearchButton onClick={searchData} />
                </S.MainDiv>

                <S.MenuBtnWrapper onClick={handleMenu}>
                    {isOpenMenu ? (
                        <CloseIcon stroke={'var(--main)'} />
                    ) : (
                        <MenuIcon stroke={'var(--main)'} fill={'var(--main)'} />
                    )}
                </S.MenuBtnWrapper>
                {isSeller() ? (
                    <>
                        <S.HeaderBtnDiv>
                            <S.ToggleBtn onClick={toggleTheme}>
                                {isDarkMode ? <SunIcon /> : <MoonIcon />}
                            </S.ToggleBtn>
                            <Btn.MyPage onClick={clickMyPageBtn} />
                            <Btn.Seller onClick={clickSellerBtn} />
                            <MyPageDropdown
                                isOpen={isOpenMyPageDropdown}
                                setIsOpen={setIsOpenMyPageDropdown}
                                isSeller={isSeller()}
                            />
                        </S.HeaderBtnDiv>
                    </>
                ) : (
                    <>
                        <S.HeaderBtnDiv>
                            <S.ToggleBtn onClick={toggleTheme}>
                                {isDarkMode ? <SunIcon /> : <MoonIcon />}
                            </S.ToggleBtn>
                            <Btn.Cart onClick={checkToken} />
                            {token ? (
                                <Btn.MyPage onClick={clickMyPageBtn} />
                            ) : (
                                <Btn.Login />
                            )}
                            <MyPageDropdown
                                isOpen={isOpenMyPageDropdown}
                                setIsOpen={setIsOpenMyPageDropdown}
                                isSeller={isSeller()}
                            />
                        </S.HeaderBtnDiv>
                    </>
                )}
            </S.HeaderContent>
            {isOpenMenu && setMenuList()}
            <S.LoginModal
                isOpenModal={isOpenLoginModal}
                setIsOpenModal={setIsOpenLoginModal}
            />
        </S.HeaderDiv>
    );
};

export default Header;
