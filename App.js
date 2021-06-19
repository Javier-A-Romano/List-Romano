import React, { useState } from 'react';
import { Modal, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

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

   const onHandlerModal = (id, leona) => {
     setItemSelected(itemList.filter(item => item.id === id)[0]);
     setModalVisible(!modalVisible);
     setVorf(leona);
   }

  return (
    <View style={styles.container}>
      <View style={styles.inputrow}>
        
        <TouchableOpacity
        style={styles.buttonF}
        onPress={() => add("F")}
        >
          <Text>F</Text>
          
        </TouchableOpacity>


        <TextInput style={styles.input}
        placeholder="item"
        onChangeText={onHandlerChangeItem}
        value={textItem}
        />
      
        <TouchableOpacity
        style={styles.buttonV}
        onPress={() => add("V")}
        >
          <Text>V</Text>
          
        </TouchableOpacity>
        
      </View>
      <View style={styles.flat}>

      <FlatList
        data={itemList}
        renderItem={data => (
          <View style={styles.textrow}>

            <TouchableOpacity
        style={styles.buttonF}
        onPress={() => onHandlerModal(data.item.id,"F")}
        >
              <Text>F</Text>
              
        </TouchableOpacity>

        <Text style={styles.text}>{data.item.value}{data.item.validation}</Text>


        <TouchableOpacity
        style={styles.buttonV}
        onPress={() => onHandlerModal(data.item.id,"V")}
            >
              
              <Text>V</Text>
              
        </TouchableOpacity>

        </View>

        )}
          ketExtractor={(item)=>item.id}
        />
      </View>
      
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


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D49A08',
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
    backgroundColor: '#25D7F5',
    height: 50,
  },
  flat: {
    marginTop: 9,
    backgroundColor: '#5B08D4',
  },
  textrow: {
    
    marginTop: 5,
    flexDirection: 'row',
    width: 360,
    

  },
  text: {
    backgroundColor: '#D49A08',
    height: 50,
    flex: 1,

  },
  buttonF: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#EB2615',
    width:45,
  },
  buttonV: {
    alignItems: "center",
    justifyContent: "center",
 
    width:45,
    backgroundColor: '#72FA2F',

  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 30,
    backgroundColor: '#25D7F5',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#D49A08',
    height: 50,
    width:150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: '#5B08D4',
    borderWidth:5,
  }
});
export default App;