import React, { useState } from 'react'

export default function Button(props) {

    return (
        <button className={`btn btn-${props.color} w-100`} onClick={() => props.handleClick(props.step)}>+{props.step}</button>
    )
}
