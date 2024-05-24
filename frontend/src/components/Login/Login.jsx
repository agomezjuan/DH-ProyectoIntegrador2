import { useRef } from "react"
import { useForm } from "react-hook-form"
// import { loginRequest, profileRequest } from "../api/auth";
// import { useAuthStore } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  // const setToken = useAuthStore((state) => state.setToken);
  // const setProfile = useAuthStore((state) => state.setProfile);
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
      correo: "",
      password: "",
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit(async (data) => {
    // reset({
    //   nombre: '',
    //   correo: '',
    //   password: '',
    //   confirmarPassword: '',
 
    // })

    // const resLogin = await loginRequest(data);
    // setToken(resLogin.data.token);

    // const resProfile = await profileRequest();
    // setProfile(resProfile.data);

    // navigate("/dashboard");
    reset();
  });

  return (
    <div className='flex flex-column justify-center w-1/2 bg-zinc-100 p-28' > 
    <form onSubmit={onSubmit}>
      <div>
    <h2 className='text-lg font-bold text-primary max-w-lg'>Iniciar Sesión</h2>
      <div>
        <input
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
      
      <button 
      type="submit"
      className="bg-primary text-white p-2"
      >
        Iniciar Sesión
      </button>

      {/* <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre>
      <h3>Hello {watch("nombre")}</h3> */}
      </div>
    </form>
    </div>
  );
}

export default Login;