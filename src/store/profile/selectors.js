export function getProfileView(state) {
  return state.profile.view.data;
}

export function getProfileEdit(state) {
  return state.profile.edit.data;
}

export function getHasChanged(state) {
  return state.profile.edit.changed;
}

export function getEditChoices(state) {
  return state.profile.edit.choices;
}

export function getEditLocations(state) {
  return state.profile.edit.locations;
}

export function getisEditOpen(state) {
  return state.profile.edit.isEditOpen;
}
