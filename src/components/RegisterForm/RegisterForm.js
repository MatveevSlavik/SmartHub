import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Field, withFormik } from 'formik';
import { object, string } from 'yup';

import useStyles from './useStyles';

import TextField from '../TextField';

const loginSchema = object().shape({
  email: string().email().required(),
  nickname: string().required(),
  password: string().required().min(6),
  AgainPassword: string().required().min(6),
});

const RegisterForm = ({ isValid, isSubmitting, dirty }) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid className={classes.wrapper} container item>
        <Grid xs={3}>
          <Paper elevation={3}>
            <Typography className={classes.title}>Регистрация</Typography>
            <Typography className={classes.mainText}>E-mail</Typography>
            <Grid xs={10}>
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
              <Typography className={classes.mainText}>Никнейм</Typography>
              <Field
                className={classes.input}
                name="nickname"
                label="Никнейм"
                variant="outlined"
                size="small"
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
              <Typography className={classes.mainText}>
                Пароль ещё раз
              </Typography>
              <Field
                className={classes.input}
                name="AgainPassword"
                label="Пароль ещё раз"
                required
                component={TextField}
              />
            </Grid>
            <Button
              className={classes.registerButton}
              variant="outlined"
              type="submit"
              color="primary"
              size="small"
              disabled={!isValid || !dirty || isSubmitting}
            >
              Регистрация
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      email: '',
      nickname: '',
      password: '',
      AgainPassword: ''
    };
  },
  validationSchema: loginSchema,
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.handleSubmit({ values, setSubmitting, setErrors });
  },
})(RegisterForm);
