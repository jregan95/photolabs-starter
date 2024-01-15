import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss'
import useApplicationData from './hooks/useApplicationData';


const App = () => {

  const {
    state,
    openModal,
    setPhotoInfo,
    favouritesData,
    ifFavouritesExist,
    showByTopic,
    ifPhotoShouldHaveHeart
  } = useApplicationData();

  
  return (
    <div className="App">

      <HomeRoute 
      topicData={state.topicData} 
      photoData={state.photoData} 
      setOpenModal={openModal} 
      setPhotoInfo={setPhotoInfo} 
      iffavData={ifFavouritesExist} 
      favData={favouritesData} 
      showByTopic={showByTopic} 
      ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart} 
      />

      {state.openModal && <PhotoDetailsModal  
      setOpenModal={openModal} 
      photoInfo={state.photoInfo} 
      favData={favouritesData} 
      ifFavouritesExist={ifFavouritesExist} 
      ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart}
      /> }

    </div> 
  );
};

export default App;
