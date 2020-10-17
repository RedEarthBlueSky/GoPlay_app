import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import styles from '../../GlobalStyles'

const TextScreen = () => {

  // Pattern to use to grab the data from a text input

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
         <View style={styles.mainWrapper}>
           <Text style={styles.h2White}>Text Screen</Text>
           <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            placeholder='Email address...'
            value={email}
            onChange={(newValue) => {
              setEmail(newValue)
            }}
           />
           <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            placeholder='Password...'
            value={password}
            onChange={(newValue) => {
              setPassword(newValue)
            }}
           />
           <Text style={styles.textStyle}>Email selected is {email}</Text>
           <Text style={styles.textStyle}>Password selected is {password}</Text>
         </View>
       )
};

export { TextScreen }
