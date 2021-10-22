import React from 'react';
import Default from "../../layer/default";
import {mapCommonStates} from "../../utils/store";

import {H3, P, ProfileWrapper} from "./Profile.styles";

const Profile = (props) => {
    const { userState } = props;
    const { login } = userState;
    return (
        <Default title={"Профиль пользователя"}>
            <ProfileWrapper>
                <H3>🤘 ПРИВЕТ, { login }</H3>
                <P>
                    Эта страница доступна только авторизованному пользователю.
                </P>
            </ProfileWrapper>

        </Default>
    );
};

export default mapCommonStates(Profile);