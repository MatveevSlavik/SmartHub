import firebase from 'firebase/app';
import { v4 as uuid } from 'uuid';

export const login = ({ email, password }) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logOut = () => {
  return firebase.auth().signOut();
};

export const createUser = ({ email, password, nickname }) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const id = uuid();

      firebase
        .firestore()
        .collection('users')
        .doc(id)
        .set({ id, createdAt: new Date().getTime(), email, nickname });

      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: nickname,
      });
    })
    .catch((err) => err);
};
