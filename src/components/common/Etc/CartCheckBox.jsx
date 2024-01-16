import styled from 'styled-components';
import Checked from '../../../assets/icon-cart-check-fill-box.svg';
import UnCheck from '../../../assets/icon-cart-check-box.svg';

const CartCheckLabel = styled.label`
    display: inline-block;
    min-width: 22px;
    min-height: 22px;
    background-image: url(${(props) => (props.isCheck ? Checked : UnCheck)});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`;

const CartCheckInput = styled.input`
    display: none;
`;

const CartCheckBox = ({ isCheck, setIsCheck, handleClick }) => {
    const handleCheckBoxClick = () => {
        setIsCheck(!isCheck);
        if (handleClick) {
            handleClick();
        }
    };

    return (
        <>
            <CartCheckLabel
                htmlFor="chk_box"
                isCheck={isCheck}
                onClick={handleCheckBoxClick}
            />
            <CartCheckInput type="checkbox" id="chk_box" />
        </>
    );
};

export default CartCheckBox;
