import React, {useEffect, useState} from 'react';
import {deleteFavoriteByUser, saveFavorite} from "../../api/favorites.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useAuthStore } from "../../store/authStore.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FavoriteIcon({isEnabled, recipeId}) {
  const [enabled, setEnabled] = useState(isEnabled);
  const { token, profile } = useAuthStore();

  useEffect(() => {

  }, [enabled]);

  const setFavorite = () => {
    if (profile && token) {
      saveFavorite(token, profile.email, recipeId)
        .then((response) => {
          console.log(response);
          setEnabled(true);
        });
    } else {
      toast.warn("Inicia sesión para guardar favoritos!")
    }
  };

  const unsetFavorite = () => {
    if (profile && token) {
      deleteFavoriteByUser(token, profile.email, recipeId)
        .then((response) => {
          console.log(response);
          setEnabled(false);
        });
    }
  };

  return (
    <div>
      {enabled ?
        <FontAwesomeIcon
            icon={solidHeart}
            style={{color: "red"}}
            onClick={unsetFavorite}
            beat
          />
        : <FontAwesomeIcon
            icon={faHeart}
            style={{color: "#fff"}}
            onClick={setFavorite}
          />
      }
      <ToastContainer />
    </div>
  );
}
