import styled from 'styled-components';
import { BtnM } from '../../../components/Etc/Button';

export const Section = styled.section`
    display: flex;
    width: 740px;
    margin: 300px auto 0;
    align-items: center;
    gap: 50px;
`

export const H2 = styled.h2`
    font-weight: var(--bold);
    font-size: 36px;
`

export const Txt = styled.p`
    margin: 20px 0 40px;
    font-weight: var(--regular);
    color: var(--dark-gray);
    line-height: 20.03px;
`

export const BtnDiv = styled.div`
    display: flex;
    gap: 14px;
`

export const Btn = styled(BtnM)`
    width: 200px;
`