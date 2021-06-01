import { createResource } from 'redux-rest-resource';
import { REACT_APP_API_URL } from '../constants/main';

export const { types, actions, rootReducer } = createResource({
  name: 'post',
  url: `${REACT_APP_API_URL}/posts/:id`,

  actions: {
    fetch: {
      url: `${REACT_APP_API_URL}/posts`,
    },
  },
});
