import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  const {favData, photo, ifPhotoShouldHaveHeart} = props

  
  //On click of the heart it will call the like function as well as push the image id into the favourites data
  const handleClick = () => {
    
    favData(photo); 
  }

  
  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
          <FavIcon  selected={ifPhotoShouldHaveHeart(photo)}/>
      </div>
    </div>
  );

}

export default PhotoFavButton;