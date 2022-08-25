import React,{useCallback,useState} from 'react'
import { Text, View,TouchableOpacity,Image,StyleSheet,Button,Alert,ScrollView,Modal,Pressable } from 'react-native'
import Left from 'react-native-vector-icons/AntDesign';
import Drop from 'react-native-vector-icons/MaterialIcons';
// import Slider from "@react-native-community/slider";
import {Slider} from 'react-native-elements';  
import Right from 'react-native-vector-icons/AntDesign';

const YourMeasurements = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(1);
  const [sliderrangeValue, setSliderrangeValue] = useState(1);
  const [rangeValue, setRangeValue] = useState(1);
  // const [Popup, setPopup] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

const text1 = 'Select preferred pre-set size and then edit as per \n your requirement';

 return (
  <ScrollView>
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
Your Measurements
  </Text>
</View>
<View>
    <Image source={require("../Images/shirtmejor.png")} style={{top:30,height:409,width:377}} />
</View>
<Text style={{color:'#161616',lineHeight:25,left:20,top:40,fontWeight:'500'}}>{text1}</Text>

<View style={{top:60,flexDirection:'row',justifyContent:'space-evenly'}}>
    <TouchableOpacity>
    <View style={{height:50,width:50,backgroundColor:'#dcdcdc',borderRadius:14}}>
        <Text style={{textAlign:'center',top:13,color:'#757575'}}>XS</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
  <View style={{height:50,width:50,backgroundColor:'#dcdcdc',borderRadius:14}}>
      <Text style={{textAlign:'center',top:13,color:'#757575'}}>S</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={{height:50,width:50,backgroundColor:'#dcdcdc',borderWidth:2,borderColor:'#5E17EB',borderRadius:14}}>
      <Text style={{textAlign:'center',top:13,color:'#5E17EB'}}>M</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={{height:50,width:50,backgroundColor:'#dcdcdc',borderRadius:14}}>
      <Text style={{textAlign:'center',top:13,color:'#757575'}}>L</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={{height:50,width:50,backgroundColor:'#dcdcdc',borderRadius:14}}>
      <Text style={{textAlign:'center',top:13,color:'#757575'}}>XL</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={{height:50,width:50,backgroundColor:'#dcdcdc',borderRadius:14}}>
      <Text style={{textAlign:'center',top:13,color:'#757575'}}>XXL</Text>
  </View>
  </TouchableOpacity>
</View>

<View style={{marginTop:100}}>
 <View style={{left:20,position:'absolute',height:100,width:100,backgroundColor:'#a9a9a9',borderRadius:10}}></View>
  <Text style={{left:130,fontSize:16,fontWeight:'500',color:'#161616'}}>Shoulders</Text>
<View style={{height:35,width:94,borderWidth:1,borderColor:'#E3E3E3',alignSelf:'center',top:15,right:12,borderRadius:10}}>
<Text style={{left:10,top:5,color:'#161616',fontSize:16,fontWeight:'500'}}>{sliderValue}</Text>
<Image source={require('../Images/Line16.png')} style={{position:'absolute',alignSelf:'center',top:2}} />
<Text style={{left:40,top:5,position:'absolute',color:'#161616',fontSize:16,fontWeight:'500'}}>in</Text>
<Drop name='arrow-drop-down' size={30} style={{left:60,position:'absolute'}} />
<View style={{height:35,width:133,borderWidth:1,position:'absolute',borderColor:'#161616',left:105,borderRadius:10}}>
  <Text style={{color:'#161616',alignSelf:'center',top:5,fontWeight:'500'}}>How to measure</Text>
</View>
{/* <Text style={ { width: 50, textAlign: 'center', left: left } }>
  {Math.floor( sliderValue )}
</Text> */}

  </View>
  {/* <Slider
  style={{width: 343,top:60,alignSelf:'center'}}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor="#5E17EB"
  maximumTrackTintColor="#a9a9a9"
  step={1}
  value={sliderValue}
  onValueChange={(sliderValue) => setSliderValue(sliderValue)}
 
/> */}
<Slider
       minimumValue={0}
       maximumValue={100}
       minimumTrackTintColor="#5E17EB"
       maximumTrackTintColor="#a9a9a9"
       step={1}
       value={sliderValue}
       onValueChange={(sliderValue) => setSliderValue(sliderValue)}
      style={{width: 343,top:70,alignSelf:'center'}}
      thumbStyle={{height: 15, width: 15, backgroundColor: '#5E17EB'}}
      thumbProps={{
        children: (
          <View
            style={{
              color: '#5E17EB',
              top:20,
              marginBottom: -42,
              width: 100,
            }}>
            <Text>{sliderValue} inch</Text>
          </View>
        ),
      }}
    />
</View>

<View style={{marginTop:130}}>
 <View style={{left:20,position:'absolute',height:100,width:100,backgroundColor:'#a9a9a9',borderRadius:10}}></View>
  <Text style={{left:130,fontSize:16,fontWeight:'500',color:'#161616'}}>Chest</Text>
  <View style={{height:35,width:94,borderWidth:1,borderColor:'#E3E3E3',alignSelf:'center',top:15,right:12,borderRadius:10}}>
<Text style={{left:10,top:5,color:'#161616',fontSize:16,fontWeight:'500'}}>{sliderrangeValue}</Text>
<Image source={require('../Images/Line16.png')} style={{position:'absolute',alignSelf:'center',top:2}} />
<Text style={{left:40,top:5,position:'absolute', color:'#161616',fontSize:16,fontWeight:'500'}}>in</Text>
<Drop name='arrow-drop-down' size={30} style={{left:60,position:'absolute'}} />
<View  style={{height:35,width:133,borderWidth:1,position:'absolute',borderColor:'#161616',left:105,borderRadius:10}}>
  <Text style={{color:'#161616',alignSelf:'center',top:5,fontWeight:'500'}}>How to measure</Text>
</View>
  </View>
  <Slider
       minimumValue={0}
       maximumValue={100}
       minimumTrackTintColor="#5E17EB"
       maximumTrackTintColor="#a9a9a9"
       step={1}
       value={sliderrangeValue}
       onValueChange={(sliderrangeValue) => setSliderrangeValue(sliderrangeValue)}
      style={{width: 343,top:70,alignSelf:'center'}}
      thumbStyle={{height: 15, width: 15, backgroundColor: '#5E17EB'}}
      thumbProps={{
        children: (
          <View
            style={{
              color: '#5E17EB',
              top:20,
              marginBottom: -42,
              width: 100,
            }}>
            <Text>{sliderrangeValue} inch</Text>
          </View>
        ),
      }}
    />
</View>

<View style={{marginTop:130}}>
 <View style={{left:20,position:'absolute',height:100,width:100,backgroundColor:'#a9a9a9',borderRadius:10}}></View>
  <Text style={{left:130,fontSize:16,fontWeight:'500',color:'#161616'}}>Wrist</Text>
  <View style={{height:35,width:94,borderWidth:1,borderColor:'#E3E3E3',alignSelf:'center',top:15,right:12,borderRadius:10}}>
<Text style={{left:10,top:5,color:'#161616',fontSize:16,fontWeight:'500'}}>{rangeValue}</Text>
<Image source={require('../Images/Line16.png')} style={{position:'absolute',alignSelf:'center',top:2}} />
<Text style={{left:40,top:5,position:'absolute',color:'#161616',fontSize:16,fontWeight:'500'}}>in</Text>
<Drop name='arrow-drop-down' size={30} style={{left:60,position:'absolute'}} />
<View  style={{height:35,width:133,borderWidth:1,position:'absolute',borderColor:'#161616',left:105,borderRadius:10}}>
  <Text style={{color:'#161616',alignSelf:'center',top:5,fontWeight:'500'}}>How to measure</Text>
</View>
  </View>
  <Slider
       minimumValue={0}
       maximumValue={100}
       minimumTrackTintColor="#5E17EB"
       maximumTrackTintColor="#a9a9a9"
       step={1}
       value={rangeValue}
       onValueChange={(rangeValue) => setRangeValue(rangeValue)}
      style={{width: 343,top:70,alignSelf:'center'}}
      thumbStyle={{height: 15, width: 15, backgroundColor: '#5E17EB'}}
      thumbProps={{
        children: (
          <View
            style={{
              color: '#5E17EB',
              top:20,
              marginBottom: -42,
              width: 100,
            }}>
            <Text>{rangeValue} inch</Text>
          </View>
        ),
      }}
    />
</View>


<View style={{height:70,marginTop:170}}>
  <TouchableOpacity onPress={() => setModalVisible(true)}>
<View style={{width:165,height:47,backgroundColor:'#000000',position:'absolute',borderRadius:10,left:12}}>
  <Text style={{alignSelf:'center',color:'white',top:12,fontWeight:'500'}}>Save</Text>
</View>
</TouchableOpacity>

<TouchableOpacity >
<View style={{width:165,height:47,alignSelf:'flex-end',backgroundColor:'#5E17EB',position:'absolute',borderRadius:10,right:12}}>
  <Text style={{alignSelf:'center',color:'white',top:12,fontWeight:'500'}}>Continue</Text>
</View>
</TouchableOpacity>
</View>
<View>
</View>

<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
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
              // onPress={()=>navigation.navigate("CustomeDesign")}
            >
              <Text style={styles.textStyle}>Save and Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

    </View>
    </ScrollView>


  )
}

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
    backgroundColor: "#5E17EB",
  },
  buttonClose: {
    backgroundColor: "#5E17EB",
  },
  textStyle: {
    color: "#ffffff",
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


export default YourMeasurements