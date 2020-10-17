import react from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  /* creating a style guide for the entire project...  strive to use only the global styles */
  /* create styles that mirror the out of the box functionality of html tags */
  /* local styles to be applied within a seperate component or screen sub folder so as to override, when needed, but not affect globals */
  /* Remove all container components and replace them with a single style */

  /* default colors */
  darkFieldGreen: {color: '#002210'}, /* useful for backgrounds */
  buttonGreen: {color: '#019244'},
  textGreen: {color:'#11CB52'},
  footerTextgGreen: {color: '#023017'},

  /* headers */
  h1: { fontSize: 32, fontWeight: 'bold', margin: 5, },
  h2: { fontSize: 28, fontWeight: 'bold', margin: 5, },
  h2White: { alignSelf: 'center', color: '#fff', fontSize: 28, fontWeight: 'bold', margin: 5, },
  h3: { fontSize: 24, fontWeight: 'bold', margin: 5, },
  h4: { fontSize: 20, fontWeight: 'bold', margin: 5, },
  h5: { fontSize: 18, fontWeight: 'bold', margin: 5, },
  h6: { fontSize: 16, fontWeight: 'bold', margin: 5, },

  textStyle: {
    fontSize: 16,
    color: '#fff'
  },

  /* list styles */
  flatListStyle: { fontSize: 14, marginVertical: 5, },

  /* wrapper - container - styles */
  mainWrapper: { backgroundColor: '#002210', display: 'flex', padding: 20, height: '100%', },

  /* button styles */

  /* green button and text */
  greenButton: { alignItems: 'center', backgroundColor: '#019244', borderRadius: 5, color: '#fff', display: 'flex', height: 50, justifyContent: 'center', marginVertical: 5, width: '100%', },
  gbText:  { color: '#fff', fontSize: 20, fontWeight: '500', },
  /* END green button and text */

  /* Text Input */
  textInput: { backgroundColor: '#fff', borderColor: 'grey', borderWidth: 1, borderRadius: 5, display: 'flex', height: 50, justifyContent: 'center', marginVertical: 5, paddingLeft: 15, width: '100%', },



});

export default styles
