import React from 'react';

export const withTitle = (WrappedComponent) => { // Ekspor sebagai named export
  return (props) => {
    return <WrappedComponent {...props} title="Aplikasi Produk" />;
  };
};

// Ekspor sebagai default
export default withTitle;