import React from 'react'
import { StyleSheet, TouchableOpacity ,Text} from 'react-native'

export const ButtonF = ({add}) => {
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
        backgroundColor: '#EB2615',
        width:45,
      },
})