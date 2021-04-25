import firebase from 'firebase';
import { v4 as uuid } from 'uuid';

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
