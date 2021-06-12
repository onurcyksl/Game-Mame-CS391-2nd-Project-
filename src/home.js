import React, { Component } from 'react';
import Footer from './components/Footer';
import HomePage1 from './components/HomePage1';
import NavBar from './components/NavBar';

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <HomePage1 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;