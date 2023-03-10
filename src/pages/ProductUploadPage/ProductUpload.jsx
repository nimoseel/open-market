import React,{ useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { postProduct, editProduct } from '../../API/sellerApi';
import { getToken } from '../../constants/token'
import SellerHeader from '../../components/Header/SellerHeader';
import * as S from '../ProductUploadPage/_style';

const ProductUpload = () => {
    const token = getToken();
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
            shipping_fee,
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

    // ????????? ??????
    const btnValid  = () => {
        const commonValid = 
            product_name && product_info && 
            price && shipping_fee && stock && 
            price > 0 && shipping_fee >= 0 && stock > 0

        if(data && commonValid){
            return true;
        }else if(!data && image && shipping_method && commonValid){ 
            return true;
        }else{
            return false;
        }
    }

    return (
        <>
            <SellerHeader/>
            <S.TitleDiv>
                <S.Title>?????? ??????</S.Title>
            </S.TitleDiv>
            <S.MainDiv>
                <S.CautionDiv>
                    <S.CautionTitle>* ?????? ?????? ????????????</S.CautionTitle>
                    <S.CautionContent>
                        - ???????????? ???????????? ?????? ?????? 20????????? ?????? ???????????????.<br/><br/>
                        - ???????????? 0????????? ????????? ??? ????????????. ????????? ???????????? ?????????????????? ????????????.<br/><br/>
                        - ??????????????? ???????????? ?????? ?????? ??????, ??????, ????????? ???????????????.<br/><br/>
                        - ?????? ???????????? 0????????? ????????? ?????? ?????????????????? ???????????????.<br/><br/>
                        - ????????? 0?????? ????????? ??? ????????????.<br/><br/>
                        - ????????? ?????? ?????? ????????? ?????????????????? ???????????? :)
                    </S.CautionContent>
                </S.CautionDiv>
                <div>
                    <S.ProductMainInputDiv>
                        <div>
                            <S.InputWrapper>
                                <S.InputTitle>?????? ?????????</S.InputTitle>
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
                                <S.InputTitle>?????????</S.InputTitle>
                                <S.ProductNameInput name='product_name' value={product_name} onChange={onChange} />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>?????????</S.InputTitle>
                                <S.StyledInput name='price' value={price} onChange={onChange} txt={'???'}/>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>????????????</S.InputTitle>
                                <S.BtnDiv>
                                    <S.ShippingBtn name='shipping_method' value={'PARCEL'} isFocused={methodChecked} onClick={(e)=>handleShippingMethod(e)} >??????,??????,??????</S.ShippingBtn>
                                    <S.ShippingBtn name='shipping_method' value={'DELIVERY'} isFocused={!methodChecked} onClick={(e)=>handleShippingMethod(e)}>????????????(????????????)</S.ShippingBtn>
                                </S.BtnDiv>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>?????? ?????????</S.InputTitle>
                                <S.StyledInput name='shipping_fee' value={shipping_fee} onChange={onChange} txt={'???'}/>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>??????</S.InputTitle>
                                <S.StyledInput name='stock' value={stock} onChange={onChange} txt={'???'} />
                            </S.InputWrapper>
                        </div>
                    </S.ProductMainInputDiv>
                    <div>
                        <S.InputWrapper>
                            <S.InputTitle>?????? ?????? ??????</S.InputTitle>
                            <S.ProductInfoInput name='product_info' value={product_info} onChange={onChange} />
                        </S.InputWrapper>
                    </div>
                </div>
            </S.MainDiv>
            <S.FinalBtnDiv>
                <S.Btn type='white' onClick={()=>{navigate(-1)}}>??????</S.Btn>

                { btnValid()  ?
                    <S.Btn type='green' onClick={()=>{handlePostProduct()}}>????????????</S.Btn>
                    :
                    <S.Btn type='disabled' disabled>????????????</S.Btn>
                }

            </S.FinalBtnDiv>
        </>
    );
};

export default ProductUpload;
