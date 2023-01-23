import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./components/LoginPage/LoginPage";
import ExcerciseForm from "./components/ExcerciseForm/ExcerciseForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import UserPage from "./components/UserPage/UserPage";
import { Typography } from "@mui/material";
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
        <Navbar setAvatarClicked={setAvatarClicked} loggedIn={loggedIn} />
        {/* <ExcerciseForm setUsersFirstName={setUsersFirstName}/> */}
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          {/* <Route path='/' element={<ExcerciseForm  setUsersFirstName={setUsersFirstName}  />} /> */}
          <Route path="/" element={<h1>To jest pusty url</h1>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage loggedIn={loggedIn} />} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;


