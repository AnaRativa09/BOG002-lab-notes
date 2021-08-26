import { db } from './firebaseConfig';

// Add docs to collection
const saveNote = async (collection, objDataNote) => {
  await db.collection(collection).doc().set(objDataNote);
};

const updateNote = () => console.log('Holi');

// const deleteNote = (id) => db.collection('notes').doc(id).delete().then(() => {
//   console.log('Document successfully deleted!');
// })
//   .catch((error) => {
//   console.error('Error removing document: ', error);
// });
const editNote = () => console.log('Holi');

export { saveNote, updateNote, editNote };
