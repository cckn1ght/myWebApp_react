
import React from 'react';
// import Navbar from './Navbar';
import Navbar from './Layout/Navbar';
import Jumbotron from './Jumbotron'
import Footer from './Layout/Footer'
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}

        <Footer />
      </div>
    );
  }
};

