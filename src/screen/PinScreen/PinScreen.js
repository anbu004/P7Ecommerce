import React, { Component } from "react";
import api from '../../config/OdooConnect';
import { StyleSheet, Text, View, TextInput, Image, Alert, BackHandler, TouchableOpacity } from 'react-native';
import Toast from 'react-native-simple-toast';
export default class PinScreen extends Component {
  constructor(props) {
    super(props)
    this.navigator = null;

    this.handleBack = (() => {
      const { navigate } = this.props.navigation;
      navigate('Login');
      return true;
    }).bind(this)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }

  state = {
    batchID: "",
    pin: ""
  }
  pinVerified() {
    const { batchID } = this.state;
    const { pin } = this.state;
    var datas = {
      "args": [[], { batchid: batchID, pin: pin }],
      "kwargs": {},
      "method": "verify_batch_and_pin",
      "model": "res.users"
    }
    return api.callRPCmethod(datas).then(res => {
      if (res.data === 'No related employee found.Contact system administrator.') {
        Toast.show('No related employee found.Contact system administrator.');
      } else if (res.data) {
        this.props.navigation.navigate('dashboard');
      } else {
        Toast.show('Invalid BatchId or Pin');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
        {/* <Text style={styles.logText}>Log In</Text> */}
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Batch ID..."
            onChangeText={(batchID) => this.setState({ batchID })}
            value={this.state.batchID}
            placeholderTextColor="#003f5c" />
        </View>
        <View style={styles.inputView} >
          <TextInput
            onChangeText={(pin) => this.setState({ pin })}
            value={this.state.pin}
            secureTextEntry
            style={styles.inputText}
            placeholder="PIN..."
            placeholderTextColor="#003f5c" />
        </View>
        {/* onPress={() => this.onLoginPress()}> */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.pinVerified()}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: "80%",
    height: "30%",
    marginBottom: 40
  },
  logText: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#e5e5e5",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});