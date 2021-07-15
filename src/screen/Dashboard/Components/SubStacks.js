import React from 'react';
import { Image, Text, View, TouchableHighlight, TouchableOpacity, FlatList, List } from 'react-native';
import fonts from '../../../config/fonts';
import colors from '../../../config/colors';
import { Body, Left, ListItem, Right, Icon, Spinner, Item, Label, Picker } from "native-base";

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
const SubStacks = (props) => {
    console.log("props.sub_list>>>", props.sub_list);
    return ( <View style={styles.MainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>)
}

export default SubStacks;
