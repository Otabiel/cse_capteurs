import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';
import Head from 'next/head';

const Layout = props => (
      <div className="Layout">
        <Navbar />
         <div className="Content">
          {props.children}
         </div>
         <Footer />
      </div>
)

export default Layout;
