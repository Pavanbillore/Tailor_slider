import React, { useState } from "react";
import { Alert, Modal, TouchableOpacity,StyleSheet, Text, Pressable, View, Image, ScrollView,  KeyboardAvoidingView, } from "react-native";



const FitMessege = ({ visible, closeCallback, shareOptionCallback,navigation}) => {
  // const [modalVisible, setModalVisible] = useState(true);
  // const [Popup, setPopup] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        statusBarTranslucent
        onBackdropPress={closeCallback}
        onBackButtonPress={closeCallback}
        transparent={true}
        isVisible={true}
        style={{ margin: 0, justifyContent: 'flex-end' }}
        // onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          // setModalVisible(!modalVisible);
        // }}
      >
        <KeyboardAvoidingView 
        enabled behavior={Platform.OS === 'android' ? undefined : 'position'}
        keyboardShouldPersistTaps="handled"
        >
        <View style={styles.centeredView}>
     
          <View style={styles.modalView}>
          <Image style={styles.image} source={require('../Images/Package.png')} />
            <Text style={styles.modalText}>Be ready with your best fit material    to provide our executive</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              // onPress={() => setPopup(true)}
            >
              <Text style={styles.textStyle}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
 </KeyboardAvoidingView>
      </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top:5,
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

export default FitMessege;