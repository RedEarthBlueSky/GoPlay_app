import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList, ScrollView } from "react-native";
import styles from '../../GlobalStyles'

// note the only way to get flatlist to scroll is to wrap it in first a scrollview and then a view! 

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
            title='Add Colors'
            onPress={() => {
              setColors([...colors, randomRGB()])
            }}
          />
          <Button
            title='Clear Colors'
            onPress={() => {
              setColors([])
            }}
          />
          <ScrollView>
            <View>
              <FlatList
                keyExtractor={(item) => item }
                data={colors}
                renderItem={({ item }) => {
                  return   <View style={{ height:  100, width: 100, backgroundColor: item }} />
                }}
              />
            </View>
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
