/**
 * Libraries
 */

import React,{
   Component
} from 'react';

import {
   connect
} from 'react-redux';

import {
   bindActionCreators
} from 'redux';

import store from './store/store';

import axios from './axios-url';

/**
 * Components
 */

import Button from './library/Button/button';
import withErrorHandler from './library/withErrorHandler/withErrorHandler';
import Modal from './library/Modal/modal';
import ContactData from './library/ContactData/contactData';

/**
 * Styles
 */

import './app.scss';

/**
 * Actions
 */

import * as Actions from './actions';
import Login from './library/Login/login';


/**
 * App component definition and export
 */

export class App extends Component {

   /**
    * Constructor
    */

   constructor(props){
      super(props);
      this.state = {} 
   }
  
   /**
    * Methods
    */

    handleOnClick = () => {
      const order = {
         ingredients: this.state.ingredients,
         price: this.state.totalPrice,
         customer: {
             name: 'Max Schwarzmüller',
             address: {
                 street: 'Teststreet 1',
                 zipCode: '41351',
                 country: 'Germany'
             },
             email: 'test@test.com'
         },
         deliveryMethod: 'fastest'
     }
         axios.post('/orders.json', order )
         .then(res=>console.log(res))
         .catch(err=> console.log(err))
    }

    componentDidMount () {
      axios.get('/orders.json')
      .then(res=>console.log(res))
      .catch(err=> console.log(err))
    }


   /**
    * Markup
    */

   render(){
      return(
         <div>
            <Button 
               onClick={this.handleOnClick}
               text={'hey'}
            />
           <Login/>
         </div>
      );
   }
}

/**
 * Prop types
 */

 
export default connect(
   (state) => {
      return {
         //  firstPlayer: state.setPlayer.firstPlayer
      };
   },
   (dispatch) => {
      return {
         // setXPlayer: bindActionCreators(Actions.setXPlayer, dispatch)
      };
   }
)(withErrorHandler(App, axios));

