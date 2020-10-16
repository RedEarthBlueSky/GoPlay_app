import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import styles from '../../GlobalStyles'

const TextScreen = () => {
  return (
         <View style={styles.mainWrapper}>
           <Text style={styles.h2White}>Text Screen</Text>
           <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            placeholder='Placeholder information...'
           />
           <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            placeholder='Placeholder information...'
           />
         </View>
       )
};

export { TextScreen }
