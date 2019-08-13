/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import Input from '../Input/input';
import Button from '../Button/button';
import axios from '../../axios-url';

/**
 * Styles
 */

import './contactData.scss';

/**
 * ContactData component definition and export
 */

class ContactData extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state={
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-Mail'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {
                            value: 'fastest',
                            displayValue: 'Fastest'
                            },
                            {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                            }
                        ]
                    },
                    value: ''
                },
                
            }
        }
    }

    
    // getValue = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement)
        this.setState({orderForm: updatedOrderForm});

    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }

        const order = {
            orderData: formData
        }

        axios.post('/orders.json', order )
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
    }

   renderInput = () => {
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        return(
            <form onSubmit={this.onSubmitHandler}>
                {formElementsArray.map((formElement) => {
                    return(
                        <Input 
                            key={formElement.id}
                            elementtype={formElement.config.elementType} 
                            elementconfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            onChange={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    )
                })}
               <Button text={"Add"}/>
            </form>
        )
            
        
    
   }
    /**
    * Markup
    */

    render(){
       
        return(
           <div>
              {this.renderInput()}
               

           </div>
        );
    }
}

export default ContactData;
