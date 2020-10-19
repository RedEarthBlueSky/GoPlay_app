import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import styles from 'GlobalStyles'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
         <View>
           <Text style={styles.h3}>Color Counter {color}</Text>
           <Button
             onPress={() => onIncrease() }
             title={`Increase ${color}`}
          />
        <Text />
           <Button
             onPress={() => onDecrease() }
             title={`Decrease ${color}`}
           />
         </View>
       )
};

export { ColorCounter }
