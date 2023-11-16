import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../API/userApi';
import * as SC from '../LoginPage/_styleLoginJoin';
import * as S from '../LoginPage/_style';

const Login = () => {
    const navigate = useNavigate();

    const [ id, setId ] = useState('');
    const [ pw, setPw ] = useState('');
    const [ isSelected, setIsSelected ] = useState(true)
    const [ loginType, setLoginType ] = useState('BUYER')

    const idInput = useRef();
    const pwInput = useRef();

    const [ isValid, setIsValid ] = useState(true);
    const [ errTxt, setErrTxt ] = useState('');

    // 로그인 체크
    const loginCheck = async() => {
        const username = id;
        const password = pw;
        const login_type = loginType;

        const loginData = {
            username,
            password,
            login_type,
        };

        try{
            const response = await login(loginData);

            if(loginData.username === '' && loginData.password === ''){
                setIsValid(false);
                setErrTxt('아이디 또는 비밀번호를 입력해주세요.');
                idInput.current.focus();
            } else if(loginData.username === ''){
                setIsValid(false);
                setErrTxt('아이디를 입력해주세요');
                idInput.current.focus();
            } else if(loginData.password === ''){
                setIsValid(false);
                setErrTxt('비밀번호를 입력해주세요');
                pwInput.current.focus();
            }

            if(loginData.username !== '' && loginData.password !== ''){
                if(response.FAIL_Message){
                    setIsValid(false);
                    setErrTxt(response.FAIL_Message);
                    setId('');
                    setPw('');
                    idInput.current.focus();
                }else if(response.token && response.status !== 422){
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user_type', response.user_type);
                    setErrTxt('');
                    navigate('/');
                }
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <SC.ContentSection>
            <Link to={'/'}>
                <SC.LogoIcon alt='로고 이미지' />
            </Link>
            <SC.ContentWrapper>
                <SC.MenuUl>
                    <SC.MenuLi 
                        isSelected={isSelected} 
                        onClick={()=>{ 
                            setIsSelected(true); 
                            setLoginType('BUYER'); 
                    }}>
                        구매회원 로그인
                    </SC.MenuLi>
                    <SC.MenuLi 
                        isSelected={!isSelected} 
                        onClick={()=>{ 
                            setIsSelected(false); 
                            setLoginType('SELLER'); 
                    }}>
                        판매회원 로그인
                    </SC.MenuLi>
                </SC.MenuUl>
                <SC.InputWrapper>
                    <S.InputDiv>
                        <S.LoginInput 
                            type='text' 
                            placeholder='아이디' 
                            id='ID' 
                            value={id} 
                            onChange={(e)=>setId(e.target.value)}
                            ref={idInput}/>
                        <S.LoginInput 
                            type='password' 
                            placeholder='비밀번호' 
                            id='Password' 
                            value={pw} 
                            onChange={(e)=>setPw(e.target.value)}
                            ref={pwInput}/>
                    </S.InputDiv>
                    <SC.ErrMsg valid={isValid} margin={26}>{errTxt}</SC.ErrMsg>
                    <S.LoginBtn type='button' onClick={()=>{loginCheck()}}>로그인</S.LoginBtn>
                </SC.InputWrapper>
            </SC.ContentWrapper>
            <S.FindUl>
                <S.FindLi><Link to={'/join'}>회원가입</Link></S.FindLi>
                <S.FindLi><Link>비밀번호 찾기</Link></S.FindLi>
            </S.FindUl>
        </SC.ContentSection>
    );
};

export default Login;