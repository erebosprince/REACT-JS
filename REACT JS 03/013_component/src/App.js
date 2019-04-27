import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="_013">
      <TopMenu/>
      <Header/>
      <Content tieude="For those about to rock..." order1="2" order2="1" anh="1"/>
      <Content tieude="We salute you!" order1="1" order2="2" anh="2"/>
      <Content tieude="FoLet there be rock!" order1="2" order2="1 
      " anh="3"/>
      <Footer/>
      </div>
    );
  }
}

export default App;
