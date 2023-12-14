import styled from 'styled-components';
import { BtnMS } from '../../components/Etc/Button';
import ImgUploadIcon from '../../assets/icon-img.svg';

export const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 1280px;
    height: 130px;
    margin: 0 auto;
    align-items: center;

    @media screen and (max-width: 768px) {
        max-width: 540px;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: var(--bold);
    line-height: 44px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    gap: 80px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 540px;
        gap: 40px;
    }
`

export const InputTitle = styled.p`
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 20.03px;
    color: var(--dark-gray);
`

export const CautionDiv = styled.div`
    min-width: 250px;

    @media screen and (max-width: 768px) {
        width: 540px;
    }
`

export const CautionTitle = styled(InputTitle)`
    color: var(--red);
    margin-bottom: 10px;
`

export const CautionContent = styled.p`
    height: fit-content;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    font-weight: var(--regular);
    line-height: 17.53px;
    background-color: #FFEFE8;
`

export const InfoInputsDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const InputDiv = styled.div`
    display: flex;
    align-items: center;
    width: 220px;
    height: 54px;
    border: 1px solid var(--disabled);
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 250px;
    }
`

const CommonInput = styled.input`
    border: none;
    width: 166px;
    padding-left: 16px;
    font-size: 16px;

    @media screen and (max-width: 768px) {
        width: 195px;
    }
`

const InputSpan = styled.span`
    display: inline-block;
    width: 54px;
    height: 54px;
    text-align: center;
    line-height: 54px;
    background-color: var(--disabled);
    color: var(--white);
`

export const StyledInput = ({name, value, onChange, txt}) =>{
    return (
        <InputDiv>
            <CommonInput name={name} value={value} onChange={onChange}/>
            <InputSpan>{txt}</InputSpan>
        </InputDiv>
    )
}

const ProductNameInputDiv = styled(InputDiv)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 17px 16px;

    @media screen and (max-width: 768px) {
        width: 250px;
    }
`
const ExtendCommonInput = styled(CommonInput)`
    width: 400px;
    padding: 0;
`
const NumberSpan = styled.span`
    font-size: 14px;
    font-weight: var(--regular);
    line-height: 18px;
    color: var(--disabled);
`

export const ProductNameInput = ({name, value, onChange}) => {
    return (
        <ProductNameInputDiv>
            <ExtendCommonInput name={name} value={value} onChange={onChange} maxLength={20}/>
            <NumberSpan>{value.length}/20</NumberSpan>
        </ProductNameInputDiv>
    )
}

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    gap: 10px;
`

export const BtnDiv = styled.div`
    display: flex;
    gap: 10px;
`

export const Btn = styled(BtnMS)`
    width: 200px;

    &:focus{
        border-color: var(--disabled);
    }
`

export const ShippingBtn = styled(BtnMS)`
    width: 220px;
    border: ${(props) => props.isFocused ? 'none': '1px solid var(--disabled)'};
    background-color: var(${(props) => props.isFocused ? '--main': '--white'});
    color: var(${(props) => props.isFocused ? '--white': '--dark-gray'});

    &:focus{
        border: ${(props) => props.isFocused ? 'none': '1px solid var(--disabled)'};
    }
    
    @media screen and (max-width: 768px) {
        width: 120px;
        font-size: 14px;
    }
`

export const ProductImgDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 454px;
    height: 454px;
    background-color: var(--disabled);

    @media screen and (max-width: 768px) {
        width: 250px;
        height: 250px;
    }
`

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ImgUploadBtn = styled.div`
    position: absolute;
    top: 202px;
    left: 202px;
    width: 50px;
    height: 50px;
    border: none;
    background-image: url(${ImgUploadIcon});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        top: 100px;
        left: 100px;
    }
`

export const FinalBtnDiv = styled(BtnDiv)`
    display: flex;
    justify-content: flex-end;
    max-width: 1280px;
    margin: 50px auto;

    @media screen and (max-width: 768px) {
        width: 540px;
    }
`

export const ProductMainInputDiv = styled.div`
    display: flex;
    margin-bottom: 40px;
    gap: 40px;

    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
    }
`

export const ProductInfoInput = styled.textarea`
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    padding: 16px;
    border: 1px solid var(--disabled);
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    
    &:focus{
        outline: none;
    }
`