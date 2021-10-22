import styled from "styled-components";

export const StyledButton = styled('button')`
    outline: none;
    background: whitesmoke;
    padding: 20px;
    display: flex;
    min-width: 150px;
    align-item: center;
    justify-content: center;
    font-size: 12px;
    color: #000;
    opacity: .8;
    border: none;
    cursor: pointer;
    transition: .6s;
    border-radius: 3px;
    :hover{
        opacity: 1;
        box-shadow: -1px 5px 8px 0px rgba(34, 60, 80, 0.2);
    }
`;