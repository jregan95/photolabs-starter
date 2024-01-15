import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  const { isFavPhotoExist, getFavouritedPhotos, favourites, photoData } = props
  const handleClick = () => {
    getFavouritedPhotos(photoData, favourites);
  }
  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;