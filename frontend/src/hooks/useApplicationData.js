import { useReducer, useEffect } from 'react';


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  LIKED_PHOTO: 'LIKED_PHOTO',
  GET_PHOTOS_BY_FAVOURITES: 'GET_PHOTOS_BY_FAVOURITES',
  SET_ORIGINAL_PHOTO_DATA: "SET_ORIGINAL_PHOTO_DATA"
}


const initialState = {
  openModal: false,
  favourites: [],
  photoInfo: null,
  photoData: [],
  topicData: [],
  topic: null,
  liked: []
};


function reducer(state, action) {
  
  switch (action.type) {

    case ACTIONS.GET_PHOTOS_BY_FAVOURITES:
      return {...state, photoData:  action.payload}

      case ACTIONS.SET_ORIGINAL_PHOTO_DATA:
        return {...state, photoData:  action.payload}

    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favourites: [...state.favourites, action.payload]}

    case ACTIONS.LIKED_PHOTO:
      return {...state, liked: action.payload}

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favourites: action.payload
      }
  
    case ACTIONS.SELECT_PHOTO:
      return {...state, photoInfo: action.payload}

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return{...state, photoInfo: action.payload}

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload}

    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.payload}

    case ACTIONS.TOGGLE_MODAL:
      return {...state, openModal: action.payload}

      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return {...state, topic: action.payload}

      

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = () => {


  const [state, dispatch] = useReducer(reducer, initialState)

  //Returns data for photos
  useEffect(() => { 
    fetch(`api/photos`)
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
  }, [])

  //Returns data for topics
  useEffect(() => {
    fetch(`api/topics`)
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
  }, [])

  //Returns photos for specific topics
  useEffect(() => {
    if(state.topic) {
    fetch(`api/topics/photos/${state.topic}`)
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
    }
  }, [state.topic])

  //Shows images based on secific topic by basing in a topic ID
  const showByTopic = (topicId) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: topicId });
  }

  // Toggels the modal 
  const openModal = () => {
    dispatch({type: ACTIONS.TOGGLE_MODAL, payload: !state.openModal});
  };

  //Grabs the photos info based on its id
  const setPhotoInfo = (value) => {
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: value});
  };

 //Adds images to a favourites data array
  const favouritesData = (photoID) => {
      if(state.favourites.includes(photoID)) {
        const updatedFavourites = state.favourites.filter((fav) => fav !== photoID);
        dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: updatedFavourites})
      } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photoID})
    }

  }

  //Returns true or false if a photo is liked to toggel the fav icon
  const ifPhotoShouldHaveHeart = (photoID) => {
    return state.favourites.includes(photoID);
  };
  
  //Used to give heart notification if a user has favourited any data
  const ifFavouritesExist = () => {
    return state.favourites && state.favourites.length > 0;
    }

  //Returns data for only favourited photos to display in the favourites tab
  const getFavouritedPhotos = (photoData, favourites) => {
    
    const updatedPhotoData = [ ... photoData]
    const results = updatedPhotoData.filter((item) => favourites.includes(item.id))
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_FAVOURITES, payload: results });
    
  }

  const homePageData = (photoData) => {
    dispatch({type: ACTIONS.SET_ORIGINAL_PHOTO_DATA, payload: photoData})
  };

    return {
      state,
      openModal,
      setPhotoInfo,
      favouritesData,
      ifFavouritesExist,
      showByTopic,
      ifPhotoShouldHaveHeart,
      getFavouritedPhotos,
      homePageData
    }
  
};

export default useApplicationData;







