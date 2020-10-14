import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { MyFlatList } from '../components'
import styles from '../../GlobalStyles'

const ListScreen = () => {
  const greeting = <Text style={styles.h2}>ListScreen Subheader!</Text>
  return (
         <View style={styles.mainWrapper}>
             <Text style={styles.h1}>List Screen H1 Header</Text>
             {greeting}
             <MyFlatList />
         </View>
       )
};

export { ListScreen }
