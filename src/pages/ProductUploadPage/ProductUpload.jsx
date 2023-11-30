import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { postProduct, editProduct } from '../../API/sellerApi';
import Header from '../../components/Header/SellerCenterHeader';
import * as S from '../ProductUploadPage/_style';

const ProductUpload = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    
    const [ methodChecked, setMethodChecked ] = useState(true);
    const [ thumbnail, setThumbnail ] = useState('');

    const [ inputs, setInputs ] = useState({
        product_name : '',
        image : '',
        price : '',
        shipping_method : 'PARCEL',
        shipping_fee : '',
        stock : '',
        product_info : '',
    });

    const { product_name, image, price, shipping_method, shipping_fee, stock, product_info } = inputs ;

    useEffect(()=>{
        if(data){
            setInputs({
                product_name : data.product_name,
                price : data.price,
                shipping_method : data.shipping_method === 'DELIVERY' ? 'DELIVERY' : 'PARCEL',
                shipping_fee : data.shipping_fee,
                stock : data.stock,
                product_info : data.product_info,
            });
            setThumbnail(data.image);
            setMethodChecked(data.shipping_method === 'DELIVERY' ? false : true);
        }
    },[data])

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value,
        });
    }

    const handleShippingMethod = (e) => {
        setMethodChecked(!methodChecked);
        onChange(e);
    }

    const onChangeFile = (e) => {
        if (e.target.files !== null) {
                setInputs({
                    ...inputs,
                    image : e.target.files[0],
                });
            setThumbnail(URL.createObjectURL(e.target.files[0]));
            URL.revokeObjectURL(thumbnail);
        }
    }
    
    // post, patch
    const handlePostProduct = async() => {
        const reqData = {
            product_name,
            image,
            price,
            shipping_method,
            shipping_fee : shipping_fee || 0,
            stock,
            product_info,
        };

        try{
            const response = !data ? await postProduct(reqData, token) : await editProduct(reqData, data.product_id, token);
            const product_id = response.data.product_id;
            !data ? navigate(`/product/${product_id}`) : navigate('/sellercenter');
        }catch(error){
            console.error(error);
        }
    }

    const isCommonValid = () => {
        return (
            product_name &&
            product_info &&
            price > 0 &&
            shipping_fee >= 0 &&
            stock > 0
        );
    }

    // 유효성 검사
    const btnValid  = () => {
        if (data) {
            return isCommonValid();
        }
        if (!data && image && shipping_method) {
            return isCommonValid();
        }
        return false;
    }

    return (
        <>
            <Header/>
            <S.TitleDiv>
                <S.Title>상품 등록</S.Title>
            </S.TitleDiv>
            <S.MainDiv>
                <S.CautionDiv>
                    <S.CautionTitle>* 상품 등록 주의사항</S.CautionTitle>
                    <S.CautionContent>
                        - 상품명은 띄어쓰기 포함 최대 20자까지 설정 가능합니다.<br/><br/>
                        - 판매가는 0원으로 설정할 수 없습니다. 정확한 판매가를 기입해주시길 바랍니다.<br/><br/>
                        - 배송방법을 지정하지 않을 경우 택배, 소포, 등기로 등록됩니다.<br/><br/>
                        - 기본 배송비를 0원으로 설정할 경우 무료배송으로 등록됩니다.<br/><br/>
                        - 재고는 0개로 설정할 수 없습니다.<br/><br/>
                        - 상품에 대한 모든 정보를 기입해주시길 바랍니다 :)
                    </S.CautionContent>
                </S.CautionDiv>
                <div>
                    <S.ProductMainInputDiv>
                        <div>
                            <S.InputWrapper>
                                <S.InputTitle>상품 이미지</S.InputTitle>
                                <S.ProductImgDiv>
                                    <S.ProductImg src={thumbnail ? thumbnail : null}/>
                                    <label htmlFor='file'>
                                        <S.ImgUploadBtn />
                                    </label>
                                    <input type='file' id='file' name='image' accept='image/*' onChange={(e)=>{onChangeFile(e)}} style={{display:'none'}}/>
                                </S.ProductImgDiv>
                            </S.InputWrapper>
                        </div>
                        <div>
                            <S.InputWrapper>
                                <S.InputTitle>상품명</S.InputTitle>
                                <S.ProductNameInput name='product_name' value={product_name} onChange={onChange} />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>판매가</S.InputTitle>
                                <S.StyledInput name='price' value={price} onChange={onChange} txt={'원'}/>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>배송방법</S.InputTitle>
                                <S.BtnDiv>
                                    <S.ShippingBtn name='shipping_method' value={'PARCEL'} isFocused={methodChecked} onClick={(e)=>handleShippingMethod(e)} >택배,소포,등기</S.ShippingBtn>
                                    <S.ShippingBtn name='shipping_method' value={'DELIVERY'} isFocused={!methodChecked} onClick={(e)=>handleShippingMethod(e)}>직접배송(화물배달)</S.ShippingBtn>
                                </S.BtnDiv>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>기본 배송비</S.InputTitle>
                                <S.StyledInput name='shipping_fee' value={shipping_fee} onChange={onChange} txt={'원'}/>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>재고</S.InputTitle>
                                <S.StyledInput name='stock' value={stock} onChange={onChange} txt={'개'} />
                            </S.InputWrapper>
                        </div>
                    </S.ProductMainInputDiv>
                    <div>
                        <S.InputWrapper>
                            <S.InputTitle>상품 상세 정보</S.InputTitle>
                            <S.ProductInfoInput name='product_info' value={product_info} onChange={onChange} />
                        </S.InputWrapper>
                    </div>
                </div>
            </S.MainDiv>
            <S.FinalBtnDiv>
                <S.Btn type='white' onClick={()=>{navigate(-1)}}>취소</S.Btn>

                { btnValid()  ?
                    <S.Btn type='green' onClick={handlePostProduct}>저장하기</S.Btn>
                    :
                    <S.Btn type='disabled' disabled>저장하기</S.Btn>
                }

            </S.FinalBtnDiv>
        </>
    );
};

export default ProductUpload;
