import React from 'react';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { Field, Form, withFormik } from 'formik';
import { object, string } from 'yup';

import useStyles from './useStyles';

import TextField from '../TextField';

const loginSchema = object().shape({
  question: string().required().min(8),
  tags: string().required(),
  description: string().required().min(15),
});

const QuestionForm = ({ isValid, isSubmitting, dirty }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container>
      <Grid xs={12} item>
        <Form>
          <Typography variant="h6" className={classes.title}>
            Новый вопрос
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.mainText}>Суть вопроса</Typography>
          <Typography className={classes.secondText}>
            Сформулируйте вопрос так, чтобы сразу было понятно, о чём речь.
          </Typography>
          <Field
            className={classes.input}
            name="question"
            label="Question"
            variant="outlined"
            size="small"
            required
            component={TextField}
          />
          <Typography className={classes.mainText}>Теги вопроса</Typography>
          <Typography className={classes.secondText}>
            Укажите от 1 до 5 тегов - предметных областей, к которым вопрос
            относится.
          </Typography>
          <Field
            className={classes.input}
            name="tags"
            label="Tags"
            variant="outlined"
            size="small"
            required
            component={TextField}
          />
          <Typography className={classes.mainText}>Детали вопроса</Typography>
          <Typography className={classes.secondText}>
            Опишите в подробностях свой вопрос, чтобы получить более точный
            ответ.
          </Typography>
          <Field
            className={classes.input}
            name="description"
            label="Description"
            variant="outlined"
            size="small"
            required
            component={TextField}
          />
        </Form>
      </Grid>
      <Button
        className={classes.publish}
        variant="outlined"
        size="small"
        disabled={!isValid || !dirty || isSubmitting}
      >
        Опубликовать
      </Button>
    </Grid>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      question: '',
      tags: '',
      description: '',
    };
  },
  validationSchema: loginSchema,
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.handleSubmit({ values, setSubmitting, setErrors });
  },
})(QuestionForm);
