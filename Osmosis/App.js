import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Login from "./screens/login";
import Signup from "./screens/Signup";
import Signin from './screens/Signin';
import VerificationScreen from './screens/authentication';
import loading from "./screens/Loading";

export default function App() {
  return (
    <View style={styles.container}>
      <loading/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
