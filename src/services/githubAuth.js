import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDkiqfk7bLYRce2wg85g_VWgcZKRSyYTZ8',
  authDomain: 'drivent-9d563.firebaseapp.com',
  projectId: 'drivent-9d563',
  storageBucket: 'drivent-9d563.appspot.com',
  messagingSenderId: '504547557255',
  appId: '1:504547557255:web:5b56d74adff884574c9d22'
};

initializeApp(firebaseConfig);

const provider = new GithubAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGithubPopup = () => signInWithPopup(auth, provider); 

export const githubSignIn = async() => {
  const response = await signInWithGithubPopup();
  return response;
};
