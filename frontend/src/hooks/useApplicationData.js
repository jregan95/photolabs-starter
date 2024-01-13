import { useReducer, useState } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL: 'TOGGLE_MODAL'
}



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favourites: [...state.favourites, action.payload]}
    { /* insert all relevant actions as case statements*/ }  
    

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favourites: state.favourites.filter((id) => id !== action.payload)
      }

    case ACTIONS.SELECT_PHOTO:
      return {...state, photoInfo: action.payload}

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return{...state, photoInfo}

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload}

    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.payload}

    case ACTIONS.TOGGLE_MODAL:
      return {...state, openModal: action.payload}

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = () => {

  const initialState = {
    openModal: false,
    favourites: [],
    photoInfo: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState)


  const openModal = () => {
    dispatch({type: ACTIONS.TOGGLE_MODAL, payload: !state.openModal});
  };

  const setPhotoInfo = (value) => {
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: value});
  };


  const favouritesData = (photoID) => {
      if(state.favourites.includes(photoID)) {
        const updatedFavourites = currentFavourites.filter((fav) => fav !== photoID);
        dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: updatedFavourites})
      } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photoID})
    }
  }
  
  //Used to give heart notification if a user has favourited any data
  const ifFavouritesExist = () => {
    return state.favourites && state.favourites.length > 0;
    }

    return {
      state,
      openModal,
      setPhotoInfo,
      favouritesData,
      ifFavouritesExist
    }
  
};

export default useApplicationData;







