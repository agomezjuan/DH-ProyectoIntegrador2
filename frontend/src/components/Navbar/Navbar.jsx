import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from 'react-icons/fa6';
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const { isAuth, logout, profile } = useAuthStore();
  const [toastMessage, setToastMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleClick = () => {
    setLoading(true);
    setToastMessage(null);
    try {
      logout();
      setToastMessage({ type: 'success', message: 'Logged out successfully!' });
    } catch (error) {
      setToastMessage({ type: 'error', message: 'Logout failed. Please try again.' });
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
      }, 5000); 
    }
    return () => clearTimeout(timer);
  }, [toastMessage, navigate]);


  return (
    <div className='navbar bg-base-100'>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost text-primary'>
         
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>
      <div className='flex-1'>
      <Link to='/'>
        <h3 className='btn btn-ghost text-xl text-primary'>MealMap</h3>
      </Link>
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
            <li><Link to='/login' >Login</Link></li>
            <li><Link to='/register' >Registro</Link></li>
            </>
            :
            <>
            <li><Link to='/profile' >Perfil</Link></li>
            <li>
              <a onClick={handleClick} >Logout</a>
            </li>
            </>
            }
          </ul>
        </details>
      </div>
      {toastMessage && (
        <div className='toast toast-center toast-middle'>
          <div className={`alert ${toastMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}
