import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { postOrder } from '../../API/orderApi';
import DaumPostCode from 'react-daum-postcode';
import Header from '../../components/Header/Header';
import PaymentItem from '../../components/PaymentItem/PaymentItem';
import Price from '../../components/Etc/Price';
import CheckBox from '../../components/Etc/CheckBox';
import ModalPortal from '../../Portal';
import useInput from '../../hooks/useInput';
import { regex } from '../../constants/regex';
import * as S from '../PaymentPage/_style';

const Payment = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    // 결제 아이템 가져오기
    const location = useLocation();
    const data = location.state.order_data;

    // inputs
    const orderer = useInput('', null, 'orderer');
    const orderer_mobile_1 = useInput('', null, 'orderer_mobile_1');
    const orderer_mobile_2 = useInput('', null, 'orderer_mobile_2');
    const orderer_mobile_3 = useInput('', null, 'orderer_mobile_3');
    const orderer_email = useInput('', null, 'orderer_email');
    const receiver_name = useInput('', null, 'receiver_name');
    const receiver_mobile_1 = useInput('', null, 'receiver_mobile_1');
    const receiver_mobile_2 = useInput('', null, 'receiver_mobile_2');
    const receiver_mobile_3 = useInput('', null, 'receiver_mobile_3');
    const post_code = useInput('', null, 'post_code');
    const address_1 = useInput('', null, 'address_1');
    const address_2 = useInput('', null, 'address_2'); 
    const delivery_message = useInput('', null, 'delivery_message');

    const orderer_mobile = orderer_mobile_1.value + orderer_mobile_2.value + orderer_mobile_3.value;
    const receiver_mobile = receiver_mobile_1.value + receiver_mobile_2.value +receiver_mobile_3.value;

    // 버튼 관련 상태
    const [ payment, setPayment ] = useState('');
    const [ isOpenPostCode, setIsOpenPostCode ] = useState(false);
    const [ isCheckAgree, setIsCheckAgree ] = useState(false);

    // 금액 계산
    const calculateTotal = (array) => array.reduce((acc, cur) => acc+cur, 0);
    const total_product_price = calculateTotal(data.map(i => i.price * i.quantity));
    const total_shipping_fee = calculateTotal(data.map(i => i.shipping_fee));
    const total_price = total_product_price + total_shipping_fee ;
    
    // 결제 수단
    const handlePayment = (e) => {
        setPayment(e.target.value);
    }

    // 우편번호 검색
    const onCompletePost = (post) => {
        post_code.setValue(post.zonecode);
        address_1.setValue(post.buildingName ? post.address + ' ('+ post.buildingName +')' : post.address);
        setIsOpenPostCode(false);
    }

    const postCodeStyle = {
        width: '450px',
        height: '450px',
    }

    // 모든 input 확인 후 버튼 활성화
    const isAllInputsValid = () => {
        const inputs = [
            orderer.value,
            orderer_mobile.match(regex.mobile),
            orderer_email.value.match(regex.email),
            receiver_name.value,
            receiver_mobile.match(regex.mobile),
            post_code && address_1.value && address_2.value && delivery_message.value,
            payment,
            isCheckAgree
        ];

        return inputs.every(input => !!input);
    }

    // 결제하기
    const postOrderData = async() => {
        const product_id = data[0].product_id;
        const quantity = data[0].quantity;
        const order_kind = data[0].order_kind;
        const receiver_phone_number = receiver_mobile;
        const address = address_1.value+ ' '+ address_2.value;
        const address_message = delivery_message.value;
        const receiver = receiver_name.value;
        const payment_method = payment;

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
                await postOrder(direct_order_data, token);
            }
            if(order_kind === 'cart_order'){
                await postOrder(cart_order_data, token);
            }
            if(order_kind === 'cart_one_order'){
                postOrder(cart_one_order_data, token);
            }
            alert('주문이 성공적으로 완료되었습니다 !');
            navigate('/');
        }catch(error){
            console.error(error);
        }
    }

    const handlePostCodeModal = () => {
        setIsOpenPostCode(!isOpenPostCode);
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
                <Price price={total_price} numsize={24} margin={0} txtsize={24} color={'--main'}/>
            </S.TotalPriceDiv>
            <S.InfoInputDiv>
                <S.InfoTitle>배송정보</S.InfoTitle>
                    <S.BoldHr/>

                <S.InfoSubTitle>주문자 정보</S.InfoSubTitle>
                    <S.BoldHr/>

                <S.InputTitle>이름</S.InputTitle>
                    <S.PaymentInput type='text' maxLength='5' {...orderer}/>
                    <S.Hr/>

                <S.InputTitle>휴대폰</S.InputTitle>
                    <S.MobileInput1 type='tel' pattern='01(0|1|6|7|8|9)' maxLength='3' {...orderer_mobile_1}/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{3,4}' maxLength='4' {...orderer_mobile_2}/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{4}' maxLength='4' {...orderer_mobile_3}/>
                    <S.Hr/>

                <S.InputTitle>이메일</S.InputTitle>
                    <S.EmailInput type='email' pattern={regex.email} {...orderer_email}/>
                    <S.Hr/>

                <S.InfoSubTitle>배송지 정보</S.InfoSubTitle>
                    <S.BoldHr/>

                <S.InputTitle>수령인</S.InputTitle>
                    <S.PaymentInput type='text' maxLength='5' {...receiver_name}/>
                    <S.Hr/>

                <S.InputTitle>휴대폰</S.InputTitle>
                    <S.MobileInput1 type='tel' pattern='01(0|1|6|7|8|9)' maxLength='3' {...receiver_mobile_1}/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{3,4}' maxLength='4' {...receiver_mobile_2}/><S.Hyphen/>
                    <S.MobileInput type='tel' pattern='[0-9]{4}' maxLength='4' {...receiver_mobile_3}/>
                    <S.Hr/>

                <S.AddressDiv>
                    <S.AddressTitle>배송주소</S.AddressTitle>
                    <div>
                        <S.PostNumInput placeholder='우편번호' {...post_code} disabled/>
                        <S.PostNumSearchBtn onClick={handlePostCodeModal}>우편번호 조회</S.PostNumSearchBtn>
                        <S.AddressInput placeholder='주소' {...address_1} disabled/>
                        <S.AddressInput placeholder='상세주소' {...address_2}/>
                    </div>

                    {isOpenPostCode && 
                        <ModalPortal>
                            <S.ModalBg isOpenPostCode={isOpenPostCode}>
                                <S.PostCodeContent>
                                    <S.PostCodeTitle>주소찾기</S.PostCodeTitle>
                                    <S.DeleteBtn onClick={handlePostCodeModal}/>
                                    <DaumPostCode style={postCodeStyle} autoClose onComplete={onCompletePost}/>
                                </S.PostCodeContent>
                            </S.ModalBg>
                        </ModalPortal>
                    }

                </S.AddressDiv>
                    <S.Hr/>
                    <S.InputTitle>배송 메시지</S.InputTitle>
                    <S.ShippingMsgInput {...delivery_message}/>
                    <S.Hr/>
            </S.InfoInputDiv>

            <S.PaymentDiv>
                <S.MethodDiv>
                    <S.InfoTitle>결제수단</S.InfoTitle>
                    <S.BoldHr/>
                    <S.MethodUl>
                        <S.MethodItem itemName={'CARD'} content={'신용/체크카드'} onClick={handlePayment}/>
                        <S.MethodItem itemName={'DEPOSIT'} content={'무통장 입금'} onClick={handlePayment}/>
                        <S.MethodItem itemName={'PHONE_PAYMENT'} content={'휴대폰 결제'} onClick={handlePayment}/>
                        <S.MethodItem itemName={'NAVERPAY'} content={'네이버페이'} onClick={handlePayment}/>
                        <S.MethodItem itemName={'KAKAOPAY'} content={'카카오페이'} onClick={handlePayment}/>
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
                            { isAllInputsValid() ?
                                <S.PaymentBtn type={'active'} onClick={postOrderData}>결제하기</S.PaymentBtn>
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