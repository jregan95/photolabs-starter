const favouritesData = (photoID) => {
    
  if(!favourites.includes(photoID)) {
    setFavourites((prevFavourites) => [...prevFavourites, photoID])
    return favourites;
  } else {
    const updatedFavourites = favourites.filter((fav) => fav !== photoID);
    setFavourites(updatedFavourites);
    return favourites
    }   
}



//Used to give heart notification if a user has favourited any data
const ifFavouritesExist = () => {
  return favourites.length > 0;
  }