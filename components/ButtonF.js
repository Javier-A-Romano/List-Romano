import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from '../constants/colors'

export const ButtonF = ({ add }) => {
  return (
    <TouchableOpacity
      style={styles.buttonF}
      onPress={() => add("F")}
    >
      <Text>F</Text>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonF: {


    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.red,
    width: 45,
  },
})