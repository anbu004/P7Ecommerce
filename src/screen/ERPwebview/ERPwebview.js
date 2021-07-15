import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, TextInput, Image,BackHandler, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
export default class ERPwebview extends Component {
  constructor(props) {
    super(props)
    this.navigator = null;

    this.handleBack = (() => {
      const { navigate } = this.props.navigation;
      navigate('dashboard');
      return true;
    }).bind(this)
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }

    render() {
        return <WebView source={{ uri: 'https://myrajneta.com/web/login' }} />;
      }
    }