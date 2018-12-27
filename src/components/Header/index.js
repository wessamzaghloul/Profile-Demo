import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classes from "./Header.module.scss";

const Header = ({ title }) => (
    <AppBar className={classes.header} color="default">
     
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>{title}</Typography>
          </Toolbar>
       
    </AppBar>
);

export default Header;
