import { Formik } from "formik";
import Input from "../components/Forms/Input";

import { 
  Container,
  LoginForm,
  CustomButton as Button,
} from '../styles/pages/login';

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Log in</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {
            email: ''
          };
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <LoginForm onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && errors.email}
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Senha"
            />
            {errors.password && touched.password && errors.password}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </LoginForm>
        )}
      </Formik>
    </Container>
  );
}

export default Login;