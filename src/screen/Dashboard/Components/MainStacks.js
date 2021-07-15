import React from 'react';
import { Image, Text, View, TouchableHighlight,Button, TouchableOpacity } from 'react-native';
import fonts from '../../../config/fonts';
import colors from '../../../config/colors';

const mainDivStyle = { margin:5,marginTop: 4, padding:10, marginBottom: 10,}
const subElStyle = {  justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#e8e8e8', width:'90%', height:100,elevation:4, shadowOffset: {  }, shadowColor: "grey", shadowOpacity: 0.5, shadowRadius: 10,padding:5,marginBottom: 5, backgroundColor: "#e8e8e8", borderRadius: 8,} 
const textElStyle_headLabel = {  height: '50%',fontFamily: fonts.themeFont, fontSize: 15,marginBottom: 10, fontWeight: 'bold', color: colors.normalFontColor}
const textElStyle = {  width: '50%',fontFamily: fonts.themeFont, fontSize: 15,marginBottom: 10, color: colors.normalFontColor}
const styles ={
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
    },
  
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
  
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  };
const MainStacks = (props) => {
    return (
     <View style={mainDivStyle}>  
      <View style={{flex: 1, flexDirection: 'row', alignContent:'stretch'}}> 
      <View style={{flex: 1}}>   
        <TouchableOpacity  style={subElStyle} onPress={() => props.goToPostPage('clientCreate')}>
       
        <Text>Client Create</Text> 
        
        </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>   
        <TouchableOpacity  style={subElStyle}>
           <Text>ERP</Text>
       
        </TouchableOpacity>
        </View>
      
</View>

    </View>
    
    )
}

export default MainStacks;