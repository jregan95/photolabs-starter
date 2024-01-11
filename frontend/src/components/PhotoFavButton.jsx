import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [heart, setHeart] = useState(false)
  const like = function() {
    return (
      heart === false ? setHeart(true) : setHeart(false)
    )
  }
  return (
    <div className="photo-list__fav-icon">
      <div onClick={like} className="photo-list__fav-icon-svg">
        
          <FavIcon selected={heart}/>
        
      </div>
    </div>
  );
}

export default PhotoFavButton;