import React, { Component } from 'react';
import './App.css';
import Noidung from './Noidung';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai:"khoi tao",
      trangThai2:"khoi tao 2"
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  
  update = () => {
    this.setState(
      {trangThai:"trạng thái đã update"}
    );
  }
  


  render() {
    console.log("render");
    console.log(this.state.trangThai);
    return (
      
      <div className="App">
          <button onClick={()=>this.update()}>Update state</button>
          <Noidung ten={this.state.trangThai2}/>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

export default App;
