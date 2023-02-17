import React,{ useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetail } from '../../API/productApi';
import { getCart, postCart } from '../../API/cartApi';
import { getToken } from '../../constants/token'
import Loading from '../../components/Loading/Loading';
import { BtnTab } from '../Etc/Button';
import AmountBtn from '../Etc/AmountBtn';
import Price from '../Etc/Price';
import Modal from '../Etc/Modal';
import * as S from '../DetailContent/_style';

const DetailContent = () => {
    let { product_id } = useParams();

    const navigate = useNavigate();
    const token = getToken();
    
    const [ detail, setDetail ] = useState({});
    const [ cartLists, setCartLists ] = useState({});
    const [ isOpenCartModal, setIsOpenCartModal ] = useState(false);
    const [ isOpenLoginModal , setIsOpenLoginModal ] = useState(false);

    const [ loading, setLoading ] = useState(null);

    useEffect(()=>{
        setLoading(true);

        getDetail(product_id).then(res => {
            setDetail(res);
            setLoading(false);
        })
        getCart(token).then(res => {
            setCartLists(res)
        })

    },[])

    const [ num, setNum ] = useState('1');
    const [ isMax, setIsMax ] = useState(false);
    
    const handleMinus = () => {
        if(parseInt(num) === 1){
            alert('최소 수량은 1개 입니다.')
        }else if(parseInt(num) > 1){
            setNum(parseInt(num)-1);
            setIsMax(false);
        }
    }
    
    const handlePlus = () => {
        if(parseInt(num) === detail.stock){
            setIsMax(true);
        }else if(parseInt(num) < detail.stock){
            setNum(parseInt(num)+1);
        }
    }

    const turnPaymentPage = () => {
        if(token){
            navigate('/payment', {
                state : { 
                    order_data : 
                    [{
                        product_id : product_id,
                        image : detail?.image,
                        store_name : detail?.store_name,
                        product_name : detail?.product_name,
                        quantity : num,
                        shipping_fee : detail?.shipping_fee,
                        price : detail?.price,
                        order_kind : 'direct_order',
                    }]
                },
            });
        }else{
            setIsOpenLoginModal(true);
        }
    }

    const postItemToCart = () => {
        if(token){
            const addCartData = {
                'product_id': product_id,
                'quantity': num,
                'check' : cartLists?.results.find(v => v.product_id === parseInt(product_id)),
            };
    
            if(addCartData.check){
                setIsOpenCartModal(true);
            }else{
                try{
                    postCart(addCartData,token);
                    navigate('/cart');
                }catch(error){
                    console.error(error);
                }
            }
        }else{
            setIsOpenLoginModal(true);
        }
    }

    const returnBtnDiv = () => {
        if(localStorage.getItem('user_type') === 'SELLER'){
            return (
                <>
                    <S.OrderBtn type={'disabled'} disabled>바로 구매</S.OrderBtn>
                    <S.CartBtn type={'disabled'} disabled>장바구니</S.CartBtn>
                </>
            )
        }else if(localStorage.getItem('user_type') === 'BUYER' && detail.stock === 0){
            return (
                <>
                    <S.OrderBtn type={'disabled'} disabled>품절</S.OrderBtn>
                    <S.CartBtn type={'disabled'} disabled>품절</S.CartBtn>
                </>
            )
        }else{
            return (
                <>
                    <S.OrderBtn type={'green'} onClick={()=>{turnPaymentPage()}}>바로 구매</S.OrderBtn>
                    <S.CartBtn type={'dark'} onClick={()=>{postItemToCart()}}>장바구니</S.CartBtn>
                </>
            )
        }
    }

    return (
        <>
            <S.DetailDiv> 
                { loading && <Loading/> }
                <S.DetailImg src={detail.image} alt={detail.product_name} />
                <div>
                    <S.StoreName>{detail.store_name}</S.StoreName> 
                    <S.ProductName>{detail.product_name}</S.ProductName>
                    <Price price={parseInt(detail.price)} numsize={36} margin={2} txtsize={18} color={'--black'}/>
                    { detail.shipping_fee !== 0 ? 
                    <S.Shipping>배송비 {detail.shipping_fee}원</S.Shipping>
                    :
                    <S.Shipping>무료배송</S.Shipping>
                    }
                    <S.Line/>
                    { localStorage.getItem('user_type') === 'SELLER' ?
                        <AmountBtn num={1}/>
                        :
                        <AmountBtn num={num} isMax={isMax} handleMinus={handleMinus} handlePlus={handlePlus}/>
                    }
                    <S.Line2/>

                    <S.TotalDiv>
                        <S.TotalPrice>총 상품 금액</S.TotalPrice>
                        <S.PriceDiv>
                            <S.Amount>총 수량 <S.AmountSpan>{num}</S.AmountSpan>개</S.Amount>
                            <Price price={parseInt(detail.price)*num} numsize={36} margin={2} txtsize={18} color={'--green'}/>
                        </S.PriceDiv>
                    </S.TotalDiv>
                            
                    <S.BtnDiv>
                    {returnBtnDiv()}
                    </S.BtnDiv>

                        <Modal 
                            isOpenModal={isOpenCartModal}
                            setIsOpenModal={setIsOpenCartModal}
                            padding_top={50} 
                            content={<p>이미 장바구니에 있는 상품입니다.<br/>장바구니로 이동하시겠습니까?</p>}
                            whiteBtn={'아니오'} 
                            greenBtn={'예'}
                            onClickYes={()=>{navigate('/cart')}}
                        />
                        <Modal 
                            isOpenModal={isOpenLoginModal}
                            setIsOpenModal={setIsOpenLoginModal}
                            padding_top={50} 
                            content={<p>로그인이 필요한 서비스입니다.<br/>로그인 하시겠습니까?</p>}
                            whiteBtn={'아니오'} 
                            greenBtn={'예'}
                            onClickYes={()=>{navigate('/login')}}
                        />
                </div>
            </S.DetailDiv>
            <S.TabDiv>
                <BtnTab type={'disabled'}>버튼</BtnTab>
                <BtnTab type={'disabled'}>리뷰</BtnTab>
                <BtnTab type={'disabled'}>Q&A</BtnTab>
                <BtnTab type={'disabled'}>반품/교환정보</BtnTab>
            </S.TabDiv>
        </>
    );
};

export default DetailContent;
