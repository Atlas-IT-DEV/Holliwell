// App.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigation } from "@react-navigation/native";
import LoginScreen from "./login_screen";

const RecoveryPasswordForm = () => {
  const navigation = useNavigation();
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Введите действительный email")
      .required("Email обязателен"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Восстановление пароля</Text>
          <Text style={{ color: "#A2A2A2", marginBottom: 30 }}>
            Введите адрес вашей электронной почты, на который мы пришлем ссылку
            для восстановления пароля
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            placeholder="Email"
          />
          {errors.email && touched.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TouchableOpacity  onPress={() => navigation.navigate("LoginScreen")} style={styles.touch}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ОТПРАВИТЬ</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default RecoveryPasswordForm;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    width: "100%",
    height: "100%",
  },
  label: {
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 28,
  },
  input: {
    borderColor: "121212",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginBottom: 8,
  },
  forgotPassword: {
    color: "#121212",
    textAlign: "center",
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "#303030",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  touch: {
    marginTop: 20,
  },
  signWith: {
    marginTop: 30,
    alignSelf: "center",
    padding: 10,
    fontSize: 14,
    fontWeight: 100,
  },
  signBar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  registrationLink: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 30,
  },
});
