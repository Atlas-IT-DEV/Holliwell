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
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";


const LoginForm = () => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Введите действительный email")
      .required("Email обязателен"),
    password: Yup.string()
      .min(8, ({ min }) => `Пароль должен состоять минимум из ${min} символов`)
      .required("Пароль обязателен"),
  });

  const handleForgotPassword = () => {
    Alert.alert(
      "Забыли пароль",
      "Функция восстановления пароля пока не реализована"
    );
  };

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
          <Text style={styles.label}>ВОЙТИ В ПРОФИЛЬ</Text>
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
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            placeholder="Пароль"
          />
          {errors.password && touched.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
            Забыли пароль?
          </Text>
          <TouchableOpacity onPress={handleSubmit} style={styles.touch}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ВОЙТИ</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
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
    fontSize: 28,
    marginBottom: 22,
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
});
