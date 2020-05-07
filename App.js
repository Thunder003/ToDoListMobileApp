import React, {useState} from 'react';
import { StyleSheet, Text, View,Button, TextInput, ScrollView,FlatList } from 'react-native';
import Itemlist from './components/ItemLi';
import OView from './components/view';

export default function App() {
 
  const [todolist, settodolist]=useState([]);
  const [isAddMode, setisAddMode]=useState(false);

  const addlist=(entertext)=>{
    settodolist(currentval=>  [...todolist,{id:Math.random().toString(), value:entertext}]);
    setisAddMode(false);
  }

  const remove=removeid=>{
    settodolist(curentval=>{
      return curentval.filter((goal)=>goal.id!==removeid);
    })
  }

  const cancellingModal=()=>{
    setisAddMode(false);
  }
  return (
    <View style={styles.container}>
    <Button title="ADD New Goal" onPress={()=>setisAddMode(true)}/>
      <OView modechanger={isAddMode} addfun={addlist} onCancel={cancellingModal}/>
      <FlatList 
        keyExtractor={(item,index)=>item.id}
      data={todolist}
        renderItem={itemdata=><Itemlist id={itemdata.item.id} onDelete={remove} title={itemdata.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});
