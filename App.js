import React, { useState } from 'react';
import {  FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonF } from './components/ButtonF';
import { ButtonV } from './components/ButtonV';
import { ComponentFlatList } from './components/ComponentFlatList';
import { ComponentModal } from './components/ComponentModal';
import colors from './constants/colors';

 const App=() => {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
   const [itemSelected, setItemSelected] = useState({});
   const [modalVisible, setModalVisible] = useState(false);
   const [vorf, setVorf] = useState("");
  const onHandlerChangeItem = (t) => setTextItem(t);
   
  const add = (validation) => {
    setItemList(currentItems => [...currentItems, { id: Math.random().toString(), value: textItem,validation:validation }]);
    setTextItem("");
    
  }
   const onHandlerDelete = () => {
     const id = itemSelected.id;
     const validate = itemSelected.validation;
     if(vorf===validate){
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
      <View style={styles.inputrow}>
        
       <ButtonF add={ add}/>


        <TextInput style={styles.input}
        placeholder="Ingresar afirmacion V o F"
        onChangeText={onHandlerChangeItem}
        value={textItem}
        />
        <ButtonV add={ add}/>
        
      </View>
      <View style={styles.flat}>

        <ComponentFlatList itemList={itemList} onHandlerModal={ onHandlerModal}/>
      </View>
      
      <ComponentModal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        onHandlerDelete={onHandlerDelete}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  inputrow: {
    
    marginTop: 100,
    flexDirection: 'row',
    backgroundColor: 'red',
    
  },
  input: {
    flex: 1,
    backgroundColor:colors.cian,
    height: 50,
  },
  flat: {
    marginTop: 9,
    backgroundColor:colors.purple,
  },
 
});
export default App;