import React, { useState } from 'react'
import {Text, View, Pressable, Modal, StyleSheet, SafeAreaView} from 'react-native'
import Perfil from './Perfil'

const Dashboard = ({modalDashboard, cerrarSesionModal}) => {

  return (

    <Modal
      animationType='fade'
      visible={modalDashboard}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.tituloPpal}>EcoDrive</Text>

          {/*Perfil Usuario*/}
          <Perfil />

        </View>
      </SafeAreaView>

      <View style={styles.btnEsp}>
        <Pressable 
          style={styles.btnCancelar}
          onPress={() => {cerrarSesionModal()}}
        >
          <Text style={styles.btnCancelarTxt}>Salir</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#DDD',
  },
  tituloPpal:{
    textAlign: 'center',
    fontSize:60,
    color: '#003762',
    fontWeight: 'bold',
  },
  btnEsp:{
    marginTop: 50,
  },
  btnCancelar:{
    backgroundColor: '#FFF',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15,
  },
  btnCancelarTxt: {
      textAlign: 'center',
      fontSize:15,
      color: '#003762',
      fontWeight: 'bold',
  },
  

})

export default Dashboard
