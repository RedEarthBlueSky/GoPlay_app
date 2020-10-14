import React from "react";
import { Text, View } from "react-native";
import styles from '../../GlobalStyles'

const FlatList = () => {
  const greeting = <Text style={styles.h2}>FlatList Subheder</Text>
  return (
         <View>
           <Text style={styles.h1}>FlatList H1</Text>
           {greeting}
         </View>
       )
};

export { FlatList }
