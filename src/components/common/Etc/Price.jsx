import React from 'react';
import styled from 'styled-components';

const StyledPrice = styled.span`
    display: inline-block;
    margin-right: ${(props) => `${props.margin}px`};
    font-weight: var(--bold);
    font-size: ${(props) => `${props.numSize}px`};
    color: var(${(props) => `${props.numColor}`});

    @media screen and (max-width: 768px) {
        font-size: ${(props) => `${props.numSize * 0.8}px`};
    }
`;

const StyledTxt = styled.span`
    font-size: ${(props) => `${props.txtSize}px`};
    font-weight: var(--regular);
    color: var(${(props) => `${props.txtColor}`});

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export default function Price({
    numSize,
    margin,
    numColor,
    price,
    txtSize,
    txtColor,
}) {
    return (
        <>
            <StyledPrice numSize={numSize} margin={margin} numColor={numColor}>
                {price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </StyledPrice>
            <StyledTxt txtsize={txtSize} txtColor={txtColor}>
                원
            </StyledTxt>
        </>
    );
}
