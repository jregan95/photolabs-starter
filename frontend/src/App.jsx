import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
//import useTrue from './hooks/isTrue';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss'
//import usePhotoInfo from './hooks/usePhotoInfo';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    state,
    openModal,
    setPhotoInfo,
    favouritesData,
    ifFavouritesExist,
    showByTopic,
    like,
    ifPhotoShouldHaveHeart
  } = useApplicationData();

  //Used to give heart notification if a user has favourited any data
  // const ifFavouritesExist = () => {
  //   return favourites.length > 0;
  //   }
  
  return (
    <div className="App">
      <HomeRoute 
      topicData={state.topicData} 
      photoData={state.photoData} 
      setOpenModal={openModal} 
      setPhotoInfo={setPhotoInfo} 
      iffavData={ifFavouritesExist} 
      favData={favouritesData} 
      state={state} 
      showByTopic={showByTopic} 
      ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart} 
      favourites={state.favourites} 
      like={like}/>

      {state.openModal && <PhotoDetailsModal  
      setOpenModal={openModal} 
      photoInfo={state.photoInfo} 
      favData={favouritesData} 
      state={state} 
      ifFavouritesExist={ifFavouritesExist} 
      like={like} 
      ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart}/> }
    </div> 
  );
};

export default App;
