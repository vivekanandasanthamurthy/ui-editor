// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Nodes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var node = this.props.node;
        if(node && node.props && Array.isArray(node.props.children)){
            var children = node.props.children.map(child=><Nodes node={child} onSelectedElementChanged={this.props.onSelectedElementChanged}/>);
            return (
                <ul>
                    <label>
                        <input 
                            type="radio" 
                            name="selectedElement" 
                            onChange={this.props.onSelectedElementChanged} 
                            value={node.type+ node.props.id}/>
                        {node.type + node.props.id}
                    </label>
                    {children}
                </ul>
            );
        }
        return (
            <ul>
                <label>
                    <input 
                        type="radio" 
                        name="selectedElement" 
                        value={node.type+ node.props.id}
                        onChange={this.props.onSelectedElementChanged} 
                        />
                    {node.type + node.props.id}
                </label>
            </ul>
        );
    }

}

export default Nodes;