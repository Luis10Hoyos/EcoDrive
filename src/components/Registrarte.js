import React, { useState } from 'react'
import { Modal, Text,  SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'

const Registrarte = ({modalVisible, cerrarModal}) => {

    const [identificacion, setIdentificacion] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [celular, setCelular] = useState('')

    const handleRegistrar = () => {
        // Validar
        if([identificacion,nombres,apellidos,correo,contraseña,celular].includes('') ) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios'
            )
            return
        }

        Alert.alert(
            'EcoDrive',
            'El registro fue exito.'
        )
    }

  return (
    <Modal
        animationType='slide'
        visible={modalVisible}>

        <SafeAreaView style={styles.contenido}>
            
            <Text style={styles.tituloPpal}>EcoDrive</Text>
            <Text style={styles.tituloSub}>Registrarte</Text>

            <ScrollView style={styles.body}>
            <View>
                <Text style={styles.txtLogin}>Nro Identificación</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Nro Identificación'
                    placeholderTextColor={'#666'}
                    keyboardType='number-pad'
                    maxLength={10}
                    value={identificacion}
                    onChangeText={setIdentificacion}
                />
                <Text style={styles.mjs}>Máximo 10 Números</Text>
            </View>

            <View>
                <Text style={styles.txtLogin}>Nombres</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Nombres'
                    placeholderTextColor={'#666'}
                    value={nombres}
                    onChangeText={setNombres}
                />
            </View>

            <View>
                <Text style={styles.txtLogin}>Apellidos</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Apellidos'
                    placeholderTextColor={'#666'}
                    value={apellidos}
                    onChangeText={setApellidos}
                />
            </View>

            <View>
                <Text style={styles.txtLogin}>Correo Institucional</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Correo Institucional'
                    placeholderTextColor={'#666'}
                    keyboardType='email-address'
                    value={correo}
                    onChangeText={setCorreo}
                />
            </View>

            <View>
                <Text style={styles.txtLogin}>Contraseña</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Contraseña'
                    placeholderTextColor={'#666'}
                    secureTextEntry={true}
                    maxLength={12}
                    value={contraseña}
                    onChangeText={setContraseña}
                />
                <Text style={styles.mjs}>Máximo 12 Caracteres</Text>
            </View>

            <View>
                <Text style={styles.txtLogin}>Celular</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Celular'
                    placeholderTextColor={'#666'}
                    maxLength={10}
                    keyboardType='number-pad'
                    value={celular}
                    onChangeText={setCelular}
                />
                <Text style={styles.mjs}>Máximo 10 Números</Text>
            </View>

            <Pressable 
                style={styles.btnIniciar}
                onPress={handleRegistrar}
            >
                <Text style={styles.btnIniciarTxt}>Registrarse</Text>
            </Pressable>

            <Pressable 
                style={styles.btnCancelar}
                onPress={() => {cerrarModal()}}
            >
                <Text style={styles.btnCancelarTxt}>Cancelar</Text>
            </Pressable>

            </ScrollView>
        </SafeAreaView>
    </Modal>
    
  )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    body: {
        backgroundColor: '#FFF',
        flex: 1,
        marginHorizontal: 25,
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
    input: {
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
    btnIniciar:{
        backgroundColor: '#003762',
        padding: 15,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 20,
        borderColor: '#999',
        borderWidth: 1,
    },
    btnIniciarTxt:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600',
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

export default Registrarte
