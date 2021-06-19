import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

 const App=() => {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const onHandlerChangeItem = (t) => setTextItem(t);
   
  const add = (validation) => {
    setItemList(currentItems => [...currentItems, { id: Math.random().toString(), value: textItem,validation:validation }]);
    setTextItem("");
    
}

  return (
    <View style={styles.container}>
      <View style={styles.inputrow}>
        <Button   color="#EB2615" title="F" onPress={()=>add("F")} />
          <TextInput style={styles.input}
        placeholder="item"
        onChangeText={onHandlerChangeItem}
        value={textItem}
          />
      
        <Button color="#72FA2F"  title="V" onPress={()=>add("V")} />
        
      </View>
      <View style={styles.flat}>

      <FlatList
        data={itemList}
        renderItem={data => (
          <View style={styles.textrow}>
        <Button color="#EB2615" title="F" onPress={add} />

            <Text style={styles.text}>{data.item.value}{data.item.validation}</Text>


            <Button color="#72FA2F"  title="V" onPress={add} />

            </View>

        )}
      ketExtractor={(item)=>item.id}
      />
      </View>
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
    flexDirection:'row',
    backgroundColor: 'red',
    
  },
  input: {
    flex: 1,
    backgroundColor: '#25D7F5',
    height:50,
  },
  flat: {
    marginTop:9,
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
    flex:1,

  }
});
export default App;