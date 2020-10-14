import React from "react"
import { Text, View, Button } from "react-native"

import styles from '../../GlobalStyles'

const HomeScreen = () => {
  return (
          <View style={styles.mainWrapper}>
            <Text style={styles.h1}>Home Screen h1</Text>
            <Button
              title='Go to Template Demo'
              onPress={() => console.log( 'Primitive Button Press2' )}
            />
          </View>
        )
};

export { HomeScreen }
