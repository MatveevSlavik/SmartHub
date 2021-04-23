import React from 'react';
import { object, string } from 'yup';
import { withFormik, Form, Field } from 'formik';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';

import TextField from '../TextField';

import useStyles from './useStyles';

const loginSchema = object().shape({
  email: string().email().required(),
  password: string().required().min(6),
});

const LoginForm = ({ isValid, isSubmitting, dirty }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Paper elevation={3} >
      <Grid container justify="center">
        <Typography variant="h6" paragraph>
          Login
        </Typography>
      </Grid>
      <Form>
        <Grid
          container
          spacing={3}
          item
          xs={12}
          md={3}
          style={{ margin: '0 auto' }}
        >
          <Grid item xs={12}>
            <Field name="email" label="Email" required component={TextField} />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="password"
              label="Password"
              type="password"
              required
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!isValid || !dirty || isSubmitting}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Form>
      </Paper>
    </Box>
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
