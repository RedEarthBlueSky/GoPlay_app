import React from "react"
import { Text, View, Button, TouchableOpacity } from "react-native"

import { ButtonTOpacity } from '../components'
import styles from '../../GlobalStyles'
import { buttons } from './data'  /* grab button array from data */

const navButtons = () => {
  return buttons.map(item => {
    return (
      <ButtonTOpacity
        title={item.title}
        press={() => navigation.navigate(item.nav)}
        buttonStyle={styles.greenButton}
        textStyle={styles.gbText}
      />
    )
  })
}

const HomeScreen = ({ navigation }) => {
  return (
          <View style={styles.mainWrapper}>
            <Text style={styles.h1}>Home Screen h1</Text>
            {navButtons()}
          </View>
        )
};

export { HomeScreen }
