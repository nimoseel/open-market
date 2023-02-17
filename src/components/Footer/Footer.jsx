import React from 'react';
import { Link } from 'react-router-dom';
import InstaImg from '../../assets/icon-insta.svg';
import FacebookImg from '../../assets/icon-fb.svg';
import YoutubeImg from '../../assets/icon-yt.svg';
import * as S from '../Footer/_style';

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContentDiv>
                <S.FooterLinkDiv>
                    <S.InfoUl>
                        <S.InfoLi><Link>호두샵 소개</Link></S.InfoLi>
                        <S.InfoLi><Link>이용약관</Link></S.InfoLi>
                        <S.InfoBoldLi><Link>개인정보처리방침</Link></S.InfoBoldLi>
                        <S.InfoLi><Link>전자금융거래약관</Link></S.InfoLi>
                        <S.InfoLi><Link>청소년보호정책</Link></S.InfoLi>
                        <S.InfoLi><Link>제휴문의</Link></S.InfoLi>
                    </S.InfoUl>
                    <S.SnsUl>
                        <li>
                            {/* 외부페이지로 넘어가기 때문에 a 태그 사용 */}
                            <a href='https://www.instagram.com/'> 
                                <img src={InstaImg} alt='호두샵 인스타그램'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://ko-kr.facebook.com/'>
                                <img src={FacebookImg} alt='호두샵 페이스북'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/'>
                                <img src={YoutubeImg} alt='호두샵 유튜브'/>
                            </a>
                        </li>
                    </S.SnsUl>
                </S.FooterLinkDiv>
                <S.ContactDiv>
                    <S.ContactP>(주) HODU SHOP</S.ContactP>
                    <S.ContactP>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</S.ContactP>
                    <S.ContactP>사업자 번호 : 000-0000-0000 | 통신 판매업</S.ContactP>
                    <S.ContactP>대표: 김호두</S.ContactP>
                </S.ContactDiv>
            </S.FooterContentDiv>
        </S.Footer>
    );
};

export default Footer;
