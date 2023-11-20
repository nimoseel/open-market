import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderBtn, MyPageBtn } from '../HeaderBtn/HeaderBtn';
import { getToken } from '../../constants/token'
import cartIcon from '../../assets/icon-shopping-cart.svg';
import profileIcon from '../../assets/icon-user.svg';
import MyPageDropdown from '../Etc/MyPageDropdown';
import Modal from '../Etc/Modal';
import bagIcon from '../../assets/icon-shopping-bag.svg'
import * as S from '../Header/_style';
import { getSearchData } from '../../API/searchApi';
import useInput from '../../hooks/useInput';

const Header = () => {
    const navigate = useNavigate();
    const token = getToken();
    
    const [ isOpenMyPageDropdown, setIsOpenMyPageDropdown ] = useState(false);
    const [ isOpenLoginModal, setIsOpenLoginModal ] = useState(false);

    const checkToken = () => {
        if(token){
            setIsOpenLoginModal(false);
            navigate('/cart');
        }else{
            setIsOpenLoginModal(true);
        }
    }

    const searchWord = useInput('', null, 'searchWord');

    const searchData = async() => {
        try {
            const response = await getSearchData(searchWord.value);
            console.log(response.data);

            // 검색 결과 페이지로 이동
            navigate('/search', 
                { state: { searchData: response.data }});
        } catch (error) {
            console.error(error);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchData();
        }
    };
    
    return (
        <S.HeaderDiv>
            <S.HeaderContent>
                <div>
                    <Link to={'/'}>
                        <S.LogoIcon alt='로고 이미지' />
                    </Link>
                    <S.SearchInput type='text' placeholder='상품을 검색해보세요 !' onKeyPress={handleKeyPress} {...searchWord}/>
                    <S.SearchButton onClick={searchData}/> 
                </div>

                    {localStorage.getItem('user_type') === 'SELLER' ?
                        <S.HeaderBtnDiv>
                            <MyPageBtn text={'마이페이지'} src={profileIcon} onClick={()=>{setIsOpenMyPageDropdown(!isOpenMyPageDropdown)}}/>
                            <S.SellerBtn type='button' onClick={()=>{navigate('/sellercenter')}}>
                                <img src={bagIcon} alt='판매자 센터 버튼' />
                                판매자 센터
                            </S.SellerBtn> 
                            {isOpenMyPageDropdown && 
                                <MyPageDropdown isOpen={isOpenMyPageDropdown} setIsOpen={setIsOpenMyPageDropdown} left={-46}/>
                            }
                        </S.HeaderBtnDiv>

                        :
                        //유저가 buyer일 경우  
                        <S.HeaderBtnDiv>
                            <HeaderBtn text={'장바구니'} src={cartIcon} onClick={()=>{checkToken()}}/>
                            { token ? 
                                <MyPageBtn text={'마이페이지'} src={profileIcon} onClick={()=>{setIsOpenMyPageDropdown(!isOpenMyPageDropdown)}}/>
                                : 
                                <HeaderBtn text={'로그인'} src={profileIcon} link={'/login'}/>
                            }
                            {isOpenMyPageDropdown && 
                                <MyPageDropdown isOpen={isOpenMyPageDropdown} setIsOpen={setIsOpenMyPageDropdown} left={35}/>
                            }
                        </S.HeaderBtnDiv>
                    }         

            </S.HeaderContent>
            <Modal 
                isOpenModal={isOpenLoginModal}
                setIsOpenModal={setIsOpenLoginModal}
                padding_top={50} 
                content={<p>로그인이 필요한 서비스입니다.<br/>로그인 하시겠습니까?</p>}
                whiteBtn={'아니오'} 
                greenBtn={'예'}
                onClickYes={()=>{navigate('/login')}}
            />
        </S.HeaderDiv>
    )
};

export default Header;
