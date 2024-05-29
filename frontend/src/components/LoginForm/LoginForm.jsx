import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { loginSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';


function LoginForm() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      grant_type: "password",
      client_id: "frontend",
      username: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
  
    try {
      const resLogin = await login(data);
      console.log('RESPONSE', resLogin) 
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      reset();
    }
  });

  return (
    <div className='flex flex-column text-center bg-zinc-200 bg-opacity-70 py-20' > 
      <div className="text-center mx-auto">
        <form onSubmit={onSubmit}>
          <h2 className='text-lg font-bold text-primary max-w-lg'>Iniciar Sesión</h2>
          <div>
            <input
              className="w-80 mt-7 p-1 italic rounded-sm border border-solid border-primary"
              placeholder="Correo electrónico"
              type="text"
              {...register("username")}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div>
            <input
              className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
              placeholder="Contraseña"
              type="password"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          
          <button 
            type="submit"
            className="bg-primary px-3 font-semibold text-white p-2 mt-5 rounded-sm border border-solid border-primary"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="">
          <button className='btn btn-ghost text-primary'>
            <Link to='/register' >
              Registrarse
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
