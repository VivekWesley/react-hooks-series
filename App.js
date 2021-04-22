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

  const [person, setPerson] = useState(null)

  const [character, setCharacter] = useState(null);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // 1. these useEffect() hooks renders everytime page is loaded in order,  

  // useEffect(async () => {
  //   const response = await fetch('https://api.randomuser.me/');
  //   const data = await response.json();
  //   console.log(data);
  //   const [item] = data.results;
  //   setPerson(item);
  // }, [person]);


  // random user api
  useEffect(async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [item] = data.results;
    setPerson(item);
  }, [person]);

  // rick and morty api
  // useEffect(async () => {
  //   const response = await fetch('https://rickandmortyapi.com/api/character/');
  //   const data = await response.json();
  //   const [characters] = data.results;
  //   console.log(characters)
  //   setCharacter(characters);
  // }, [character]);

  useEffect(async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json();
    const [characters] = data.results;
    setCharacter(characters);
  }, [character])



  // ______________________

  // 2. this useEffect() renders everytime password is state changes
  useEffect(() => {
    console.log("password state changed")
  }, [values.password])
  // ______________________

  return (
    <div>
      <div>
        <Card variant="elevation">
          <h2>NumbersAPI DATA</h2>
          <div>
            <b>#{count} :</b> {loading ? "loading..." : data}
          </div>

          <ButtonGroup size="small">
            <BUTTON startIcon={<SaveIcon />} variant="contained" color="primary" onClick={() => setCount(count => count + 1)}>increment</BUTTON>
            <BUTTON startIcon={<CancelIcon />} variant="contained" color="secondary" onClick={() => setCount(count => count - 1)}>decrement</BUTTON>
          </ButtonGroup>
        </Card>
        <br />
        <Card variant="elevation">
          <h2>random user api</h2>
          {person &&
            <div>
              <img src={person.picture.medium} alt="profile photo" /> <br />
              <b>Name: </b> {person.name.first} {person.name.last} <br />
              <b>Email: </b> {person.email}<br />
              <b>Gender: </b> {person.gender}<br />
              <b>Age: </b> {person.dob.age}<br />
              <b>Phone: </b> {person.cell}<br />
              <b>City: </b> {person.location.city}<br />
              <b>State: </b> {person.location.state}<br />
              <b>Country: </b> {person.location.country}<br />
            </div>}
        </Card>
        <br />
        <Card variant="elevation">
          <h2>rick and morty api</h2>
          {character &&
            <div>
              <img width={80} src={character.image} alt="profile photo" /> <br />
              <b>Name: </b> {character.name}<br />
              <b>Status: </b> {character.status}<br />
              <b>Species: </b> {character.species}<br />
              <b>Gender: </b> {character.gender}<br />
              <b>Origin: </b> {character.origin.name}<br />
              <b>Location: </b> {character.location.name}<br />
            </div>}
        </Card>
      </div>

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

    </div>
  )
}

export default App;