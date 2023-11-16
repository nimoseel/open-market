import React from "react";
import Loader from "react-spinners/RotateLoader";
import * as S from '../Loading/_style';

function Loading() {
    return (
        <S.LoadingBg>
            <S.LoadingDiv>
                <Loader
                    size={12}
                    margin={15}
                    color="var(--main)"
                    />
            </S.LoadingDiv>
        </S.LoadingBg>
    );
}

export default Loading;