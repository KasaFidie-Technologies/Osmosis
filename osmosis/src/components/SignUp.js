import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import SignUpstyles from './styles/appStyles/SignUpstyles'; 


const SignUp = ({navigation}) => {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);


  const handleSignup = () => {
    // Validating  inputs
    if (!fullName || !email || !phoneNumber || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    navigation.navigate('VerificationScreen')

  };
  

  return (
    <View style={SignUpstyles.container}>
      <View style= {SignUpstyles.header}>    
          <Image
            source={require("../../assets/plug_0.png")}
            style={SignUpstyles.image}
          />
          <Text style={SignUpstyles.title}>Get Started</Text>
          <Text style={SignUpstyles.subtitle}>by creating a free account.</Text>
      </View>
      
      <View style={SignUpstyles.form}>
        <TextInput
          style={SignUpstyles.input}
          placeholder="John Putin"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={SignUpstyles.input}
          placeholder="aliutijani21@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={SignUpstyles.input}
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={SignUpstyles.input}
          placeholder="Strong Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />


       <View style={SignUpstyles.checkboxContainer}>
          <TouchableOpacity onPress={() => setAgreeToTerms(!agreeToTerms)}>
            <View style={[SignUpstyles.checkbox, { backgroundColor: agreeToTerms ? '#007bff' : '#fff' }]} />
          </TouchableOpacity>
          <Text style={SignUpstyles.checkboxLabel}>By checking the box you agree to our 
             <Text>Terms</Text> and   
             <Text> Conditions</Text>.
          </Text>
        </View>

        <TouchableOpacity style={SignUpstyles.button} onPress={handleSignup}>
          <Text style={SignUpstyles.buttonText}
          onPress={() => navigation.navigate('VerificationScreen')} 
          >Next </Text>
        </TouchableOpacity>
      </View>

      <View style={SignUpstyles.footer}>
        <Text style={SignUpstyles.footerText}>Already a member?</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Signin')}> 
          <Text style={SignUpstyles.footerLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default SignUp;