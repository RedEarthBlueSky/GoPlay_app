import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from '../../GlobalStyles'

const AScreenTemplate = () => {
  const greeting = <Text style={styles.h2}>Hi there, folkses!</Text>
  return (
         <View>
           <Text style={styles.h1}>This is the Template Screen</Text>
           {greeting}
         </View>
       )
};

export { AScreenTemplate }
