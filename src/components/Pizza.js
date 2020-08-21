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

    return (
        <FormBox>
            <div className='innerForm'>
                <h1>Order Pizza!</h1>
                <div className='inlineDiv'>
                    <label>Name:
                        <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        // value={formValues.name}
                        // onChange={onInputChange}
                        />
                    </label>
                </div>
                <div className='inlineDiv'>
                    <label>Size:
                        <select name='pizza-size'>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>
                <h3>Pick your toppings</h3>
                <div className='inlineDiv'>
                    <input type='checkbox' name='peppers'/>
                    <label htmlFor="peppers">Peppers</label>
                </div>
                {/* <button disabled={disabled}>submit</button> */}
            </div>
        </FormBox>
    )
}