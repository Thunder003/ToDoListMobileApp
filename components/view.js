import React,{useState} from 'react';
import {View,TextInput,StyleSheet, Button, Modal} from 'react-native';

const OView=(props)=>{
	 const [entertext, setentertext]=useState('');
	 const textchanger=(entertext)=>
  {
    setentertext(entertext);
  }

  const listadder=()=>{
  	props.addfun(entertext);
  	setentertext('');
  }
	return (
	<Modal visible={props.modechanger} animationType="slide"> 
      <View style={styles.inputContainer}>
      <TextInput 
        placeholder="ADD PENDING WORK IN THE QUEUE" 
        onChangeText={textchanger} style={styles.input}
        value={entertext}/>
        <View style={styles.buttonalign}>
	        <View style={styles.button}>
	        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
	        </View>
	        <View style={styles.button}>
	      	<Button onPress={listadder} title="ADD"/>
	      	</View>
      	</View>
      </View>
      </Modal>
		);
};

const styles=StyleSheet.create({
inputContainer:{
      flex:1, justifyContent:'center', alignItems:'center'
  },
  input:{
    width:'80%', borderColor:'black', borderWidth: 1, padding:20,margin:10
  },
  buttonalign:{
  	flexDirection:'row',
  	justifyContent:'space-between',
  	width:'60%'
  },
  button:{
  	width:'40%'
  }
});

export default OView;