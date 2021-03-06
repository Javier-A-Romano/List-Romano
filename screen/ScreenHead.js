import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { ButtonF } from '../components/ButtonF'
import { ButtonV } from '../components/ButtonV'
import colors from '../constants/colors';

export const ScreenHead = ({ add, onHandlerChangeItem, textItem }) => {
    return (
        <View style={styles.inputrow}>

            <ButtonF add={add} />


            <TextInput style={styles.input}
                placeholder="Ingresar afirmacion V o F"
                onChangeText={onHandlerChangeItem}
                value={textItem}
            />
            <ButtonV add={add} />

        </View>
    )
}
const styles = StyleSheet.create({

    inputrow: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 100,
        flexDirection: 'row',


    },
    input: {
        flex: 1,
        backgroundColor: colors.cian,
        height: 50,
    },


});