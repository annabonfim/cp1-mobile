import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function App() {
  const [productName, setProductName] = useState('');
  const [originalValue, setOriginalValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculateIncrease = () => {
    if (productName.trim() === '') {
      Alert.alert('Erro', 'Digite o nome do produto');
      return;
    }
    if (originalValue.trim() === '') {
      Alert.alert('Erro', 'Digite o valor original');
      return;
    }
    if (percentage.trim() === '') {
      Alert.alert('Erro', 'Digite o percentual de aumento');
      return;
    }

    const original = parseFloat(originalValue);
    const percent = parseFloat(percentage);

    if (isNaN(original) || isNaN(percent)) {
      Alert.alert('Erro', 'Digite valores numéricos válidos');
      return;
    }

    const increaseValue = (original * percent) / 100;
    const newValue = original + increaseValue;

    setResult({
      productName: productName.trim(),
      originalValue: original,
      percentage: percent,
      increaseValue: increaseValue,
      newValue: newValue
    });
  };

  const resetForm = () => {
    setProductName('');
    setOriginalValue('');
    setPercentage('');
    setResult(null);
  };
 return (
    <View style={styles.container}>

      <Image
        source={require('./assets/cp-1-mobile.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Calculadora de Aumento</Text>
      
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
        placeholder="Nome do produto"
      />
      
      <TextInput
        style={styles.input}
        value={originalValue}
        onChangeText={setOriginalValue}
        placeholder="Valor original (R$) "
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        value={percentage}
        onChangeText={setPercentage}
        placeholder="Percentual de aumento (%)"
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.button} onPress={calculateIncrease}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultado:</Text>
          <Text>Produto: {result.productName}</Text>
          <Text>Valor original: R$ {result.originalValue}</Text>
          <Text>Aumento: {result.percentage}%</Text>
          <Text>Valor do aumento: R$ {result.increaseValue}</Text>
          <Text style={styles.finalValue}>Novo valor: R$ {result.newValue}</Text>
          
          <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
            <Text style={styles.buttonText}>Novo Cálculo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBE5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#B1DDE3',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  finalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0000',
    marginTop: 10,
    marginBottom: 15,
  },
  resetButton: {
    backgroundColor: '#3DBF65',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  }
});
