import React, { useState,useCallback } from 'react'
import { Text, View,TouchableOpacity,Image,StyleSheet,Button,Alert } from 'react-native'
import Left from 'react-native-vector-icons/AntDesign';
// import Plush from 'react-native-vector-icons/Entypo';
// import ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { RadioButton } from 'react-native-paper';

const SelectShirtCloth = ({navigation}) => {

const [checked, setChecked] = React.useState('first');
const [sec, setSetsec] = React.useState('second');
const [third, setThird] = React.useState('third');
const [four, setFour] = React.useState('fourth');
const [five, setFive] = React.useState('fiveth');
const [six, setSix] = React.useState('sixth');

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
Select Shirt Cloth
  </Text>
</View>

<View style={{flexDirection:'row',left:20,marginTop:40}}>
<RadioButton
color='blue'
value="first"
uncheckedColor="green"
status={ checked === 'first' ? 'checked' : 'unchecked' }
onPress={() => setChecked('first')}
/>
<Text style={{fontSize:16,color:'black',top:5,fontWeight:'600',left:20}}>Fabric one</Text>
</View>

<View style={{flexDirection:'row',left:20,marginTop:20}}>
<RadioButton
value="first"
color='blue'
uncheckedColor="green"
status={ checked === 'second' ? 'checked' : 'unchecked' }
onPress={() => setChecked('second')}
/>
<Text style={{fontSize:16,color:'black',fontWeight:'600',left:20,top:5}}>Fabric two</Text>
</View>

<View style={{flexDirection:'row',left:20,marginTop:20}}>
 <RadioButton
 value="first"
 uncheckedColor="green"
 color='blue'
 status={ checked === 'third' ? 'checked' : 'unchecked' }
 onPress={() => setChecked('third')}
/>
<Text style={{fontSize:16,color:'black',fontWeight:'600',left:20,top:5}}>Fabric three</Text>
</View>

<View style={{flexDirection:'row',left:20,marginTop:20}}>
<RadioButton
value="first"
uncheckedColor="green"
color='blue'
status={ checked === 'fourth' ? 'checked' : 'unchecked' }
onPress={() => setChecked('fourth')}
/>
<Text style={{fontSize:16,color:'black',fontWeight:'600',left:20,top:5}}>Fabric four</Text>
</View>
<View style={{flexDirection:'row',left:20,marginTop:20}}>
 <RadioButton
 value="first"
 uncheckedColor="green"
 
 color='blue'
 status={ checked === 'fifth' ? 'checked' : 'unchecked' }
 onPress={() => setChecked('fifth')}
/>
<Text style={{fontSize:16,color:'black',fontWeight:'600',left:20,top:5}}>Fabric five</Text>
</View>
<View style={{flexDirection:'row',left:20,marginTop:20}}>
 <RadioButton
 value="first"
 uncheckedColor="green"
 
 color='blue'
 status={ checked === 'sixth' ? 'checked' : 'unchecked' }
 onPress={() => setChecked('sixth')}
/>
<Text style={{fontSize:16,color:'black',fontWeight:'600',left:20,top:5}}>Fabric six</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("YourMeasurements")}>
<View style={styles.btnview}>
<Text style={styles.textStyle}>Continue</Text>
</View>
</TouchableOpacity>
</View>
    )
  }

const styles = StyleSheet.create({
    textStyle: {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
        top:15
      },
      btnview:{
        height:47,
        width:343,
        backgroundColor:'#5E17EB',
        borderRadius:10,
        alignSelf:'center',
        position:'absolute',
        top:340
    ,}
      })

export default SelectShirtCloth;