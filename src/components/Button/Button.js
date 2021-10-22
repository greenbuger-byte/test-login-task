import React from 'react';
import {StyledButton} from "./Button.styles";
import PropTypes from "prop-types";

const Button = (props) => {
    const { label } = props;
    return (
        <StyledButton {...props}>
            {label}
        </StyledButton>
    );
};

Button.propTypes = {
    /* надпись на кнопке */
    label: PropTypes.string,
}

export default Button;