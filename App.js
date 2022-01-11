import {
  StyleSheet,
  StatusBar,
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  Keyboard,
  Pressable
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react';

export default function App() {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [logado, setLogado] = useState(false)

  const verifyLogin = () => {
    if (login == 'gustavo' && password == "123456") {
      setLogado(true)
      console.log("Login: ", login)
      console.log("Password: ", password)
      console.log("LOGADO")
    } else {
      console.log('erro ao logar')
    }
  }

  return (
    <View >
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>

        <StatusBar backgroundColor="#111" translucent={false} />

        <Image
          source={require("./src/assets/logo.png")}
          style={styles.logo}
        />

        <TextInput
          placeholder="Phone number, username or e-mail"
          style={styles.input}
          onChangeText={(log) => setLogin(log)}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(pass) => setPassword(pass)}
        />

        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot your password ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={verifyLogin}>
          <Text style={styles.loginText}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookContainer}>
          <FontAwesome5 name="facebook" size={25} color="#399fff" />
          <Text style={styles.facebookText}>
            Continue as Gustavo
          </Text>
        </TouchableOpacity>

        <View style={styles.divisor}>
          <View style={styles.divisorLine}></View>
          <Text style={{ marginHorizontal: "3%", color: "#777" }}>or</Text>
          <View style={styles.divisorLine}></View>
        </View>

        <View style={styles.signContainer}>
          <Text style={styles.signText}>Don't have an account ?</Text>
          <TouchableOpacity>
            <Text style={styles.signButton}>Sign in</Text>
          </TouchableOpacity>
        </View>

      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginTop: Platform.OS === 'android' ? "13%" : "20%",
    marginBottom: Platform.OS === 'android' ? "13%" : "15%"
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#f4f3f4",
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0"
  },
  forgotContainer: {
    width: "90%",
    alignItems: "center"
  },
  forgotText: {
    color: "#399fff"
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#399fff",
    width: "90%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  loginText: {
    color: "#fff",
    fontSize: 17
  },
  facebookContainer: {
    flexDirection: "row",
    marginTop: "15%",
    alignItems: "center"
  },
  facebookText: {
    color: "#399fff",
    paddingLeft: 8,
    fontSize: 15
  },
  divisor: {
    margin: "10%",
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  divisorLine: {
    width: "45%",
    height: 2,
    backgroundColor: "#efeded",
    borderRadius: 5
  },
  signContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  signText: {
    color: "#c4c4c4"
  },
  signButton: {
    color: "#399fff",
    fontWeight: "bold",
    marginLeft: 7
  }
});
