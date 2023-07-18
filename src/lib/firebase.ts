import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAAQjT-9_TwnsDIj-XQ8x_zw_2gLyOODR0',
  authDomain: 'book-catalog-15f6c.firebaseapp.com',
  projectId: 'book-catalog-15f6c',
  storageBucket: 'book-catalog-15f6c.appspot.com',
  messagingSenderId: '827007274928',
  appId: '1:827007274928:web:17c1eb951b1ad347715075',

  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
