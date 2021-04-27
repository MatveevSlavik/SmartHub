import firebase from 'firebase';

export const getTags =  (id, title) => {
  return firebase.firestore().collection("tags").get();
};
