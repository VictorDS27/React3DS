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
			   placeholderTextColor = "#fff"
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
    backgroundColor: '#947EC3',
    alignItems: 'center',
    justifyContent: 'center',
  },
	bloco: {
    alignItems: 'center',
    justifyContent: 'center',
	width: '80%',
	backgroundColor: '#B689C0',
    borderRadius: 10,
	},
	
	input: {
	width: '80%',	
	color: '#fff',
	borderBottomWidth:1,
},
	
	textobloco: {
		color: '#fff',
		fontSize: 20,
		padding: 20,
	},
	
	botao: {
		padding: 20 ,
	},
	
	textobotao:{
		color: '#fff',
		fontSize: 20,
		
	},
	
});
