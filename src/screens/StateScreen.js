import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList, ScrollView } from "react-native";
import styles from '../../GlobalStyles'

const StateScreen = () => {
  const [counter, setCounter ] = useState(0)  //  array destructuring -- const [firstElement, secondElement ] = array
  const [colors, setColors] = useState([])
  console.log(colors)

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
            onPress={() => {
              setColors([...colors, randomRGB()])
            }}
          />
          <ScrollView>
            <FlatList
              keyExtractor={(item) => item }
              data={colors}
              renderItem={({ item }) => {
                return   <View style={{ height:  50, width: '100%', backgroundColor: item }} />
              }}
            />
          </ScrollView>
         </View>
       )
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

export { StateScreen }
