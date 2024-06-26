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
import { useStores } from "../../store/store_context";

const RegistrationForm = () => {
  const navigation = useNavigation();
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Введите действительный email")
      .required("Email обязателен"),
    password: Yup.string()
      .min(6, ({ min }) => `Пароль должен состоять минимум из ${min} символов`)
      .required("Пароль обязателен"),
  });
  const { pageStore } = useStores();
  const register = async (values) => {
    await pageStore.registerUser(values);
    await pageStore.login(values)
    pageStore.registered && navigation.navigate("IntroScreen1");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        is_active: true,
        is_superuser: false,
        is_verified: false,
        first_name: "",
        last_name: "",
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => register(values)}
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
          <Text style={styles.label}>Регистрация</Text>
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
          <TouchableOpacity onPress={() => handleSubmit()} style={styles.touch}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                borderBottomColor: "#D9D9D9",
                borderBottomWidth: 1,
                width: 110,
                marginTop: 30,
              }}
            ></View>
            <Text style={styles.signWith}>Зарегистрируйтесь с помощью</Text>
            <View
              style={{
                borderBottomColor: "#D9D9D9",
                borderBottomWidth: 1,
                width: 110,
                marginTop: 30,
              }}
            ></View>
          </View>
          <View style={styles.signBar}>
            <Image source={require("./../../images/phone.png")} />
            <Image source={require("./../../images/telegram.png")} />
          </View>
          <View style={styles.registrationLink}>
            <Text>Уже есть профиль?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={{ textDecorationLine: "underline" }}>
                Войдите здесь
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RegistrationForm;
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
  signWith: {
    marginTop: 30,
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 14,
    fontWeight: "100",
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
