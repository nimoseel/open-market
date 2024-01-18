import styled from 'styled-components';
import LogoIconImg from '../../../assets/logo-icon';

// 로그인과 회원가입 화면에서 공통적으로 사용하는 UI - SC.컴포넌트명으로 사용
// S.컴포넌트명은 해당 페이지에서만 사용하는 UI에만 사용

// export const LogoIcon2 = styled.div`
//     display: inline-block;
//     width: 256px;
//     height: 130px;
//     background-image: url(${Logo});
//     background-repeat: no-repeat;
//     background-size: contain;
//     vertical-align: middle;
// `;

export const LogoIcon = () => {
    return <LogoIconImg color={'var(--main)'} alt="로고 이미지" />;
};

export const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`;

export const ContentWrapper = styled.div`
    width: 550px;
    margin: 50px auto 0;

    @media screen and (max-width: 768px) {
        width: 450px;
    }
`;

export const MenuUl = styled.ul`
    display: flex;
`;

export const MenuLi = styled.li`
    width: 275px;
    font-size: 18px;
    box-sizing: border-box;
    border: 1px solid var(--disabled);
    border-radius: 10px 10px 0 0;
    padding: 18.5px 0;
    text-align: center;
    background-color: var(
        ${(props) => (props.isSelected ? '--bg-color' : '--menu')}
    );
    border-bottom: ${(props) => (props.isSelected ? 0 : 1)};
    cursor: pointer;
`;

export const InputWrapper = styled.form`
    border: 1px solid var(--disabled);
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 34px 35px 36px;
`;

export const Err = styled.strong`
    display: block;
    margin: 12px 0;
    font-weight: var(--regular);
    font-size: 16px;
    color: var(${(props) => (props.valid ? '--green' : '--red')});
`;

export const ErrMsg = styled(Err)`
    color: var(--red);
`;
