import React from 'react';

import PhotoList from '../components/PhotoList';

import TopNavigation from '../components/TopNavigationBar';


import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
     <TopNavigation topicData={props.topicData} />
      
      <PhotoList photoData={props.photoData}/>
    </div>
  );
};

export default HomeRoute;
