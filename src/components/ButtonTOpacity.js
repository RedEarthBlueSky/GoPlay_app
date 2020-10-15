import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from '../../GlobalStyles'

const ButtonTOpacity = ({ buttonStyle, textStyle, press, title }) => {
  return (
            <TouchableOpacity
              onPress={press}
              style={buttonStyle}
              key={title}
            >
              <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
       )
};

export { ButtonTOpacity }
