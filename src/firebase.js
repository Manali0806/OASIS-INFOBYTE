import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq1PhSXeJPbB_S9oH3tfmtxNdK_ZxKF_Q",
  authDomain: "login-1e3ed.firebaseapp.com",
  projectId: "login-1e3ed",
  storageBucket: "login-1e3ed.appspot.com",
  messagingSenderId: "1023183974153",
  appId: "1:1023183974153:web:21be8e7fc4144cecc5edd8"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;