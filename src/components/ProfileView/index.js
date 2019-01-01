import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import classes from "./ProfileView.module.scss";

const ProfileView = ({ data }) => (
  <div className={classes.root}>
    <Typography variant="h4" className={classes.title}>
      Details View
    </Typography>
    <Paper className={classes.container} square>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary="Name" secondary={data.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="About" secondary={data.about} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Birthday" secondary={data.birthday} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gender" secondary={data.gender.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Name" secondary={data.ethnicity.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Religion" secondary={data.religion.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Height" secondary= {data.height} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Figure" secondary= {data.figure.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Location" secondary= {data.location.city} />
        </ListItem>
      </List>
      
    </Paper>
  </div>
);

ProfileView.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    about: PropTypes.string,
    birthday: PropTypes.string,
    gender: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    ethnicity: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    religion: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    height: PropTypes.number,
    figure: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    location: PropTypes.shape({
      lat: PropTypes.string,
      lon: PropTypes.string,
      city: PropTypes.string
    }),
    profilePicture: PropTypes.string,
    coverImg: PropTypes.string
  })
};

ProfileView.defaultProps = {};

export default ProfileView;
