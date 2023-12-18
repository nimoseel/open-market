import styled from 'styled-components';
import { BtnS, BtnL } from '../../../components/Etc/Button';
import Price from '../../../components/Etc/Price';
import DelIcon from '../../../assets/icon-delete.svg';

export const PaymentTitleDiv = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto 16px;
    text-align: center;
`

export const PaymentHeader = styled.h1`
    display: inline-block;
    margin: 54px 0 52px;
    font-weight: var(--bold);
    font-size: 36px;
    line-height: 44px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`

export const MenuUl = styled.ul`
    display: flex;
    width: 100%;
    height: 60px;
    padding: 19px 0 18px;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 17px;
    line-height: 22.54px;
    background-color: var(--menu);
`

export const ItemUl = styled.ul`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 500px;
    }
`

export const TotalPriceDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 14px;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 500px;
    }
`

export const TotalSpan = styled.span`
    margin-right: 10px;
    font-weight: var(--semi-bold);
    font-size: 18px;
    line-height: 22.54px;
`

export const InfoInputDiv = styled.div`
    width: 1280px;
    margin: 96px auto 70px;    

    @media screen and (max-width: 768px) {
        width: 500px;
    }
`

export const InfoTitle = styled.h2`
    margin-bottom: 18px;
    font-weight: var(--semi-bold);
    font-size: 24px;
    line-height: 30.05px;
`

export const InfoSubTitle = styled.h3`
    margin: 40px 0 8px;
    font-weight: var(--semi-bold);
    font-size: 18px;
    line-height: 22.54px;
`

export const InputTitle = styled.p`
    display: inline-block;
    width: 170px;
    margin: 18px 0;
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 20.03px;

    @media screen and (max-width: 768px) {
        width: 120px;
    }
`

export const AddressTitle = styled(InputTitle)`
    margin-bottom: 114px;
`

export const AddressDiv = styled.div`
    display: flex;
    height: 152px;
`

// <hr/>
export const Hr = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--disabled);
`

export const BoldHr = styled(Hr)`
    height: 2px;

    @media screen and (max-width: 768px) {
        max-width: 500px;
    }
`

// input
export const PaymentInput = styled.input`
    display: inline-block;
    width: 100%;
    max-width: 334px;
    height: 40px;
    margin: 8px 0;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid var(--disabled);

    @media screen and (max-width: 768px) {
        max-width: 234px;
    }
`

export const MobileInput1 = styled(PaymentInput)`
    width: 80px;
    text-align: center;
    &:invalid {
        border: 1px solid var(--red);
}
`
export const MobileInput = styled(MobileInput1)`
    width: 100px;
`

export const EmailInput = styled(PaymentInput)`
    &:invalid {
        border: 1px solid var(--red);
    }
`

export const PostNumInput = styled(PaymentInput)`
    width: 170px;
`

export const AddressInput = styled(PaymentInput)`
    display: block;
    width: 800px;
    margin-top: 0;
`

export const ShippingMsgInput = styled(PaymentInput)`
    max-width: 800px;
    
    @media screen and (max-width: 768px) {
        max-width: 334px;
    }
`

// button
export const PostNumSearchBtn = styled(BtnS)`
    width: 154px;
    margin-left: 10px;
    background-color: var(--main);
`

export const PaymentBtn = styled(BtnL)`
    display: block;
    width: 220px;
    margin: 34px auto 0;
    box-sizing: border-box;
`

// hyphen
const StyleHyphen = styled.span`
    margin: 0 10px;
    font-size: 16px;
    line-height: 20.03px;
`

export const Hyphen = () => {
    return (
        <StyleHyphen>-</StyleHyphen>
    )
}

// 결제수단
export const PaymentDiv = styled.div`
    display: flex;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        max-width: 500px;
        flex-direction: column;
    }
`

export const MethodDiv = styled.div`
    width: 760px;
`

export const MethodUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`

const MethodLi = styled.li`
    display: flex;
    margin: 18px 0;
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 20.03px;
    align-items: flex-end;
    gap: 10px;

    @media screen and (max-width: 768px) {
        margin: 8px 0;
    }
`

export const MethodInput = styled.input`
    width: 20px;
    height: 20px;
    color: 2px solid var(--disabled);
`

export const MethodItem = ({itemName,content, onClick}) => {
    return (
        <MethodLi onClick={onClick}>
            <MethodInput type='radio' id={itemName} name='payment_method' value={itemName}/>
            <label htmlFor={itemName}>{content}</label>
        </MethodLi>
    )
}

// 최종결제 정보
export const FinalDiv = styled.div`
    width: 480px;
    margin-left: 40px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        width: 500px;
        margin-top: 70px;
    }
`

export const FinalContentDiv = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 100px;
    box-sizing: border-box;
    border: 2px solid var(--main);
    border-radius: 10px;
`

export const FinalPriceDiv = styled.div`
    padding: 30px 28px 0 ;
`

const FinalInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 23px;
    margin-bottom: 12px;
    align-items: center;
`

const FinalInfoP = styled.p`
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 20.03px;
`

const FinalPriceInfoDiv = styled(FinalInfoDiv)`
    height: 74px;
    margin-bottom: 0;
`

export const FinalInfo = ({title, price}) => {
    return (
        <FinalInfoDiv>
            <FinalInfoP>{`- ${title}`}</FinalInfoP>
            <div>
                <Price price={price} numsize={18} margin={4} txtsize={14} color={'--black'}/>
            </div>
        </FinalInfoDiv>
    )
}

export const FinalPriceInfo = ({title, price}) => {
    return (
        <FinalPriceInfoDiv>
            <FinalInfoP>{`- ${title}`}</FinalInfoP>
            <div>
                <Price price={price} numsize={24} margin={0} txtsize={24} color={'--main'}/>
            </div>
        </FinalPriceInfoDiv>
    )
}

export const AgreementDiv = styled.div`
    padding: 30px 30px 32px;
    box-sizing: border-box;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--menu);
`

export const AgreementSpan = styled.span`
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 20.03px;
`

export const PostCodeContent = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid var(--disabled);
    transform: translate(-50%, -50%);
    background-color: var(--white);
`

export const PostCodeTitle = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid var(--disabled);
    line-height: 50px;
    text-align: center;
`

export const DeleteBtn = styled.button`
    position: absolute;
    top: 14px;
    right: 18px;
    width: 22px;
    height: 22px;
    background: url(${DelIcon}) no-repeat;
`

export const ModalBg = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 150;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
    visibility: ${(props) => props.isOpenPostCode === false ? 'hidden' : 'visible'};
`   