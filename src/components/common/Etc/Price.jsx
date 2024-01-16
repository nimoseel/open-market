import React from 'react';
import styled from 'styled-components';

const StyledPrice = styled.span`
    display: inline-block;
    margin-right: ${(props) => `${props.margin}px`};
    font-weight: var(--bold);
    font-size: ${(props) => `${props.numsize}px`};
    color: var(${(props) => `${props.color}`});

    @media screen and (max-width: 768px) {
        font-size: ${(props) => `${props.numsize * 0.8}px`};
    }
`;

const StyledTxt = styled.span`
    font-size: ${(props) => `${props.txtsize}px`};
    font-weight: var(--regular);
    color: var(${(props) => `${props.color}`});
    color: var(--black);

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export default function Price({ numsize, margin, color, price, txtsize }) {
    return (
        <>
            <StyledPrice numsize={numsize} margin={margin} color={color}>
                {price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </StyledPrice>
            <StyledTxt txtsize={txtsize} color={color}>
                원
            </StyledTxt>
        </>
    );
}
