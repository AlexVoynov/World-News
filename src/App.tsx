import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./components/LoginPage/LoginPage";
import ExcerciseForm from "./components/ExcerciseForm/ExcerciseForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";

function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  const [usersFirstName, setUsersFirstName] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  // ta funkcja wykonuje się OD RAZU *PO* zmianie stanu autentykacji
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // rob cos po log in
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  // brak user => zalogowanie => tu zachodzi zmiana obiektu user => wywołanie onAuthStateChanged => user

  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar setAvatarClicked={setAvatarClicked} loggedIn={loggedIn}/>
        {/* <ExcerciseForm setUsersFirstName={setUsersFirstName}/> */}
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          {/* <Route path='/' element={<ExcerciseForm  setUsersFirstName={setUsersFirstName}  />} /> */}
          <Route path="/" element={<h1>To jest pusty url</h1>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;


// 1. Stwórz komponent UserPage.
// 2. Komponent UserPage wyświetlaj jako Route w App.tsx, od razu przekaż do UserPage stan loggedIn, nie zapomnij o interface w UserPage.
// 3. W UserPage wyświetlaj react fragment, w środku:
// - Typography variant h2, align center, w sxach: fontSize 2rem, my 1rem, borderBottom 1px solid #1976d2, pb .5rem. Text: Your profile
// - Typography variant h5, align center, w sxach: fontSize 1rem, my 1rem, mx auto. Text: Your email: *tutaj email użytkownika*. Email użytkownika jest dostępny na obiekcie auth (zaimportuj go z firebaseConfig), auth.currentUser.email
// - Button variant outlined, w sxach: display: block, mx auto, my 1rem. Nadaj mu onClick w którym będziesz wylogowywać użytkownika. Do tego posłuży ci funkcja signOut importowana z firebase/auth. Sama funkcja signOut przyjmuje 1 arugment: obiekt auth (firebaseConfig). Text buttona: Log out