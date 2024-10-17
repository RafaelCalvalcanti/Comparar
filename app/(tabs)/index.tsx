import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const App = () => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularCombustivel = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!isNaN(precoAlcool) && !isNaN(precoGasolina) && precoAlcool > 0 && precoGasolina > 0) {
      const relacao = precoAlcool / precoGasolina;
      if (relacao < 0.7) {
        setResultado('Abasteça com Álcool');
      } else {
        setResultado('Abasteça com Gasolina');
      }
    } else {
      setResultado('Por favor, insira valores válidos para ambos os combustíveis.');
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.imgtexto}>
          <Image 
            source={require('./img/fusca.png')} 
            style={styles.image}
          />    
        </View>
        <Text style={styles.label}>Preço do Álcool:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={alcool}
          onChangeText={setAlcool}
        />
        <Text style={styles.label}>Preço da Gasolina:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={gasolina}
          onChangeText={setGasolina}
        />
        <Button title="Calcular" onPress={calcularCombustivel} color="#4CAF50" />
        
        {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#32b9be',
    padding: 30,
  },
  imgtexto: {
    height: 200,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#32b9be',
  },
  container: {
    flex: 0.75,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#fdf4b0',
    borderWidth: 5,
    borderRadius: 20,
    paddingTop: 20,
  },
  image: {
    flex: 1,
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  titulo: {
    height: 30,
    fontSize: 28,
    marginBottom: 20,
    color: '#f6f6f6',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  label: {
    paddingTop: 5,
    fontSize: 18,
    marginBottom: 8,
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000000',
    padding: 5,
    marginBottom: 12,
    borderRadius: 15,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default App;
