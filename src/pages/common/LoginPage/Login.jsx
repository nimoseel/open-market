import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../API/userApi';
import useInput from '../../../hooks/useInput';
import * as SC from '../LoginPage/_styleLoginJoin';
import * as S from '../LoginPage/_style';
import { AuthContext } from '../../../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { setAuthToken } = useContext(AuthContext);

    // 상단 탭 변경
    const [isSelected, setIsSelected] = useState(true);
    const [loginType, setLoginType] = useState('BUYER');

    const idInput = useRef();
    const pwInput = useRef();

    const [isValid, setIsValid] = useState(true);
    const [errTxt, setErrTxt] = useState('');

    useEffect(() => {
        idInput.current.focus();
    }, []);

    // 로그인 체크
    const loginCheck = async () => {
        const username = id.value;
        const password = pw.value;
        const login_type = loginType;

        const loginData = {
            username,
            password,
            login_type,
        };

        try {
            const response = await login(loginData);

            if (username === '' && password === '') {
                setIsValid(false);
                setErrTxt('아이디 또는 비밀번호를 입력해주세요.');
                idInput.current.focus();
            }
            if (username === '' && password !== '') {
                setIsValid(false);
                setErrTxt('아이디를 입력해주세요');
                idInput.current.focus();
            }
            if (username !== '' && password === '') {
                setIsValid(false);
                setErrTxt('비밀번호를 입력해주세요');
                pwInput.current.focus();
            }
            if (username !== '' && password !== '') {
                if (response.FAIL_Message) {
                    setIsValid(false);
                    setErrTxt(response.FAIL_Message);
                    id.setValue('');
                    pw.setValue('');
                    idInput.current.focus();
                }
                if (response.token && response.status !== 422) {
                    setAuthToken(response.token, response.user_type);
                    setErrTxt('');
                    navigate('/');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            loginCheck();
        }
    };

    const id = useInput('', null, 'id');
    const pw = useInput('', null, 'pw');

    return (
        <SC.ContentSection>
            <Link to={'/'}>
                <SC.LogoIcon alt="로고 이미지" />
            </Link>
            <SC.ContentWrapper>
                <SC.MenuUl>
                    <SC.MenuLi
                        isSelected={isSelected}
                        onClick={() => {
                            setIsSelected(true);
                            setLoginType('BUYER');
                        }}
                    >
                        구매회원 로그인
                    </SC.MenuLi>
                    <SC.MenuLi
                        isSelected={!isSelected}
                        onClick={() => {
                            setIsSelected(false);
                            setLoginType('SELLER');
                        }}
                    >
                        판매회원 로그인
                    </SC.MenuLi>
                </SC.MenuUl>
                <SC.InputWrapper>
                    <S.InputDiv>
                        <S.LoginInput
                            type="text"
                            placeholder="아이디"
                            ref={idInput}
                            {...id}
                            onKeyDown={handleKeyDown}
                        />
                        <S.LoginInput
                            type="password"
                            placeholder="비밀번호"
                            ref={pwInput}
                            {...pw}
                            onKeyDown={handleKeyDown}
                        />
                    </S.InputDiv>
                    <S.LoginErrMsg valid={isValid}>{errTxt}</S.LoginErrMsg>
                    <S.LoginBtn type="button" onClick={loginCheck}>
                        로그인
                    </S.LoginBtn>
                </SC.InputWrapper>
            </SC.ContentWrapper>
            <S.FindUl>
                <S.FindLi>
                    <Link to={'/join'}>회원가입</Link>
                </S.FindLi>
                <S.FindLi>
                    <Link>비밀번호 찾기</Link>
                </S.FindLi>
            </S.FindUl>
        </SC.ContentSection>
    );
};

export default Login;
