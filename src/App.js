import React from 'react';
import withTitle from './withTitle';
import Header from './components/Header';

const App = (props) => {
  // Data daftar menu
  const listMenu = [
    { code: 'home', name: 'Home' },
    { code: 'about', name: 'About' },
    { code: 'contact', name: 'Contact' },
  ];

  return (
    <div className="App">
      <Header listMenu={listMenu} />
      <h1>Halaman: {props.title}</h1>
    </div>
  );
};

export default withTitle(App);