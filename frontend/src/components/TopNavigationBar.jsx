import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import useApplicationData from 'hooks/useApplicationData'; 


const TopNavigation = (props) => {
  
    let favouriteExists = props.favData();

    const { getFavouritedPhotos, favourites, photoData, homePageData} = props
  const {state} = useApplicationData();
    
    
    const handleClick = () => {
      homePageData(state.photoData)
    }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>PhotoLabs</span>
      <TopicList topicData={props.topicData} showByTopic={props.showByTopic}/>
      <FavBadge isFavPhotoExist={favouriteExists} getFavouritedPhotos={getFavouritedPhotos} favourites={favourites} photoData={photoData}/>
    </div>
  )
}

export default TopNavigation;