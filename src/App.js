// start file App.js
import React, { useState } from 'react';
import { withTitle } from "./withTitle";

const App = (props) => {
  // Deklarasi state untuk menyimpan value dari input username
  const [username, setUsername] = useState(""); // deklarasi dan inisialisasi, local scope

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e) => {
    setUsername(e.target.value); // mengubah state username sesuai dengan input user
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // mencegah form melakukan reload halaman
    alert(`Username: ${username}`); // menampilkan alert dengan value username
  };

  return (
    <div className="App">
      <h1>Halaman: {props.title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={handleChange} 
          placeholder="Masukkan username..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default withTitle(App);
// end file App.js
