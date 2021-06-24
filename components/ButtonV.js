import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

export const ButtonV = ({ add }) => {
  return (
    <TouchableOpacity
      style={styles.buttonV}
      onPress={() => add("V")}
    >
      <Text>V</Text>

    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  buttonV: {
    alignItems: "center",
    justifyContent: "center",

    width: 45,
    backgroundColor: colors.green,

  },
})