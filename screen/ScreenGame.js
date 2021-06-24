import React, { useState } from 'react'

import { StyleSheet, View } from 'react-native';
import { ComponentFlatList } from '../components/ComponentFlatList';
import { ComponentModal } from '../components/ComponentModal';
import colors from '../constants/colors';
import { ScreenHead } from './ScreenHead';

export const ScreenGame = () => {

    const [textItem, setTextItem] = useState('');
    const [itemList, setItemList] = useState([]);
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [vorf, setVorf] = useState("");
    const onHandlerChangeItem = (t) => setTextItem(t);

    const add = (validation) => {


        if (textItem.length >= 5) {
            setItemList(currentItems => [...currentItems, { id: Math.random().toString(), value: textItem, validation: validation }]);
            setTextItem("");
        } else {
            setTextItem("");

        }


    }
    const onHandlerDelete = () => {
        const id = itemSelected.id;
        const validate = itemSelected.validation;
        if (vorf === validate) {
            setItemList(currentItems => currentItems.filter(item => item.id !== id));

            setItemSelected({});
            setModalVisible(!modalVisible);
        } else {

            setModalVisible(!modalVisible);

        }
    }

    const onHandlerModal = (id, optionVorF) => {
        setItemSelected(itemList.filter(item => item.id === id)[0]);
        setModalVisible(!modalVisible);
        setVorf(optionVorF);
    }
    return (
        <View style={styles.container}>
            <ScreenHead
                add={add}
                onHandlerChangeItem={onHandlerChangeItem}
                textItem={textItem}
            />
            <View style={styles.flat}>

                <ComponentFlatList itemList={itemList} onHandlerModal={onHandlerModal} />
            </View>

            <ComponentModal
                modalVisible={modalVisible}
                itemSelected={itemSelected}
                onHandlerDelete={onHandlerDelete}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',

    },
    flat: {
        marginTop: 9,
        backgroundColor: colors.purple,
    },


});
