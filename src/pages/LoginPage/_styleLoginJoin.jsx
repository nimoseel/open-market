import styled from 'styled-components';

// 로그인과 회원가입 화면에서 공통적으로 사용하는 UI - SC.컴포넌트명으로 사용
// S.컴포넌트명은 해당 페이지에서만 사용하는 UI에만 사용

export const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`

export const ContentWrapper = styled.div`
    width: 550px;
    margin: 70px auto 0;
`

export const MenuUl = styled.ul`
    display: flex;
`

export const MenuLi = styled.li`
    width: 275px;
    font-size: 18px;
    box-sizing: border-box;
    border: 1px solid var(--disabled);
    border-radius: 10px 10px 0 0;
    padding: 19px 78px 18px 77px;
    text-align: center;
    background-color : var(${(props) => props.isSelected ? '--white' : '--menu'});
    border-bottom : ${(props) => props.isSelected ? 0 : 1};
    cursor: pointer;
    `

export const InputWrapper = styled.form`
    border: 1px solid var(--disabled);
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 34px 35px 36px;
`

export const Err = styled.strong`
    display: block;
    margin: ${props => `${props.margin}px`} 0;
    font-weight: var(--regular);
    font-size: 16px;
    color: var(${(props) => props.valid ? '--green': '--red'});
`

export const ErrMsg = styled(Err)`
    color: var(--red);
`