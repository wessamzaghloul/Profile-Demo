import React, { Component } from "react";
import Header from "components/Header";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Footer from "components/Footer";

class ProfilePage extends Component {
  render() {
    return (
      <main>
        <Header title="Profile" />
        <div className="wrapper">
          <Paper>
            <Typography component="p">
              main content
            </Typography>
          </Paper>
        </div>

        <Footer />
      </main>
    );
  }
}

export default ProfilePage;
