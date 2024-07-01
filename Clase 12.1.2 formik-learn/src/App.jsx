import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  function enviar(data) {
    console.log("Enviando", data);
  }
  function validateForm(values) {
    let errors = {};
    if (values.nombre.length > 10) {
      errors.nombre = "El nombre no puede mas de 10 digitos";
    }

    return errors;
  }
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          contrasena: "",
        }}
        onSubmit={enviar}
        validate={validateForm}
      >
        <Form>
          <Field name="nombre" type="text"></Field>
          <br />
          <ErrorMessage name="nombre"></ErrorMessage>
          <br />
          <br />
          <Field name="contrasena" type="password"></Field>
          <br />
          <br />
          <input type="submit" value="Enviar" />
        </Form>
      </Formik>
    </>
  );
}

export default App;
