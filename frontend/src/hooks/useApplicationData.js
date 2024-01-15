import { useReducer, useState, useEffect } from 'react';

//[{"id":1,"title":"People","slug":"people"},
//{"id":2,"title":"Nature","slug":"nature"},
//{"id":3,"title":"Travel","slug":"travel"}
//{"id":4,"title":"Animals","slug":"animals"},
//{"id":5,"title":"Fashion","slug":"fashion"}]


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  LIKED_PHOTO: 'LIKED_PHOTO'
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
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favourites: [...state.favourites, action.payload]}
    { /* insert all relevant actions as case statements*/ }  
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

  useEffect(() => { 
    fetch(`api/photos`)
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
  }, [])

  useEffect(() => {
    fetch(`api/topics`)
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
  }, [])

  useEffect(() => {
    if(state.topic) {
    fetch(`api/topics/photos/${state.topic}`)
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
    }
  }, [state.topic])


  const showByTopic = (topicId) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: topicId });
  }

  const openModal = () => {
    dispatch({type: ACTIONS.TOGGLE_MODAL, payload: !state.openModal});
  };

  const setPhotoInfo = (value) => {
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: value});
  };

  const like = (photoID) => {
    
    const updatedLikedPhotos = state.liked.includes(photoID)
      ? state.liked.filter((likedPhoto) => likedPhoto !== photoID)
      : [...state.liked, photoID];
    
      
      
    dispatch({ type: ACTIONS.LIKED_PHOTO, payload: updatedLikedPhotos });

    if (updatedLikedPhotos.includes(photoID)) {
      favouritesData(photoID);
    }
  };

 

  const favouritesData = (photoID) => {
      if(state.favourites.includes(photoID)) {
        const updatedFavourites = state.favourites.filter((fav) => fav !== photoID);
        dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: updatedFavourites})
      } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photoID})
    }
  }

  const ifPhotoShouldHaveHeart = (photoID) => {
    return state.liked.includes(photoID);
  };
  
  //Used to give heart notification if a user has favourited any data
  const ifFavouritesExist = () => {
    return state.favourites && state.favourites.length > 0;
    }

    return {
      state,
      openModal,
      setPhotoInfo,
      favouritesData,
      ifFavouritesExist,
      showByTopic,
      like,
      ifPhotoShouldHaveHeart
    }
  
};

export default useApplicationData;







