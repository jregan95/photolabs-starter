import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useTrue from './hooks/isTrue';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss'
import usePhotoInfo from './hooks/usePhotoInfo';



const App = () => {
  
  const [favourites, setFavourites] = useState([])

  //Creates a favourites data array to hold users favourites in memory
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


  //Will open the modal for more details on indvidual function. (UseTrue helper in hooks file)
  const [openModal, setOpenModal] = useTrue(false)

  //Will set infor for Modal photo
  const [photoInfo, setPhotoInfo] = usePhotoInfo() 

  
  return (
    <div className="App">
      <HomeRoute topicData={topics} photoData={photos} setOpenModal={setOpenModal} setPhotoInfo={setPhotoInfo} iffavData={ifFavouritesExist} favData={favouritesData}/>
      {openModal && <PhotoDetailsModal  setOpenModal={setOpenModal} photoInfo={photoInfo}/>}
    </div> 
  );
};

export default App;
