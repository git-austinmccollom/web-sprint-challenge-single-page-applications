import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect, useHistory } from 'react-router-dom';
import Pizza from './components/Pizza';
import Confirmation from './components/Confirmation';
import './App.css';
import formSchema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  peppers: false,
  onions: false,
  jalapeños: false,
  olives: false,
  specialInstructions: '',
}

const initialErrorValues = {
  name: '',
}

const App = () => {
  const [ order, setOrder ] = useState({});
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ disabled, setDisabled ] = useState(true);
  const [ errors, setErrors ] = useState(initialErrorValues);
  const history = useHistory();

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])

  const changeFormValues = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: "",
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0],
      })
    })
    setFormValues({ ...formValues, [name]: value })
  }

  const toggleCheckbox = (name, checked) => {
    setFormValues({
      ...formValues, [name]: checked
    })
  }

  const submitForm = evt => {
    const submittedOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      peppers: formValues.peppers,
      onions: formValues.onions,
      jalapeños: formValues.jalapeños,
      olives: formValues.olives,
      specialInstructions: formValues.specialInstructions.trim()
    }
    setOrder(submittedOrder)
    console.log(order)
    history.push('/confirmation');
  }

  // const submitOrder = (submittedOrder) => {
  //   axios.post('https://reqres.in/api/users', submittedOrder)
  //     .then(res => {
  //       console.log(res)
  //       debugger
  //       setOrder({res})
  //     })
  //     .catch(err => {
  //       debugger
  //     })
  //     .finally(() => {
  //       setFormValues(initialFormValues)
  //     })
  // }

  return (
    <>
      <div className='App-header'>
        <h1>Lambda Eats</h1>
        <Link className='App-link' to='/'>Home</Link>
        <br></br>
        <Link className='App-link' to='/pizza'>Pizza</Link>
        <Route exact path='/'>
          <Redirect to='/' />
        </Route>
      </div>
      <Route exact path='/pizza'>
        <Pizza disabled={disabled} changeFormValues={changeFormValues} toggleCheckbox={toggleCheckbox} formValues={formValues} submitForm={submitForm} errors={errors}/>
      </Route>
      <Route exact path='/confirmation'>
        <Confirmation order={order} />
      </Route>
    </>
  );
};
export default App;
