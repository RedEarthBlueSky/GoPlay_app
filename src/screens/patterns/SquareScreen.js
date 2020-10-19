import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import { ColorCounter } from '../../components'
import styles from '../../../GlobalStyles'

const COLOR_INCREMENT = 15
const CHANGE_BLUE =  'change_blue', CHANGE_RED =  'change_red', CHANGE_GREEN =  'change_green', RESET='reset'

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return (state.red + action.payload > 255 || state.red + action.payload < 0)
      ? state
      : { ...state, red: state.red + action.payload }
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0)
      ? state
      : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
      ? state
      : { ...state, blue: state.blue + action.payload }
    case 'reset':
      return {...state, ...{red: 0, green: 0, blue: 0}}
    default:
      return state
  }
}

const SquareScreen = () => {
  const [state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0})
  const { red, green, blue } = state

  console.log( state )

  return (
         <View>
           <Text style={styles.h1}>Square Screen</Text>
             <ColorCounter
                onIncrease={() =>
                  dispatch({ type: CHANGE_RED, payload: COLOR_INCREMENT })
                }
                onDecrease={() =>
                  dispatch({ type: CHANGE_RED, payload: -1 * COLOR_INCREMENT })
                }
                color="Red"
            />
            <ColorCounter
                onIncrease={() =>
                  dispatch({ type: CHANGE_BLUE, payload: COLOR_INCREMENT })
                }
                onDecrease={() =>
                  dispatch({ type: CHANGE_BLUE, payload: -1 * COLOR_INCREMENT })
                }
                color="Blue"
            />
            <ColorCounter
                color="Green"
                onIncrease={() =>
                  dispatch({ type: CHANGE_GREEN, payload: COLOR_INCREMENT })
                }
                onDecrease={() =>
                  dispatch({ type: CHANGE_GREEN, payload: -1 * COLOR_INCREMENT })
                }
            />
            <View style={{ height: 50, width: 50, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}  />
            <Button title='Reset Color'
              onPress={() => {
                dispatch({ type: RESET })
              }}
            />
         </View>
       )
};

export { SquareScreen }
