import React, { useState,useCallback } from 'react'
import { Text, View,TouchableOpacity,Image,StyleSheet,Button,Alert } from 'react-native'
import Left from 'react-native-vector-icons/AntDesign';
import Plush from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import CustomeDesignTwo from './CustomeDesignTwo';

const CustomeDesign = ({navigation}) => {
   
    
    const des = 'Add clear pictures of your \ndesired design';
    const des2 = 'Upload proper closeup pictures as shown below';
    const txtadd = 'Add a file';
   
    return (
      <View>
       <View
  style={{
    flexDirection: 'row',
    justifyContent: 'center',
    top: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  }}>
  <TouchableOpacity onPress={()=>navigation.push("SuitType")} style={{position: 'absolute', bottom: 8, left: 10}}>
    <View
      style={{
        borderRadius: 8,
        padding: 5,
      }}>
      <Left name="left" size={20} color="#000000" />
    </View>
  </TouchableOpacity>
  <Text
    style={{
      bottom: 8,
      color: '#161616',
      fontWeight: '700',
      fontSize: 20,
    }}>
   Custom Design
  </Text>
</View>

<View>
    <Text style={styles.destext}>{des}</Text>
    <Text style={styles.destext2}>{des2}</Text>
</View>
<View style={{flexDirection: 'row',justifyContent:'space-evenly'}}>
<Image source={require('../Images/coat1.png')} style={styles.coat} />
<Image source={require('../Images/coat2.png')} style={styles.coat} />
<Image source={require('../Images/coat3.png')} style={styles.coat} />
</View>

<View style={styles.viewimage}>
<TouchableOpacity>
<View style={styles.viewimage2}>
<Plush name="plus" size={30} color="#ffffff"  style={{alignSelf:'center',top:2}} />
</View>
</TouchableOpacity>
<View><Text style={styles.addtext}>{txtadd}</Text></View>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("CustomeDesignTwo")}> 
<View style={styles.btnview}>
<Text style={styles.textStyle}>Continue</Text>
</View>
</TouchableOpacity>

      </View>
    )
  }

const styles = StyleSheet.create({
destext: {
    fontSize:24,
    fontWeight:'700',
    color:'#161616',
    lineHeight:24,
    top:50,
    left:20,

  },
  destext2:{
    top:60,
    left:20,
    color:'#757575',
    lineHeight:17,
  },
  coat:{
    top:80,
    borderRadius:20,
  },
viewimage:{
    height:164,
    width:164,
    top:110,
    left:20,
    borderWidth:1.5,
    borderStyle: 'dashed',
    borderColor:'#79747E',
    borderRadius:20,
},
viewimage2:{
    height:36,
    width:36,
    alignSelf:'center',
    top:60,
    backgroundColor:'#8C52FF',
    borderRadius:20,
},
addtext:{
    position:'absolute',
    alignSelf:'center',
    top:70,
    color:'#8C52FF',
    lineHeight:17,  
},
textStyle: {
    color: "#858585",
    fontWeight: "bold",
    textAlign: "center",
    top:15
  },
  btnview:{
    height:47,
    width:343,
    backgroundColor:'#D8D8D8',
    borderRadius:10,
    alignSelf:'center',
    position:'absolute',
    top:360

  }


});


export default CustomeDesign;