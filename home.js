import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Home({ navigation }) {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (type) => {
    setUserType(type);
  }

  const handleEnterAppPress = async () => {
    // Implemente aqui a navegação para a próxima tela do aplicativo
    alert(`Bem-vindo, ${userType}!`);
    navigation.navigate('SegundaTela');
  }

  return (
  <NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Task Every Day!</Text>
      <Text style={styles.subtitle}>Você é professor ou aluno?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, userType === 'professor' && styles.selectedButton]}
          onPress={() => handleUserTypeChange('professor')}
        >
          <Text style={[styles.buttonText, userType === 'professor' && styles.selectedButtonText]}>Professor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, userType === 'aluno' && styles.selectedButton]}
          onPress={() => handleUserTypeChange('aluno')}
        >
          <Text style={[styles.buttonText, userType === 'aluno' && styles.selectedButtonText]}>Aluno</Text>
        </TouchableOpacity>
      </View>
      {userType ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.enterButton}
            onPress={handleEnterAppPress}
          >
            <Text style={styles.enterButtonText}>Entrar no aplicativo</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A035C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fafafa'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fafafa'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '30%',
    alignItems: 'center',
    gap: 10
  },
  selectedButton: {
    backgroundColor: '#9826DB',
  },
  buttonText: {
    fontSize: 16,
  },
  selectedButtonText: {
    color: '#fff',
  },
  enterButton: {
    backgroundColor: '#1A001F',
    borderRadius: 5,
    padding: 15,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    marginTop: 15
  },
  enterButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
