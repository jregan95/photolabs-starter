import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';



const HomeRoute = (props) => {

  const {topicData, iffavData, photoData, favData, setOpenModal, setPhotoInfo, state, showByTopic, ifPhotoShouldHaveHeart, favourites, like} = props

  return (
    <div className="home-route">
     <TopNavigation topicData={topicData} showByTopic={showByTopic} favData={iffavData}/>
      
      <PhotoList photoData={photoData} favData={favData} setOpenModal={setOpenModal} setPhotoInfo={setPhotoInfo} state={state} ifPhotoShouldHaveHeart={ifPhotoShouldHaveHeart} favourites={favourites} like={like}/>
    </div>
  );
};

export default HomeRoute;
