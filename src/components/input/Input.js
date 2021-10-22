import {useEffect, useState, forwardRef} from 'react';
import PropTypes from "prop-types";

import { InputWrapper, Label, StyledInput } from "./Input.styles";
import { ErrorMessage } from "../../pages/login/Login.styles";

const Input = forwardRef((props, ref) => {
    const {label, onChangeHandler, value, errors, remainingProps} = props;
    const [curValue, setCurValue] = useState();

    useEffect( () => {
        setCurValue(value)
    },[value]);

    const changeHandler = (ev) => {
        setCurValue(ev.target.value);
        onChangeHandler?.(ev);
    }
    return (
        <InputWrapper>
            {label && <Label>{label}</Label>}
            <StyledInput
                ref={ref}
                value={curValue}
                onChange={changeHandler} {...props}
                {...remainingProps}
            />
            {errors && <ErrorMessage>{errors}</ErrorMessage>}
        </InputWrapper>
    );
});

Input.propTypes = {
    /* строка лэйбла */
    label: PropTypes.string,
    /* хендлер колбек */
    onChangeHandler: PropTypes.func,
    /*  текст ошибки */
    errors: PropTypes.string,
}

export default Input;