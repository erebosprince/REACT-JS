import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import News from './../components/News';
import NewsDetail from './../components/NewsDetail';
import Home from './../components/Home';
import Contact from './../components/Contact';


class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route path="/tintuc" component={News} />
                    <Route path="/chitiet/:slug.:id.html" component={NewsDetail} />
                    <Route path="/contact" component={Contact}/>
                </div>
        );
    }
}

export default DieuHuongURL;