import { api } from '../../api/api';

export const MATERIAL_START = 'material/load/start';
export const MATERIAL_SUCCESS = 'material/load/success';
export const PHOTO_START = 'photo/load/start';
export const PHOTO_SUCCESS = 'photo/load/success';
export const VIDEO_START = 'video/load/start';
export const VIDEO_SUCCESS = 'video/load/success';
export const AUDIO_START = 'audio/load/start';
export const AUDIO_SUCCESS = 'audio/load/success';
export const DOCUMENT_START = 'document/load/start';
export const DOCUMENT_SUCCESS = 'document/load/success';

const initialState = {
  material: [],
  photo: [],
  video: [],
  audio: [],
  document: [],
  loading: false,
  error: '',
};

export default function contribution(state = initialState, action) {
  switch (action.type) {
    case MATERIAL_START:
      return {
        ...state,
        loading: true,
      };

    case MATERIAL_SUCCESS:
      if (action.payload.code === 404) {
        return {
          ...state,
          loading: false,
          material: action.payload.message,
        };
      }

      return {
        ...state,
        loading: false,
        material: action.payload.message['0'],
      };

    case PHOTO_START:
      return {
        ...state,
        loading: true,
      };

    case PHOTO_SUCCESS:
      if (action.payload.code === 404) {
        return {
          ...state,
          loading: false,
          photo: action.payload.message,
        };
      }

      return {
        ...state,
        loading: false,
        photo: action.payload.message['0'],
      };

    case VIDEO_START:
      return {
        ...state,
        loading: true,
      };

    case VIDEO_SUCCESS:
      if (action.payload.code === 404) {
        return {
          ...state,
          loading: false,
          video: action.payload.message,
        };
      }

      return {
        ...state,
        loading: false,
        video: action.payload.message['0'],
      };

    case AUDIO_START:
      return {
        ...state,
        loading: true,
      };

    case AUDIO_SUCCESS:
      if (action.payload.code === 404) {
        return {
          ...state,
          loading: false,
          audio: action.payload.message,
        };
      }

      return {
        ...state,
        loading: false,
        audio: action.payload.message['0'],
      };

    case DOCUMENT_START:
      return {
        ...state,
        loading: true,
      };

    case DOCUMENT_SUCCESS:
      if (action.payload.code === 404) {
        return {
          ...state,
          loading: false,
          document: action.payload.message,
        };
      }

      return {
        ...state,
        loading: false,
        document: action.payload.message['0'],
      };

    default:
      return state;
  }
}

export const getMaterial = () => {
  return (dispatch) => {
    dispatch({
      type: MATERIAL_START,
    });

    api
      .get('/user/contribution/material', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: MATERIAL_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getPhoto = () => {
  return (dispatch) => {
    dispatch({
      type: PHOTO_START,
    });

    api
      .get('/user/contribution/photo', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PHOTO_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getVideo = () => {
  return (dispatch) => {
    dispatch({
      type: VIDEO_START,
    });

    api
      .get('/user/contribution/video', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: VIDEO_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getAudio = () => {
  return (dispatch) => {
    dispatch({
      type: AUDIO_START,
    });

    api
      .get('/user/contribution/audio', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: AUDIO_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getDocument = () => {
  return (dispatch) => {
    dispatch({
      type: DOCUMENT_START,
    });

    api
      .get('/user/contribution/document', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DOCUMENT_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
