import { combineReducers } from "redux";

const initialState = {
  view: {
    status: null,
    data: {
      name: "Jane Doe",
      bio: `Mi rutrum malesuada. 
      Turpis vel posuere mattis accumsan sodales nulla dui sit. 
      Ipsum leo dui. Donec morbi eget. Nonummy mollis vel. 
      Pede dictum nec posuere tincidunt mauris nam consectetuer quam proin semper nec. 
      Felis litora donec rhoncus netus nunc nec mi velit felis quisque dui augue neque pharetra. 
      Aliquet laoreet quam. Sem quam metus purus ut duis lectus odio aut. Ornare enim nec. `
    }
  }
};

function viewReducer(state = initialState.view, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer
});
