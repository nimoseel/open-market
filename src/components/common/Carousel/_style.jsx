import styled from 'styled-components';
import Slider from 'react-slick';

export const Image = styled.img`
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        max-height: 300px;
    }
`;

export const NextDiv = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    padding-top: 50px;
    right: 30px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

export const PrevDiv = styled(NextDiv)`
    left: 30px;
    text-align: left;
`;

export const StyledSlider = styled(Slider)`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-slide div {
        cursor: pointer;
    }

    @media screen and (max-width: 1280px) {
        padding: 0 20px;
    }
`;

export const DotsDiv = styled.div`
    bottom: 30px;

    & ul li.slick-active button::before {
        opacity: 0.9;
        color: var(--main);
    }

    & > ul li button::before {
        opacity: 0.9;
        color: var(--main-light);
    }
`;
