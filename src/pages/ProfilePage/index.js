import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PageCover from "components/PageCover";
import coverImg from "assets/cover.jpg";
import profileImg from "assets/profile.jpg";
import ProfileMain from "components/ProfileMain";
import PropTypes from "prop-types";

class ProfilePage extends Component {
  render() {
    const {
      profileView
    } = this.props;
    return (
      <section>
        <PageCover src={coverImg} />

        <div className="wrapper">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4}>
              <ProfileMain src={profileImg} name={profileView.name} bio={profileView.bio}/>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper square>details</Paper>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}
ProfilePage.propTypes = {
  profileView: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
  }),
};

ProfilePage.defaultProps = {
  profileView: null,
};

export default ProfilePage;
