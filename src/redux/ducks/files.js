const initialState = {
  title: "",

  tags: {
    centuries: [
      {
        id: "1",
        type: "1",
      },
      {
        id: "2",
        type: "2",
      },
      {
        id: "3",
        type: "3",
      },
      {
        id: "4",
        type: "4",
      },
      {
        id: "5",
        type: "5"
      },
      {
        id: "6",
        type: "6",
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
    //Изменение заголовка
    case "title/change": 
      return {
        ...state,
        materials: {
          ...state.materials,
          title: action.payload,
        },
      }
    
    //Изменение заголовка
    case "text/change": 
    return {
      ...state,
      materials: {
        ...state.materials,
        text: { ...state.materials.text, text: action.payload },
      },
    }

    //Добавление одного файла
    case "one/upload": 
      if(action.format === "image") {
        return {
          ...state,
          materials: {
            ...state.materials,
            photo: [
              ...state.materials.photo,
              {id: action.id, file: action.payload },
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
              {id: action.id, file: action.payload },
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
              {id: action.id, file: action.payload },
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
              {id: action.id, file: action.payload },
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
            {id: action.id, files: action.payload },
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
            {id: action.id, files: action.payload },
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
            {id: action.id, files: action.payload },
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
            {id: action.id, files: action.payload },
          ]
        },
      }
    }

    return state;  
    
    default: 
      return state;
  }
}

export const changeTitle = (value) => {
  return {
    type: "title/change",
    payload: value,
  }
}

export const changeText = (value) => {
  return {
    type: "text/change",
    payload: value,
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