import React, { useReducer, useState } from "react";
import { Text, StyleSheet, View, Button, FlatList, ScrollView } from "react-native";
import styles from '../../../GlobalStyles'

// note the only way to get flatlist to scroll is to wrap it in first a scrollview and then a view!
const COUNT = 1
const INCREASE_COUNT = 'increase_count'
const DECREASE_COUNT = 'decrease_count'

const reducer = (state, action) => {
  switch(action.type) {
    case INCREASE_COUNT:
      return {...state, count: state.count + action.payload}
    case DECREASE_COUNT:
      return {...state, count: state.count - action.payload}
    default:
      return state
  }
}

const StateScreen = () => {
  const [colors, setColors] = useState([])

  //  dispatch = call my reducer
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
         <View>
           <Text style={styles.h1}>Simple State Examples</Text>
           <Text style={styles.h3}>Counter Use Count: {state.count}  </Text>
           <Button
            title='Increase'
            onPress={() => {
              dispatch({ type: INCREASE_COUNT, payload: COUNT })
            }}
           />
           <Text></Text>
           <Button
            title='Decrease'
            onPress={() => {
              dispatch({ type: DECREASE_COUNT, payload: COUNT })
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
