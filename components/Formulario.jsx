import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DBmodel from '../models/DBm';

const LoginForm = () => {
  const initialValues = {
    rut: '',
    password: '',
  };

  const validationSchema = Yup.object({
    rut: Yup.string().required('El Rut es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { rut, clave } = values;

      const dbmodel = await DBmodel.findOne({ rut, clave });

      if (dbmodel) {
        // Redirigir a la ruta dentro de la misma página
        window.location.href = '/'; // Cambia esto con la ruta deseada
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="rut">Rut:</label>
          <Field type="text" id="rut" name="rut" />
          <ErrorMessage name="rut" component="div" />
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