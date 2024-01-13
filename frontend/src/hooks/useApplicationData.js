import { useReducer, useState } from 'react';

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const useApplicationData = () => {

  const [state, setState] = useReducer(reducer, {
    openModal: false,
    favourites: [],
    photoInfo: null,
  });


  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        const newFavourites = [...state.favourites, action.payload];
        return {...state, favourites: newFavourites }

        case ACTIONS.FAV_PHOTO_REMOVED:
          const updatedFavourites = state.favourites.filter((fav) => fav !== action.payload);
          return { ...state, favourites: updatedFavourites };

          case ACTIONS.SET_PHOTO_INFO:
            return { ...state, photoInfo: action.payload };
      
          case ACTIONS.OPEN_MODAL:
            return { ...state, openModal: !state.openModal };
      
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }


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
}




    





  


export default useApplicationData;







