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
  // import Right from 'react-native-vector-icons/AntDesign';/
// import SelectCategory from './SelectCategory';
import SuitType from './SuitType';
 
  const DressType = ({navigation}) => {

    const categories = [
        {
          id: 1,
          title: 'Suit',
          onemore: '₹2999 onwards',
          image: require('../Images/shuit.png')
        },
        {
          id: 2,
          title: 'Blazer',
          onemore: '₹1599 onwards',
          image: require('../Images/blazer.png')
        },
        {
          id: 3,
          title: 'Shirt',
          onemore: '₹999 onwards',
          image: require('../Images/shirt.png')
        },
        {
          id: 4,
          title: 'Kurta',
          onemore: '₹999 onwords',
          image: require('../Images/kurta.png')
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
          <TouchableOpacity onPress={()=>navigation.push("SelectCategory")} style={{position: 'absolute', bottom: 8, left: 10}}>
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
            Select Dress Type
          </Text>
        </View>
        <View style={{ marginTop: 40,left:22 }}>

        <FlatList
          style={{ height: 600 }}
          data={categories}
          //  horizontal={true}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={{ alignContent: 'center', alignItems: 'center' }}>
              
                <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity onPress={()=>navigation.navigate("SuitType")}>
                  <View>
                  <Image
                    style={{ borderRadius: 12, borderWidth: 0.5,height:205,width:155 }}
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
      </View>
    );
  };
  
  export default DressType;
  