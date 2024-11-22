import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUdYeGBb7NzwY27IDrAx7Iw6cKe9owRJE",
  authDomain: "dragon-news-layout-6eaa0.firebaseapp.com",
  projectId: "dragon-news-layout-6eaa0",
  storageBucket: "dragon-news-layout-6eaa0.firebasestorage.app",
  messagingSenderId: "540971449778",
  appId: "1:540971449778:web:4ee3073428456780f3f8ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)