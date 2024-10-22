
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Benvenuto in React Native Paper!</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Alex merda
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
