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

  
};
