import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import gpt from './assets/gpt.png';
import profile from './assets/profile.png';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


export default function App(){
  return(
    <View style = {{flex: 1}}>
      <View style = {{flexDirection: "row", marginBottom: 15}}>
        <View>
          <MaterialCommunityIcons name = "arrow-left" size = {40} style = {{marginTop: 40}}/>
        </View>

        <View>
          <Image source = {gpt} style = {styles.gptImgG}/>
        </View>

        <View style = {{marginTop: 30, marginLeft: 7}}>
          <Text style = {styles.nome}>Mateo</Text>
          <Text style = {styles.status}>Online</Text>
        </View>

        <View>
        <FontAwesome name = "bars" size = {35} style = {{paddingLeft: 130, marginVertical: 10, marginTop: 42}}/>
        </View>
      </View>


      <View style = {{flex: 1, backgroundColor: "#D3D3D3"}}>

        <View style = {{flexDirection: "row"}}>
          <Image source = {gpt} style = {styles.gptImgP}/>
          <Text style = {styles.msg}>Olá! Eu sou Mateo, Em que posso ajudá-lo hoje?!</Text>
        </View>

        <View style = {{flexDirection: "row", marginTop: 20}}>
          <Text style = {styles.segundoPar}>Olá gostaria de saber como eu faço para agendar uma reunião sobre o CRM.</Text>
          <Image source = {profile} style = {styles.profileImg}/>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gptImgG:{
    width: 60,
    height: 60,
    marginTop: 30,
    marginLeft: 20,
  },

  gptImgP:{
    widht: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 40, 
    marginLeft: 10
  },

  nome:{
    fontSize: 24,
    fontWeight: 900
  },

  status:{
    fontSize: 15
  },

  msg:{
    backgroundColor: "gray",
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 30,
    fontSize: 18,
    fontWeight: 600,
    marginRight: 50,
    paddingVertical: 12, 
    textAlign: "center"
  },

  profileImg:{
    width: 40,
    height: 40, 
    marginRight: 30
  },

  segundoPar:{
    backgroundColor: "gray",
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 15,
    textAlign: "center"
  }
})