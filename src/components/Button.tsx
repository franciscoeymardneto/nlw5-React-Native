import React from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps  } from "react-native"
import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

interface ButtonProps extends TouchableOpacityProps{
  text: string
}
export function Button({ text, ...rest }: ButtonProps) {
  return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text} {...rest}>
          {text}
        </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    width: '100%'
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading
  }
});
