import { auth } from './firebaseConfig';

// Create user with email and password
const saveUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// Sign in with email and password
const signUser = (email, password) => auth.signInWithEmailAndPassword(email, password);

// Update user
const updateUser = () => console.log('Holi');

export { saveUser, signUser, updateUser };
