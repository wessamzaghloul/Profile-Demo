import { combineReducers } from "redux";
import * as constants from "./constants";
import coverImg from "assets/cover.jpg";
import profileImg from "assets/profile.jpg";

const initialState = {
  view: {
    status: null,
    data: {
      name: "Jane Doe",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      coverImg: coverImg,
      profilePicture: profileImg,
      realName: "Jane Doe Doe",
      birthday: "1990-01-06",
      gender: { id: "1969cf48-7ae7-4073-abb3-d09ba6a19946", name: "Female" },
      ethnicity: { id: "5b3d1252-860f-459b-ab90-7a2914360dbf", name: "White" },
      religion: {
        id: "8af4bd2a-44d5-44a4-8424-ce1c2ab29d2b",
        name: "Christian"
      },
      height: 165,
      figure: { id: "b5e4720e-bc9a-4e56-a301-31a6f667adc2", name: "Normal" },
      maritalStatus: {
        id: "5a837767-7a11-487c-a243-7451c7b14c03",
        name: "Never Married"
      },
      occupation: "Student",
      location: { lat: "43°47'N", lon: "11°15'E", city: "Florence" }
    }
  },
  edit: {
    status: null,
    data: null,
    changed: null,
    choices: null,
    locations: null,
    isEditOpen: false
  }
};

function viewReducer(state = initialState.view, action) {
  switch (action.type) {
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        status: constants.EDIT_FORM_SUCCESS,
        data: action.form
      };
    default:
      return state;
  }
}

function editReducer(state = initialState.edit, action) {
  switch (action.type) {
    case constants.SET_EDIT_STATE:
      return {
        ...state,
        isEditOpen: action.isEditOpen
      };
    case constants.ADD_CHANGE:
      const newForm = { ...state.data };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        changed: true,
        data: newForm
      };
    case constants.SET_UP_EDIT_FORM:
      return {
        ...state,
        changed: false,
        data: action.form,
        choices: action.choices,
        locations: action.locations
      };
    case constants.EDIT_FORM_PENDING:
      return {
        ...state,
        status: constants.EDIT_FORM_PENDING
      };
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        changed: false,
        data: action.form,
        status: constants.EDIT_FORM_SUCCESS
      };

    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer
});
