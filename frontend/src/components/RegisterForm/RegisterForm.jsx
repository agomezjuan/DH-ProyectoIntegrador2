import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/authStore";
import { Link, useNavigate } from "react-router-dom";
// import { Errors } from "../errors";


function RegisterForm() {
  const {registerUser} = useAuthStore();
 

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      fistName: "",
      lastName: "",
      password: "",
      email: "",
    },
  });

  const onSubmit =  handleSubmit(async (data) => {
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
            name="fistName"
            {...register("firstName", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              maxLength: 20,
              minLength: 2,
            })}
          />
          {errors.firstName?.type === "required" && <span>Nombre requerido</span>}
          {errors.firstName?.type === "maxLength" && (
            <span>Nombre no debe ser mayor a 20 caracteres</span>
          )}
          {errors.firstName?.type === "minLength" && (
            <span>Nombre debe ser mayor a 2 caracteres</span>
          )}
        </div>
        
        <div>
          <input
            className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Apellido"
            type="text"
            name="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "El apellido es requerido",
              },
              maxLength: 20,
              minLength: 2,
            })}
          />
          {errors.lastName?.type === "required" && <span>Apellido requerido</span>}
          {errors.lastName?.type === "maxLength" && (
            <span>Apellido no debe ser mayor a 20 caracteres</span>
          )}
          {errors.lastName?.type === "minLength" && (
            <span>Apellido debe ser mayor a 2 caracteres</span>
          )}
        </div>


        <div>
          <input
            className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Correo electrónico"
            type="email"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <input
            className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Contraseña"
            type="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña es requerida",
              },
              minLength: {
                value: 6,
                message: "Contraseña debe ser mayor a 6 caracteres",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
{/* 
        <div>
          <input
            className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Confirma contraseña"
            type="password"
            name="confirmarPassword"
            {...register("confirmarPassword", {
              required: {
                value: true,
                message: "Confirmar contraseña es requerida",
              },
              minLength: {
                value: 6,
                message: "Confirmar contraseña debe ser mayor a 6 caracteres",
              },
              validate: (value) =>
                value === password.current || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmarPassword && (
            <span>{errors.confirmarPassword.message}</span>
          )}
        </div> */}
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