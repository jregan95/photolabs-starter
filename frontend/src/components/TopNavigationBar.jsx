import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
    let favouriteExists = props.favData();
    
    
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={props.topicData}/>
      <FavBadge isFavPhotoExist={favouriteExists} />
    </div>
  )
}

export default TopNavigation;