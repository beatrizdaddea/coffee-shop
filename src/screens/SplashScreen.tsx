// src/screens/SplashScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const { width, height } = Dimensions.get("window");
import { ArrowButton } from "../components/ArrowButton";

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/background.png")}
          style={styles.background}
          resizeMode="cover"
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/coffee-icon.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/text.png")}
            style={styles.title}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.heading}>Feel yourself like a barista!</Text>
        <Text style={styles.subtitle}>Magic coffee on order.</Text>

        <ArrowButton
          onPress={handlePress}
          style={styles.nextButton}
          color="#fff"
          backgroundColor="#b26a3d"
          size={32}
        />
      </View>
    </View>
  );
}

// ... mantém os mesmos estilos

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topContainer: {
    width: "100%",
    height: height * 0.55,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 156,
    height: 156,
  },
  title: {
    width: 296,
    marginTop: 10,
  },
  bottomContainer: {
    padding: 24,
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 50,
  },
  subtitle: {
    color: "#AAAAAA",
    fontSize: 16,
    marginTop: 8,
  },
  indicatorContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  nextButton: {
    position: "absolute",
    bottom: 40,
    right: 30,
    width: 64,
    height: 64,
    borderRadius: 100,
  },
});
