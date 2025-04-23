// Importação do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA10U0aJzXM2G5m7I5BvS1hnhPcJseNlCI",
  authDomain: "indicapay-6162f.firebaseapp.com",
  projectId: "indicapay-6162f",
  storageBucket: "indicapay-6162f.appspot.com",
  messagingSenderId: "351397382935",
  appId: "1:351397382935:web:3027a03a266a5abee00552",
  measurementId: "G-KRGNYNVEDT"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta instância de autenticação e métodos para uso no cadastro e login
export { auth, createUserWithEmailAndPassword };
