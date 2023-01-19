import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./components/LoginPage/LoginPage";
import ExcerciseForm from "./components/ExcerciseForm/ExcerciseForm";
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  const [usersFirstName, setUsersFirstName] = useState<string>("")
  console.log(usersFirstName)
  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar setAvatarClicked={setAvatarClicked} />
        <ExcerciseForm setUsersFirstName={setUsersFirstName}/>
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
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


