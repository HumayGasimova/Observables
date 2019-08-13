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
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code'
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-Mail'
                    },
                    value: ''
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
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});

    }


   renderInput = () => {
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        console.log(formElementsArray)
        return(
            <form>
                {formElementsArray.map((formElement,i) => {
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
