import React from 'react';
import { object, string } from 'yup';
import { withFormik, Field, Form } from 'formik';
import { Button, Grid, Paper, Typography } from '@material-ui/core';

import TextField from '../TextField';

import useStyles from './useStyles';
import { useHistory } from 'react-router';

const loginSchema = object().shape({
  email: string().email().required(),
  password: string().required().min(6),
});

const LoginForm = ({ isValid, isSubmitting, dirty }) => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <Grid className={classes.wrapper} item xs={12} container justify="center">
      <Paper elevation={3}>
        <Grid item xs={10}>
          <Typography className={classes.title}>Вход</Typography>
          <Typography className={classes.mainText}>E-mail</Typography>
          <Form>
            <Field
              className={classes.input}
              name="email"
              label="Email"
              required
              component={TextField}
            />
            <Typography className={classes.mainText}>Пароль</Typography>
            <Field
              className={classes.input}
              name="password"
              label="Пароль"
              type="password"
              required
              component={TextField}
            />
            <Button
              className={classes.signInButton}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!isValid || !dirty || isSubmitting}
            >
              Войти
            </Button>
          </Form>
          <Button
            onClick={() => {
              push('/sign-up');
            }}
            className={classes.registerButton}
            variant="contained"
            color="primary"
          >
            Создать аккаунт
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      email: '',
      password: '',
    };
  },
  validationSchema: loginSchema,
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.handleSubmit({ values, setSubmitting, setErrors });
  },
})(LoginForm);
