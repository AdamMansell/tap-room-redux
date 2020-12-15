import reducers from '../../reducers';

test('formVisibleOnPage reducer', () => {
  let state;
  state = reducers({ formVisibleOnPage: false }, { type:'CHANGE_FORM_VISIBLE_ON_PAGE', payload: true });
  expect(state).toEqual({formVisibleOnPage: true});
});