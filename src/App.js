import React from 'react';
import withTitle from './withTitle'; // Impor tanpa kurung kurawal
import Product from './Product'; // Impor komponen Product

const App = (props) => {
  return (
    <div className="App">
      <h1>Halaman: {props.title}</h1>
      <Product /> {/* Gunakan komponen Product di sini */}
    </div>
  );
};

export default withTitle(App);