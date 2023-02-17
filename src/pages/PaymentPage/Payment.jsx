import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { postOrder } from '../../API/orderApi';
import { getToken } from '../../constants/token';
import DaumPostCode from 'react-daum-postcode';
import Header from '../../components/Header/Header';
import PaymentItem from '../../components/PaymentItem/PaymentItem';
import Price from '../../components/Etc/Price';
import CheckBox from '../../components/Etc/CheckBox';
import ModalPortal from '../../Portal';
import * as S from '../PaymentPage/_style';

const Payment = () => {
    const token = getToken();
    const navigate = useNavigate();

    // 결제 아이템 가져오기
    const location = useLocation();
    const data = location.state.order_data;
    // 총 결제금액 계산

    const total = (array) => {
        const total_result = array.reduce((acc, cur)=>{
            acc = acc+cur;
            return acc;
        },0)
        return total_result;
    }

    const price_arr = data.map(i => i.price * i.quantity);
    const shipping_fee_arr = data.map(i => i.shipping_fee);

    const total_product_price = total(price_arr);
    const total_shipping_fee = total(shipping_fee_arr);

    const total_price = total_product_price + total_shipping_fee ;
    
    // input state
    const [ inputs, setInputs ] = useState({
        orderer : '',
        orderer_mobile_1 : '',
        orderer_mobile_2 : '',
        orderer_mobile_3 : '',
        orderer_email : '',
        receiver : '',
        receiver_mobile_1 : '',
        receiver_mobile_2 : '',
        receiver_mobile_3 : '',
        post_code : '',
        address_1:'',
        address_2:'',
        address_message: '',
        payment_method:'',
    });

    const { orderer, orderer_mobile_1, orderer_mobile_2, orderer_mobile_3, orderer_email, receiver, receiver_mobile_1, receiver_mobile_2, receiver_mobile_3, post_code, address_1, address_2, address_message, payment_method } = inputs ;
    
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value,
        });
    }
    
    // 우편번호 검색 관련
    const [ isOpenPostCode, setIsOpenPostCode ] = useState(false);

    const onCompletePost = (post) => {
        setInputs({
            ...inputs,
            post_code : post.zonecode,
            address_1 : post.buildingName ? post.address + ' ('+ post.buildingName +')' : post.address ,
        })
        setIsOpenPostCode(false);
    }

    const postCodeStyle = {
        width: '450px',
        height: '450px',
    }

    // input값 check
    const [ isCheckAgree, setIsCheckAgree ] = useState(false);
    
    const CheckInputsValid = () => {
        const orderer_mobile = orderer_mobile_1 + orderer_mobile_2 + orderer_mobile_3
        const receiver_mobile = receiver_mobile_1 + receiver_mobile_2 +receiver_mobile_3
        const PhoneReg = /^01(0|1|6|7|8|9)-?([0-9]{3,4})-?([0-9]{4})$/;
        const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if( 
            orderer && 
            orderer_mobile_1 && orderer_mobile_2 && orderer_mobile_3 && 
            !!orderer_mobile.match(PhoneReg) && 
            !!orderer_email.match(emailReg) &&
            receiver && 
            receiver_mobile_1 && receiver_mobile_2 && receiver_mobile_3 && 
            !!receiver_mobile.match(PhoneReg) &&
            post_code && address_1 && address_2 && address_message &&
            payment_method && isCheckAgree 
        ){ 
            return true;
        }else{
            return false;
        }
    }

    // 결제하기 함수
    const postOrderData = async() => {
        const product_id = data[0].product_id;
        const quantity = data[0].quantity;
        const order_kind = data[0].order_kind;
        const receiver_phone_number = [receiver_mobile_1, receiver_mobile_2, receiver_mobile_3].join('');
        const address = address_1+ ' '+ address_2;

        const direct_order_data = {
            product_id,
            quantity,
            order_kind,
            receiver,
            receiver_phone_number,
            address,
            address_message,
            payment_method,
            total_price,
        };

        const cart_order_data = {
            total_price,
            order_kind,
            receiver,
            receiver_phone_number,
            address,
            address_message,
            payment_method, 
        };

        const cart_one_order_data = {
            product_id,
            quantity, 		
            order_kind,
            total_price,   
            receiver,
            receiver_phone_number,
            address,
            address_message,
            payment_method,
        };

            try{
                if(order_kind === 'direct_order'){
                    await postOrder(direct_order_data, token)
                }else if(order_kind === 'cart_order'){
                    await postOrder(cart_order_data, token)
                }else if(order_kind === 'cart_one_order'){
                    postOrder(cart_one_order_data, token)
                }
                alert('주문이 성공적으로 완료되었습니다 !');
                navigate('/');
            }catch(error){
                console.error(error);
            }
        }

    return (
        <>
            <Header/>
            <S.PaymentTitleDiv>
                <S.PaymentHeader>주문/결제하기</S.PaymentHeader>
                <S.MenuUl>
                    <S.MenuLi>상품정보</S.MenuLi>
                    <S.MenuLi>할인</S.MenuLi>
                    <S.MenuLi>배송비</S.MenuLi>
                    <S.MenuLi>상품금액</S.MenuLi>
                </S.MenuUl>
            </S.PaymentTitleDiv>
            <S.ItemUl>
                {data?.map((item) => 
                    <PaymentItem
                        {...item}
                        key={item.product_id}
                    />
                )}
            </S.ItemUl>
            <S.TotalPriceDiv>
                <S.TotalSpan>총 주문금액</S.TotalSpan>
                <Price price={total_price} numsize={24} margin={0} txtsize={24} color={'--red'}/>
            </S.TotalPriceDiv>
            <S.InfoInputDiv>
                <S.InfoTitle>배송정보</S.InfoTitle>
                    <S.BoldHr/>

                <S.InfoSubTitle>주문자 정보</S.InfoSubTitle>
                    <S.BoldHr/>

                <S.InputTitle>이름</S.InputTitle>
                    <S.PaymentInput type='text' maxLength='5' value={orderer} onChange={onChange} name='orderer'/>
                    <S.Hr/>

                <S.InputTitle>휴대폰</S.InputTitle>
                    <S.MobileInput1 type='tel' pattern='01(0|1|6|7|8|9)' maxLength='3' value={orderer_mobile_1} onChange={onChange} name='orderer_mobile_1'/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{3,4}' maxLength='4' value={orderer_mobile_2} onChange={onChange} name='orderer_mobile_2'/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{4}' maxLength='4' value={orderer_mobile_3} onChange={onChange} name='orderer_mobile_3'/>
                    <S.Hr/>

                <S.InputTitle>이메일</S.InputTitle>
                    <S.EmailInput type='email' value={orderer_email} onChange={onChange} name='orderer_email' pattern='[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]*'/>
                    <S.Hr/>

                <S.InfoSubTitle>배송지 정보</S.InfoSubTitle>
                    <S.BoldHr/>

                <S.InputTitle>수령인</S.InputTitle>
                    <S.PaymentInput type='text' maxLength='5' value={receiver} onChange={onChange} name='receiver'/>
                    <S.Hr/>

                <S.InputTitle>휴대폰</S.InputTitle>
                    <S.MobileInput1 type='tel' pattern='01(0|1|6|7|8|9)' maxLength='3' value={receiver_mobile_1} onChange={onChange} name='receiver_mobile_1'/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{3,4}' maxLength='4' value={receiver_mobile_2} onChange={onChange} name='receiver_mobile_2'/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{4}' maxLength='4' value={receiver_mobile_3} onChange={onChange} name='receiver_mobile_3'/>
                    <S.Hr/>

                <S.AddressDiv>
                    <S.AddressTitle>배송주소</S.AddressTitle>
                    <div>
                        <S.PostNumInput value={post_code} name='post_code' placeholder='우편번호' disabled/>
                        <S.PostNumSearchBtn onClick={()=>{setIsOpenPostCode(!isOpenPostCode)}}>우편번호 조회</S.PostNumSearchBtn>
                        <S.AddressInput placeholder='주소' value={address_1} name='address_1' disabled/>
                        <S.AddressInput placeholder='상세주소' value={address_2} onChange={onChange} name='address_2'/>
                    </div>

                    {isOpenPostCode && 
                        <ModalPortal>
                            <S.ModalBg isOpenPostCode={isOpenPostCode}>
                                <S.PostCodeContent>
                                    <S.PostCodeTitle>주소찾기</S.PostCodeTitle>
                                    <S.DeleteBtn onClick={()=>{setIsOpenPostCode(false)}}/>
                                    <DaumPostCode style={postCodeStyle} autoClose onComplete={onCompletePost}/>
                                </S.PostCodeContent>
                            </S.ModalBg>
                        </ModalPortal>
                    }

                </S.AddressDiv>
                    <S.Hr/>
                    <S.InputTitle>배송 메시지</S.InputTitle>
                    <S.ShippingMsgInput value={address_message} onChange={onChange} name='address_message'/>
                    <S.Hr/>
            </S.InfoInputDiv>

            <S.PaymentDiv>
                <S.MethodDiv>
                    <S.InfoTitle>결제수단</S.InfoTitle>
                    <S.BoldHr/>
                    <S.MethodUl>
                        <S.MethodItem itemName={'CARD'} content={'신용/체크카드'} onClick={onChange}/>
                        <S.MethodItem itemName={'DEPOSIT'} content={'무통장 입금'} onClick={onChange}/>
                        <S.MethodItem itemName={'PHONE_PAYMENT'} content={'휴대폰 결제'} onClick={onChange}/>
                        <S.MethodItem itemName={'NAVERPAY'} content={'네이버페이'} onClick={onChange}/>
                        <S.MethodItem itemName={'KAKAOPAY'} content={'카카오페이'} onClick={onChange}/>
                    </S.MethodUl>
                    <S.BoldHr/>
                </S.MethodDiv>

                <S.FinalDiv>
                    <S.InfoTitle>최종결제 정보</S.InfoTitle>
                    <S.FinalContentDiv>
                        <S.FinalPriceDiv>
                            <S.FinalInfo title={'상품금액'} price={total_product_price}/>
                            <S.FinalInfo title={'할인금액'} price={'0'}/>
                            <S.FinalInfo title={'배송비'} price={total_shipping_fee}/>
                            <S.Hr/>
                            <S.FinalPriceInfo title={'결제금액'} price={total_price}/>
                        </S.FinalPriceDiv>
                        <S.AgreementDiv>
                            <CheckBox isCheck={isCheckAgree} setIsCheck={setIsCheckAgree}/>
                            <S.AgreementSpan>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</S.AgreementSpan>
                            { CheckInputsValid() ?
                            <S.PaymentBtn type={'active'} onClick={()=>{postOrderData()}}>결제하기</S.PaymentBtn>
                            :
                            <S.PaymentBtn type={'disabled'} disabled>결제하기</S.PaymentBtn>
                            }
                        </S.AgreementDiv>
                    </S.FinalContentDiv>
                </S.FinalDiv>
            </S.PaymentDiv>
        </>
    );
};

export default Payment;