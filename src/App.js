import React, { Component } from 'react';
import Header from './common/header/index';
import Home from './pages/home/';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
            </div>
        );  
    }
}

export default App;
