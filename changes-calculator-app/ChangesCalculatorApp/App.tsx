import React, { useEffect, useState } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';
import { ChangeCalculator } from './src/ChangeCalculator';

export default function App() {
  const [isSplashVisible, setSplashVisibility] = useState(true);
  const [appState, setAppState] = useState(AppState.currentState);

  const handleAppStateChange = (nextAppState: "active" | "background" | "inactive" | "unknown" | "extension") => {
    if (
      appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      setSplashVisibility(true);
      setTimeout(() => {
        setSplashVisibility(false);
      }, 2000);
    }
    setAppState(nextAppState);
  };


  useEffect(() => {
    // This will deactivate ou Splash Screen after 2 seconds
    const timer = setTimeout(() => {
      setSplashVisibility(false);
    }, 2000);

    // This line sets up an event listener to listen for changes in the app's state. When the app's state changes (e.g., it 
    // goes to the background or comes back to the foreground), the handleAppStateChange function will be called.
    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    // Cleanup function of the useEffect hook:
    // Clean up any side effects to avoid memory leaks or unwanted behavior. Here, the timer is cleared (to ensure 
    // it doesn't run if it hasn't already) and the app state event listener is removed (to stop listening for 
    // app state changes).
    return () => {
      clearTimeout(timer);
      appStateSubscription.remove();
    };
  }, [appState]); // Our dependency array: Whenever appState changes, the effect will re-run, and before it does, it will run  the cleanup function.

  return (
    <View style={styles.container}>
      {isSplashVisible ? (
        <View style={styles.splashScreen}>
          <Text style={styles.splashText}>Welcome \o/</Text>
        </View>
      ) : (
        <ChangeCalculator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  splashText: {
    fontSize: 30,
    color: 'deepskyblue',
  },
});