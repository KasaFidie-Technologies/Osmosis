import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Easy Search",
    text: "Lorem ipsum dolor sit amet consectetur. At cursus massa dictum et. Nec semper adipiscing vulputate turpis eget aliquet sit enim tincidunt. Ultrices a netus massa gravida velit justo nisi. Varius nibh nec urna feugiat massa dui.",
    Image: require("../../assets/splash design.png")

  },

  {
    key: "two",
    title: "Easy Access",
    text: "Lorem ipsum dolor sit amet consectetur. At cursus massa dictum et. Nec semper adipiscing vulputate turpis eget aliquet sit enim tincidunt. Ultrices a netus massa gravida velit justo nisi. Varius nibh nec urna feugiat massa dui.",
    Image: require("../../assets/Component 1.png")

  },


  {
    key: "three",
    title: "Easy Manage",
    text: "Lorem ipsum dolor sit amet consectetur. At cursus massa dictum et. Nec semper adipiscing vulputate turpis eget aliquet sit enim tincidunt. Ultrices a netus massa gravida velit justo nisi. Varius nibh nec urna feugiat massa dui.",
    Image: require("../../assets/Component 2.png"),
    Button: "Next"

  }

]

class SplashScreen extends React.Component {
  state = {showHomePage: false}
  _renderItem = ({item}) => {
    return(
      <View style= {{flex: 1}}>
        <Image
            source={item.Image}
            style= {{
              marginTop: 80,
              resizeMode: "contain",
              height: "38%",
              width: "100%",
            }}
            /> 
            <Text
               style= {{
                  paddingTop: 15,
                  paddingBottom: 18,
                  marginTop: 10,
                  fontSize: 32,
                  fontWeight: "bold",
                  color: "#000000",
                  alignSelf: "center"
               }}
               >
                {item.title}
               </Text>
               <Text 
                    style= {{
                       textAlign: "center",
                       color: "#000000",
                       fontSize: 12,
                       marginTop: 6,
                       paddingHorizontal: 38,
                    }}>
                      { item.text}
                    </Text>

                    <TouchableOpacity 
                       style= {{
                        backgroundColor: '#007bff',
                        padding: 0,
                        marginLeft: 30,
                        alignItems: 'center',
                        borderRadius: 7,
                        height: 25,
                        width:80,
                        alignContent: "right",
                      }}
                       onPress={() => navigation.navigate('Signin')}>
                      {item.Button}
                    </TouchableOpacity>
      </View>
  )}
      render() {
        return(
             <AppIntroSlider
                 renderItem= {this._renderItem}
                 data={slides}
                 activeDotStyle ={{
                   backgroundColor: "#21465b",
                   with: 30,
                 }}
                 />
        ) 
      }

  }
export default SplashScreen;