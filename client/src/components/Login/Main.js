import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../css/style.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import LoginButton from './Login'
import LogoutButton from './Logout'

const clientId = '803014078430-cr81dell3engp9j03hqsp32vnjcjad1a.apps.googleusercontent.com';

function Register() {

  const cardStyle = {
    width: '700px',
    margin: 'auto',
    padding: '10px',
  }
  const container = {
    padding: '50px',
    marginTop: '70px',
  }
  const textStyle = {
    textAlign: 'center',
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      })
    };
    gapi.load("client", start);
  })

  const state = {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    googleId: localStorage.getItem("googleId"),
  };

  function data(state) {
    if (state.name && state.email && state.googleId) {

      return (
        <div style={cardStyle}>
          <div>
            <h1>Welcome {state.name}</h1>
            <p>{state.email}</p>
            <p>{state.googleId}</p>
            <LogoutButton />
          </div>
        </div>
      )
    } else {
      return (
        <div style={textStyle}>
          <LoginButton />
        </div>
      )
    }
  }

  return (
    <div className="card container" style={container}>
      <h1 className='justify-content-center' style={textStyle}>Binar Car Rental</h1>
      <h5 style={textStyle}>Sewa & Rental Mobil Terbaik di kawasan Jakarta Barat</h5>
      {data(state)}
    </div>
  )
}

export default Register;