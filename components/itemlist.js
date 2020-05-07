import React from 'react';
import {View,Text,Stylesheet} from 'react-native';

const itemlist=()=>{
	return(
		 <View style={styles.listItem}><Text >{itemdata.item.value}</Text>
          </View>
		)
};

const styles=Stylesheet.create({
	listItem:
  {
    padding:10,
    marginVertical:10,
    backgroundColor: '#ccc',
    borderColor:'black',
    borderWidth:1
  }
});
export default itemlist;