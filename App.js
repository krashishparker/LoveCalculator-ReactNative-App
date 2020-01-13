import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Displaylove from './components/Displaylove.js';
export default class App extends React.Component {
state={
  fname: '',
  sname: '',
  result: "loading"
};
 _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  submitit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
    headers:{ "x-rapidapi-host": "love-calculator.p.rapidapi.com",
	"x-rapidapi-key": "cb63628cbbmshb14f15275ef55f5p157b9djsn35a0b32c0235"}  
    }
    )
    
    .then(data=>data.json())
    .then(data2 =>{console.log(data2);
    this.setState({
    result:data2
  })
})
  
  }
 render() {
    return (

    <View style={styles.container}>
     
    
   <ImageBackground style={{width: '100%', height: '120%'}} source={require('./wad.jpg')}>
      <Appbar.Header>
       
        <Appbar.Content
          title="Love % Calculator"
          subtitle=" "
          style={{alignItems:"center"}}
        />
        
      </Appbar.Header>
      <TextInput
        label='Person1 (male)'
         style={{margin:15}}
        value={this.state.fname}
        onChangeText={text => this.setState({fname:text})}
      />
      <TextInput
        label='Person2 (female)'
         style={{margin:15}}
        value={this.state.sname}
        onChangeText={text => this.setState({ sname:text })}
      />
      
      <Button icon="" mode="contained"
      style={{margin:23}}
       onPress={this.submitit.bind(this)}>
    Check
  </Button>
  <Displaylove data={this.state.result} />
        </ImageBackground>
    </View>
     
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});
