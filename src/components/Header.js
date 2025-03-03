import React from 'react';

const Header = ({ listMenu }) => {
  return (
    <header>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
          {listMenu.map((menu) => (
            <li key={menu.code}>
              <a href={`#${menu.code}`} style={{ textDecoration: 'none', color: 'black' }}>
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;