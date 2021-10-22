import React from 'react';
import { NavLink } from "react-router-dom";

import PAGES from "../../utils/pages";
import { mapCommonStates } from "../../utils/store";

import {
    HeaderBlock,
    HeaderContent,
    HeaderWrapper,
    StyledLink } from "./Header.styles";

const Header = (props) => {
    const { logout, userState } = props;
    const { isAuth } = userState;

    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderBlock>
                  <NavLink to={PAGES.HOME}>👩🏼‍💻 HELLO</NavLink>
                </HeaderBlock>
                <HeaderBlock>
                    {isAuth ? <>
                            <StyledLink to={PAGES.PROFILE}>Профиль</StyledLink>
                            <StyledLink onClick={logout} to={PAGES.LOGIN}>Выход</StyledLink></>
                        : <NavLink to={PAGES.LOGIN}>Войти</NavLink> }
                </HeaderBlock>
            </HeaderContent>
        </HeaderWrapper>
    );
};

export default mapCommonStates(Header);