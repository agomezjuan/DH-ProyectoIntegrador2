import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from 'react-icons/fa6';
import { useAuthStore } from "../../store/authStore";
import { FormModal } from '../FormModal';
import { UpdateUserData } from '../UpdateUserData';
import {useUserProfileStore} from '../../store/userProfileStore';

export default function Navbar() {
  const { isAuth, logout, profile } = useAuthStore();
  const [toastMessage, setToastMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const {cleanPlanner} = useUserProfileStore();

  function handleUpdate() {
    setModalOpen(!isModalOpen)
  }

  function handleClose() {
    setModalOpen(false);
  }

  const goToUserProfile = (userId) => {
    navigate(`/user/${userId}`);
  };

  const handleCerrarSesion = () => {
    setLoading(true);
    setToastMessage(null);
    try {
      logout();
      cleanPlanner();
      setToastMessage({ type: 'success', message: 'Has cerrado sesión!' });
      navigate("/");
    } catch (error) {
      setToastMessage({ type: 'error', message: 'Algo falló. Intenta de nuevo.' });
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (toastMessage) {
      timer = setTimeout(() => {
        if (toastMessage.type === 'success') {
          navigate("/");
        }
        setToastMessage(null);
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [toastMessage, navigate]);


  return (
    <div className='navbar bg-base-100'>
      <div className='flex-none'>
      </div>
      <div className='flex-1'>
      <Link to='/'>
        <h3 className='btn btn-ghost text-xl text-primary'>MealMap</h3>
      </Link>
      <img src='/imagenes PI/logo MealPlanner.jpeg' alt='Logo' className='h-14 w-auto' />

      </div>
      

      <div className='flex items-center'>
        < details className="dropdown dropdown-end dropdown-hover">
          <summary className="m-1 btn">
            <FaRegCircleUser className='text-primary text-xl' />
            { isAuth ? <span>{profile.name}</span> : <span>Inicia Sesión</span> }
            </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {
            !isAuth ?
            <>
            <li><Link to='/login' >Iniciar Sesión</Link></li>
            <li><Link to='/register' >Registrarse</Link></li>
            </>
            :
            <>
            <li><a onClick={() => goToUserProfile(`${profile.sub}`)}>Perfil</a></li>
            <li><a onClick={handleUpdate} >Actualizar datos</a></li>
            <li><a onClick={handleCerrarSesion} >Cerrar Sesión</a></li>
            </>
            }
          </ul>
        </details>
      </div>
      {toastMessage && (
        <div className='toast toast-center toast-middle z-20'>
          <div className={`alert ${toastMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}
       {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <FormModal isOpen={isModalOpen} onClose={handleClose}>
          <UpdateUserData/>
        </FormModal>
        </div>
      )
      }
    </div>
  );
}
