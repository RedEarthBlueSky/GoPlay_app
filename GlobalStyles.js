import react from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  /* creating a style guide for the entire project...  the theory is to use only the global styles */
  /* local styles to be applied within a created component or screen folder so as not to affect globals */

  /* colors */
  darkFieldGreen: {color: '#002210'},
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

  /* styles for various elements */
  flatListStyle: { fontSize: 12, marginVertical: 5, },

  /* wrapper styles */
  mainWrapper: { padding: 10, },
});

export default styles
