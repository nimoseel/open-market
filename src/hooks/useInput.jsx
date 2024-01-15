import { useState, useEffect, useRef } from 'react';

const useInput = (initialValue, validator = null, inputName) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);

    const debounceTimeout = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        if (validator && value !== '') {
            debounceTimeout.current = setTimeout(() => {
                try {
                    setError(validator(value));
                } catch (error) {
                    setError(error.message);
                }
            }, 300);
        }

        return () => {
            clearTimeout(debounceTimeout.current);
        };
    }, [value, validator]);

    return {
        value,
        setValue,
        error,
        isValid,
        setIsValid,
        onChange: handleChange,
        name: inputName,
        id: inputName,
    };
};

export default useInput;
