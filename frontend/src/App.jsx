import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useTrue from './hooks/isTrue';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss'



const App = () => {

  const [modality, setModality] = useTrue(false) 

  
  return (
    <div className="App">
      <HomeRoute topicData={topics} photoData={photos} setModality={setModality}/>
      {modality && <PhotoDetailsModal />}
    </div> 
  );
};

export default App;
