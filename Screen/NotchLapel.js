import {View, Modal,Text, TouchableOpacity, StyleSheet, ImageSlider,Pressable, Image, KeyboardAvoidingView,requireNativeComponent,} from 'react-native';
import React,{useState} from 'react';
import Left from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';
import CustomeDesign from '../Screen/CustomeDesign';
// import Tseart from 'react-native-vector-icons/MaterialCommunityIcons';
// import Scale from 'react-native-vector-icons/FontAwesome5';
// import FitMessege from './FitMessege';
// import Slideshow from 'react-native-image-slider-show';
// import ImageSlider from './ImageSlider';




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
          Notch Lapel
        </Text>
      </View>
      <View>
<TouchableOpacity onPress={() => setModalVisible(true)}>
      <View>
        <Image source={require('../Images/image36.png')} style={styles.image36} />
    </View>
</TouchableOpacity>
<Right name="right" size={20} color="#757575" style={{alignSelf:'flex-end',bottom:150,right:20}} />
<Right name="left" size={20} color="#757575" style={{bottom:170,left:20}} />
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
  <View style={styles.firstview}>
  <View style={styles.secview}>
    <Image source={require('../Images/sart.png')} style={styles.image1} />
  </View>
  <Text style={styles.txt1}>
   Shirt
  </Text>
  <Text style={styles.txt2}>
    Add Details
  </Text>
  <TouchableOpacity style={{top: 25, left: 110, alignSelf: 'center'}}>
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

<View style={{  width: 343,height: 85,bottom:13,backgroundColor: '#F3F3F3', borderRadius: 20,}}>
<View >
  <Image source={require('../Images/pent.png')} style={styles.image2} />
</View>
<Text style={styles.text2}>
Pant
</Text>
<Text style={styles.text22}>
  Add Details
</Text>
<TouchableOpacity style={{top: 25,position:'absolute',alignSelf:'flex-end',right:67}}>
  <View style={styles.viewright}>
    <Right name="right" size={20} color="#5E17EB" />
  </View>
</TouchableOpacity>
</View>

<View style={{  width: 343,height: 85,bottom:5, backgroundColor: '#F3F3F3', borderRadius: 20,}}>
<View >
  <Image source={require('../Images/blazr.png')} style={styles.image3} />
</View>
<Text style={styles.text3}>
Blazer
</Text>
<Text style={styles.text33}>
  Add Details
</Text>
<TouchableOpacity style={{top: 25,position:'absolute',alignSelf:'flex-end',right:67}}>
  <View style={styles.viewright}>
    <Right name="right" size={20} color="#5E17EB" />
  </View>
</TouchableOpacity>
</View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>navigation.navigate("CustomeDesign")}
            >
              <Text style={styles.textStyle}>Continue</Text>
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
    // backgroundColor: "rgba(22, 22, 22, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    width:'100%'
  },
  modalView: {
    top:215,
    margin: 20,
    backgroundColor: "white",
    // borderRadius: 5, 
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
    height:430,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:343,
    height:47,
    top:30,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#D8D8D8",
  },
  textStyle: {
    color: "#858585",
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

  firstview:{
    width: 343,
    height: 85,
    bottom:20,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
  },
  secview:{
    backgroundColor: '#5E17EB',
    borderRadius: 10,
    height: 45,
    width: 45,
    position: 'absolute',
    left: 25,
    top: 20,
  },
  image1:{
    bottom:12,
    right:15
    },
    image2:{
      top:10,
      left:15
    },
    image3:{
      top:12,
      left:15
    },
  txt1:{
    position: 'absolute',
    fontSize: 16,
    fontWeight: '510',
    color: '#161616',
    left: 90,
    top: 15,
  },
  txt2:{
    position: 'absolute',
    fontSize: 14,
    fontWeight: '400',
    color: '#757575',
    left: 90,
    top: 40,
  },
  text2:{
    position: 'absolute',
    fontSize: 16,
    fontWeight: '510',
    color: '#161616',
    left: 90,
    top: 15,
  },
  text22:{
    position: 'absolute',
    fontSize: 14,
    fontWeight: '400',
    color: '#757575',
    left: 90,
    top: 40,
  },
  text3:{
    position: 'absolute',
    fontSize: 16,
    fontWeight: '510',
    color: '#161616',
    left: 90,
    top: 15,
  },
  text33:{
    position: 'absolute',
    fontSize: 14,
    fontWeight: '400',
    color: '#757575',
    left: 90,
    top: 40,
  },
  viewright:{
    position: 'absolute',
    borderRadius: 20,
    padding: 10,
    left: 9,
    backgroundColor: '#ffffff',
  },
  image36:{
    top:22,
    alignSelf:'center',
    height:350,
    width:375,

  },
});

export default MeasurementType;