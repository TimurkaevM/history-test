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
    title: "",

    text: {
      text: "",
    },
  
    photo: [],
  
    photos: [],

    audio: [],
  
    audios: [],

    document: [],
  
    documents: [],

    video: [],
  
    videos: [],
  },

};

export default function files( state = initialState, action ) {
  switch(action.type) {
    //Добавление одного файла
    case "one/upload": 
      if(action.format === "image") {
        return {
          ...state,
          materials: {
            ...state.materials,
            photos: [
              ...state.materials.photo,
              {photoId: action.id, file: action.payload },
            ]
          },
        }
      }

      if(action.format === "video") {
        return {
          ...state,
          materials: {
            ...state.materials,
            video: [
              ...state.materials.video,
              {videoId: action.id, file: action.payload },
            ]
          },
        }
      }

      if(action.format === "application") {
        return {
          ...state,
          materials: {
            ...state.materials,
            document: [
              ...state.materials.document,
              {documentId: action.id, file: action.payload },
            ]
          },
        }
      }

      if(action.format === "audio") {
        return {
          ...state,
          materials: {
            ...state.materials,
            audio: [
              ...state.materials.audio,
              {audioId: action.id, file: action.payload },
            ]
          },
        }
      }

      return state;

    //добавление группы файлов
    case "group/upload": 
    if(action.format === "image") {
      return {
        ...state,
        materials: {
          ...state.materials,
          photos: [
            ...state.materials.photos,
            {photoId: action.id, files: action.payload },
          ]
        },
      }
    }

    if(action.format === "video") {
      return {
        ...state,
        materials: {
          ...state.materials,
          videos: [
            ...state.materials.videos,
            {videoId: action.id, files: action.payload },
          ]
        },
      }
    }

    if(action.format === "application") {
      return {
        ...state,
        materials: {
          ...state.materials,
          documents: [
            ...state.materials.document,
            {documentsId: action.id, files: action.payload },
          ]
        },
      }
    }

    if(action.format === "audio") {
      return {
        ...state,
        materials: {
          ...state.materials,
          audios: [
            ...state.materials.audios,
            {audioId: action.id, files: action.payload },
          ]
        },
      }
    }

    return state;  
    
    default: 
      return state;
  }
}

export const UploadOneFail = (file, format, generateId) => {
  return {
    type: "one/upload",
    payload: file,
    format,
    id: generateId(),
  }
} 

export const UploadGroupFails = (newArr, format, generateId) => {
  return {
    type: "group/upload",
    payload: newArr,
    format,
    id: generateId(),
  }
} 