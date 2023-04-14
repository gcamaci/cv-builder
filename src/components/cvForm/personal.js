/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import '../../styles/personalForm.css'

const Personal = ({nameChange}) => { 
    return (
        <div className="personal-field">
            <label htmlFor="first-name">Name</label>
            <input onChange={nameChange} type='text' id="first-name" name='name'></input>

            <label htmlFor="title">title</label>
            <input onChange={nameChange} type='text' id="title" name='title'></input>

            <label htmlFor="address">Adress</label>
            <input onChange={nameChange} type='text' id="address" name='address'></input>

            <label htmlFor="phone">Phone</label>
            <input onChange={nameChange} type='text' id="phone" name='phone'></input>

            <label htmlFor="email">Email</label>
            <input onChange={nameChange} type='text' id="email" name='email'></input>

            <label htmlFor="summary">Summary</label>
            <input onChange={nameChange} type='text' id="summary" name='description'></input>
        </div>
    )
}


export { Personal }