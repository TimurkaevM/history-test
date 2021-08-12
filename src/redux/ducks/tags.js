import { api } from '../../api/api';

export const CENTURIES_START = 'centuries/load/start';
export const CENTURIES_SUCCESS = 'centuries/load/success';
export const TYPES_START = 'types/load/start';
export const TYPES_SUCCESS = 'types/load/success';

const initialState = {
  centuries: [],
  types: [],
  loading: false,
  error: '',
};

export default function contribution(state = initialState, action) {
  switch (action.type) {
    case CENTURIES_START:
      return {
        ...state,
        loading: true,
      };

    case CENTURIES_SUCCESS:
      return {
        ...state,
        loading: false,
        centuries: action.payload.message,
      };

    case TYPES_START:
      return {
        ...state,
        loading: true,
      };

    case TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        types: action.payload.message,
      };

    default:
      return state;
  }
}

export const getCenturies = () => {
  return (dispatch) => {
    dispatch({
      type: CENTURIES_START,
    });

    api
      .get('/tags/century', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: CENTURIES_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getTypes = () => {
  return (dispatch) => {
    dispatch({
      type: TYPES_START,
    });

    api
      .get('/tags/information', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: TYPES_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
