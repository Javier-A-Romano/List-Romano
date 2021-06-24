import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors';

export const ComponentFlatList = ({ itemList, onHandlerModal }) => {
  return (
    <FlatList
      data={itemList}
      renderItem={data => (
        <View style={styles.textrow}>

          <TouchableOpacity
            style={styles.buttonF}
            onPress={() => onHandlerModal(data.item.id, "F")}
          >
            <Text>F</Text>

          </TouchableOpacity>

          <Text style={styles.text}>{data.item.value}</Text>


          <TouchableOpacity
            style={styles.buttonV}
            onPress={() => onHandlerModal(data.item.id, "V")}
          >

            <Text>V</Text>

          </TouchableOpacity>

        </View>

      )}
      ketExtractor={(item) => item.id}
    />
  )
}
const styles = StyleSheet.create({

  textrow: {

    marginTop: 5,
    flexDirection: 'row',
    width: 360,


  }, text: {
    backgroundColor: colors.orange,
    height: 50,
    flex: 1,

  }, buttonF: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.red,
    width: 45,
  },
  buttonV: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    backgroundColor: colors.green,

  },

});