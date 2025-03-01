import React from 'react';
import { withTitle } from './withTitle';

const App = (props) => {
  // Data baju
  const items = [
    { id: 1, name: 'Kaos Polos', price: 75000 },
    { id: 2, name: 'Kemeja Flanel', price: 150000 },
    { id: 3, name: 'Jaket Hoodie', price: 250000 },
  ];

  return (
    <div className="App">
      <h1>Halaman: {props.title}</h1>
      <div>
        <h2>Daftar Baju</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - Rp {item.price.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withTitle(App);