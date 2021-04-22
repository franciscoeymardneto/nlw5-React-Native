import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputChangeEventData,
} from "react-native";

import { Button } from "../components/Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  function handleInputBlur (e: NativeSyntheticEvent<TextInputFocusEventData>) {
    e.preventDefault()
    setIsFocused(false)
    setIsFilled(!!name)
  }
  function handleInputFocus (e: NativeSyntheticEvent<TextInputFocusEventData>) {
    e.preventDefault()
    setIsFocused(true)
  }
  function handleInputChange (value: string) {
    setIsFilled(!!value)
    setName(value)
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <View style={styles.header}>
            <Text style={styles.emoji}>
                { isFilled ? '😆' : '😃'}
            </Text>
            <Text style={styles.title}>
              Como podemos {"\n"}
              chamar você?
            </Text>
          </View>
          <TextInput 
            style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green}
            ]} 
            placeholder="Digite um nome" 
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />
          <View style={styles.footer}>
            <Button text="Confirmar" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center"
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,

    width: "100%",
    marginTop: 50,
    padding: 10,
    color: colors.heading,
    fontSize: 18,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: 'center'
  },
});