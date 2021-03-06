"use strict";

const isFunction = (fun) => {
    return typeof fun === "function";
} 

const validateEvents = (event) => {
    // Future
    // Has access to only state and event parameter.
    // Any valid javascript should work
    return Object.keys(event).every(eventName=>{
        return isFunction(event[eventName]);
    })
}

const validateComponent = (component ) => {
    // Should have markup.
    if(!component.markup.length>0){
        console.error(component, " Should have a markup");
        return false;
    }
    // Should have state.
    if(!component.state){
        console.error(component," Should have state or pass empty object");
        return false;
    }
    // Should have style.
    if(!component.style){
        console.error(component, " Should have style object, or pass empty object")
        return false;
    }
    // Should have events.
    if(!component.events){
        console.error(component, " Should have events object or pass empty object");
        return false;
    }

    if(!validateEvents(component.events)){
        console.error(component.events, " Should have function has property value");
    }

}

const validate = ( components ) => {
    return validateComponent(components);
}

module.exports = {
    validate
}