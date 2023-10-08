# Changes Calculator App

![Changing Cash](./docs/assets/changing_cash.jpg "Changing Cash")

The goal of this project is to create a changes calculator app, that will be able to run on the Web, Android and iOS devices.<br>
To achieve this, we will use [React-Native](./docs/ABOUT_REACT_NATIVE.md) and Typescript.

## Description

[===> Check the full description of this task by clicking here.](./docs/TASK_CHANGES_CALCULATOR_APP.md)

## Starting the development

For the development of this project, let's consider:
- Node: v18.18.0 (npm v9.8.1)

If you don't have this specific node version, you can try with your own version, or you can install it with the Node Version Manager (NVM): `nvm use 18.18.0`.<br>
If you don't have **nvm** to perform this action, please check these websites:
- https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
- https://github.com/nvm-sh/nvm
- https://github.com/coreybutler/nvm-windows (windows)

Open a terminal and create the initial structure of this project with [Expo Go](https://docs.expo.dev/) by running:

```
npx create-expo-app -t expo-template-blank-typescript ChangesCalculatorApp
```

Enter in the project folder and let's install some dependencies to also run on the web, so we can easily validate in our browser:

```
cd ChangesCalculatorApp
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```

Start the application, it will ask you to press one letter if you want to open on Android (a), iOS Simulator (i) or on the web (w). Press **w** to open the browser (you can directly execute in the web with `npm run web` if you prefer):

```
npx expo start
```

You will see the message on your browser: `Open up App.tsx to start working on your app!`<br>
If you want to execute on **Android** or **iOS** devices, you'll need extra configurations.<br>
For example, let's try instead of pressing **w** to show in the browser, let's press **a** to open for Android.<br>
You'll see some error message like:
```
Failed to resolve the Android SDK path. Default install location not found: /Users/abcdefg/Library/Android/sdk. Use ANDROID_HOME to set the Android SDK location.
```
If you want to set up for **Android**, follow the steps here: [https://docs.expo.dev/workflow/android-studio-emulator/](https://docs.expo.dev/workflow/android-studio-emulator/). It will guide you to install **Android Studio**, set your Android SDK location to an environment variable, and have an Android Virtual Device so you don't need to have an Android smartphone to test your changes. However, if you prefer, you can also **run on your own device** and check the changes directly on your smartphone! You can achieve that by following the instructions here: [https://reactnative.dev/docs/running-on-device?platform=android](https://reactnative.dev/docs/running-on-device?platform=android).


So, let's start working in our **App.tsx**!

_PS_: if you see some error message like this, it is normal for the first time, because we didn't have anything in [cache](https://en.wikipedia.org/wiki/Cache_(computing)) at this moment: 
```
Error while reading cache, falling back to a full crawl:
 Error: Unable to deserialize cloned data due to invalid or unsupported version.
    at deserialize (node:v8:345:7)
    ...
```

## The App.tsx

Before we start making changes in our main file, let's take a look into it's content:

```ts
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

If you are familiar with [React](https://react.dev/learn), you'll see the structure is basically the same.<br>
This code defines a function called **App** that will be the entrypoint for building our main app. It also defines some basic CSS to our app.<br>
Feel free to do changes and try to implement the app by yourself looking at the documentation and other websites that can help you achieve that, or you can continue with this tutorial to create this app together.

### Giving some shape to our App

![Under construction](./docs/assets/under_construction.jpg "Under construction")

Copyright © 2023 Daniel Freitas Martins (dnlfm)