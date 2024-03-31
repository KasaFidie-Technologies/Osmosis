import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,

} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpstyles from './styles/appStyles/SignUpstyles';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    // Implement your login logic here, e.g., using an API call
    // If successful, navigate to the appropriate screen
    if ( !email || !password) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

        navigation.navigate("QuizGame")
      
  };
  const handleSignup = () => {

    // Simulate sign-in success
    Alert.alert('Success', 'You have signed in successfully!');
  }

  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.header}>
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.subtitle}>Welcome back</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="putin247@gmail.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
     
      <View style={styles.footer}>
         <View style= {{flexDirection: "row", alignItems: "center", marginVertical: 20}}> 
              <View
                  style= {{
                    flex: 1,
                    height: 1,
                    backgroundColor: "#CBCBCB",
                    marginHorizontal: 10,
                  }}/>
               <Text style={styles.footerText}>Or continue with</Text>

               <View
                  style= {{
                    flex: 1,
                    height: 1,
                    backgroundColor: "#CBCBCB",
                    marginHorizontal: 10,
                  }}/>
                
          </View>
          
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../assets/Google.png")}
                style={styles.socialButtonG}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                  source={require("../../assets/Facebook.png")}
                style={styles.socialButtonF}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
            <Image 
              source={require("../../assets/LinkedIn.png")}
              style={styles.socialButtonL}/>
            </TouchableOpacity>
          </View>
            <TouchableOpacity  onPress={Signin}> 
                  <Text style= {styles.formfooter}>Don't have an account?{" "} 
                      <Text style= {styles.link} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
                  </Text>     
            </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#CBCBCB",
    alignSelf: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
  
   marginBottom: 80,
    fontWeight: "bold",
    alignSelf: "center",

  },
  link: {
    color: "#007bff",


  },
  form: {
    flex: 1,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007bff',
  },
  button: {
    backgroundColor: '#1C0674',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: "center",
  
  },
 footer: {
    marginBottom: 68,
    alignItems: 'center',
    position: "absolute",
    marginTop: 460,
    marginLeft: 63,
  },

  footerText: {
    color: '#666',
  },
  formfooter: {
    alignItems: 'center',
    alignSelf: "center"

  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -9,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonG: {
    height: 30,
    width: 30,

  },
  socialButtonF: {
    height: 40,
    width: 40,

  },
  socialButtonL: {
    height: 38,
    width: 38,

  },
});

export default Signin;