const initialState = {
  title: "",

  tags: {
    centuries: [
      {
        id: "1",
        century: "1",
      },
      {
        id: "2",
        century: "2",
      },
      {
        id: "3",
        century: "3",
      },
      {
        id: "4",
        century: "4",
      },
      {
        id: "5",
        century: "5"
      },
      {
        id: "6",
        century: "6",
      },
    ],
    types: [
      {
        id: "1",
        type: "история",
      },
      {
        id: "2",
        type: "культура",
      },
      {
        id: "3",
        type: "технологии",
      }
    ]
  },

  tag: {
    name: "",
    year: "",
    author: "",
    centuries: [],
    types: [],
  },

  materials: {

  },

  text: {
    text: "",
  },

  photo: {
    file: [],
    tags: {},
  },

  photos: {
    files: [],
    tags: {}
  }

};

export default function files( state = initialState, action ) {
  switch(action.type) {
    case "one/upload": 
      if(action.format === "image") {
        return {
          ...state,
          photo: {
            ...state.one,
            file: [...state.photo.file, {photoId: action.photoId , file: action.payload }]
          }
        }
      }

      return state;
    
    default: 
      return state;
  }
}

export const UploadOneFail = (file, format, photoId) => {
  return {
    type: "one/upload",
    payload: file,
    format,
    photoId
  }
} 