import React from 'react';
import { Route,  Switch } from 'react-router-dom';
import QuestionForm from './components/Layout/QuestionForm/QuestionForm';
import withLayout from './components/Layout/withLayout';
import LoginForm from './components/LoginForm/LoginForm';

import QuestionPageContent from './components/QuestionPageContent/QuestionPageContent';

const App = () => {
  return (
      <Switch>
        {/* <QuestionPageContent /> */}
        <Route path="/" exact component={()=>withLayout(<QuestionPageContent/>)} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/createQuestion" exact component={()=>withLayout(<QuestionForm/>)} />

      </Switch>
  );
};

export default App;
