import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const FormBox = styled.form`
    width: 50%;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    label {
        margin: 5px 0;
    }
    input {
        margin: 0 5px;
    }
    select {
        margin: 0 5px;
    }
    .innerForm {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .errorDiv {
        color: red;
    }
    .inlineDiv {
        display: flex;
    }
`

export default function Pizza(props) {
    const { disabled, changeFormValues, toggleCheckbox, formValues, submitForm, errors} = props

    const onInputChange = evt => {
        const value = evt.target.value
        const name = evt.target.name
        changeFormValues(name, value)
    }

    const onChecked = evt => {
        const { name, checked } = evt.target
        toggleCheckbox(name, checked)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submitForm()
    }

    return (
        <FormBox onSubmit={onSubmit}>
            <div className='innerForm'>
                <h1>Order Pizza!</h1>
                <div className='inlineDiv'>
                    <div className="errorDiv">{errors.name}</div>
                    <label>Name:
                        <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={formValues.name}
                        onChange={onInputChange}
                        />
                    </label>
                </div>
                <div className='inlineDiv'>
                    <label>Size:
                        <select name='size' onChange={onInputChange} value={formValues.size}>
                            <option value=''>- Select an option -</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>
                <h3>Pick your toppings</h3>
                    <input type='checkbox' name='peppers' checked={formValues.peppers} onChange={onChecked}/>
                    <label htmlFor="peppers">Peppers</label>
                    <input type='checkbox' name='onions' value={formValues.onions} onChange={onChecked}/>
                    <label htmlFor="onions">Onions</label>
                    <input type='checkbox' name='jalapeños' value={formValues.jalapeños}onChange={onChecked}/>
                    <label htmlFor="jalapeños">Jalapeños</label>
                    <input type='checkbox' name='olives' value={formValues.olives} onChange={onChecked}/>
                    <label htmlFor="olives">Olives</label>
                <label>Special Instructions:
                    <input
                    type="text"
                    name='specialInstructions'
                    value={formValues.specialInstructions}
                    onChange={onInputChange}
                    />
                </label>
                <button disabled={disabled}>Submit Order</button>
                
            </div>
        </FormBox>
    )
}