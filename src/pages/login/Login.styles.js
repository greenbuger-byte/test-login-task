import styled from "styled-components";

export const Form = styled('div')`
    border: 1px solid whitesmoke;
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FormTitle = styled('h2')`
    text-align: center
`;

export const ErrorMessage = styled('div')`
    color: #000 ;
    background-color: #ffa4a2;
    padding: 2px;
    font-size: 12px;
    text-align: center;
`;