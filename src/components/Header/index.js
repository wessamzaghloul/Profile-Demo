import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classes from "./Header.module.scss";
import PropTypes from "prop-types";

const Header = ({ title }) => (
    <AppBar className={classes.header} color="default">
     
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>{title}</Typography>
          </Toolbar>
       
    </AppBar>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: null,
};

export default Header;
