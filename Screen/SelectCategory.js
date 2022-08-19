import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  requireNativeComponent,
} from 'react-native';
import React from 'react';
import Left from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';
import DressType from './DressType';

const SelectCategory = ({navigation}) => {
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
        <TouchableOpacity style={{position: 'absolute', bottom: 8, left: 10}}>
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
          Select Category
        </Text>
      </View>
      <View style={{width:343,height:85,top:50,backgroundColor:'#F3F3F3',borderRadius:20,left:18}}>
        <Image source={require('../Images/male.png')} style={{borderRadius:20,position:'absolute',left:8,top:10}} />
        <Text style={{position:'absolute',fontSize:16,fontWeight:'510',color:'#161616',left:90,top:15,}}>Tailor for Men</Text>
        <Text style={{position:'absolute',fontSize:14,fontWeight:'400',color:'#757575',left:90,top:40}}>₹999 onwards</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("DressType")} style={{ top: 25, left: 110,   alignSelf:'center',}}>
          <View
            style={{
              borderRadius: 20,
              padding: 5,
              // alignSelf:'center',
              backgroundColor: '#ffffff',
              position:'absolute'
            }}>
            <Right name="right" size={20} color="#5E17EB" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width:343,height:85,top:80,backgroundColor:'#F3F3F3',borderRadius:20,left:18}}>
        <Image source={require('../Images/female.png')} style={{borderRadius:20,position:'absolute',left:8,top:10}} />
        <Text style={{position:'absolute',fontSize:16,fontWeight:'510',color:'#161616',left:90,top:15}}>Tailor for Women</Text>
        <Text style={{position:'absolute',fontSize:14,fontWeight:'400',color:'#757575',left:90,top:40}}>₹1299 onwards</Text>
        <TouchableOpacity style={{ top: 25, left: 110,alignSelf:'center',}}>
          <View
            style={{
              position: 'absolute',
              borderRadius:20,
              padding: 5,
              backgroundColor: '#ffffff',
            }}>
            <Right name="right" size={20} color="#5E17EB" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectCategory;
