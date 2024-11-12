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
import RecoveryPasswordScreen from "../recovery_password_screen/recovery_password_screen";
import { useStores } from "../../store/store_context";
import { icon_phone, icon_telegram } from "../../images/images";
import { SvgXml } from "react-native-svg";

const LoginForm = () => {
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
  const login = async (values) => {
    await pageStore.login(values);
    if (pageStore.token) await pageStore.getMe();
    pageStore.registered && navigation.navigate("MainScreen");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        login(values);
      }}
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
          <TouchableOpacity
            onPress={() => navigation.navigate(RecoveryPasswordScreen)}
          >
            <Text style={styles.forgotPassword}>Забыли пароль?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit} style={styles.touch}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ВОЙТИ</Text>
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
            <Text style={styles.signWith}>Войдите с помощью</Text>
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
            <TouchableOpacity>
              <SvgXml xml={icon_phone} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgXml xml={icon_telegram} />
            </TouchableOpacity>
          </View>
          <View style={styles.registrationLink}>
            <Text style={{ fontFamily: "GeologicaThin" }}>Нет профиля?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <Text
                style={{
                  textDecorationLine: "underline",
                  fontFamily: "GeologicaThin",
                }}
              >
                Зарегистрируйтесь здесь
              </Text>
            </TouchableOpacity>
          </View>
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
    fontFamily: "GeologicaRegular",
  },
  input: {
    borderColor: "121212",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontFamily: "GeologicaLight",
    fontSize: 14,
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
    fontFamily: "GeologicaThin",
    fontSize: 14,
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
    fontFamily: "GeologicaRegular",
  },
  touch: {
    marginTop: 20,
  },
  signWith: {
    marginTop: 30,
    alignSelf: "center",
    padding: 10,
    fontSize: 14,
    fontFamily: "GeologicaThin",
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
