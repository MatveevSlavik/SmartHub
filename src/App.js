import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import withLayout from './components/Layout/withLayout';
import LoginForm from './components/LoginForm/LoginForm';
import QuestionPageContent from './components/QuestionPageContent';
import TagsPageContent from './components/TagsPageContent/TagsPageContent';
import RegisterForm from './components/RegisterForm/RegisterForm';
import MainQuestion from './components/MainQuestion/MainQuestion';

import { login } from './store/actions/authActions';
import { questionCreate } from './store/actions/questionActions';

const App = () => {
  const {
    auth: { email },
  } = useStore().getState();
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
    questionCreate({ ...values, nickname: email })
      .then(() => {
        resetForm();
        setStatus({ text: 'Вопрос успешно создан' });
      })
      .catch((err) => setStatus({ text: err.message }))
      .finally(() => {
        setSubmitting(false);
      });
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
      <Route path="/sign-up" exact component={() => <RegisterForm />} />
      <Route
        path="/tags"
        exact
        component={() => withLayout(<TagsPageContent />)}
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
      <Route
        path="/questions/:id"
        exact
        component={() => withLayout(<MainQuestion />)}
      />
    </Switch>
  );
};

export default App;
