import React from "react";
import { Text, StyleSheet, View } from "react-native";

import styles from '../../GlobalStyles'
import { ImageDetail } from '../components'


const ImageScreen = () => {
  return (
         <View>
           <Text style={styles.h1}>ImageScreen</Text>
           <ImageDetail
             title='forest'
             imageSource={require('../../assets/images/forest.jpg')}
             score='9'
           />
           <ImageDetail
             title='beach'
             imageSource={require('../../assets/images/beach.jpg')}
             score='10'
           />
           <ImageDetail
             title='mountain'
             imageSource={require('../../assets/images/mountain.jpg')}
             score='8'
           />
         </View>
       )
};

export { ImageScreen }
