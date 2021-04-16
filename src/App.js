import React from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import withLayout from './components/Layout/withLayout';
import LoginForm from './components/LoginForm/LoginForm';

import QuestionPageContent from './components/QuestionPageContent/QuestionPageContent';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={()=>withLayout(<QuestionPageContent/>)} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/create-question" exact component={()=>withLayout(<QuestionForm/>)} />
      </Switch>
      </BrowserRouter>
  );
};

export default App;
