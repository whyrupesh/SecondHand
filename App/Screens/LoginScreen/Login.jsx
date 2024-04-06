import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 50, fontWeight: "bold" }}>SecondHand</Text>
        <Text style={{ fontSize: 20 }}>Buy and Sell old goods.</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={{ fontSize: 50, fontWeight: "bold" }}>Login</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ color: "white" }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 200,
    marginLeft: 50,
  },

  loginContainer: {
    marginTop: 100,
    textSize: 50,
  },

  button: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 99,
    width: 150,
    marginTop: 50,
  },
});
