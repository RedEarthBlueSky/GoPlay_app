import react from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  /* creating a style guide for the entire project...  strive to use only the global styles */
  /* the theory is to create a list of styles that mirror the out of the box functionality of html tags */
  /* local styles to be applied within a seperate component or screen sub folder so as to override, when needed, but not affect globals */
  /* A further goal is to remove all container components and replace them with simple styles */

  /* default colors */
  darkFieldGreen: {color: '#002210'}, /* useful for backgrounds */
  buttonGreen: {color: '#019244'},
  textGreen: {color:'#11CB52'},
  footerTextgGreen: {color: '#023017'},

  /* headers */
  h1: { fontSize: 32, fontWeight: 'bold' },
  h2: { fontSize: 24, fontWeight: 'bold' },
  h3: { fontSize: 20, fontWeight: 'bold' },
  h4: { fontSize: 16, fontWeight: 'bold' },
  h5: { fontSize: 12, fontWeight: 'bold' },
  h6: { fontSize: 10, fontWeight: 'bold' },

  /* list styles */
  flatListStyle: { fontSize: 14, marginVertical: 5, },

  /* wrapper styles */
  mainWrapper: { display: 'flex', padding: 20, },

  /* button styles */
  
  /* green button and text */
  greenButton: { alignItems: 'center', backgroundColor: '#019244', borderRadius: 5, color: '#fff', display: 'flex', height: 50, justifyContent: 'center', marginVertical: 5, width: '100%', },
  gbText:  { color: '#fff', fontSize: 20, fontWeight: '500', },
  /* END green button and text */


});

export default styles
