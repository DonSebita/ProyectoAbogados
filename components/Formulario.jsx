import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('El nombre de usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí deberías realizar la validación de los datos ingresados en tu base de datos
    // y luego redirigir a la página externa si los datos son válidos

    // Simulamos la validación de datos
    const isValid = true; // Cambia esto según tu lógica de validación

    if (isValid) {
      window.location.href = '/paginaAbogados'; // Cambia esto con tu ruta externa
    }

    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="username">Nombre de Usuario:</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Iniciar Sesión</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;