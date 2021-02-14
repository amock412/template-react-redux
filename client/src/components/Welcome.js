/* eslint-disable semi */
import React from 'react';
import styled from 'styled-components';

import background from '../styles/library.jpeg';
/* import { Text, StyleSheet } from 'react-native'; */

/* <Text style={{backgroundColor: 'blue', alignSelf: 'flex-start'}}> */
const Welcome = () =>

    <div className="welcome--container">
    
    <div id='background' style={{ backgroundImage: `url(${background})`, 
    backgroundSize: 'cover', width: '100%', position: 'absolute',
    height: '800px', backgroundColor: 'transparent'}} >
    
        <h1 className="welcome--message-text" style={{color:'white', textAlign: 'center', 
    paddingTop: '200px', fontFamily: 'verdana', fontSize: '80px', fontWeight:'bold'}}>Welcome to our community cafe and library. 
        Happy reading!</h1>
        <h3 className="welcome--description-text" style={{color:'white'}}>At Hack.Diversity we like to hack things, like
         libraries, </h3>
        <h3 className="welcome--description-text" style={{color:'white'}}>
         and we like to drink coffee while doing so!</h3>
        </div>
    </div>

export default Welcome;
