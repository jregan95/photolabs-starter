import { useState } from 'react';

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







