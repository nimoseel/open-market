import React, { useState } from 'react';
import styled from 'styled-components';
import downArrow from '../../../assets/icon-down-arrow.svg';
import upArrow from '../../../assets/icon-up-arrow.svg';

const Title = styled.button`
    position: relative;
    width: 152px;
    height: 54px;
    padding-left: 56px;
    border: 1px solid var(--disabled);
    font-weight: var(--regular);
    font-size: 16px;
    text-align: left;
    background-image: url(${(props) => (props.isOpen ? upArrow : downArrow)});
    background-position: right 12px center;
    background-repeat: no-repeat;
    &:focus {
        border-color: var(--main);
    }

    @media screen and (max-width: 768px) {
        width: 122px;
        padding-left: 37px;
    }
`;

const OptionUl = styled.ul`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    width: 152px;
    height: 150px;
    margin-top: 58px;
    box-sizing: border-box;
    border: 1px solid var(--disabled);
    border-radius: 5px;
    overflow-y: scroll;

    @media screen and (max-width: 768px) {
        width: 122px;
    }
`;

const OptionBtn = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 0;
    font-weight: var(--semi-bold);
    font-size: 16px;
    text-align: center;
    background-color: var(--white);
    &:hover,
    &:focus {
        background-color: var(--drop-down);
    }
`;

const Dropdown = ({ id, value, onChange }) => {
    const [txt, setTxt] = useState(value);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (e) => {
        setTxt(e.target.value);
        onChange(e);
        setIsOpen(!isOpen);
    };

    const numlist = ['010', '011', '016', '017', '018', '019'];

    return (
        <>
            <Title
                type="button"
                onClick={handleToggle}
                isOpen={isOpen}
                id={id}
                value={value}
            >
                {txt}
            </Title>

            <OptionUl isOpen={isOpen}>
                <li>
                    {numlist.map((item, index) => (
                        <OptionBtn
                            type="button"
                            key={index}
                            name={id}
                            onClick={handleSelect}
                            value={item}
                        >
                            {item}
                        </OptionBtn>
                    ))}
                </li>
            </OptionUl>
        </>
    );
};

export default Dropdown;
