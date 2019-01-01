import * as constants from "./constants";

export const setIsEditOpen = isEditOpen => ({
  type: constants.SET_EDIT_STATE,
  isEditOpen
});

export const addChange = (fieldName, fieldValue) => ({
  type: constants.ADD_CHANGE,
  fieldName,
  fieldValue
});

export const setNewEditableForm = (form, choices, locations) => ({
  type: constants.SET_UP_EDIT_FORM,
  form,
  choices,
  locations
});

export const editFormPending = () => ({
  type: constants.EDIT_FORM_PENDING
});

export const editFormSuccess = form => ({
  type: constants.EDIT_FORM_SUCCESS,
  form
});
