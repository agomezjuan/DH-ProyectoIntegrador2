import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email('Correo no válido')
    .required('Correo es requerido'),
  password: Yup.string()
    .min(6, 'Contraseña debe ser mayor a 6 caracteres')
    .required('Contraseña es requerida'),
});

export const registerSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Nombre es requerido')
      .min(2, 'Nombre debe ser mayor a 2 caracteres')
      .max(20, 'Nombre no debe ser mayor a 20 caracteres'),
    lastName: Yup.string()
      .required('El apellido es requerido')
      .min(2, 'Apellido debe ser mayor a 2 caracteres')
      .max(20, 'Apellido no debe ser mayor a 20 caracteres'),
    email: Yup.string()
      .email('Correo no válido')
      .required('Correo es requerido'),
    password: Yup.string()
      .required('Contraseña es requerida')
      .min(6, 'Contraseña debe ser mayor a 6 caracteres'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirma tu contraseña')
  });

  export const updasteUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Nombre debe ser mayor a 2 caracteres')
      .max(20, 'Nombre no debe ser mayor a 20 caracteres'),
    lastName: Yup.string()
      .min(2, 'Apellido debe ser mayor a 2 caracteres')
      .max(20, 'Apellido no debe ser mayor a 20 caracteres'),
  })


  export const changePasswordSchema = Yup.object().shape({
    username: Yup.string()
      .email('Correo no válido')
      .required('Correo es requerido'),
    password: Yup.string()
      .min(6, 'Contraseña debe ser mayor a 6 caracteres')
      .required('Contraseña es requerida'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirma tu contraseña')
  });
