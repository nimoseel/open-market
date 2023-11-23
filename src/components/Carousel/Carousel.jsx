import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from '../Carousel/_style';

import our from '../../assets/c_our.png';
import christmas from '../../assets/c_christmas.png';
import chair from '../../assets/c_chair.png';
import skin_care from '../../assets/c_skin_care.png';
import sale from '../../assets/c_sale.png';

import { ReactComponent as Next } from '../../assets/arrow-right.svg';
import { ReactComponent as Prev } from '../../assets/arrow-left.svg';

const Carousel = () => {
    const settings = { 
        dots: true, // 캐러셀 밑의 지정 콘텐츠로 이동할 수 있는 버튼 
        infinite: true, // 콘텐츠 맨 끝에서 다시 앞으로 반복
        speed: 1000, // 콘텐츠 넘어가는 속도 (ms)
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
                <S.Image src={our} alt='아우어 마켓 메인' />
                <S.Image src={christmas} alt='크리스마스 쇼핑' />
                <S.Image src={chair} alt='의자 행사' />
                <S.Image src={skin_care} alt='스킨케어 행사' />
                <S.Image src={sale} alt='마지막 세일' />
            </S.StyledSlider>
        </>
    );
};

export default Carousel;

