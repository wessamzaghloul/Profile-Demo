import { connect } from "react-redux";
import ProfilePage from "pages/ProfilePage";
import {
  getProfileView,
  getProfileEdit,
  getHasChanged,
  getEditLocations, 
  getEditChoices,
  getisEditOpen
} from "store/profile/selectors";
import { setupForm, saveForm } from "store/profile/thunk";
import { addChange, setIsEditOpen } from "store/profile/actions";
const mapStateToProps = state => ({
  profileView: getProfileView(state),
  profileEdit: getProfileEdit(state),
  hasChanged: getHasChanged(state),
  choices:getEditChoices(state),
  locations: getEditLocations(state),
  isEditOpen: getisEditOpen(state)
});

const mapDispatchToProps = dispatch => ({
  setIsEditOpen: (isEditOpen)=> dispatch(setIsEditOpen(isEditOpen)),
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  discardChanges: () => dispatch(setupForm()),
  saveChanges: () => dispatch(saveForm()),
  setUpEditableForm: () => dispatch(setupForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
