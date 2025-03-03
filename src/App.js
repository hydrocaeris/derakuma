// start file App.js
import React, { useState } from 'react';
import { withTitle } from "./withTitle";

const App = (props) => {
  // Deklarasi dan inisialisasi state 'position' dengan nilai awal "Default"
  const [position, setPosition] = useState("Default"); // deklarasi dan inisialisasi, local scope

  // Fungsi untuk mengubah nilai 'position' saat mouse masuk (hover)
  const handleMouseEnter = () => {
    setPosition("Hovered"); // mengubah nilai position menjadi "Hovered"
  };

  // Fungsi untuk mengembalikan nilai 'position' saat mouse keluar dari elemen
  const handleMouseLeave = () => {
    setPosition("Default"); // mengembalikan nilai position ke "Default"
  };

  return (
    <div className="App" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1>Halaman: {props.title}</h1>
      {/* Menampilkan nilai variabel position */}
      <p>Position: {position}</p>
    </div>
  );
};

export default withTitle(App);
// end file App.js
