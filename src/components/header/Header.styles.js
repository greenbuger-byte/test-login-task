import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const HeaderWrapper = styled('div')`
    width: 100vw;
    height: 60px;
    background: white;
    box-shadow: -1px 5px 8px 0px rgba(34, 60, 80, 0.2);
    border-bottom: 1px solid whitesmoke;
`;

export const HeaderContent = styled('div')`
    width: 100%;
    max-width: 900px;
    margin: auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderBlock = styled('div')`
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
    margin: 0 5px;
`