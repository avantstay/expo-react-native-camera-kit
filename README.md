# Expo React Native Camera Kit
[Expo Plugin](https://docs.expo.dev/config-plugins/plugins-and-mods/) to integrate Expo managed workflow with [react-native-camera-kit](https://github.com/teslamotors/react-native-camera-kit) without having to eject


<a href="https://www.npmjs.org/package/expo-react-native-camera-kit">
    <img src="https://badge.fury.io/js/expo-react-native-camera-kit.svg" alt="Current npm package version." />
</a>


## Installation (Expo > 47)

NPM

```bash
npm install expo-react-native-camera-kit
```

yarn

```bash
yarn add expo-react-native-camera-kit
```

## Configuration in app.json / app.config.js
### Plugin


**app.json**
```json
{
  "plugins": [
    [
      "expo-react-native-camera-kit",
      {
        "minSdkVersion": 23
      }
    ]
  ]
}
```

or

**app.config.js**
```js
export default {
  ...
  plugins: [
    [
      expo-react-native-camera-kit:
      {
        minSdkVersion: 23
      }
    ]
  ]
};
```

It's also possible to set the `kotlinVersion`.

If no version is provided and there is no `kotlinVersion` set in the project (Expo SDK 48 does not set `kotlinVersion`) it uses as `1.7.20`

Expo SDK 49 sets `kotlinVersion` to 1.8.10 so this plugin uses that version.


### What this plugin does

This plugin follows the steps documented in the react-native-camera-kit repository.

https://github.com/teslamotors/react-native-camera-kit/blob/master/docs/kotlin.md
