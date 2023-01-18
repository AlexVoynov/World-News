import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVevwbEt1yrduPaWmX71bvFCNxxlozaUg",
  authDomain: "zdfronpol18-sdanews.firebaseapp.com",
  projectId: "zdfronpol18-sdanews",
  storageBucket: "zdfronpol18-sdanews.appspot.com",
  messagingSenderId: "231702909149",
  appId: "1:231702909149:web:fab96425243e42c6308b34",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
