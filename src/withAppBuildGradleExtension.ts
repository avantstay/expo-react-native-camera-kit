import {mergeContents} from "@expo/config-plugins/build/utils/generateCode";
import {ExpoConfig} from "@expo/config-types";
import {withAppBuildGradle} from "@expo/config-plugins";


const addKotlinAndroidExtensionsGradlePlugin = (appBuildGradle: string) => {
  return mergeContents({
    tag: `react-native-camera-kit`,
    src: appBuildGradle,
    newSrc: `apply plugin: "kotlin-android"\napply plugin: "kotlin-android-extensions"`,
    anchor: /^$/,
    offset: 1,
    comment: '//',
  }).contents
}


export const withAppBuildGradleExtension = (expoConfig: ExpoConfig) =>
  withAppBuildGradle(expoConfig, ({ modResults, ...config }) => {
    if (modResults.language !== 'groovy') {
      throw new Error(
        'Cannot configure react-native-camera-kit in the app gradle because the file is not groovy.'
      )
    }

    modResults.contents = addKotlinAndroidExtensionsGradlePlugin(modResults.contents)
    return { modResults, ...config }
  })
