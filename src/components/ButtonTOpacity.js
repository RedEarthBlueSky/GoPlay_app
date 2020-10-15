import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from '../../GlobalStyles'

const ButtonTOpacity = ({ buttonStyle, textStyle, press, title }) => {
  return (
            <TouchableOpacity
              onPress={press}
              style={buttonStyle}
            >
              <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
       )
};

export { ButtonTOpacity }
