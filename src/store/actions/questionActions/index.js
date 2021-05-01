import firebase from 'firebase';
import { v4 as uuid } from 'uuid';

export const questionCreate = (data) => {
  const id = uuid();

  const { displayName } = firebase.auth().currentUser;

  return firebase
    .firestore()
    .collection('questions')
    .doc(id)
    .set({
      id,
      createdAt: new Date().getTime(),
      nickname: displayName,
      ...data,
    });
};

export const fetchQuestions = () => {
  return firebase.firestore().collection('questions').get();
};

export const fetchQuestion = (id) => {
  return firebase.firestore().collection('questions').doc(id).get();
};
