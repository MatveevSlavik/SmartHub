import firebase from 'firebase';

export const getTags = () => {
  return firebase.firestore().collection('tags').get();
};
