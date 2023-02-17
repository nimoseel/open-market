import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from '../Carousel/_style';

import img_strawberry from '../../assets/carousel_strawberry.jpg';
import img_paprika from '../../assets/carousel_paprika.jpg';
import img_vegi from '../../assets/carousel_vegetable.jpg';
import img_carrot from '../../assets/carousel_carrot.jpg';
import img_blueberry from '../../assets/carousel_blueberry.jpg';

import { ReactComponent as Next } from '../../assets/arrow-right.svg';
import { ReactComponent as Prev } from '../../assets/arrow-left.svg';

const Carousel = () => {
    const settings = { 
        dots: true, // 캐러셀 밑의 지정 콘텐츠로 이동할 수 있는 버튼 
        infinite: true, // 콘텐츠 맨 끝에서 다시 앞으로 반복
        speed: 500, // 콘텐츠 넘어가는 속도 (ms)
        slidesToShow: 1, // 한화면에 보이는 콘텐츠 개수
        slidesToScroll: 1, // 한번에 넘어가는 콘텐츠 수 
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: true,
        nextArrow: (
            <S.NextDiv>
                <Next/>
            </S.NextDiv>
            ),
        prevArrow: (
            <S.PrevDiv>
                <Prev/>
            </S.PrevDiv>
        ),
        appendDots: (dots) => (
            <S.DotsDiv>
                <ul>{dots}</ul>
            </S.DotsDiv>
        ),
    };

    return (
        <>
            <S.StyledSlider {...settings}>
                <S.Image src={img_strawberry} alt='딸기' />
                <S.Image src={img_carrot} alt='당근' />
                <S.Image src={img_paprika} alt='파프리카' />
                <S.Image src={img_vegi} alt='채소' />
                <S.Image src={img_blueberry} alt='블루베리' />
            </S.StyledSlider>
        </>
    );
};

export default Carousel;

