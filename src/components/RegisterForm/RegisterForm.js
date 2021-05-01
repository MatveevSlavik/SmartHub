import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Field, Form, withFormik } from 'formik';
import { object, string } from 'yup';

import useStyles from './useStyles';

import TextField from '../TextField';
import { Link } from 'react-router-dom';

const loginSchema = object().shape({
  email: string().email().required(),
  nickname: string().required(),
  password: string().required().min(6),
  repeatPassword: string().required().min(6),
});

const RegisterForm = ({ isValid, isSubmitting, dirty }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.wrapper} container item>
      <Grid item xs={4}>
        <Paper elevation={3}>
          <Form className={classes.form}>
            <Typography paragraph className={classes.title}>
              Регистрация
            </Typography>
            <Field
              className={classes.input}
              name="email"
              label="E-mail"
              type="e-mail"
              variant="outlined"
              size="small"
              required
              component={TextField}
            />
            <Field
              className={classes.input}
              name="nickname"
              label="Никнейм"
              variant="outlined"
              size="small"
              required
              component={TextField}
            />
            <Field
              className={classes.input}
              name="password"
              label="Пароль"
              type="password"
              required
              component={TextField}
            />
            <Field
              className={classes.input}
              name="repeatPassword"
              label="Пароль ещё раз"
              type="password"
              required
              component={TextField}
            />
            <Button
              className={classes.registerButton}
              variant="outlined"
              type="submit"
              color="primary"
              size="small"
              disabled={!isValid || !dirty || isSubmitting}
            >
              Создать аккаунт
            </Button>
            <Box>
              <Typography>
                Вы можете <Link to="/login">авторизоваться</Link> или перейти на{' '}
                <Link to="/">главную страницу</Link>
              </Typography>
            </Box>
          </Form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      email: '',
      nickname: '',
      password: '',
      AgainPassword: '',
    };
  },
  validationSchema: loginSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.handleSubmit({ values, setSubmitting });
  },
})(RegisterForm);
