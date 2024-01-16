import styled from 'styled-components';
import { BtnM, BtnMS } from '../../../components/common/Etc/Button';
import activeIcon from '../../../assets/icon-check-on.svg';
import disabledIcon from '../../../assets/icon-check-off.svg';

export const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 35px auto;
    width: 550px;
    color: var(--dark-gray);
`;

export const CheckLink = styled.a`
    font-weight: var(--bold);
    text-decoration: underline;
    color: var(--dark-gray);
    cursor: pointer;
`;

export const IncludeBtnDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: flex-end;
    gap: 12px;
`;

export const UserInfoDiv = styled.div`
    padding-top: 20px;
`;

export const StoreInfoDiv = styled.div`
    padding-top: 20px;
`;

export const GapDiv = styled.div`
    display: flex;
    gap: 12px;
`;

export const Input = styled.input`
    height: 54px;
    padding: 16px;
    border: 1px solid var(${(props) => (props.valid ? '--disabled' : '--red')});
    border-radius: 5px;
    font-size: 16px;
`;

export const Contact = styled(Input)`
    width: 152px;
    border: 1px solid var(--disabled);
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 117px;
    }
`;

export const EmailInput = styled(Contact)`
    width: 220px;
    text-align: left;

    @media screen and (max-width: 768px) {
        width: 170px;
    }
`;

export const EmailAdd = styled.span`
    display: inline-block;
    margin: auto 0;
    color: var(--dark-gray);
`;

export const JoinBtn = styled(BtnM)`
    width: 450px;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const JoinTitle = styled.label`
    display: inline-block;
    margin: 12px 0 10px;
    font-weight: var(--regular);
    font-size: 16px;
    color: var(--dark-gray);
    line-height: 20px;
`;

export const PwDiv = styled.div`
    width: 100%;
    height: 54px;
    padding: 13px 0 13px 16px;
    box-sizing: border-box;
    border: 1px solid var(${(props) => (props.valid ? '--disabled' : '--red')});
    border-radius: 5px;
`;

export const PwInput = styled.input`
    border: none;
    width: calc(100% - 44px);
    font-size: 16px;
    line-height: 24px;
`;

export const Agreement = styled.span`
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const CheckIcon = styled.span`
    &::after {
        display: inline-block;
        width: 28px;
        height: 28px;
        position: absolute;
        content: '';
        background-image: url(${(props) =>
            props.valid ? activeIcon : disabledIcon});
        background-repeat: no-repeat;
    }
`;

export const CheckBtn = styled(BtnMS)`
    width: 122px;
`;

export const Err = styled.strong`
    display: block;
    margin: ${(props) => `${props.margin}px`} 0;
    font-weight: var(--regular);
    font-size: 16px;
    color: var(${(props) => (props.valid ? '--main' : '--red')});
`;

export const ErrMsg = styled(Err)`
    color: var(--red);
`;
