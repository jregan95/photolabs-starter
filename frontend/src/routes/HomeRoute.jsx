import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';



const HomeRoute = (props) => {

  const {topicData, iffavData, photoData, favData, setOpenModal, setPhotoInfo} = props

  return (
    <div className="home-route">
     <TopNavigation topicData={topicData} favData={iffavData}/>
      
      <PhotoList photoData={photoData} favData={favData} setOpenModal={setOpenModal} setPhotoInfo={setPhotoInfo} />
    </div>
  );
};

export default HomeRoute;
