import { db } from './firebaseConfig';

// Add docs to collection
const saveNote = (collection, objDataNote) => db.collection(collection).doc().set(objDataNote);

// Get edit notes for
const getEditNote = (id) => db.collection('review').doc(id).get();

// Update note
const updateNote = (collection, id, objUpdateNote) => {
  db.collection(collection).doc(id).update(objUpdateNote);
};

// Delete note
const deleteNote = (id) => db.collection('notes').doc(id).delete();

export {
  saveNote, getEditNote, updateNote, deleteNote,
};
