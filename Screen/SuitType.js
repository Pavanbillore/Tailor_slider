import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    TextInput,
    Image,
    requireNativeComponent,
  } from 'react-native';
  import React from 'react';
  import Left from 'react-native-vector-icons/AntDesign';
  // import Right from 'react-native-vector-icons/AntDesign';
  import Icon from 'react-native-vector-icons/EvilIcons';
  import Option from 'react-native-vector-icons/Ionicons';
 
  const SuitType = ({navigation}) => {

    const categories = [
        {
          id: 1,
          title: 'Modern Fit Suit',
          onemore: '₹2599 onwards',
          image: require('../Images/image35.png')
        },
        {
          id: 2,
          title: 'Classis Fit Suit',
          onemore: '₹2599 onwards',
          image: require('../Images/image36.png')
        },
        {
          id: 3,
          title: 'Notch Lapel',
          onemore: '₹2999 onwards',
          image: require('../Images/image37.png')
        },
        
        {
            id: 4,
            title: 'Shawl Lapel',
            onemore: '₹2999 onwords',
            image: require('../Images/image38.png')
          },
        {
          id: 5,
          title: 'Shuit',
          onemore: '₹2999 onwords',
          image: require('../Images/image39.png')
        },
        {
            id: 6,
            title: 'Coat',
            onemore: '₹2999 onwords',
            image: require('../Images/image40.png')
          },
    
      ]
      
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
          <TouchableOpacity onPress={()=>navigation.push("DressType")} style={{position: 'absolute', bottom: 8, left: 10}}>
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
            Select Suit Type
          </Text>
        </View>

        <View
              style={{
                flexDirection: 'row',
                borderRadius: 12,
                borderColor: '#E3E3E3',
                borderWidth: 1,
                top: 50,
                left:20,
                width:282,
                height:45,
              }}>
              <Icon
                name="search"
                color={'#757575'}
                size={30}
                style={{marginTop: 10}}
              />
  
              <TextInput
                placeholder="Search suit Type"
                style={{fontSize: 14,}}></TextInput>
            </View>
<TouchableOpacity>
<View style={{borderRadius:20,alignSelf:'flex-end',right:20,top:5,width:45,height:45,backgroundColor:'rgba(243, 243, 243, 1)'}}>
{/* <Image source={require("../Images/option.png")} /> */}
<Option
                name="options"
                color={'#757575'}
                size={25}
                style={{marginTop: 10,alignSelf:'center'}}
              />
</View>
</TouchableOpacity>

        <View style={{ top: 30,left:22 }}>

        <FlatList
          style={{ height: 600 }}
          data={categories}
          //  horizontal={true}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={{ alignContent: 'center', alignItems: 'center' }}>
              
                <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity>
                  <View>
                  <Image
                    style={{ borderRadius: 12, borderWidth: 0.5,height:155,width:155 }}
                    source={item.image}
                  />
                  </View>
                   </TouchableOpacity>
                   <Text style={{ fontSize: 16, color: '#161616', fontWeight: '500' }}>{item.title}</Text>
                  <Text style={{ fontSize: 14, color: '#5E17EB', fontWeight: '400' }}>{item.onemore}</Text>

                </View>
                </View>
            )

          }}



        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("MeasurementType")}>
      <View style={{width:179,height:47,backgroundColor:'#5E17EB',borderRadius:23,alignSelf:'flex-end',bottom:15}}>
        <Text style={{color:'white',fontWeight:'500',alignSelf:'center',top:12}}>+ Add Custom Design</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  };
  
  export default SuitType;
  