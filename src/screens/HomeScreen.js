import React from "react"
import { Text, View, Button, TouchableOpacity } from "react-native"

import { ButtonTOpacity } from '../components'
import styles from '../../GlobalStyles'
import { homeNavButtons } from './patterns/data'  /* grab button array from data */

const navButtons = (navObject) => {
  return homeNavButtons.map(item => {
    return (
      <ButtonTOpacity
        title={item.title}
        press={() => navObject(item.nav)}
        buttonStyle={styles.greenButton}
        textStyle={styles.gbText}
        key={item.nav}
      />
    )
  })
}

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation
  return (
          <View style={styles.mainWrapper}>
            <Text style={styles.h1}>Home Screen</Text>
            {navButtons(navigate)}
          </View>
        )
};

export { HomeScreen }
