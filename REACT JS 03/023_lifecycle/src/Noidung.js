import React, { Component } from 'react';

class Noidung extends Component {
    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps'+nextProps.ten+"1111");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate 11111');
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate 1111');
    }

    
    render() {
        console.log('render 1111');
        return (
            <div>
                <h2>{this.props.ten}</h2>
            </div>
        );
    }
}

export default Noidung;