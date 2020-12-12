export default function formVisibleOnPage(state = false, action) {
  switch (action.type) {
    case "CHANGE_FORM_VISIBLE_ON_PAGE":
      return action.payload;
    default:
      return state;
  }
}
