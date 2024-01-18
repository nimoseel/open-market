import styled from 'styled-components';
import { BtnM } from '../../../components/common/Etc/Button';

export const InputDiv = styled.div`
    margin-bottom: 26px;
`;

export const LoginInput = styled.input`
    height: 60px;
    border: none;
    border-bottom: 1px solid var(--disabled);
    :first-child {
        margin-bottom: 6px;
    }
`;

export const FindUl = styled.ul`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0;
    width: 184px;
    margin: 30px auto 80px;
`;

export const FindLi = styled.li`
    &:first-child::after {
        content: '';
        position: absolute;
        left: 76px;
        width: 1px;
        height: 16px;
        background-color: var(--txt-color);
    }
`;

export const LoginErrMsg = styled.strong`
    display: block;
    margin: 26px 0;
    font-weight: var(--regular);
    font-size: 16px;
    color: var(--red);
`;

export const LoginBtn = styled(BtnM)`
    width: 480px;

    @media screen and (max-width: 768px) {
        width: 380px;
    }
`;
