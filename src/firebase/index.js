import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUq-6b26Mx_QKVea4gtwzOupHrNmTx5Fw",
  authDomain: "todo-c4ba5.firebaseapp.com",
  projectId: "todo-c4ba5",
  storageBucket: "todo-c4ba5.appspot.com",
  messagingSenderId: "611891033669",
  appId: "1:611891033669:web:a9547c0fb9eb422d20152c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;