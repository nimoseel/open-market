import styled from 'styled-components';
import Checked from '../../assets/check-fill-box.svg';
import UnCheck from '../../assets/check-box.svg';

const CheckLabel = styled.label`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-image: url(${(props) => (props.isCheck ? Checked : UnCheck)});
    cursor: pointer;
`;

const CheckInput = styled.input`
    display: none;
`;

const CheckBox = ({ isCheck, setIsCheck }) => {
    return (
        <>
            <CheckLabel
                htmlFor="chk_box"
                isCheck={isCheck}
                onClick={() => {
                    setIsCheck(!isCheck);
                }}
            />
            <CheckInput type="checkbox" id="chk_box" />
        </>
    );
};

export default CheckBox;
