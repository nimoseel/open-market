import React, { useState, useContext } from 'react';
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
    
    const searchWord = useInput('', null, 'searchWord');

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

    return (
        <S.HeaderDiv>
            <S.HeaderContent>
                <div>
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
                </div>

                {isSeller() ?
                    <S.HeaderBtnDiv>
                        <Btn.MyPage onClick={clickMyPageBtn}/>
                        <Btn.Seller onClick={clickSellerBtn}/>
                    </S.HeaderBtnDiv>
                    :
                    <S.HeaderBtnDiv>
                        <Btn.Cart onClick={checkToken}/>
                        { token ? 
                            <Btn.MyPage onClick={clickMyPageBtn}/>
                            : 
                            <Btn.Login/>
                        }
                    </S.HeaderBtnDiv>
                }         
                <MyPageDropdown 
                    isOpen={isOpenMyPageDropdown} 
                    setIsOpen={setIsOpenMyPageDropdown} 
                    isSeller={isSeller()}
                />
            </S.HeaderContent>
            
            <S.LoginModal 
                isOpenModal={isOpenLoginModal}
                setIsOpenModal={setIsOpenLoginModal}
            />
        </S.HeaderDiv>
    )
};

export default Header;
