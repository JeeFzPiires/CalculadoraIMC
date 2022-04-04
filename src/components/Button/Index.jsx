import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

export function Button ({onPress}){
    return(
    <TouchableOpacity
        style={styles.button}
        activeOpacity={.6} 
        onPress={onPress}       
    >
        <Text style={styles.Text}>Calcular</Text>
        
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
   
    button:{
        backgroundColor:'#00c2f7',
        padding : 10,
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1f3338',
        borderRadius: 50,
        width: 200,
        height: 65,
        marginLeft: 100
    },
    Text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        justifyContent: 'center',
        padding: 10
    }
  });
  