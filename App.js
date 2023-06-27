import React from 'react'
import {SafeAreaView,Text,StyleSheet,Pressable,ScrollView,Alert,TextInput,Image, View} from 'react-native'
import Login from './src/components/Login'

const App = () => {

  return (
    
    <SafeAreaView style={styles.container}>
      
      {/*Layout Login*/}
      <Login />

    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor:'#FFF',
  },

})

export default App;