import React, { Component } from "react";
import {
  Button, View, Text, Image, StyleSheet, SafeAreaView,
  TouchableOpacity, List, ListItem, ListView,
  FlatList, ScrollView, Platform, TextInput, Picker
} from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../../Component/Common/Header';
// import { Card, Icon } from 'react-native-elements'
import MainStacks from './Components/MainStacks';

export default class Dashboard extends Component {
  state = {
    sub_head_name: "",
    sub_head_list: []
  }
  componentDidMount() {
  
  };

  goToPostPage = (scr) => {
    this.props.navigation.navigate(scr)
  };
  logOut = () => {
    this.props.navigation.navigate('Login')
};
  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent icon="menu" logOut={this.logOut}  headerTitle="HOME" navigation={this.props.navigation}  />
        <ScrollView>
          <View style={mainDivStyle}>  
      <View style={{flex: 1, flexDirection: 'row', alignContent:'stretch'}}> 
      <View style={{flex: 1}}>   
        <TouchableOpacity  style={subElStyle} onPress={() => this.goToPostPage('clientCreate')}>
       
        <Text style={{ color: 'white' }}>Client Create</Text> 
        
        </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>   
        <TouchableOpacity  style={subElStyle} onPress={() => this.goToPostPage('ERPwebview')}>
           <Text style={{ color: 'white' }}>ERP</Text>
       
        </TouchableOpacity>
        </View>
      
</View>

    </View>
        </ScrollView>
      </Container>

    );
  }
}
const mainDivStyle = { margin:5,marginTop: 4, padding:10, marginBottom: 10,}
const subElStyle = {  justifyContent: 'center',
alignItems: 'center',
backgroundColor: "#444444",
 width:'90%', height:100,elevation:4, shadowOffset: {  }, shadowColor: "grey", shadowOpacity: 0.5, shadowRadius: 10,padding:5,marginBottom: 5, borderRadius: 8,} 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
})