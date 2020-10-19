import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { FlatListComponent } from '../../components'
import styles from '../../../GlobalStyles'

// Bring together our list generators/components into one screen to evaluate

const ListScreen = () => {
  const greeting = <Text style={styles.h2}>ListScreen H2!</Text>
  return (
         <View style={styles.mainWrapper}>
             <Text style={styles.h1}>List Screen H1 </Text>
             {greeting}
             <FlatListComponent />
         </View>
       )
};

export { ListScreen }
