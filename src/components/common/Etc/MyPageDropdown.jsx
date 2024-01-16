import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styled from 'styled-components';

const OptionUl = styled.ul`
    position: absolute;
    top: 75px;
    left: ${(props) => (props.isSeller ? '-46px' : '35px')};
    width: 130px;
    padding: 10px;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    background-color: var(--white);
    border-radius: 10px;
    border: 1px solid var(--disabled);
    z-index: 20;

    &::after {
        position: absolute;
        top: -13px;
        right: 67px;
        content: '';
        border-top: 1px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 15px solid var(--white);
        border-left: 10px solid transparent;
        z-index: 10;
    }

    &::before {
        position: absolute;
        top: -15px;
        right: 67px;
        content: '';
        border-top: 1px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 16px solid var(--disabled);
        border-left: 10px solid transparent;
        z-index: -10;
    }
`;

const OptionBtn = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    color: var(--dark-gray);
    &:hover {
        border: 1px solid var(--dark-gray);
        color: var(--black);
    }
`;

const MyPageDropdown = ({ isOpen, setIsOpen, isSeller }) => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleOpenMypage = () => {
        alert('페이지 준비중 입니다.');
    };

    const handleLogout = () => {
        logout();
        alert('로그아웃 되었습니다.');
        setIsOpen(false);
        navigate('/');
    };

    return (
        <OptionUl isOpen={isOpen} setIsOpen={setIsOpen} isSeller={isSeller}>
            <li>
                <OptionBtn onClick={handleOpenMypage}>마이페이지</OptionBtn>
            </li>
            <li>
                <OptionBtn onClick={handleLogout}>로그아웃</OptionBtn>
            </li>
        </OptionUl>
    );
};

export default MyPageDropdown;
