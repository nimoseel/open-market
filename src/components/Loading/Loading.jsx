import React from "react";
import Loader from "react-spinners/PulseLoader";
import * as S from '../Loading/_style';

function Loading() {
    return (
        <S.LoadingDiv>
            <Loader
                size={10}
                margin={15}
                color="var(--green)"
                />
        </S.LoadingDiv>
    );
}

export default Loading;