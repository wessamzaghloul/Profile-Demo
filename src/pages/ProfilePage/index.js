import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PageCover from "components/PageCover";
import ProfileMain from "components/ProfileMain";
import ProfileEdit from "components/ProfileEdit";
import ProfileView from "components/ProfileView";

import PropTypes from "prop-types";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.setUpEditableForm();
  }
  render() {
    const {
      isEditOpen,
      setIsEditOpen,
      addChange,
      discardChanges,
      profileView,
      profileEdit,
      hasChanged,
      saveChanges,
      choices,
      locations,
      setUpEditableForm
    } = this.props;
    if (!profileEdit || !profileView) {
      return <span>LOADING</span>;
    }
    const exitEdit = () => {
      setIsEditOpen(false);
      discardChanges();
    };
    const saveEdit = () => {
      setIsEditOpen(false);
      saveChanges();
    };
    return (
      <section>
        <PageCover src={profileView.coverImg} />

        <div className="wrapper">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4}>
              <ProfileMain
                src={profileView.profilePicture}
                name={profileView.name}
                about={profileView.about}
                isEditOpen={isEditOpen}
                setIsEditOpen={setIsEditOpen}
                exitEdit={exitEdit}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              {isEditOpen ? (
                <ProfileEdit
                  data={profileEdit}
                  addChange={addChange}
                  hasChanged={hasChanged}
                  onSaveAction={saveEdit}
                  onDiscardAction={exitEdit}
                  choices={choices}
                  locations={locations}
                  setUpEditableForm={setUpEditableForm}
                />
              ) : (
                <ProfileView data={profileView} />
              )}
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}
ProfilePage.propTypes = {
  isEditOpen: PropTypes.bool,
  setIsEditOpen: PropTypes.func.isRequired,
  addChange: PropTypes.func.isRequired,
  discardChanges: PropTypes.func.isRequired,
  profileView: PropTypes.shape({
    name: PropTypes.string,
    about: PropTypes.string,
    realName: PropTypes.string,
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
    maritalStatus: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    occupation: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.string,
      lon: PropTypes.string,
      city: PropTypes.string
    }),
    profilePicture: PropTypes.string,
    coverImg: PropTypes.string
  }),
  profileEdit: PropTypes.shape({
    name: PropTypes.string,
    about: PropTypes.string,
    realName: PropTypes.string,
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
    maritalStatus: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    occupation: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.string,
      lon: PropTypes.string,
      city: PropTypes.string
    }),
    profilePicture: PropTypes.string,
    coverImg: PropTypes.string
  }),
  choices: PropTypes.object,
  locations: PropTypes.array,
  hasChanged: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  setUpEditableForm: PropTypes.func.isRequired
};

ProfilePage.defaultProps = {
  isEditOpen: false,
  setIsEditOpen: () => console.info("is edit open ?"),
  addChange: () => console.info("add change"),
  discardChanges: () => console.info("discard change"),
  profileView: null,
  profileEdit: null,
  hasChanged: true,
  choices: null,
  locations: null,
  saveChanges: () => console.info("Save changes"),
  setUpEditableForm: () => console.info("setup form")
};

export default ProfilePage;
