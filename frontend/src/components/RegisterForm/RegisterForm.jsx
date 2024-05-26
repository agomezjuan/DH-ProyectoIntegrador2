import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { profileRequest, registerRequest } from "../api/auth";
// import { useAuthStore } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";
// import { Errors } from "../errors";


function RegisterForm() {
  // const regis = useAuthStore((state) => state.register);
  // const err = useAuthStore((state) => state.errors);
  // const isAuth = useAuthStore((state) => state.isAuth);
  // const getProfile = useAuthStore((state) => state.getProfile);

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
      nombre: "",
      correo: "",
      password: "",
      confirmarPassword: "",
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit =  handleSubmit(async (data) => {
    console.log(data);
    // reset({
    //   nombre: '',
    //   correo: '',
    //   password: '',
    //   confirmarPassword: '',
 
    // })
    reset();
    // await regis(data);
    // await getProfile();
  });

  return (
    <div className='flex flex-column justify-center bg-zinc-100 p-20' > 
      <form onSubmit={onSubmit} >
          <div className="text-center">
            <h2 className="text-lg font-bold text-primary max-w-lg">Regístrate</h2>
          </div>
        <div>
          <input
            className="w-80 mt-7 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Nombre"
            type="text"
            name="nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              maxLength: 20,
              minLength: 2,
            })}
          />
          {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
          {errors.nombre?.type === "maxLength" && (
            <span>Nombre no debe ser mayor a 20 caracteres</span>
          )}
          {errors.nombre?.type === "minLength" && (
            <span>Nombre debe ser mayor a 2 caracteres</span>
          )}
        </div>

        <div>
          <input
            className="w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary"
            placeholder="Correo electrónico"
            type="email"
            name="correo"
            {...register("correo", {
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
          {errors.correo && <span>{errors.correo.message}</span>}
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