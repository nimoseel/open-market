import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: var(--menu);
    padding: 60px 0 63px;
    font-size: 14px;
`

export const FooterContentDiv = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        max-width: 500px;
    }
`

export const FooterLinkDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--disabled);
    align-items: center;
`

export const InfoUl = styled.ul`
    display: flex;
    position: relative;
    gap: 32px;

    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
`

export const InfoLi = styled.li`
    font-weight: var(--regular);
    font-size: 14px;
    line-height: 17.53px;
    &::after{
        content: '';
        position: absolute;
        width: 1px;
        height: 16px;
        margin-left: 16px;
        background-color: var(--disabled);
    };
    &:last-child::after{
        display: none;
    };

    @media screen and (max-width: 768px) {
        &::after{
            content:none;
        };
    }
`
export const InfoBoldLi = styled(InfoLi)`
    font-weight: var(--bold);
`

export const SnsUl = styled.ul`
    display: flex;
    width: 124px;
    gap: 14px;
`

export const ContactDiv = styled.div`
    width: 321px;
    margin-top: 30px;
    color: var(--dark-gray);
`

export const ContactP = styled.p`
    margin: 12px 0;
    :first-child{
        font-weight: 700;
    }
`