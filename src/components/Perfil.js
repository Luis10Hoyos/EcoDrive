import React from 'react'
import {Text, View, Pressable, Modal, StyleSheet, SafeAreaView} from 'react-native'

const perfil = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Datos de Perfil</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f5f5f5',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 20,
    transform: [{ translateY: 50}],
    //Sombras
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label:{
    textAlign: 'center',
    fontSize:15,
    color: '#003762',
    fontWeight: 'bold',
  },


})

export default perfil
