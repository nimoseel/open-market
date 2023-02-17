import styled from 'styled-components';
import Checked from '../../assets/icon-cart-check-fill-box.svg';
import UnCheck from '../../assets/icon-cart-check-box.svg';

const CartCheckLabel = styled.label`
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url(${(props) => props.isCheck ? Checked : UnCheck});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`

const CartCheckInput = styled.input`
    display: none;
`

const CartCheckBox = ({setIsCheck, isCheck, handleClick}) => {
    return (
        <>
            <CartCheckLabel htmlFor='chk_box' onClick={handleClick} isCheck={isCheck} setIsCheck={setIsCheck}/>
            <CartCheckInput type='checkbox' id='chk_box'/>   
        </>
    )
};

export default CartCheckBox;
