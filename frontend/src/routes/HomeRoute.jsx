import React, { useState } from 'react';

import PhotoList from '../components/PhotoList';

import TopNavigation from '../components/TopNavigationBar';


import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

const [favourites, setFavourites] = useState([])

const favouritesData = (photoID) => {
  if(!favourites.includes(photoID)) {
    setFavourites((prevFavourites) => [...prevFavourites, photoID])
    return favourites;
  } else {
    const updatedFavourites = favourites.filter((fav) => fav !== photoID);
    setFavourites(updatedFavourites);
    return favourites
    }
  
  
}

  return (
    <div className="home-route">
     <TopNavigation topicData={props.topicData} />
      
      <PhotoList photoData={props.photoData} favData={favouritesData} />
    </div>
  );
};

export default HomeRoute;
