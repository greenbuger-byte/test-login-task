import { NavLink } from "react-router-dom";

import Default from "../../layer/default";

import { mapCommonStates } from "../../utils/store";
import PAGES from "../../utils/pages";

import { PageInfo } from "./Home.styles";

const Home = (props) => {
    const { userState } = props;
    const { login } = userState;
    return (
        <Default title={"Главная страница"}>
            <PageInfo>{login ? <>ПРИВЕТ, {login}</> : <>Нужно  <NavLink to={PAGES.LOGIN}>авторизоваться</NavLink></>}  </PageInfo>
        </Default>
    );
};

export default mapCommonStates(Home);