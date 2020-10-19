import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from '../../GlobalStyles'

const FlexBoxScreen = () => {
  return (
         <View style={[styles.mainWrapper, localStyles.viewStyle ]}>
            <Text style={localStyles.textStyle}>Child #1</Text>
            <Text style={localStyles.textStyle2}>Child #2</Text>
            <Text style={localStyles.textStyle3}>Child #3</Text>
            <Text style={localStyles.textStyle4}>Child #1</Text>
            <Text style={localStyles.textStyle5}>Child #2</Text>
            <Text style={localStyles.textStyle6}>Child #3</Text>
         </View>

       )
};

const localStyles = StyleSheet.create({
  backgroundBlue: {
    backgroundColor: 'blue',
  },
  viewStyle: {
    alignItems: 'flex-start', // stretch - default setting / center / flex-end / flex-start
    borderWidth: 3,
    flexDirection: 'column', // column default
    justifyContent: 'flex-end', // flex-end, flex-start - default , center,
    width: '100%',
    ...StyleSheet.backgroundBlue
  },
  textStyle: {
    flex: 2,  //  take up as much space as possible on the current flexDirection - defalt 1
    borderWidth: 3,
    borderColor: '#fff',
    color: 'white',
    padding: 5,
    margin: 5,
  },
  textStyle2: {
    flex: 4,  //  dictate the height of the element in comparison to flex 1
    borderWidth: 3,
    borderColor: '#fff',
    color: 'white',
    padding: 5,
    margin: 5,
  },
  textStyle3: {
    flex: 1,  //  dictate the height of the element in comparison to flex 1
    borderWidth: 3,
    borderColor: '#fff',
    color: 'white',
    padding: 5,
    margin: 5,
  },
  textStyle4: {
    alignSelf: 'center', //  alignSelf will override the align styles of the parent element
    flex: 2,  //  take up as much space as possible on the current flexDirection - defalt 1
    borderWidth: 3,
    borderColor: '#fff',
    color: 'white',
    padding: 5,
    margin: 5,
  },
  textStyle5: {
    alignSelf: 'flex-end',
    flex: 4,  //  dictate the height of the element in comparison to flex 1
    borderWidth: 3,
    borderColor: '#fff',
    color: 'white',
    padding: 5,
    margin: 5,
  },
  textStyle6: {
    alignSelf: 'stretch', //  the final style is the defalt flex-start
    flex: 1,  //  dictate the height of the element in comparison to flex 1
    borderWidth: 3,
    borderColor: '#fff',
    color: 'white',
    padding: 5,
    margin: 5,
  }
})

export { FlexBoxScreen }
