import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

interface ButtonProps {
  text: string
}
export function Button({ text }: ButtonProps) {
  return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>
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
