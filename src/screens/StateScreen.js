import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import styles from '../../GlobalStyles'

const StateScreen = () => {
  const [counter, setCounter ] = useState(0)  //  array destructuring -- const [firstElement, secondElement ] = array

  return (
         <View>
           <Text style={styles.h1}>Simple State Examples</Text>
           <Text style={styles.h3}>Counter Use Count: {counter}  </Text>
           <Button
            title='Increase'
            onPress={() => {
              setCounter(counter + 1)
            }}
           />
           <Text></Text>
           <Button
            title='Decrease'
            onPress={() => {
              setCounter(counter - 1)
            }}
          />
          <Text style={styles.h3}> Handle Color  </Text>
          <Button
            title='Add Color'
          />
         </View>
       )
};

export { StateScreen }
