import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ navigation }) => {
  useEffect(() => {
    
    setTimeout(() => {
      // Navigate to the next screen after a delay
      navigation.navigate('QuizGame');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Successful</Text>
      <ActivityIndicator size="large" color="#F9A825" style={styles.spinner} />
      <Text style={styles.waitText}>Please wait...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  spinner: {
    marginBottom: 10,
  },
  waitText: {
    fontSize: 16,
    color: '#666',
  },
});

export default Loading;