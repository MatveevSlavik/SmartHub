import firebase from 'firebase';

export const getUsers = () => {
  return firebase.firestore().collection('users').get();
};
