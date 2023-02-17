import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../HeaderBtn/_style';

export const HeaderBtn = ({text, src, link, onClick}) => {
    return (
        <S.Button type='button' onClick={onClick}>
            <Link to={link}>
                <S.Img src={src}/>
                <S.Span>{text}</S.Span>
            </Link>
        </S.Button>
    )
};

export const MyPageBtn = ({text, src, onClick}) => {
    return (
        <S.Button type='button' onClick={onClick}>
            <S.Img src={src}/>
            <S.MyPageSpan>{text}</S.MyPageSpan>
        </S.Button>
    )
}
