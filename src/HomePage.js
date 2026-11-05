import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function HomePage() {
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      setExpression('');
      return;
    }

    if (value === '=') {
      try {
        const result = eval(expression).toString();
        setExpression(result);
      } catch (error) {
        setExpression('Error');
      }
      return;
    }

    setExpression(expression + value);
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.calculator}>
        <View style={styles.display}>
          <Text style={styles.displayText}>
            {expression || '0'}
          </Text>
        </View>

        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn === '=' && styles.equalButton,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => handlePress('C')}
        >
          <Text style={styles.clearButtonText}>C</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
  },

  calculator: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },

  display: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  displayText: {
    color: '#fff',
    fontSize: 48,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  button: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#333',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 32,
  },

  equalButton: {
    backgroundColor: '#67C35C',
  },

  clearButton: {
    backgroundColor: '#A33A3A',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  clearButtonText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});