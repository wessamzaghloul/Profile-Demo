import { getProfileEdit, getProfileView } from "./selectors";
import {
  editFormSuccess,
  editFormPending,
  setNewEditableForm
} from "./actions";
import * as constants from "./constants";
import axios from "axios";


export function setupForm() {
  return function _resetForm(dispatch, getState) {
    const form = getProfileView(getState());
    const fetchChoices = axios.get( constants.CHOICES_END_POINT );
    const fetchLocations = axios.get( constants.LOCATIONS_END_POINT );
    return Promise.all([ fetchChoices, fetchLocations ])
      .then( values => dispatch(setNewEditableForm(form, values[0].data, values[1].data.cities)))
      .catch( err => console.log(err) );
  };
}

export function saveForm() {
  return function _saveForm(dispatch, getState) {
    dispatch(editFormPending());
    const form = getProfileEdit(getState());
    dispatch(editFormSuccess(form));
  };
}
