import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Card>
       <Text style={styles.paragraph}>👏Welcome to Login Page 😊</Text>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 34,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
