import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export default function Confirmation(props) {
    const { order } = props
    return (
        <div>
        <h2>Confirmation Page</h2>
        <p>{order.name}</p>
        <p>{order.size}</p>
        <p>{order.peppers}</p>
        <p>{order.onions}</p>
        <p>{order.jalapeños}</p>
        <p>{order.olives}</p>
        <p>{order.specialInstructions}</p>
        </div>
    )
}