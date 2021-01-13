// Date: JAN 10 2021
// CREATING CUSTOM HOOKS
// _____________________________________________

import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';

import BUTTON from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';

const App = () => {

    const [values, handleChange] = useForm({
        email: '',
        password: '',
    })

    const [count, setCount] = useState(0)
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

    // 1. these useEffect() hooks renders everytime page is loaded in order,  
    useEffect(() => {
        console.log('hello world 1')
    }, [])

    useEffect(() => {
        console.log('hello world 2')
    }, [])
    // ______________________


    // 2. this useEffect() renders everytime password is state changes
    useEffect(() => {
        console.log("password state changed")
    }, [values.password])
    // ______________________

    return (
        <div>
            <div>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </div>
            <div>
                <TextField type="date" color="primary" variant="outlined" size="small" name="date" value={values.date} onChange={handleChange} />
            </div>
            <div>
                <TextField type="time" color="primary" variant="outlined" size="small" name="time" value={values.time} onChange={handleChange} />
            </div>
            <div>
                <TextField type="text" color="secondary" variant="outlined" size="small" name="email" label="Email" value={values.email} onChange={handleChange} />
            </div>
            <div>
                <TextField type="password" variant="outlined" size="small" name="password" label="Password" value={values.password} onChange={handleChange} />
            </div>
            <div>
                <Card variant="elevation">
                    NumbersAPI DATA <br />
                    <div>{count}</div>
                    <div>{loading ? "loading..." : data}</div>
                </Card>
                <ButtonGroup size="small">
                    <BUTTON startIcon={<SaveIcon />} variant="contained" color="primary" onClick={() => setCount(count => count + 1)}>increment</BUTTON>
                    <BUTTON startIcon={<CancelIcon />} variant="contained" color="secondary" onClick={() => setCount(count => count - 1)}>decrement</BUTTON>
                </ButtonGroup>
            </div >
        </div >
    )
}

export default App;