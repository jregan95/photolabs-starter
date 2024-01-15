import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';



const HomeRoute = (props) => {

  const {topicData, iffavData, photoData, favData, setOpenModal, setPhotoInfo, showByTopic, ifPhotoShouldHaveHeart, getFavouritedPhotos, favourites, homePageData} = props
 
  return (
    <div className="home-route">
     <TopNavigation topicData={topicData} showByTopic={showByTopic} favData={iffavData} getFavouritedPhotos={getFavouritedPhotos} favourites={favourites} photoData={photoData} homePageData={homePageData}/>
      
      <PhotoList photoData={photoData} favData={favData} setOpenModal={setOpenModal} setPhotoInfo={setPhotoInfo} ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart} />
    </div>
  );
};

export default HomeRoute;
