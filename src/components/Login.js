import React, { useState } from 'react'
import {Image,Text,StyleSheet,Pressable,ScrollView,Alert,TextInput,View} from 'react-native'
import Registrarte from './Registrarte'
import Dashboard from './Dashboard'

const login = () => {
    //Metodo de validacion
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')

    const handleSesion = () => {
        // Validar
        if([correo, contraseña].includes('') ) {
            Alert.alert(
                'EcoDrive',
                'Inicio Sesión Campos obligatorios'
            )
        }else{
        setModalDashboard(!modalDashboard)
        //setModalVisible(!modalVisible)
        }
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [modalDashboard, setModalDashboard] = useState(false)

    const createOneButtonAlert = () =>
        Alert.alert('EcoDrive', 'El registro tiene que tener un Correo Institucional.', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'Cancel',
        },
        {text: 'Ir a Registrarte', onPress: () => setModalVisible(!modalVisible)},
        ])

    const cerrarModal = () => {
        setModalVisible(false)
    }

    const cerrarSesionModal = () => {
      setModalDashboard(false)
  }

  return (
      <ScrollView>
        <View style={styles.container}>

        {/*logo*/}
        <Image source={require('../img/logoITM.png')} style={styles.image} />

        <Text style={styles.tituloPpal}>EcoDrive</Text>
        <Text style={styles.tituloSub}>Bienvenidos</Text>

        <Text style={styles.txtLogin}>Correo Institucional</Text>
        <TextInput 
        style={styles.input}
        placeholder='Correo Institucional'
        placeholderTextColor="#000000"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
        />

        <Text style={styles.txtLogin}>Contraseña</Text>
        <TextInput 
        style={styles.input}
        placeholder='Contraseña'
        placeholderTextColor="#000000"
        secureTextEntry={true}
        maxLength={12}
        value={contraseña}
        onChangeText={setContraseña}
        />
        <Text style={styles.mjs}>Máximo 12 Caracteres</Text>

        <Pressable 
        style={styles.btnIniciar}
        onPress={handleSesion}
        >
            <Text 
            style={styles.btnIniciarTxt}>Iniciar Sesión</Text>
        </Pressable>

        <Pressable style={styles.btnRegistrar}>
        <Text style={styles.txtRegistrar}
        onPress={createOneButtonAlert}>Regístrate</Text>
        </Pressable>

        {modalVisible && (
            <Registrarte 
                cerrarModal={cerrarModal}
            />
        )}

        {modalDashboard && (
            <Dashboard 
              cerrarSesionModal={cerrarSesionModal}
            />
        )}

        
        </View>
      </ScrollView>
    )
}

const styles =StyleSheet.create({
    container:{
      backgroundColor:'#FFF',
    },
    image: {
      marginHorizontal: 0,
    },
    tituloPpal:{
      textAlign: 'center',
      fontSize:60,
      color: '#003762',
      fontWeight: 'bold',
    },
    tituloSub:{
      textAlign: 'center',
      fontSize:30,
      color: '#000',
      marginBottom: 15,
    },
    txtLogin:{
      fontSize:20,
      color: '#000',
    },
    txtRegistrar:{
      textAlign: 'center',
      fontSize:15,
      color: '#003762',
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },
    btnIniciar:{
      backgroundColor: '#003762',
      padding: 15,
      marginTop: 30,
      marginHorizontal: 5,
      borderRadius: 20,
      borderColor: '#999',
      borderWidth: 1,
  
    },
    btnRegistrar:{
      backgroundColor: '#FFF',
      padding: 15,
      marginTop: 20,
      marginHorizontal: 5,
      borderRadius: 20,
      borderColor: '#999',
      borderWidth: 1,
      shadowColor: "#000",
    },
    btnIniciarTxt:{
      textAlign: 'center',
      color: '#FFF',
      fontSize: 15,
      fontWeight: '600',
    },
    input: {
      margin: 5,
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      color:'#000',
      borderColor: '#999',
      borderWidth: 1,
      //sombras
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    mjs: {
      fontSize: 8,
      marginHorizontal: 20,
      color:'#000'
    },
})

export default login