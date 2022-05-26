import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
async function carregaCep(){
	const response = await Api.get('ws/'+inputCep+'/json/');
	setCep(response.data);
}


	
  return (
	  
    <View style={styles.container}>
	 <View style={styles.bloco}>
					  
		  <Text style={styles.textobloco}>
			  Informe Seu CEP:
		  </Text>
		  
		  <TextInput 
			  onChangeText={(data)=>setInputCep(data)}
			  style={styles.input} 
			  placeholder="Ex.: 12740000"
			   placeholderTextColor = "#FCFFE7"
			  />
			 
			  <TouchableOpacity 
				  onPress={carregaCep}
				  style={styles.botao}>
				  
				  <Text style={styles.textobotao}>Buscar</Text>
				  
			  </TouchableOpacity>
		 
		 <Cep data={cep} />
		 
		  </View>
		  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE9461',
    alignItems: 'center',
    justifyContent: 'center',
  },
	bloco: {
    alignItems: 'center',
    justifyContent: 'center',
	width: '80%',
	backgroundColor: '#DEA057',
    borderRadius: 10,
	},
	
	input: {
	width: '80%',	
	color: '#fff',
	borderBottomWidth:1,
},
	
	textobloco: {
		color: '#DFD3C3',
		fontSize: 20,
		padding: 20,
	},
	
	botao: {
		padding: 20 ,
	},
	
	textobotao:{
		color: '#8E3200',
		fontSize: 20,
		
	},
	
});
