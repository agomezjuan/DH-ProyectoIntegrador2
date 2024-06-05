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
      await login(data);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      reset();
      navigate("/");
    }
  });

  return (
    <div className='flex flex-column text-center bg-zinc-200 bg-opacity-80 py-16 rounded-md' > 
      <div className="text-center mx-auto">
        <form onSubmit={onSubmit}>
          <h2 className='text-lg font-bold text-primary max-w-lg'>Iniciar Sesión</h2>
          <div className="flex flex-col text-left">
            <input
              className="w-80 mt-7 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Correo electrónico"
              type="text"
              {...register("username")}
            />
            {errors.username && <span className="text-xs text-primary font-bold">{errors.username.message}</span>}
          </div>

          <div className="mt-1 flex flex-col text-left">
            <input
              className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Contraseña"
              type="password"
              {...register("password")}
            />
            {errors.password && <span className="text-xs text-primary font-bold">{errors.password.message}</span>}
          </div>
          
          <button 
            type="submit"
            className="bg-primary px-3 font-semibold text-white p-2 mt-8 rounded-sm border border-solid border-primary hover:bg-green-900"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-2">
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
