import React from "react";
import { Provider } from "react-redux";

import configureStore from "store";
import Header from "components/Header";
import Footer from "components/Footer";
import ProfilePage from "containers/ProfileContainer";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <main>
      <Header title="Profile" />
      <ProfilePage />
      <Footer />
    </main>
  </Provider>
);

export default App;
