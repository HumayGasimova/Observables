/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

/**
 * Styles
 */

import './input.scss';

/**
 * WelcomePage component definition and export
 */

class InputField extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state={
            value: ''
        }
    }
    
    handleOnChange = (e) => {
       this.props.getValue(e)
    }

    // handleOnClick = () => {
    //     alert(this.state.value)
    // }

    // keyPressed = (event) => {
    //     if(event.key === 'Enter'){
    //         // this.props.
    //     }
    // }

    renderInput = () => {
        switch (this.props.elementType){
            case ('input'):
                return( 
                    <input 
                        className={this.props.className} 
                        value={this.props.value} 
                        {...this.props.elementConfig}
                    />
                );
            case ('textarea'):
                return(
                <textarea 
                    className={this.props.className} 
                    {...this.props}
                />
                );
            default:
                return(
                    <input 
                        className={this.props.className} 
                        value={this.props.value} 
                        {...this.props.elementConfig}
                    />
                );
               
        }
    }
    /**
    * Markup
    */

    render(){
        return(
            <div className={this.props.className}>
                <label>{this.props.label}</label>
                {/* <input
                    className={this.props.className}
                    placeholder={this.props.placeholder} 
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.handleOnChange}
                    onKeyPress={this.keyPressed}
                    id={this.props.id}
                    //style={{ width: `${this.props.width}`, height: `${this.props.height}`, borderRadius: `${this.props.borderRadius}`}}
                /> */}
                    {/* <button onClick={this.handleOnClick}>Add</button> */}
                    {this.renderInput()}
                <div>{this.state.value}</div>
            </div>
        );
    }
}

export default InputField;
