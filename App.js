import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Navigator from './Navigation/Navigation';

export default class App extends React.Component {
  render() {
    return(
      <Navigator/>
    )
  }
}