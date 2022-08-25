import {View, Modal,Text, TouchableOpacity, StyleSheet, FlatList,Pressable, Image, KeyboardAvoidingView,requireNativeComponent,} from 'react-native';
import React,{useState} from 'react';
import Left from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';
import Tseart from 'react-native-vector-icons/MaterialCommunityIcons';
import Scale from 'react-native-vector-icons/FontAwesome5';
// import FitMessege from './FitMessege';

const MeasurementType= ({ visible, closeCallback, shareOptionCallback,navigation}) => {
  const [Popup, setPopup] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
          Measurement type
        </Text>
      </View>
      <View
        style={{
          width: 343,
          height: 85,
          top: 50,
          backgroundColor: '#F2EBFF',
          borderRadius: 20,
          left: 18,
        }}>
        <View
          style={{
            backgroundColor: '#5E17EB',
            borderRadius: 10,
            height: 45,
            width: 45,
            position: 'absolute',
            left: 25,
            top: 20,
          }}>
          <Tseart
            name="tshirt-crew-outline"
            size={30}
            color="#ffffff"
            style={{position: 'absolute', alignSelf: 'center', top: 5}}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            fontSize: 16,
            fontWeight: '510',
            color: '#161616',
            left: 90,
            top: 15,
          }}>
          Best Fit
        </Text>
        <Text
          style={{
            position: 'absolute',
            fontSize: 14,
            fontWeight: '400',
            color: '#757575',
            left: 90,
            top: 40,
          }}>
          provide a cloth for reference
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{top: 25, left: 110, alignSelf: 'center'}}>
          <View
            style={{
              borderRadius: 20,
              padding: 10,
              left: 5,
              // alignSelf:'center',
              backgroundColor: '#ffffff',
              position: 'absolute',
            }}>
            <Right name="right" size={20} color="#5E17EB" />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 343,
          height: 85,
          top: 80,
          backgroundColor: '#F2EBFF',
          borderRadius: 20,
          left: 18,
        }}>
        <View
          style={{
            backgroundColor: '#5E17EB',
            borderRadius: 10,
            height: 45,
            width: 45,
            position: 'absolute',
            left: 25,
            top: 20,
          }}>
          <Scale
            name="ruler"
            size={22}
            color="#ffffff"
            style={{position: 'absolute', alignSelf: 'center', top: 10}}
          />
        </View>

        <Text
          style={{
            position: 'absolute',
            fontSize: 16,
            fontWeight: '510',
            color: '#161616',
            left: 90,
            top: 15,
          }}>
          Manual Measurement
        </Text>
        <Text
          style={{
            position: 'absolute',
            fontSize: 14,
            fontWeight: '400',
            color: '#757575',
            left: 90,
            top: 40,
          }}>
          select a preferred pre-set size
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{top: 25, left: 110, alignSelf: 'center'}}>
          <View
            style={{
              position: 'absolute',
              borderRadius: 20,
              padding: 10,
              left: 5,
              backgroundColor: '#ffffff',
            }}>
            <Right name="right" size={20} color="#5E17EB" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          // setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image style={styles.image} source={require('../Images/Package.png')} />
            <Text style={styles.modalText}>Be ready with your best fit material    to provide our executive</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.navigate("NotchLapel")}
            >
              <Text style={styles.textStyle}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(22, 22, 22, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    width:'100%'
  },
  modalView: {
    top:250,
   
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width:0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:375,
    height:305,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:343,
    height:47,
    top:80,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#5E17EB",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    top:5
  },
  modalText: {
    textAlign: "center",
    fontSize:18,
    top:15,
    fontWeight:'510'
  },
  image:{
  
  }
  
});

export default MeasurementType;
