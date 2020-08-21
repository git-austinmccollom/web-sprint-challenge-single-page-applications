import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export default function Confirmation(props) {
    const { order } = props
    return (
        <div>
        <h2>Confirmation Page</h2>
        <p>{`Name: ${order.name}`}</p>
        <p>{`Size of Pizza: ${order.size}`}</p>
        <h4>Toppings:</h4>
        <p>{order.peppers ? '-Peppers' : null}</p>
        <p>{order.onions ? '-Onions' : null}</p>
        <p>{order.jalapeños ? '-Jalapeños' : null}</p>
        <p>{order.olives ? '-Olives' : null}</p>
        <p>{order.specialInstructions}</p>
        </div>
    )
}