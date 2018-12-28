import { connect } from 'react-redux';
import ProfilePage from 'pages/ProfilePage';
import { getProfileView} from "store/profile/selectors";

const mapStateToProps = state => ({
  profileView: getProfileView(state),
});

export default connect(mapStateToProps)(ProfilePage);
