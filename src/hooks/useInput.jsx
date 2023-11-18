import { useState } from 'react';

const useInput = (initialValue, validator = null, inputName) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyUp = validator ? (e) => {
        try {
            setError(validator(e.target.value));
        } catch (error) {
            setError(error.message);
        }
    } : null;


    return {
        value,
        setValue,
        error,
        isValid,
        setIsValid,
        onChange: handleChange,
        onKeyUp: handleKeyUp,
        name: inputName,
        id: inputName,
    };
};

export default useInput;