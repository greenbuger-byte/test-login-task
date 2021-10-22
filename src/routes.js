import {Redirect, Route, Switch} from 'react-router-dom';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import PAGES from "./utils/pages";

import Home from "./pages/home";
import Login from "./pages/login";
import NotFounded from "./pages/not-founded";
import Profile from "./pages/profile";

import { accessProfile } from "./store/userSlice";

const Routes = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if( token ) dispatch(accessProfile({ login: token }))

  return  <Switch>
        <Route path={PAGES.HOME} exact>
            <Home />
        </Route>
        <Route path={PAGES.LOGIN} exact>
            <Login />
        </Route>
      <ProtectedRoute path={PAGES.PROFILE} exact >
          <Profile />
      </ProtectedRoute>
      <Route path="*">
          <NotFounded />
      </Route>
    </Switch>
}

const ProtectedRoute = ({children, ...rest}) => {
    const accessToken = localStorage.getItem("token") //лучше бы из базы но там пусто
    return(
        <Route
            {...rest}
            render={({location})=>
                accessToken
                    ? (children)
                    : (<Redirect to = {{pathname: PAGES.LOGIN, state: { from: location }}}/>)
                   }
        />
    );
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Routes;