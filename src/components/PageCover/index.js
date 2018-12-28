import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import classes from "./PageCover.module.scss"

const PageCover = ({ src }) => (
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.cover} style={{backgroundImage: `url(${src})`}}></div>
      </Grid>
    </Grid>
  </div>
);

PageCover.propTypes = {
  src: PropTypes.string,
};

PageCover.defaultProps = {
  src: null,
};

export default PageCover;
