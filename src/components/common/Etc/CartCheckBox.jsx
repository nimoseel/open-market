import styled from 'styled-components';
import CartCheckBoxImg from '../../../assets/cart-check-box-icon';
import CartCheckBoxFillImg from '../../../assets/cart-check-box-fill-icon';

const CartCheckLabel = styled.label`
    display: inline-block;
    min-width: 22px;
    min-height: 22px;
    cursor: pointer;
`;

export const Checked = () => {
    return <CartCheckBoxFillImg color={'var(--main)'} />;
};

export const UnChecked = () => {
    return <CartCheckBoxImg color={'var(--main)'} />;
};

const CartCheckInput = styled.input`
    display: none;
`;

const CartCheckBox = ({ isCheck, setIsCheck, handleClick, id }) => {
    const handleCheckBoxClick = () => {
        setIsCheck(!isCheck);
        if (handleClick) {
            handleClick();
        }
    };

    return (
        <>
            <CartCheckLabel
                htmlFor={id}
                isCheck={isCheck}
                onClick={handleCheckBoxClick}
            >
                {isCheck ? <Checked /> : <UnChecked />}
            </CartCheckLabel>
            <CartCheckInput type="checkbox" id={id} />
        </>
    );
};

export default CartCheckBox;
