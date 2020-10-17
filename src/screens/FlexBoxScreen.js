import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from '../../GlobalStyles'

const FlexBoxScreen = () => {
  const greeting = <Text style={styles.h2}>Hi there, folkses!</Text>
  return (
         <View style={styles.mainWrapper}>
           <Text style={[styles.h1, styles.white]}>FlexBox Screen</Text>
         </View>
       )
};

export { FlexBoxScreen }
