import { db } from './firebaseConfig';

// Add docs to collection
const saveNote = async (collection, objDataNote) => {
  await db.collection(collection).doc().set(objDataNote);
};

const updateNote = () => console.log('Holi');

export { saveNote, updateNote };
