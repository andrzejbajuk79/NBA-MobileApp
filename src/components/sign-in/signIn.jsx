import React, { Component } from 'react';
import styles from './_signin.module.css';
import FormField from '../widgets/FormFields/formFields';

class SignIn extends Component {
 state = {
  registerError: '',
  loading: '',
  formdata: {
   email: {
    element: 'input',
    value: '',
    config: {
     name: 'email_input',
     type: 'email',
     placeholder: 'wpisz twoj email',
    },
    validation: {
     required: true,
     email: true
    },
    valid: true,
    touched: false,
    validationMessage: ''
   },
   password: {
    element: 'input',
    value: '',
    config: {
     name: 'password_input',
     type: 'password',
     placeholder: 'haslo',
    },
    validation: {
     required: true,
     password: true
    },
    valid: true,
    touched: false,
    validationMessage: ''
   }
  }
 }
 updateForm = (element) => {
  const newFormData = {
   ...this.state.formdata
  }
  const newElement = {
   ...newFormData[element.id]
  }
  newElement.value = element.event.target.value;
  if (element.blur) {
   let validData = this.validate(newElement)
   newElement.valid = validData[0];
   newElement.validationMessage = validData[1]

  }
  newElement.touched = element.blur;
  newFormData[element.id] = newElement;


  this.setState({ formdata: newFormData })
 }
 validate = (el) => {
  let error = [true, ''];
  if (el.validation.email) {
   const valid = /\S+@\S+\.\S+/.test(el.value)
   const message = `${!valid ? 'nieprawidlowy email' : ''}`
   error = !valid ? [false, message] : error
  }
  if (el.validation.password) {
   const valid = el.value.length >= 5;
   const message = `${!valid ? 'haslo jes zbyt krotkie, min 5 zbakow' : ''}`
   error = !valid ? [false, message] : error
  }
  if (el.validation.required) {
   const valid = el.value.trim() !== '';
   const message = `${!valid ? 'to pole jest wymagane' : null}`
   error = !valid ? [false, message] : error
  }
  return error;
 }

 submitButton = () => {
  return this.state.loading ? 'loading... '
   :
   <div>
    <button onClick={e => this.submitForm(e, false)}>Register now</button>
    <button onClick={e => this.submitForm(e, true)}>Log in now</button>
   </div>
 }
 submitForm = (e, type) => {
  e.preventDefault();
  if (type !== null) {
   let dataToSubmit = {};
   let formIsValid = true;
   for (let key in this.state.formdata) {
    dataToSubmit[key] = this.state.formdata[key].value; //email= cos
   }

   for (let key in this.state.formdata) {
    formIsValid = this.state.formdata[key].valid && formIsValid;
   }
   if (formIsValid) {
    this.setState({ loading: true,registerError:'' })
    if(type){
     console.log('log in');
     
    }else {
     console.log('register');
    }

   }

  }
 }
 render() {
  return (
   <div className={styles.logContainer}>
    <form onSubmit={e => this.submitForm(e, null)}>
     <h2>Register / Log In</h2>
     <FormField
      id={'email'}
      formdata={this.state.formdata.email}
      change={(el) => this.updateForm(el)}
     />
     <FormField
      id={'password'}
      formdata={this.state.formdata.password}
      change={(el) => this.updateForm(el)}
     />
     {this.submitButton()}
    </form>
   </div>
  )
 }
}
export default SignIn;
