import React from 'react'
import { Modal, StyleSheet , TouchableOpacity,Text,View } from 'react-native';
import colors from '../constants/colors';

export const ComponentModal = ({modalVisible , itemSelected ,onHandlerDelete }) => {
    return (
        <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.shadow]}>
            <Text style={styles.modalMessage}>Si elegiste bien se borrara de la lista</Text>
            <Text style={styles.modalTitle}>{itemSelected.value}</Text>
            <View>
             
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={onHandlerDelete}
             >
              <Text>CONFIRMAR</Text>
          
        </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContent: {
        padding: 30,
        backgroundColor: colors.cian,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderColor:colors.orange,
      },
      modalMessage: {
        fontSize: 18,
      },
      modalTitle: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }, buttonModal: {
        backgroundColor: colors.orange,
        height: 50,
        width:150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor:colors.purple,
        borderWidth:5,
      }
});