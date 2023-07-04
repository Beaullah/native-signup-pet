import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.LogintextContainer}>
          <Text style={styles.Logintext}>Log in</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="username"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
          <TextInput
            placeholderTextColor="#aaaaaa"
            style={styles.input}
            secureTextEntry={true}
            placeholder="password"
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <Text style={styles.forgetPassword}>Forget ppassword</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.noAccoutContainer}>
          <Text style={styles.noAccoutText}>Don't have an account</Text>
          <Text style={styles.signUpText}>Sign up</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginTop: 50,
  },
  Logintext: {
    color: "#5100ad",
    fontSize: 50,
  },
  LogintextContainer: {
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 2,
    marginTop: 20,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
  },
  forgetPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0857a8",
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  noAccoutContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccoutText: {
    marginRight: 19,
    fontSize: 15,
  },
  signUpText: {
    fontSize: 15,
    color: "#5100ad",
  },
});

export default Login;
