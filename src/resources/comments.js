import { createResource } from 'redux-rest-resource';
import { REACT_APP_API_URL } from '../constants/main';

export const { types, actions, rootReducer } = createResource({
  name: 'comment',
  url: `${REACT_APP_API_URL}/comments/:id`,

  actions: {
    fetch: {
      url: `${REACT_APP_API_URL}/comments`,
    },
  },
});
