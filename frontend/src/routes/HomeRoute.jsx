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

const ifFavouritesExist = () => {
  if(favourites.length > 0) {
    return true
  } else {
    return false
  }
}

  return (
    <div className="home-route">
     <TopNavigation topicData={props.topicData} favData={ifFavouritesExist}/>
      
      <PhotoList photoData={props.photoData} favData={favouritesData} />
    </div>
  );
};

export default HomeRoute;
