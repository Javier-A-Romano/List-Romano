import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

 const App=() => {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const onHandlerChangeItem = (t) => setTextItem(t);

  const add = () => {
    setItemList(currentItems => [...currentItems, { id: Math.random().toString(), value: textItem }]);
    console.log(itemList.value);
    setTextItem("");
}

  return (
    <View style={styles.container}>
      <TextInput style={styles.paddin}
        placeholder="item"
        onChangeText={onHandlerChangeItem}
        value={textItem}
      />
      <Button title="ADD" onPress={add}/>
    
      <FlatList
        data={itemList}
        renderItem={data => (
          
          <Text>hola{ data.item.value}</Text>
        )}
      ketExtractor={(item)=>item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddin: {
    
   paddingTop:50,
  }
});
export default App;