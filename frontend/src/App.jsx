import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useTrue from './hooks/isTrue';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss'
import useId from './hooks/setId';



const App = () => {

  const [modality, setModality] = useTrue(false)
  const [id, setId] = useId() 

  
  return (
    <div className="App">
      <HomeRoute topicData={topics} photoData={photos} setModality={setModality} setId={setId}/>
      {modality && <PhotoDetailsModal  modality={setModality} id={id}/>}
    </div> 
  );
};

export default App;
