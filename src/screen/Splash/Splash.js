import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'
import Video from 'react-native-video'
import SplashScreen from 'react-native-splash-screen';
export default class Splash extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        const { navigate } = this.props.navigation;
        setTimeout(() => {
            navigate('Login')
        }, 9000);

        return (
        <View style={{backgroundColor: 'black',flex: 1, alignItems: 'center',flexDirection: 'column', justifyContent: 'center',width:null,height:null}}>
            <Video source={require('../../assets/images/splash.mp4')}
                     style={{position: 'absolute',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                            }}
                             muted={true}
                             repeat={true}
                             resizeMode="contain"          
          />
        </View>
        );
    }
}
