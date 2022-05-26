import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Cep(props){
  return (
	 <>
	  <Text style={styles.texto} >CEP: {props.data.cep}</Text>
	  <Text style={styles.texto}>Logradouro: {props.data.logradouro} </Text>
	  <Text style={styles.texto}>Bairro: {props.data.bairro} </Text>
	  <Text style={styles.texto}>Localidade: {props.data.localidade}</Text>
	  <Text style={styles.textoUF}>UF: {props.data.uf} </Text>
	 </>
  );
}

const styles = StyleSheet.create({
	texto:{
		color: '#632626',
		fontSize: 20,
		padding: 5,
	},
	
		textoUF:{
		color: '#632626',
		fontSize: 20,
		padding: 5,
	    marginBottom: 15,
	}
});
