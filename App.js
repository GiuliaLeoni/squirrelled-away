import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Grid  from './components/Grid';
import Header  from './components/Header';

export default function App() {

  const [collected, setCollected] = useState(0);

  return (
    <View style={styles.container}>
      <Header collected={collected}/>
      <Grid collected={collected} setCollected={setCollected}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e4328',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
