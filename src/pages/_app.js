import '../styles/globals.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/header.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
