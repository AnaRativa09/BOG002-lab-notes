import { auth } from './firebaseConfig';

// Create user with email and password
const saveUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);

const updateUser = () => console.log('Holi');

export { saveUser, updateUser };
