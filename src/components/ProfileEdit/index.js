import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classes from "./ProfileEdit.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "components/Autocomplete";

const ProfileEdit = ({
  data,
  addChange,
  hasChanged,
  onSaveAction,
  onDiscardAction,
  choices,
  locations
}) => (
  <div className={classes.root}>
    <Typography variant="h4" className={classes.title}>
      Details Edit
    </Typography>
    <Paper className={classes.container} square>
      <form className={classes.form} noValidate autoComplete="off">
        <FormControl className={classes.formControl} fullWidth>
          <TextField
            label="Display Name"
            value={data.name}
            onChange={event => addChange("name", event.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
            label="Birthday"
            type="date"
            value={data.birthday}
            onChange={event => addChange("birthday", event.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <Autocomplete
            suggestions={choices.gender}
            addChange={addChange}
            type="gender"
            placeholder="Choose Gender"
            value={data.gender}
            getLabel={obj => obj.name}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <Autocomplete
            suggestions={choices.ethnicity}
            addChange={addChange}
            type="ethnicity"
            placeholder="Choose Ethnicity"
            value={data.ethnicity}
            getLabel={obj => obj.name}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <Autocomplete
            suggestions={choices.religion}
            addChange={addChange}
            type="religion"
            placeholder="Choose Religion"
            value={data.religion}
            getLabel={obj => obj.name}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <Autocomplete
            suggestions={choices.figure}
            addChange={addChange}
            type="figure"
            placeholder="Choose Figure"
            value={data.figure}
            getLabel={obj => obj.name}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <Autocomplete
            suggestions={locations}
            addChange={addChange}
            type="location"
            placeholder="Search a city"
            value={data.location}
            getLabel={obj => obj.city}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
            label="About Me"
            placeholder="tell us about yourself .."
            multiline
            value={data.about}
            onChange={event => addChange("about", event.target.value)}
            className={classes.textField}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <label className={classes.fakeLabel}>Profile Picture</label>
          <div className={classes.fakeButton}>

            <input
              type="file"
              onChange={event => {
                //temporarily until we create a server
                let url = URL.createObjectURL(event.target.files[0]);
                addChange("profilePicture", url);
              }}
            />
          </div>
        </FormControl>
        <div className={classes.actionBar}>
          <Button
            variant="contained"
            className={classes.save}
            color="primary"
            disabled={!hasChanged}
            onClick={onSaveAction}
          >
            save
          </Button>
          <Button
            variant="outlined"
            disabled={!hasChanged}
            onClick={onDiscardAction}
          >
            Discard
          </Button>
        </div>
      </form>
    </Paper>
  </div>
);

ProfileEdit.propTypes = {
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
    figure: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    location: PropTypes.shape({
      lat: PropTypes.string,
      lon: PropTypes.string,
      city: PropTypes.string
    }),
    profilePicture: PropTypes.string
  }),
  addChange: PropTypes.func.isRequired,
  hasChanged: PropTypes.bool,
  onSaveAction: PropTypes.func.isRequired,
  onDiscardAction: PropTypes.func.isRequired,
  choices: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired
};

ProfileEdit.defaultProps = {
  data: {
    name: null,
    about: null,
    birthday: null,
    gender: {
      id: null,
      name: null
    },
    ethnicity: {
      id: null,
      name: null
    },
    religion: {
      id: null,
      name: null
    },
    figure: {
      id: null,
      name: null
    },
    location: {
      lat: null,
      lon: null,
      city: null
    },
    profilePicture: null
  },
  addChange: () => console.info("add change"),
  hasChanged: true,
  onDiscardAction: () => console.info("Discard"),
  onSaveAction: () => console.info("Save"),
  choices: {
    gender: [],
    ethnicity: [],
    religion: [],
    figure: []
  },
  locations: []
};

export default ProfileEdit;
