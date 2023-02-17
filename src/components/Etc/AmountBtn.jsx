import React from 'react';
import styled from 'styled-components';
import minusIcon from '../../assets/icon-minus-line.svg';
import plusIcon from '../../assets/icon-plus-line.svg';
import disabledPlus from '../../assets/icon-disabled-plus.svg';

const AmountWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 150px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid var(--disabled);
    border-radius: 5px;
    overflow: hidden;
`

const Minus = styled.button`
    width: 100%;
    height: 100%;
    background: url(${minusIcon}) no-repeat center;
`

const AmountNum = styled.span`
    display: inline-block;
    border-left: 1px solid var(--disabled);
    border-right: 1px solid var(--disabled);
    box-sizing: border-box;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
`

const Plus = styled.button`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: url(${(props) => props.isMax ? disabledPlus : plusIcon}) no-repeat center;
    background-color: var(${(props) => props.isMax ? '--drop-down': '--white'});
`

const AmountBtn = ({num, isMax, handleMinus, handlePlus}) => {
    return (
        <AmountWrapper>
            <Minus type='button' onClick={handleMinus} />
            <AmountNum>{num}</AmountNum>
            <Plus type='button' isMax={isMax} onClick={handlePlus}/>
        </AmountWrapper>
    )
};

export default AmountBtn;
