import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Конфиг Firebase (замени значения на свои)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || window.env.FIREBASE_API_KEY, // Загружается из .env или сервера
  authDomain: "project-3679881719439917630.firebaseapp.com",
  databaseURL: "https://project-3679881719439917630-default-rtdb.firebaseio.com",
  projectId: "project-3679881719439917630",
  storageBucket: "project-3679881719439917630.appspot.com",
  messagingSenderId: "486538558666",
  appId: "1:486538558666:web:3fd11ebc279e13f3408833"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт нужных модулей
export const auth = getAuth(app); // Для авторизации
export const db = getDatabase(app); // Для Realtime Database