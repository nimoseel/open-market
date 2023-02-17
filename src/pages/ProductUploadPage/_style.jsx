import styled from 'styled-components';
import { BtnMS } from '../../components/Etc/Button';
import ImgUploadIcon from '../../assets/icon-img.svg';

export const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 1280px;
    height: 130px;
    margin: 0 auto;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 36px;
    line-height: 44px;
    font-weight: var(--bold);
`

export const MainDiv = styled.div`
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 80px;
`

export const InputTitle = styled.p`
    color: var(--dark-gray);
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 20.03px;
`

export const CautionDiv = styled.div`
    width: 320px;
`

export const CautionTitle = styled(InputTitle)`
    color: var(--red);
    margin-bottom: 10px;
`

export const CautionContent = styled.p`
    width: 100%;
    height: fit-content;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    font-weight: var(--regular);
    line-height: 17.53px;
    background-color: #FFEFE8;
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
`

const CommonInput = styled.input`
    border: none;
    width: 166px;
    font-size: 16px;
    padding-left: 16px;
`

const InputSpan = styled.span`
    width: 54px;
    height: 54px;
    display: inline-block;
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
    padding: 17px 16px;
    width: 450px;
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
    gap: 10px;
    margin-bottom: 16px;
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
    background-color: var(${(props) => props.isFocused ? '--green': '--white'});
    color: var(${(props) => props.isFocused ? '--white': '--dark-gray'});

    border: ${(props) => props.isFocused ? 'none': '1px solid var(--disabled)'};
    &:focus{
        border: ${(props) => props.isFocused ? 'none': '1px solid var(--disabled)'};
    }
    
`

export const ProductImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 454px;
    height: 454px;
    position: relative;
    background-color: var(--disabled);
`

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ImgUploadBtn = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${ImgUploadIcon});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 202px;
    left: 202px;
    border: none;
    cursor: pointer;
`

export const FinalBtnDiv = styled(BtnDiv)`
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    margin-bottom: 50px;
`

export const ProductMainInputDiv = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
`

export const ProductInfoInput = styled.textarea`
    width: 100%;
    height: 200px;
    border: 1px solid var(--disabled);
    border-radius: 5px;
    padding: 16px;
    box-sizing: border-box;
    font-size: 16px;
    resize: none;
    &:focus{
        outline: none;
    }
`