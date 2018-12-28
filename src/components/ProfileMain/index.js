import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classes from "./ProfileMain.module.scss";

const ProfileMain = ({ src, name, bio }) => (
  <div className={classes.root}>
    <Paper className={classes.profileMain} square>
      <div className={classes.imgContainer}>
        <img src={src} alt={name} className={classes.image} />
      </div>
      <div className={classes.infoContainer}>
        <Typography component="p" className={classes.info}>
          Welcome, {name}
        </Typography>
        <Typography component="p" className={classes.bio}>
          {bio}
        </Typography>
      </div>
      <div className={classes.btnContainer}>
        <Button variant="contained" fullWidth className={classes.action}>
        Edit Profile  
        </Button>
      </div>
    </Paper>
  </div>
);

ProfileMain.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string
};

ProfileMain.defaultProps = {
  src: null,
  name: null,
  bio: null
};

export default ProfileMain;
