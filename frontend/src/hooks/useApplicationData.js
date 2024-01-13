import { useState } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = () => {

  const [state, setState] = useState({
    openModal: false,
    favourites: [],
    photoInfo: null,
  });


  const openModal = () => {
    setState(prev => ({ openModal: !prev.openModal }));
  };

  const setPhotoInfo = (value) => {
    setState(prev => ({ ...prev, photoInfo: value }));
  };


  const favouritesData = (photoID) => {

    setState((prev) => { 
      const currentFavourites = prev.favourites || [];
      if(!currentFavourites.includes(photoID)) {
        return {...prev, favourites: [...currentFavourites, photoID]}
      
    } else {
      const updatedFavourites = currentFavourites.filter((fav) => fav !== photoID);
      
      return { ...prev, favourites: updatedFavourites };
      }   
    })
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







