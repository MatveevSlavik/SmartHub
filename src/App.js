import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import withLayout from './components/Layout/withLayout';
import LoginForm from './components/LoginForm/LoginForm';

import QuestionPageContent from './components/QuestionPageContent';
import { login } from './store/actions/authActions';
import { questionCreate } from './store/actions/questionActions';

const App = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleSubmitLogin = ({ values, setSubmitting }) => {
    setSubmitting(true);

    login(values)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        push('/');
      })
      .catch((_err) => {
        dispatch({ type: 'LOGIN_FAILED' });
      })
      .finally(() => setSubmitting(false));
  };

  const handleSubmitQuestion = ({
    values,
    resetForm,
    setStatus,
    setSubmitting,
  }) => {
    setSubmitting(true);
    questionCreate(values)
      .then(() => setStatus({ text: 'Вопрос успешно создан' }))
      .catch((err) => setStatus({ text: err.message }))
      .finally(() => {
        setSubmitting(false);
      });
    resetForm();
  };

  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => withLayout(<QuestionPageContent />)}
      />
      <Route
        path="/login"
        exact
        component={() => <LoginForm handleSubmit={handleSubmitLogin} />}
      />
      <Route
        path="/create-question"
        exact
        component={() =>
          withLayout(<QuestionForm handleSubmit={handleSubmitQuestion} />)
        }
      />
      <Route
        path="/questions"
        exact
        component={() => withLayout(<QuestionPageContent />)}
      />
    </Switch>
  );
};

export default App;
