import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfTg4-P_YmsEmWgmrHgr4Kt_dewM_Fx8M",
  authDomain: "diarco-busalacchi.firebaseapp.com",
  projectId: "diarco-busalacchi",
  storageBucket: "diarco-busalacchi.appspot.com",
  messagingSenderId: "892964096153",
  appId: "1:892964096153:web:7424086a1a33e9d7ca5008",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
