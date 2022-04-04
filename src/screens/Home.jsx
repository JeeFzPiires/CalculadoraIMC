import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,  Keyboard, ImageBackground  } from 'react-native';
import { Button } from '../components/Button/Index';


export default function Home() {

const[height, setHeight] = useState(0)
const[weight, setWeight] = useState(0)
const[result, setResult] = useState(0)
const[message, setMessage] = useState("")


function handleCalculateIMC() {
    const Calculate = (weight / (height * height)).toFixed(2)
    
    if(Calculate < 18.5) {
        setResult(Calculate)
        setMessage("Abaixo do Peso - Chassi de Grilo")
    }
        
    else if (Calculate > 18.5 && Calculate < 24.9) {
        setResult(Calculate)
        setMessage("Normal")
    }
    else if (Calculate > 25 && Calculate < 29.9) {
        setResult(Calculate)
        setMessage("Sobrepeso - Ficando Gordin")
    }
    else if (Calculate > 30 && Calculate < 34.9) {
        setResult(Calculate)
        setMessage("Obesidade Grau 1 - Gordola")
    }
    else if (Calculate > 35 && Calculate < 39.90) {
        setResult(Calculate)
        setMessage("Obesidade Grau 2 - Partiu Projetinho Fellas")
    }
    else if (Calculate > 40) {
        setResult(Calculate)
        setMessage("Obesidade Grau 3 - Vai Free Whilly")
    }
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      <StatusBar style="auto" />
    
        <Text style={styles.TextInput}>Altura:</Text>
        <TextInput 
            style={styles.input}
            placeholder='Digite sua altura: Ex. 1,70'
            keyboardType='numeric'
            onChangeText={setHeight}
            onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={styles.TextInput}>Peso:</Text>
        <TextInput 
            style={styles.input}
            placeholder='Digite seu peso: Ex. 200' 
            onChangeText={setWeight}
            keyboardType='numeric'
            onSubmitEditing={Keyboard.dismiss}
        />

      <Button onPress={handleCalculateIMC}/>

        <Text style={styles.TextResult}>{result}</Text>
        <Text style={styles.TextResult}>{message}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beedfa',
    flexDirection: 'column',
  },


  input: {
    backgroundColor: '#f7f9fa',
    fontSize: 18,
    padding: 10,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 50,
    color: 'black',
    height: 50,
    marginBottom: 50,
    opacity: 0.8,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#1f3338',
  },

  title:{
    marginTop: 150,
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#beedfa',
    color: '#1f3338',
    padding: 10,
    fontSize: 24
  },

  TextResult: {
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#1f3338'
  },

  TextInput: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
    color: '#1f3338',
    marginLeft: 10
  },

  
});
