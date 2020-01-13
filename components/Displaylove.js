import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';
const Displaylove = (prop)=>{
    console.log(prop)
    if(prop.data=="loading"){
return <Text style={styles.text}></Text>
    }
    if(prop.data.message){
return <Text style={styles.text}> something went wrong try again</Text>
    }
    else{
return(
    <View style={styles.container}>
        <ImageBackground style={{width: '100%', height: '113%'}} source={require('./wad.jpg')}>
        <Text style={styles.text}>{prop.data.percentage} %</Text>
        <Text style={styles.text}>{prop.data.result}</Text>
        </ImageBackground>
    </View>
)
    }
}


export default Displaylove;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F012BE',
    
  },
  text:{
      fontSize:30,
      textAlign:"center"
  }
});