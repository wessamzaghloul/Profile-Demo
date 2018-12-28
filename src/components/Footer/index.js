import React from "react";
import classes from "./Footer.module.scss";
import Grid from "@material-ui/core/Grid";

const Footer = () => (
  <footer className={classes.footer}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        copyright
      </Grid>
    </Grid>
  </footer>
);

export default Footer;
