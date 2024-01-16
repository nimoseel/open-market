import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { postProduct, editProduct } from '../../../API/sellerApi';
import Header from '../../../components/common/Header/SellerCenterHeader';
import useInput from '../../../hooks/useInput';
import * as S from '../ProductUploadPage/_style';

const ProductUpload = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    const [methodChecked, setMethodChecked] = useState(true);
    const [thumbnail, setThumbnail] = useState('');

    const [image, setImage] = useState('');
    const [shipping_method, setShipping_method] = useState('PARCEL');

    const product_name = useInput('', null, 'product_name');
    const price = useInput('', null, 'price');
    const shipping_fee = useInput('', null, 'shipping_fee');
    const stock = useInput('', null, 'stock');
    const product_info = useInput('', null, 'product_info');

    useEffect(() => {
        if (data) {
            product_name.setValue(data.product_name);
            price.setValue(data.price);
            shipping_fee.setValue(data.shipping_fee);
            stock.setValue(data.stock);
            product_info.setValue(data.product_info);
            setShipping_method(
                data.shipping_method === 'DELIVERY' ? 'DELIVERY' : 'PARCEL',
            );
            setImage(data.image);
            setThumbnail(data.image);
            setMethodChecked(
                data.shipping_method === 'DELIVERY' ? false : true,
            );
        } else {
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleShippingMethod = (e) => {
        setMethodChecked(!methodChecked);
        setShipping_method(e.target.value);
    };

    const onChangeFile = (e) => {
        if (e.target.files !== null) {
            const file = e.target.files[0];
            setImage(e.target.files[0]);
            const thumbnailUrl = URL.createObjectURL(file);
            setThumbnail(thumbnailUrl);

            if (thumbnail) {
                URL.revokeObjectURL(thumbnail);
            }
        }
    };

    // post, patch
    const reqData = {
        product_name: product_name.value,
        price: price.value,
        shipping_method: shipping_method,
        shipping_fee: shipping_fee.value || 0,
        stock: stock.value,
        product_info: product_info.value,
    };

    const handlePostProduct = async () => {
        Object.assign(reqData, { image });

        try {
            const response = await postProduct(reqData, token);
            const product_id = response.data.product_id;
            navigate(`/product/${product_id}`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditProduct = async () => {
        try {
            await editProduct(reqData, data.product_id, token);
            navigate('/sellercenter');
        } catch (error) {
            console.error(error);
        }
    };

    const isCommonValid = () => {
        return (
            product_name.value &&
            product_info.value &&
            price.value > 0 &&
            shipping_fee.value >= 0 &&
            stock.value > 0
        );
    };

    // 유효성 검사
    const btnValid = () => {
        if (data) {
            return isCommonValid();
        }
        if (!data && image && shipping_method) {
            return isCommonValid();
        }
        return false;
    };

    return (
        <>
            <Header />
            <S.TitleDiv>
                <S.Title>상품 등록</S.Title>
            </S.TitleDiv>
            <S.MainDiv>
                <S.CautionDiv>
                    <S.CautionTitle>* 상품 등록 주의사항</S.CautionTitle>
                    <S.CautionContent>
                        - 상품명은 띄어쓰기 포함 최대 20자까지 설정 가능합니다.
                        <br />
                        <br />
                        - 상품 이미지는 수정할 수 없습니다.
                        <br />
                        <br />
                        - 판매가는 0원으로 설정할 수 없습니다. 정확한 판매가를
                        기입해주시길 바랍니다.
                        <br />
                        <br />
                        - 배송방법을 지정하지 않을 경우 택배, 소포, 등기로
                        등록됩니다.
                        <br />
                        <br />
                        - 기본 배송비를 0원으로 설정할 경우 무료배송으로
                        등록됩니다.
                        <br />
                        <br />
                        - 재고는 0개로 설정할 수 없습니다.
                        <br />
                        <br />- 상품에 대한 모든 정보를 기입해주시길 바랍니다 :)
                    </S.CautionContent>
                </S.CautionDiv>
                <div>
                    <S.ProductMainInputDiv>
                        <div>
                            <S.InputWrapper>
                                <S.InputTitle>상품 이미지</S.InputTitle>
                                <S.ProductImgDiv>
                                    <S.ProductImg
                                        src={thumbnail ? thumbnail : null}
                                    />
                                    <label htmlFor="file">
                                        <S.ImgUploadBtn />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={onChangeFile}
                                        style={{ display: 'none' }}
                                    />
                                </S.ProductImgDiv>
                            </S.InputWrapper>
                        </div>
                        <S.InfoInputsDiv>
                            <S.InputWrapper>
                                <S.InputTitle>상품명</S.InputTitle>
                                <S.ProductNameInput {...product_name} />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>판매가</S.InputTitle>
                                <S.StyledInput {...price} txt={'원'} />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>배송방법</S.InputTitle>
                                <S.BtnDiv>
                                    <S.ShippingBtn
                                        name="shipping_method"
                                        value={'PARCEL'}
                                        isFocused={methodChecked}
                                        onClick={handleShippingMethod}
                                    >
                                        택배,소포,등기
                                    </S.ShippingBtn>
                                    <S.ShippingBtn
                                        name="shipping_method"
                                        value={'DELIVERY'}
                                        isFocused={!methodChecked}
                                        onClick={handleShippingMethod}
                                    >
                                        직접배송(화물배달)
                                    </S.ShippingBtn>
                                </S.BtnDiv>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>기본 배송비</S.InputTitle>
                                <S.StyledInput {...shipping_fee} txt={'원'} />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputTitle>재고</S.InputTitle>
                                <S.StyledInput {...stock} txt={'개'} />
                            </S.InputWrapper>
                        </S.InfoInputsDiv>
                    </S.ProductMainInputDiv>
                    <div>
                        <S.InputWrapper>
                            <S.InputTitle>상품 상세 정보</S.InputTitle>
                            <S.ProductInfoInput {...product_info} />
                        </S.InputWrapper>
                    </div>
                </div>
            </S.MainDiv>
            <S.FinalBtnDiv>
                <S.Btn
                    type="white"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    취소
                </S.Btn>
                {btnValid() ? (
                    <S.Btn
                        type="green"
                        onClick={data ? handleEditProduct : handlePostProduct}
                    >
                        저장하기
                    </S.Btn>
                ) : (
                    <S.Btn type="disabled" disabled>
                        저장하기
                    </S.Btn>
                )}
            </S.FinalBtnDiv>
        </>
    );
};

export default ProductUpload;
