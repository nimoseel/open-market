import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { joinIdValid, join, companyNumVaild, sellerJoin } from '../../API/userApi';
import LogoHodu from '../../assets/Logo-hodu.svg';
import Dropdown from '../../components/Etc/Dropdown';
import CheckBox from '../../components/Etc/CheckBox';
import * as SC from '../LoginPage/_styleLoginJoin';
import * as S from '../JoinPage/_style';

const Join = () => {
    const navigate = useNavigate();

    const idInput = useRef();
    const pwInput = useRef();

    const [ isSelected, setIsSelected ] = useState(true);

    const [ idValid, setIdValid ] = useState('false');
    const [ pwValid, setPwValid ] = useState('false');
    const [ pwIconValid, setPwIconValid ] = useState('false');
    const [ pwChkValid, setPwChkValid ] = useState('false');
    const [ pwChkIconValid, setPwChkIconValid ] = useState('false');
    const [ nameValid, setNameValid ] = useState('false');
    const [ mobileValid, setMobileValid ] = useState('false');
    const [ emailValid, setEmailValid ] = useState('false');
    const [ companyNumValid, setCompanyNumValid ] = useState('false');
    const [ storeNameValid, setStoreNameValid ] = useState('false');
    const [ isCheck, setIsCheck ] = useState(false);

    const [ idErr, setIdErr ] = useState('');
    const [ pwErr, setPwErr ] = useState('');
    const [ pwChkErr, setPwChkErr ] = useState('');
    const [ nameErr, setNameErr ] = useState('');
    const [ mobileErr, setMobileErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');
    const [ companyNumErr, setCompanyNumErr ] = useState('');
    const [ storeNameErr, setStoreNameErr ] = useState('');

    const [ inputs, setInputs ] = useState({
        id : '',
        pw : '',
        pw_chk : '',
        name : '',
        mobile_1 : '010',
        mobile_2 : '',
        mobile_3 : '',
        email_1 : '',
        email_2 : '',
        company_num: '',
        store_name: '',
    });

    const { id, pw, pw_chk, name, mobile_1, mobile_2, mobile_3, email_1, email_2, company_num, store_name } = inputs ;

    const idRegex = /^[A-Za-z0-9]{0,20}$/;
    const companyNumRegex = /([0-9]{10})$/;


    useEffect(()=>{
        idInput.current.focus();
        setPwIconValid(false);
        setPwChkIconValid(false);
    },[])

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value,
        });
    }

    const handleId = () => {
        const idStr = inputs.id;
        if(idStr.length === 0){
            setIdValid(false);
            setIdErr('?????? ???????????????.')
        }else if(!idStr.match(idRegex)){
            setIdValid(false);
            setIdErr('20??? ????????? ?????? ?????????, ?????????, ????????? ?????? ???????????????.')
        }else{
            setIdValid(true)
            setIdErr('')
        }
    }

    const idCheck = async() => {
        const idData = {
            'username' : inputs.id,
        }

        try{
            const response = await joinIdValid(idData);
            if(response.FAIL_Message === 'username ????????? ?????????????????? :)'){
                setIdValid(false);
                setIdErr('?????? ???????????????.')
            }else if(response.FAIL_Message === '?????? ?????? ?????? ??????????????????.'){
                setIdValid(false);
                setIdErr('?????? ?????? ?????? ??????????????????.')
            }else if(response.Success === '?????? ??????????????? :)' && inputs.id.match(idRegex)){
                setIdValid(true);
                setIdErr('?????? ??????????????? :)');
            }
        }
        catch(error){
            console.error(error)
        }
    }

    const handlePw = () => {
        handleId();
        const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        const pwStr = inputs.pw;
        
        if(pwStr.length === 0){
            setPwValid(false);
            setPwErr('?????? ???????????????.');
            setPwIconValid(false);
            setPwChkIconValid(false)
        }else if(pwStr.match(pwRegex)){
            setPwValid(true);
            setPwErr('');
            setPwIconValid(true);
            if(inputs.pw !== inputs.pw_chk){
                setPwChkValid(false);
                setPwChkErr('??????????????? ???????????? ????????????.')
                setPwChkIconValid(false);
            }else if(inputs.pw === inputs.pw_chk){
                setPwChkValid(true);
                setPwChkErr('')
                setPwChkIconValid(true);
            }
        }else if(!pwStr.match(pwRegex)){
            setPwValid(false);
            setPwErr('8??? ??????, ?????? ??? ?????????, ??????, ??????????????? ???????????????.');
            setPwIconValid(false);
        }
    }

    const handlePwChk = () => {
        handlePw();
        if(inputs.pw_chk.length === 0){
            setPwChkValid(false);
            setPwChkErr('?????? ???????????????.');
            setPwChkIconValid(false);
        }else if(inputs.pw === '' && inputs.pw_chk !== ''){
            setPwChkValid(false);
            setPwChkErr('??????????????? ???????????? ????????????.');
            setPwChkIconValid(false);
        }else if(inputs.pw_chk !== inputs.pw){
            setPwChkValid(false);
            setPwChkErr('??????????????? ???????????? ????????????');
            setPwChkIconValid(false);
        }else if(inputs.pw !== '' && inputs.pw_chk === inputs.pw){
            setPwChkValid(true);
            setPwChkErr('');
            setPwChkIconValid(true);
        }
    }

    const handleName = () => {
        handlePwChk();
        if(inputs.name.length === 0){
            setNameValid(false);
            setNameErr('?????? ???????????????.');
        }else{
            setNameValid(true);
            setNameErr('');
        }
    }

    const handleNum = () => {
        handleName();
        const num = [inputs.mobile_1, inputs.mobile_2, inputs.mobile_3].join('');
        const numRegex = /([0-9]{10,11})$/;

        if(!num.match(numRegex)){
            setMobileValid(false);
            setMobileErr('????????? ?????? ???????????????.');
        }else if(num.match(numRegex)){
            setMobileValid(true);
            setMobileErr('');
        }
    }

    const handleEmail = () => {
        handleNum();
        const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const email = [inputs.email_1,'@',inputs.email_2].join('');

        if(!email.match(emailReg)){
            setEmailValid(false)
            setEmailErr('????????? ????????? ???????????????.')
        }else if(email.match(emailReg)){
            setEmailValid(true)
            setEmailErr('')
        }
    }

    const handleCompanyNum = () => {
        handleEmail();
        const companyNumStr = inputs.company_num;
        if(companyNumStr.length === 0){
            setCompanyNumValid(false);
            setCompanyNumErr('?????? ???????????????.')
        }else if(!companyNumStr.match(companyNumRegex)){
            setCompanyNumValid(false);
            setCompanyNumErr('?????? 10?????? ??????????????????.')
        }else if(companyNumStr.match(companyNumRegex)){
            setCompanyNumValid(true);
            setCompanyNumErr('')
        }
    }

    const companyNumCheck = async() => {
        const companyNumData = {
            'company_registration_number': inputs.company_num,
        }
        
        try{
            const response = await companyNumVaild(companyNumData);
            if(response.FAIL_Message === 'company_registration_number ????????? ?????????????????? :)'){
                setCompanyNumValid(false);
                setCompanyNumErr('?????? ???????????????.')
            }else if(!inputs.company_num.match(companyNumRegex)){
                setCompanyNumValid(false);
                setCompanyNumErr('?????? 10?????? ??????????????????.')
            }else if(response.FAIL_Message === '?????? ????????? ??????????????????????????????.'){
                setCompanyNumValid(false);
                setCompanyNumErr('?????? ????????? ??????????????????????????????.')
            }else if(response.Success && inputs.company_num.match(companyNumRegex)){
                setCompanyNumValid(true);
                setCompanyNumErr('?????? ????????? ??????????????????????????????.');
            }
        }catch(error){
            console.log(error);
        }
    }

    const handleStoreName  = () => {
        handleCompanyNum();
        if(inputs.store_name.length === 0){
            setStoreNameValid(false);
            setStoreNameErr('?????? ???????????????.');
        }else{
            setStoreNameValid(true);
            setStoreNameErr('');
        }
    }

    const ValidWholeCheck = () =>{
        if(isSelected){
            return (idValid===true && pwValid && pwChkValid && nameValid && mobileValid && emailValid) && isCheck
        }else{
            return (idValid===true && pwValid && pwChkValid && nameValid && mobileValid && emailValid  && companyNumValid=== true && storeNameValid===true) && isCheck
        }
    }

    const JoinCheck = async() => {
        const username = inputs.id;
        const password = inputs.pw;
        const password2 = inputs.pw_chk;
        const phone_number = [inputs.mobile_1, inputs.mobile_2, inputs.mobile_3].join('');
        const name = inputs.name;
        const company_registration_number = inputs.company_num;
        const store_name = inputs.store_name;

        const joinData = {
            username,
            password,
            password2,
            phone_number,
            name,
        };

        const sellerJoinData = {
            username,
            password,
            password2,
            phone_number,
            name,
            company_registration_number,
            store_name,
        }

        if(isSelected){
            try{
                const response = await join(joinData)
                if(response.username){
                    setIdValid(false);
                    setIdErr('?????? ?????? ?????? ??????????????????.');
                }
                if(response.phone_number){
                    setMobileValid(false);
                    setMobileErr('?????? ????????? ??????????????? ?????? ???????????????.');
                }
                if(response.user_type){
                    alert('?????????????????? ??????!')
                    navigate('/login');
                }
            }
            catch(error){
                console.error(error);
            }
        }else{
            try{
                const response = await sellerJoin(sellerJoinData)
                if(response.username){
                    setIdValid(false);
                    setIdErr('?????? ?????? ?????? ??????????????????.');
                }
                if(response.phone_number){
                    setMobileValid(false);
                    setMobileErr('?????? ????????? ??????????????? ?????? ???????????????.');
                }
                if(response.company_registration_number){
                    setCompanyNumValid(false);
                    setCompanyNumErr('?????? ????????? ??????????????????????????????.');
                }
                if(response.store_name){
                    setStoreNameValid(false);
                    setStoreNameErr('?????? ?????????????????? ?????? ???????????????.');
                }
                if(response.status === 201){
                    alert('?????????????????? ??????!');
                    navigate('/login');
                }
            }
            catch(error){
                console.error(error);
            }
        }
    };

    return (
        <SC.ContentSection>
            <Link to={'/'} className='logo_img'>
                <img src={LogoHodu} alt='????????????' />
            </Link>
            <SC.ContentWrapper>
                <SC.MenuUl>
                    <SC.MenuLi 
                        isSelected={isSelected} 
                        onClick={()=>{ 
                            setIsSelected(true);
                    }}>
                        ??????????????????
                    </SC.MenuLi>
                    <SC.MenuLi 
                        isSelected={!isSelected} 
                        onClick={()=>{ 
                            setIsSelected(false);
                    }}>
                        ??????????????????
                    </SC.MenuLi>
                </SC.MenuUl>
                
                <SC.InputWrapper>
                    <div>
                        <S.IncludeBtnDiv>
                            <S.InputDiv>
                                <S.JoinTitle htmlFor='id'>?????????</S.JoinTitle>
                                <S.Input 
                                    type='text' id='id' maxLength='20' onChange={onChange} value={id} valid={idValid} ref={idInput} name='id' onKeyUp={handleId}/>
                            </S.InputDiv>
                            <S.CheckBtn type='button'onClick={idCheck}>????????????</S.CheckBtn>
                        </S.IncludeBtnDiv>
                        <SC.Err valid={idValid} margin={12}>{idErr}</SC.Err>
                        <S.InputDiv>
                            <S.JoinTitle htmlFor='pw'>????????????</S.JoinTitle>
                            <S.PwDiv valid={pwValid}>
                                <S.PwInput type='password' id='pw' maxLength='20' name='pw' onChange={onChange} value={pw} valid={pwValid} ref={pwInput} onKeyUp={handlePw}/>
                                <S.CheckIcon valid={pwIconValid}/>
                            </S.PwDiv>
                        </S.InputDiv>
                        <SC.ErrMsg valid={pwValid} margin={12}>{pwErr}</SC.ErrMsg>
                        
                        <S.InputDiv>
                            <S.JoinTitle htmlFor='pw_chk'>???????????? ?????????</S.JoinTitle>
                            <S.PwDiv valid={pwChkValid}>
                                <S.PwInput type='password' id='pw_chk' maxLength='20'
                                name='pw_chk' onChange={onChange} value={pw_chk} valid={pwChkValid} onKeyUp={handlePwChk}/>
                                <S.CheckIcon valid={pwChkIconValid}/>
                            </S.PwDiv>
                        </S.InputDiv>
                        <SC.ErrMsg valid={pwChkValid} margin={12}>{pwChkErr}</SC.ErrMsg>
                    </div>
                    

                    <S.UserInfoDiv>
                        <S.InputDiv>
                            <S.JoinTitle htmlFor='name'>??????</S.JoinTitle>
                            <S.Input type='text' id='name' maxLength='5' onChange={onChange} value={name} valid={nameValid} name='name'
                            onKeyUp={handleName}
                            />
                        </S.InputDiv>
                        <SC.ErrMsg valid={nameValid} margin={12}>{nameErr}</SC.ErrMsg>

                        <S.JoinTitle htmlFor='mobile_1'>????????? ??????</S.JoinTitle>
                        <S.GapDiv>
                            <Dropdown id={'mobile_1'} value={mobile_1} onChange={onChange}/>
                            <S.Contact type='tel' id='mobile_2' maxLength='4' onChange={onChange} value={mobile_2} name='mobile_2' onKeyUp={()=>handleNum()}/>
                            <S.Contact type='tel' id='mobile_3' maxLength='4' onChange={onChange} value={mobile_3} name='mobile_3' onKeyUp={()=>handleNum()}/>
                        </S.GapDiv>
                        <SC.ErrMsg valid={mobileValid} margin={12}>{mobileErr}</SC.ErrMsg>


                        <S.JoinTitle htmlFor='email_1'>?????????</S.JoinTitle>
                        <S.GapDiv>
                            <S.EmailInput type='text' id='email_1' onChange={onChange} value={email_1} name='email_1' onKeyUp={handleEmail}/>
                            <S.EmailAdd>@</S.EmailAdd>
                            <S.EmailInput type='text' id='email_2' onChange={onChange} value={email_2} name='email_2' onKeyUp={handleEmail}/>
                        </S.GapDiv>
                        <SC.ErrMsg valid={emailValid} margin={12}>{emailErr}</SC.ErrMsg>
                    </S.UserInfoDiv>
                    { !isSelected && 
                        <S.StoreInfoDiv>
                            <S.IncludeBtnDiv>
                                <S.InputDiv>
                                    <S.JoinTitle htmlFor='company_num'>????????? ????????????</S.JoinTitle>
                                    <S.Input type='text' id='company_num' maxLength='10' onChange={onChange} value={company_num} valid={companyNumValid} name='company_num' onKeyUp={handleCompanyNum}/>
                                </S.InputDiv>
                                <S.CheckBtn type='button' width={122} onClick={companyNumCheck}>??????</S.CheckBtn>
                            </S.IncludeBtnDiv>
                            <SC.Err valid={companyNumValid} margin={12}>{companyNumErr}</SC.Err>
                            <S.InputDiv>
                                <S.JoinTitle htmlFor='store_name'>????????? ??????</S.JoinTitle>
                                <S.Input type='text' id='store_name' maxLength='20' onChange={onChange} value={store_name} valid={storeNameValid} name='store_name'
                                onKeyUp={handleStoreName}
                                />
                            </S.InputDiv>
                            <SC.ErrMsg valid={storeNameValid} margin={12}>{storeNameErr}</SC.ErrMsg>
                    </S.StoreInfoDiv>
                    }
                </SC.InputWrapper>
            </SC.ContentWrapper>

            <S.CheckBoxDiv>
                <CheckBox setIsCheck={setIsCheck} isCheck={isCheck}/>
                <span> ???????????? <S.CheckLink href='#'>????????????</S.CheckLink> ??? <S.CheckLink href='#'>????????????????????????</S.CheckLink>??? ?????? ????????? ??????????????? ???????????????.</span>
            </S.CheckBoxDiv>
            { ValidWholeCheck() ?
            <S.JoinBtn type={'active'} onClick={()=>{JoinCheck()}}>????????????</S.JoinBtn>
            :
            <S.JoinBtn type={'disabled'} disabled>????????????</S.JoinBtn>
            }

        </SC.ContentSection>
    );
};

export default Join;

