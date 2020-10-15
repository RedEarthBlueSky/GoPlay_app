import React from "react"
import { Text, View, Button, TouchableOpacity } from "react-native"

import { ButtonTOpacity } from '../components'
import styles from '../../GlobalStyles'

const HomeScreen = ({ navigation }) => {

  return (
          <View style={styles.mainWrapper}>
            <Text style={styles.h1}>Home Screen h1</Text>
            <ButtonTOpacity
              title='Go to Components Demo'
              press={() => navigation.navigate('Components')}
              buttonStyle={styles.greenButton}
              textStyle={styles.gbText}
            />
            <ButtonTOpacity
              title='Go to List Demo'
              press={() => navigation.navigate('Lists')}
              buttonStyle={styles.greenButton}
              textStyle={styles.gbText}
            />
          </View>
        )
};

export { HomeScreen }
