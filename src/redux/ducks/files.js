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
    comment: "",
    centuries: [],
    types: [],
  },

  materials: {
    title: "",

    text: {
      text: "",
    },
  
    image: {
      one: [],
      group: [],
    },

    audio:  {
      one: [],
      group: [],
    },

    application:  {
      one: [],
      group: [],
    },

    video:  {
      one: [],
      group: [],
    },
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
    
    //Изменение текста
    case "text/change": 
      return {
        ...state,
        materials: {
          ...state.materials,
          text: { ...state.materials.text, text: action.payload },
        },
      }

    //Изменение тегов
    case "tag/centuries/change": 
      return {
        ...state,
        tag: {
          ...state.tag,
          centuries: [...state.tag.centuries, action.payload], 
        },
      }

    case "tag/types/change": 
      return {
        ...state,
        tag: {
          ...state.tag,
          types: [...state.tag.types, action.payload],
        },
      }

    case "tag/centuries/remove": 
      return {
        ...state,
        tag: {
          ...state.tag,
          centuries: state.tag.centuries.filter(century => century.id !== action.payload), 
        },
      }

    case "tag/types/remove": 
      return {
        ...state,
        tag: {
          ...state.tag,
          types: state.tag.types.filter(type => type.id !== action.payload),
        },
      }
    
    // Изменение текста
    case "tag/title/change": 
      return {
        ...state,
        tag: {
          ...state.tag,
          name: action.payload,
        },
      }

    case "tag/year/change": 
      return {
        ...state,
        tag: {
          ...state.tag,
          year: action.payload,
        },
      }

    case "tag/author/change": 
      return {
        ...state,
        tag: {
          ...state.tag,
          author: action.payload,
        },
      }

    case "tag/comment/change": 
      return {
        ...state,
        tag: {
          ...state.tag,
          comment: action.payload,
        },
      }

    //Добавление одного файла
    case "text/upload": 
        return {
          ...state,
          tag: {
            name: "",
            year: "",
            author: "",
            comment: "",
            centuries: [],
            types: [],
          },
          materials: {
            ...state.materials,
            text: {
              ...state.materials.text,
              text: action.payload,
              tag: action.tag,
            }
          },
        };


    case "one/upload": 
      return {
        ...state,
        tag: {
          name: "",
          year: "",
          author: "",
          comment: "",
          centuries: [],
          types: [],
        },
        materials: {
          ...state.materials,
          [action.format]: {
            ...state.materials[action.format],
            one: [
              ...state.materials[action.format].one, 
              {id: action.payload.id, file: action.payload.file, tag: action.tag }
            ],
          }
        },
      };


    //добавление группы файлов
    case "group/upload":
    return {
      ...state,
      tag: {
        name: "",
        year: "",
        author: "",
        comment: "",
        centuries: [],
        types: [],
      },
      materials: {
        ...state.materials,
        [action.format]: {
          ...state.materials[action.format],
          group: [
            ...state.materials[action.format].group, 
            {id: action.payload.id, file: action.payload.file, tag: action.tag }
          ],
        }
      },
    };

    default: 
      return state;
  }
}

// Тэги
export const addedCenturies = (value) => {
  return {
    type: "tag/centuries/change",
    payload: value,
  }
}

export const addedTypes = (value) => {
  return {
    type: "tag/types/change",
    payload: value,
  }
}

export const removeCenturies = (id) => {
  return {
    type: "tag/centuries/remove",
    payload: id,
  }
}

export const removeTypes = (id) => {
  return {
    type: "tag/types/remove",
    payload: id,
  }
}

// Тексты
export const changeTitle = (value) => {
  return {
    type: "title/change",
    payload: value,
  }
}

export const changeTitleTag = (value) => {
  return {
    type: "tag/title/change",
    payload: value,
  }
}

export const changeYearTag = (value) => {
  return {
    type:  "tag/year/change",
    payload: value,
  }
}

export const changeAuthorTag = (value) => {
  return {
    type:  "tag/author/change",
    payload: value,
  }
}

export const changeCommentTag = (value) => {
  return {
    type: "tag/comment/change",
    payload: value,
  }
}

export const changeText = (value) => {
  return {
    type: "text/change",
    payload: value,
  }
}

// Файлы
export const UploadOneFail = (file, format, tag) => {
  return {
    type: "one/upload",
    payload: file,
    format,
    tag: tag,
  }
} 

export const UploadTextFail = (tag, file) => {
  return {
    type: "text/upload",
    payload: file,
    tag,
  }
} 

export const UploadGroupFails = (file, format, tag) => {
  return {
    type: "group/upload",
    payload: file,
    format,
    tag: tag,
  }
} 