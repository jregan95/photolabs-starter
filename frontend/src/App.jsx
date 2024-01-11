import React from 'react';

import HomeRoute from 'routes/HomeRoute';


import './App.scss';



// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// const renderNumberOfPhotos = function(n) {
//   let arrOfPhotos = []
//   for(let y = 0; y < n; y++) {
//     arrOfPhotos.push(<PhotoListItem key={y} photo={sampleDataForPhotoListItem} />)
//   }
//   return arrOfPhotos;
// }

const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;

//key={sampleDataForPhotoListItem.id} location={sampleDataForPhotoListItem.location.city} photo={sampleDataForPhotoListItem.imageSource} username={sampleDataForPhotoListItem.username} profile={sampleDataForPhotoListItem.profile}
