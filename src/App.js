import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Aside from "./Components/Aside";
class App extends Component {
    render() {
        return (
            <div className="content padding-32">
                <Header />
                <Body />
                <Aside />
            </div>
        );
    }
}

export default App;
