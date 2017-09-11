/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Navi from "./components/navigation";
// import Login from "./components/login"
import Store from "./App/store/store";

AppRegistry.registerComponent('untitled2', () => Store);
