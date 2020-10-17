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
             style={styles.textInput}
             placeholder='Enter your email...'
             autoCapitalize="none"
             autoCorrect={false}
             value={email}
             onChangeText={newValue => setEmail(newValue)}
           />
           <TextInput
             style={styles.textInput}
             placeholder='Enter your password...'
             autoCapitalize="none"
             autoCorrect={false}
             value={password}
             onChangeText={newValue => setPassword(newValue)}
           />
           <Text style={styles.textStyle}>Email selected is {email}</Text>
           { (password.length < 8 && password.length > 1)
            ? <Text style={styles.textStyle}> Password must be at least Eight characters</Text>
            : <Text style={styles.textStyle}>Password selected is {password} </Text>
           }

         </View>
       )
};

export { TextScreen }
