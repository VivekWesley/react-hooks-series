// Date: JAN 10 2021
// CREATING CUSTOM HOOKS
// _____________________________________________

import React, { useState } from 'react';
import { useForm } from './useForm'

const App = () => {

    const [values, handleChange] = useForm({
        email: '',
        password: ''
    })

    return (
        <div>
            <input type="text" name="email" value={values.email} onChange={handleChange} placeholder="start typing.." />
            <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="password" />
        </div>
    )
}

export default App;