import styled from 'styled-components';
import Slider from 'react-slick';

export const Image = styled.img`
    height: 500px;
    object-fit: cover;
`

export const NextDiv = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 30px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`

export const PrevDiv = styled(NextDiv)`
    left: 30px;
    text-align: left;
`

export const StyledSlider = styled(Slider)`
    height: 500px;
    width: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-slide div {
        cursor: pointer;
    }
`

export const DotsDiv = styled.div`
    bottom: 20px;

    & ul li.slick-active button::before{
        opacity: 0.9;
        color: var(--white);
    }

    & > ul li button::before{
        opacity: 0.4;
        color: var(--white);
    }
`