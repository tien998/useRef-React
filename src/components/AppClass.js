import React, { Component } from "react";



class AppClass extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        
    }
    
    
    focusInput =() => this.inputRef.current.focusInput()

    
    render() {
        return (
            <>
                <MyInput ref={this.inputRef}/>
                <button onClick={this.focusInput}>Edit</button>
            </>
        )
    }
}

class FormField extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    render() {
        return(
            <form>
                <MyInput ref={this.inputRef}/>
            </form>
        )
    }
}

class MyInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    focusInput = () => {
        this.inputRef.current.focus()
    }
    render() {
        return(
            <input ref={this.inputRef}/>
        )
    }
}


export default AppClass