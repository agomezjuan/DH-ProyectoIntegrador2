import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { registerSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';


function RegisterForm() {
  const { registerUser } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const resRegister = await registerUser(data);
      console.log('REGISTER RESPONSE', resRegister)
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      reset();
    }
  });

  return (
    <div className='flex flex-column justify-center bg-zinc-200 bg-opacity-70 py-20' > 
      <form onSubmit={onSubmit} >
          <div className="text-center">
            <h2 className="text-lg font-bold text-primary max-w-lg">Regístrate</h2>
          </div>
        <div>
          <input
            className="w-80 mt-7 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Nombre"
            type="text"
            {...register("firstName")}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        
        <div>
          <input
            className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Apellido"
            type="text"
            {...register("lastName")}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>

        <div>
          <input
            className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Correo electrónico"
            type="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
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
        <div className="flex justify-center">
          <button 
            type="submit"
            className="bg-primary px-3 font-semibold text-white p-2 mt-5 rounded-sm border border-solid border-primary"
            >
              Regístrate
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
