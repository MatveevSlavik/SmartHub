import firebase from 'firebase/app';

export const login = ({ email, password }) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
