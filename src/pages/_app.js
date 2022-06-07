import '../styles/globals.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/header.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
