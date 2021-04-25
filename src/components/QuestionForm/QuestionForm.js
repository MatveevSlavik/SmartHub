import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { Field, Form, withFormik } from 'formik';
import { array, object, string } from 'yup';

import useStyles from './useStyles';

import TextField from '../TextField';
import Autocomplete from '../Autocomplete';
import { useSelector } from 'react-redux';
import AlertMessage from '../AlertMessage';

const loginSchema = object().shape({
  question: string().required().min(8),
  tags: array()
    .test('tags', 'tags is a required field', (tags) => {
      return !!tags.length;
    })
    .nullable()
    .required(),
  description: string().required().min(15),
});

const QuestionForm = ({ isValid, isSubmitting, dirty, status }) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) push('/login');
  }, [push, isLoggedIn]);

  const options = [
    { id: 1, title: 'HTML' },
    { id: 2, title: 'CSS' },
  ];

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
            size="medium"
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
            size="medium"
            required
            options={options}
            component={Autocomplete}
            multiple
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
            size="medium"
            multiline
            rows={3}
            rowsMax={10}
            required
            component={TextField}
          />
          <Button
            className={classes.publish}
            type="submit"
            variant="outlined"
            size="small"
            disabled={!isValid || !dirty || isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={20} /> : 'Опубликовать'}
          </Button>
        </Form>
      </Grid>
      <AlertMessage text={status && status.text} />
    </Grid>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      question: '',
      tags: [],
      description: '',
    };
  },
  validationSchema: loginSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm, setStatus }) => {
    props.handleSubmit({ values, setSubmitting, resetForm, setStatus });
  },
})(QuestionForm);
