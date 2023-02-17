import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    width: 56px;
    height: 50px;
    border: none;
    font-size: 12px;
    color: var(--dark-gray);
    background-color: var(--white);
    align-items: center;
    cursor: pointer;
`

export const Img = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
    background-repeat: no-repeat;
    background-size: contain;
`

export const Span = styled.span`
    display: inline-block;
    line-height: 14px;
`

export const MyPageSpan = styled(Span)`
    margin-top: 7px;
`