import React from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {

  // console.log(avatarClicked)
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

// 1. Stwórz stan avatarClicked w App.tsx. Wartość początkowa: false, typ useState: boolean.
// 2. Przekaż zmienną stanową i funkcję aktualizującą stan do komponentu Navbar.
// 3. W komponencie Navbar stwórz odpowiedni interface i odbierz propsy.
// 4. Przy kliknięciu na avatar: jeżeli stan avatarClicked jest ustawiony na false to zmień na true. Jeżeli jest ustawiony na true to zmień na false. Stwórz do tego odpowiednią funkcję i przypisz ją do onClicka na avatarze.