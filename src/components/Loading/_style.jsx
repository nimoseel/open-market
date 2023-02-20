import styled from 'styled-components';

export const LoadingBg = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 150;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
`

export const LoadingDiv = styled.div`
    position : fixed;
    top : 50%;
    left : 50%;
    z-index: 160;
    transform: translate(-50%, -50%);
`