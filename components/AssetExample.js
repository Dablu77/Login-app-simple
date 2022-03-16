import * as React from 'react';
import { Text, View, StyleSheet,  TextInput, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         SIGN IN
      </Text>
      
      <TextInput 
      style={styles.input}
      placeholder="Username"
      />
       <TextInput 
      style={styles.input}
      placeholder="Password"
      />
       <TouchableOpacity>
            <View style={styles.nextBtn}>
                <Text style={styles.nextBtnText}>LOGIN</Text>
            </View>
        </TouchableOpacity>
         <Text style={styles.forgetBtnText}>Forgot your Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  input:{
height: 42,
 width: 312,
 borderBottomWidth: 1,
 
  },
  nextBtn:{
    borderWidth:1,
    height: 42,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: "black",
    marginTop:35,
    
  },
nextBtnText:{
  color: "white",
},
forgetBtnText:{
margin: 20
}
});
