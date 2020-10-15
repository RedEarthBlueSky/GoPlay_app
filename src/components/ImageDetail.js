import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import styles from '../../GlobalStyles'

const ImageDetail = ({ title, imageSource, score }) => {
  return (
         <View key={title}>
           <Image source={imageSource} />
           <Text style={styles.h4}>Show image of {title}</Text>
           <Text style={styles.h5}>score: {score}</Text>
         </View>
       )
};

export { ImageDetail }
