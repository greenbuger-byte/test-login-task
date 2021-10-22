import PropTypes from 'prop-types'
import { Fragment } from "react";

import Header from "../../components/header";
import { PageContent } from "../../pages/home/Home.styles";

const Default = (props) => {
    const { children, title } = props;
    document.title = title;
    return (
        <Fragment>
            <Header />
            <PageContent>
                {children}
            </PageContent>

        </Fragment>

    );
};

Default.propTypes = {
    /* контент страницы */
    children: PropTypes.node,
    /* название страницы */
    title: PropTypes.string,
}

Default.defaultProps = {
    title: "Это самый крутой сайт",
}

export default Default;