// Libraries.

import React, { Component } from "react";

import "./Style.css";

class Property extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {
        return (
            <div className="container">
            </div>
        );
    }
}

export default Property;
