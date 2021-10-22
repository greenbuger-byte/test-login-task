import { connect } from "react-redux";

import { login, logout } from "../store/userSlice";

export const mapCommonStates = (TargetComponent) => {

    const mapGlobalStateToProps = (state) => ({
        userState: state.userSlice,
    });

    const mapGlobalDispatchToProps = (dispatch) => ({
        login: (payload) => dispatch(login(payload)),
        logout: (payload) => dispatch(logout(payload)),
    });

    return connect(mapGlobalStateToProps, mapGlobalDispatchToProps)(TargetComponent);
}
