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

          <View style = {{backgroundColor: "gray", borderRadius: 15, marginLeft: 50}}>
            <Text style = {styles.segundoPar}>Olá gostaria de saber como eu </Text>
            <Text style = {styles.segundoPar}>faço para agendar uma reunião</Text>
            <Text style = {styles.segundoPar}>sobre CRM</Text>
          </View>

          <View style = {{marginLeft: 5}}>
            <Image source = {profile} style = {styles.profileImg}/>
          </View>
        </View>

        <View style = {{flexDirection: "row", marginTop: 20}}>
          <View>
            <Image source = {gpt} style = {styles.gptImgP2}/>
          </View>
         
         <View style = {{backgroundColor: "gray", borderRadius: 15, marginLeft: 10, marginRight: 85}}>
            <Text style = {styles.segundoPar}>
              Claro!, para agendar uma reunião de CRM você  pode clicar AQUI, ou  
              seguir os seguintes passos: 
              Entre no site da plusoft.com
              Coloque o seu mouse sobre o menu "Produtos"
              Clique em Omni CRM
              Desça um pouco o site até onde apareça uma opção chamada "Agenda
              uma Demo".
              Fale com nosso atendente pelo WhatsApp.
              Caso não consiga encontrar, você pode ligar para o número
              (11)XXXX-XXXX  
            </Text>
          </View>
        </View>

        <View style = {{backgroundColor: "white", marginTop: 20, flex: 1}}>
          <Text style = {styles.input}>Escreva aqui sua mensagem...</Text>
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
    marginTop: 60, 
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
    marginRight: 45,
    paddingVertical: 12, 
    textAlign: "center",
    paddingRight: 20
  },

  profileImg:{
    width: 40,
    height: 40, 
    marginRight: 40,
    borderRadius: 10,
    marginTop: 30,
  },

  segundoPar:{
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
    paddingRight: 40
  },

  gptImgP2:{
    widht: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 250, 
  },

  input:{
    backgroundColor: "#D3D3D3",
    fontSize: 24,
    color: "gray",
    marginTop: 20,
    textAlign: "center",
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 15
  }
})