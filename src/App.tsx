import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar setAvatarClicked={setAvatarClicked} />
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          <Route path="/" element={<h1>To jest pusty url</h1>} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;
