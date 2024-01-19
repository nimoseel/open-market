import styled from 'styled-components';
import { ReactComponent as CheckBoxDefaultImg } from '../../../assets/icon-cart-check-box.svg';
import { ReactComponent as CheckBoxFillImg } from '../../../assets/icon-cart-check-fill-box.svg';

const CartCheckLabel = styled.label`
    display: inline-block;
    min-width: 22px;
    min-height: 22px;
    cursor: pointer;
`;

export const Checked = () => {
    return <CheckBoxFillImg fill={'var(--main)'} stroke={'var(--main)'} />;
};

export const UnChecked = () => {
    return <CheckBoxDefaultImg stroke={'var(--main)'} />;
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
