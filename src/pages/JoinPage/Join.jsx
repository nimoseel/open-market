import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { joinIdValid, join, companyNumVaild, sellerJoin } from '../../API/userApi';
import Dropdown from '../../components/Etc/Dropdown';
import CheckBox from '../../components/Etc/CheckBox';
import useInput from '../../hooks/useInput';
import { regex } from '../../constants/regex';
import * as SC from '../LoginPage/_styleLoginJoin';
import * as S from '../JoinPage/_style';

const Join = () => {
    const navigate = useNavigate();
    const idInput = useRef();
    // 상단 메뉴 탭
    const [ isSelected, setIsSelected ] = useState(true);
    // id 중복 확인, 사업자 등록번호 인증 에러메세지
    const [ idErr, setIdErr ] = useState('');
    const [ companyNumErr, setCompanyNumErr ] = useState('');
    // 분할된 인풋 관련 에러메세지
    const [ mobileErr, setMobileErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');
    const [ pwChkErr, setPwChkErr ] = useState('');
    const [ companyNameErr, setCompanyNameErr ] = useState('');
    // pw 아이콘 
    const [ pwIcon, setPwIcon ] = useState(false);
    const [ pwChkIcon, setPwChkIcon ] = useState(false);
    // 체크박스
    const [ isCheck, setIsCheck ] = useState(false);

    useEffect(()=>{
        idInput.current.focus();                
    },[])

    const idValidator = () => {
        if(id.value.length === 0) {
            id.setIsValid(false);
            setIdErr('필수 정보입니다.');
        }
        if(id.value.length !== 0 && !id.value.match(regex.id)) {
            id.setIsValid(false);
            setIdErr('20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.');
        }
        if(id.value !== null && id.value.match(regex.id)){
            id.setIsValid(true);
            setIdErr('');
        }
    }

    const idCheck = async () => {
        const idData = {
            'username' : id.value,
        }
        try {
            const response = await joinIdValid(idData);
            if(response.FAIL_Message === 'username 필드를 추가해주세요 :)'){
                id.setIsValid(false);
                setIdErr('필수 정보입니다.');
            }
            if(response.FAIL_Message){
                id.setIsValid(false);
                setIdErr(response.FAIL_Message);
            }
            if(response.Success && id.value.match(regex.id)){
                id.setIsValid(true);
                setIdErr(response.Success);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const checkPwMatch = () => {
        if(pw.value !== pw_chk.value){
            pw_chk.setIsValid(false);
            setPwChkIcon(false);
            setPwChkErr('비밀번호가 일치하지 않습니다.');
        }
        if(pw.value.match(regex.pw) && pw.value === pw_chk.value){ 
            pw_chk.setIsValid(true);
            setPwChkIcon(true);
            setPwChkErr('');
        }
    }

    const pwValidator = () => {
        if(pw.value.length === 0){ 
            pw.setIsValid(false);
            setPwIcon(false);
            setPwChkIcon(false);
            throw new Error('필수 정보입니다.');
        }
        if(!pw.value.match(regex.pw)){
            pw.setIsValid(false);
            setPwIcon(false);
            throw new Error('8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
        }
        checkPwMatch();
        pw.setIsValid(true);
        setPwIcon(true);
    }

    const nameValidator = () => {
        if(user_name.value.length === 0){
            user_name.setIsValid(false);
            throw new Error('필수 정보입니다.');
        }
        user_name.setIsValid(true);
    }

    const mobileValidator = () => {
        const num = [mobile_1.value, mobile_2.value, mobile_3.value].join('');
        if(!num.match(regex.num)){
            setMobileErr('올바른 값을 입력하세요.');
        }else{
            setMobileErr('');
        }
    }

    const emailValidator = () => {
        const email = [email_1.value,'@',email_2.value].join('');
        if(!email.match(regex.email)){
            setEmailErr('잘못된 이메일 형식입니다.');
        }else{
            setEmailErr('');
        }
    }

    const companyNumValidator = () => {
        if(company_num.value.length === 0){
            company_num.setIsValid(false);
            setCompanyNumErr('필수 정보입니다.');
        }
        if(company_num.value.length !== 0 && ! company_num.value.match(regex.companyNum)){
            company_num.setIsValid(false);
            setCompanyNumErr('숫자 10자로 입력해주세요.');
        }
        if(company_num.value.match(regex.companyNum)){
            company_num.setIsValid(true);
            setCompanyNumErr('');
        }
    }

    const companyNumCheck = async() => {
        const companyNumData = {
            'company_registration_number': company_num.value,
        }
        try{
            const response = await companyNumVaild(companyNumData);
            if(response.FAIL_Message){
                company_num.setIsValid(false);
                setCompanyNumErr(response.FAIL_Message);
            }
            if(response.Success && company_num.value.match(regex.companyNum)){
                company_num.setIsValid(true);
                setCompanyNumErr(response.Success);
            }
        }catch(error){
            console.log(error);
        }
    }

    const companyNameValidator  = () => {
        if(company_name.value.length === 0){
            company_name.setIsValid(false);
            setCompanyNameErr('필수 정보입니다.');
        }else{
            company_name.setIsValid(true);
            setCompanyNameErr('');
        }
    }

    const ValidWholeCheck = () => {
        const inputs = [
            id.isValid,
            pw.isValid,
            pw_chk.isValid,
            user_name.isValid,
            !mobileErr,
            !emailErr,
            isCheck,
        ];
        
        if(!isSelected){
            inputs.push(company_num.isValid, company_name.isValid);
        }

        return inputs.every(input => input);
    };

    const id = useInput('', idValidator, 'id');
    const pw = useInput('', pwValidator, 'pw');
    const pw_chk = useInput('', checkPwMatch, 'pw_chk');
    const user_name = useInput('', nameValidator, 'user_name');
    const mobile_1 = useInput('010', mobileValidator, 'mobile_1');
    const mobile_2 = useInput('', mobileValidator, 'mobile_2');
    const mobile_3 = useInput('', mobileValidator, 'mobile_3');
    const email_1 = useInput('', emailValidator, 'email_1');
    const email_2 = useInput('', emailValidator, 'email_2');
    const company_num = useInput('', companyNumValidator, 'company_num');
    const company_name = useInput('', companyNameValidator, 'company_name');

    const JoinCheck = async() => { 
        const username = id.value;
        const password = pw.value;
        const password2 = pw_chk.value;
        const phone_number = [mobile_1.value, mobile_2.value, mobile_3.value].join('');
        const name = user_name.value;
        const company_registration_number = company_num.value;
        const store_name = company_name.value;

        const joinData = {
            username,
            password,
            password2,
            phone_number,
            name,
        };

        if(!isSelected){
            Object.assign(joinData, {
                company_registration_number,
                store_name,
            });
        }

        try{
            let response;
            if(isSelected){
                response = await join(joinData);
            }
            if(!isSelected){
                response = await sellerJoin(joinData);
            }
            if(response){
                if(response.username){
                    id.setIsValid(false);
                    setIdErr('이미 사용 중인 아이디입니다.');
                }
                if(response.phone_number){
                    setMobileErr('해당 사용자 전화번호는 이미 존재합니다.');
                }
                if(response.company_registration_number){
                    company_num.setIsValid(false);
                    setCompanyNumErr('이미 등록된 사업자등록번호입니다.');
                }
                if(response.store_name){
                    company_name.setIsValid(false);
                    setCompanyNameErr('해당 스토어이름은 이미 존재합니다.');
                }
                if(response.user_type && isSelected){
                    alert('구매회원가입 성공!');
                    navigate('/login');
                }
                if(response.status === 201 && !isSelected){
                    alert('판매회원가입 성공!');
                    navigate('/login');
                }
            }
        }catch(e){
            console.error(e);
        }
    };

    const handleMenuClick = () =>{
        setIsSelected(!isSelected);
    }

    return (
        <SC.ContentSection>
            <Link to={'/'}>
                <SC.LogoIcon alt='로고 이미지' />
            </Link>
            <SC.ContentWrapper>
                <SC.MenuUl>
                    <SC.MenuLi isSelected={isSelected} onClick={handleMenuClick}>
                        구매회원가입
                    </SC.MenuLi>
                    <SC.MenuLi isSelected={!isSelected} onClick={handleMenuClick}>
                        판매회원가입
                    </SC.MenuLi>
                </SC.MenuUl>
                
                <SC.InputWrapper>
                    <div>
                        <S.IncludeBtnDiv>
                            <S.InputDiv>
                                <S.JoinTitle htmlFor='id'>아이디</S.JoinTitle>
                                <S.Input 
                                    type='text' maxLength='20' ref={idInput} valid={id.isValid} {...id} />
                            </S.InputDiv>
                            <S.CheckBtn type='button' onClick={idCheck}>중복확인</S.CheckBtn>
                        </S.IncludeBtnDiv>
                        <SC.Err valid={id.isValid}>{idErr}</SC.Err>
                        <S.InputDiv>
                            <S.JoinTitle htmlFor='pw'>비밀번호</S.JoinTitle>
                            <S.PwDiv valid={pw.isValid}>
                                <S.PwInput type='password' maxLength='20' {...pw}/>
                                <S.CheckIcon valid={pwIcon}/>
                            </S.PwDiv>
                        </S.InputDiv>
                        <SC.ErrMsg valid={pw.isValid}>{pw.error}</SC.ErrMsg>
                        
                        <S.InputDiv>
                            <S.JoinTitle htmlFor='pw_chk'>비밀번호 재확인</S.JoinTitle>
                            <S.PwDiv valid={pw_chk.isValid}>
                                <S.PwInput type='password' maxLength='20' {...pw_chk}/>
                                <S.CheckIcon valid={pwChkIcon}/>
                            </S.PwDiv>
                        </S.InputDiv>
                        <SC.ErrMsg valid={pw_chk.isValid}>{pwChkErr}</SC.ErrMsg>
                    </div>
                    

                    <S.UserInfoDiv>
                        <S.InputDiv>
                            <S.JoinTitle htmlFor='user_name'>이름</S.JoinTitle>
                            <S.Input type='text' maxLength='5' valid={user_name.isValid} {...user_name}/>
                        </S.InputDiv>
                        <SC.ErrMsg valid={user_name.isValid}>{user_name.error}</SC.ErrMsg>

                        <S.JoinTitle htmlFor='mobile_1'>휴대폰 번호</S.JoinTitle>
                        <S.GapDiv>
                            <Dropdown {...mobile_1}/>
                            <S.Contact type='tel' maxLength='4' {...mobile_2}/>
                            <S.Contact type='tel'  maxLength='4' {...mobile_3}/>
                        </S.GapDiv>
                        <SC.ErrMsg>{mobileErr}</SC.ErrMsg>

                        <S.JoinTitle htmlFor='email_1'>이메일</S.JoinTitle>
                        <S.GapDiv>
                            <S.EmailInput type='text' {...email_1}/>
                            <S.EmailAdd>@</S.EmailAdd>
                            <S.EmailInput type='text' {...email_2}/>
                        </S.GapDiv>
                        <SC.ErrMsg>{emailErr}</SC.ErrMsg>
                    </S.UserInfoDiv>

                    { !isSelected && 
                        <S.StoreInfoDiv>
                            <S.IncludeBtnDiv>
                                <S.InputDiv>
                                    <S.JoinTitle htmlFor='company_num'>사업자 등록번호</S.JoinTitle>
                                    <S.Input type='text' maxLength='10' valid={company_num.isValid} {...company_num}/>
                                </S.InputDiv>
                                <S.CheckBtn type='button' width={122} onClick={companyNumCheck}>인증</S.CheckBtn>
                            </S.IncludeBtnDiv>
                            <SC.Err valid={company_num.isValid}>{companyNumErr}</SC.Err>
                            <S.InputDiv>
                                <S.JoinTitle htmlFor='company_name'>스토어 이름</S.JoinTitle>
                                <S.Input type='text' maxLength='20' valid={company_name.isValid} {...company_name}/>
                            </S.InputDiv>
                            <SC.ErrMsg valid={company_name.isValid}>{companyNameErr}</SC.ErrMsg>
                        </S.StoreInfoDiv>
                    }
                </SC.InputWrapper>
            </SC.ContentWrapper>

            <S.CheckBoxDiv>
                <CheckBox setIsCheck={setIsCheck} isCheck={isCheck}/>
                <span> 호두샵의 <S.CheckLink href='#'>이용약관</S.CheckLink> 및 <S.CheckLink href='#'>개인정보처리방침</S.CheckLink>에 대한 내용을 확인하였고 동의합니다.</span>
            </S.CheckBoxDiv>
            { ValidWholeCheck() ?
                <S.JoinBtn type={'active'} onClick={JoinCheck}>가입하기</S.JoinBtn>
                :
                <S.JoinBtn type={'disabled'} disabled>가입하기</S.JoinBtn>
            }
        </SC.ContentSection>
    );
};

export default Join;