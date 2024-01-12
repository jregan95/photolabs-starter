import React, { useState } from 'react';

import PhotoList from '../components/PhotoList';

import TopNavigation from '../components/TopNavigationBar';


import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

let favourites = []

const favouritesData = (photoID) => {
  if(!favourites.includes(photoID)) {
    favourites.push(photoID);
  } else {
    favourites = favourites.filter((item) => {
      return item !== photoID
    })
  }
  console.log(favourites)
  return favourites;
}

  return (
    <div className="home-route">
     <TopNavigation topicData={props.topicData} />
      
      <PhotoList photoData={props.photoData} favData={favouritesData} />
    </div>
  );
};

export default HomeRoute;
