import firebase from 'firebase';
import { v4 as uuid } from 'uuid';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const questionCreate = (data) => {
  const id = uuid();

  return firebase
    .firestore()
    .collection('questions')
    .doc(id)
    .set({ id, createdAt: new Date().getTime(), ...data });
};

export const fetchQuestions = () => {
  return firebase.firestore().collection('questions').get();
};

export const fetchQuestion = (id) => {
  return firebase.firestore().collection('questions').doc(id).get();
};

export const searchQuestions = (text) => {
  return firebase
    .firestore()
    .collection('questions')
    .where('question', '>=', capitalize(text))
    .get();
};
