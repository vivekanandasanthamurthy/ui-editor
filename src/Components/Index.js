import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Folders from "../Utilities/Components/Folders";
import {onDelete} from "./Events";

// Events.

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders
        };
    }

    addFolder(){
        let folders = Array.from(this.state.folders);
        folders.unshift({
            type:"newFolder",
            name:"",
            contents:[]
        })
        this.setState({folders})
    }

    addComponent(){
        this.props.onOpenEditor();
    }

    render() {

        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Components
                    </div>
                    <div className="Controls">
                        <button onClick={this.addComponent.bind(this)}><i className="fa fa-edit"></i>Edit Component</button>
                        <button onClick={this.addFolder.bind(this)}><i className="fa fa-folder"></i>Add Folder</button>
                    </div>
                    <ul>
                        <Folders
                            key = {Math.ceil(Math.random() * 1000)}
                            components={this.state.components} 
                            folders={this.state.folders} 
                            selectedComponent={this.props.selectedComponent}
                                onFoldersUpdate={this.props.onFoldersUpdate}
                                onSelection = {this.props.onSelection}
                                onDelete={onDelete.bind(this)}
                            />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Components;
