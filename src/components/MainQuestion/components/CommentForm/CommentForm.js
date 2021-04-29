import React from 'react';
import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { Field, Form, withFormik } from 'formik';
import { object, string } from 'yup';

import TextField from '../../../TextField';
import AlertMessage from '../../../AlertMessage';

const commentSchema = object().shape({
  comment: string().required().min(15),
});

const CommentForm = ({ isValid, isSubmitting, dirty, status }) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography
          variant="overline"
          style={{ fontWeight: 'bold' }}
        >
          Ваш ответ на вопрос
        </Typography>
        <Divider style={{ background: 'rgba(0, 0, 0, 0.87)', margin: '8px 0 24px' }} />
        <Form>
          <Field
            name="comment"
            label="Комментарий"
            multiline
            rows={3}
            rowsMax={10}
            required
            component={TextField}
          />
          <Button
            type="submit"
            variant="outlined"
            size="small"
            disabled={!isValid || !dirty || isSubmitting}
            style={{ marginTop: 16 }}
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
      comment: '',
    };
  },
  validationSchema: commentSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm, setStatus }) => {
    props.handleSubmit({ values, setSubmitting, resetForm, setStatus });
  },
})(CommentForm);
