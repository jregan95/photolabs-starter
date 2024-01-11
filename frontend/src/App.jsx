import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';



const App = () => {
  return (
    <div className="App">
      <HomeRoute topicData={topics} photoData={photos}/>
    </div>
  );
};

export default App;
