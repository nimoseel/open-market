import styled from 'styled-components';

const Btn_common = styled.button`
    display: inline-block;
    border: ${(props) => props.type === 'white' && '1px solid var(--disabled)'};
    color: var(
        ${(props) => (props.type === 'white' ? '--dark-gray' : '--white')}
    );
    background-color: var(
        ${(props) =>
            (props.type === 'disabled' && '--disabled') ||
            (props.type === 'dark' && '--dark-gray') ||
            (props.type === 'white' && '--white') ||
            '--main'}
    );
    &:hover {
        border: ${(props) =>
            props.type === 'white' && '1px solid var(--dark-gray)'};
        color: ${(props) => props.type === 'white' && 'var(--black)'};
    }
`;

export const BtnL = styled(Btn_common)`
    height: 68px;
    font-size: 24px;
    font-weight: var(--bold);
`;

export const BtnM = styled(Btn_common)`
    width: 100%;
    height: 60px;
    border: ${(props) => props.type === 'white' && '1px solid var(--disabled)'};
    font-size: 18px;
    font-weight: var(--bold);
    &:hover {
        border: ${(props) =>
            props.type === 'white' && '1px solid var(--disabled)'};
        color: var(
            ${(props) => (props.type === 'white' ? '--dark-gray' : '--white')}
        );
    }
`;

export const BtnMS = styled(Btn_common)`
    height: 54px;
    font-weight: var(--semi-bold);
    font-size: 16px;
`;

export const BtnS = styled(Btn_common)`
    height: 40px;
    font-weight: var(--semi-bold);
    font-size: 16px;
`;

export const BtnTab = styled.button`
    width: 320px;
    height: 54px;
    border-radius: 0;
    border-bottom: 6px solid
        var(${(props) => (props.type === 'disabled' ? '--disabled' : '--main')});
    color: var(
        ${(props) => (props.type === 'disabled' ? '--dark-gray' : '--main')}
    );
    background-color: var(--bg-color);
    font-size: 18px;
    &:focus {
        color: var(--main);
    }
`;
