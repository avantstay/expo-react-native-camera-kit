import {mergeContents} from "@expo/config-plugins/build/utils/generateCode";
import {ExpoConfig} from "@expo/config-types";
import {withProjectBuildGradle} from "@expo/config-plugins";

const addKotlinGradlePluginProjectDependency = (projectBuildGradle: string) =>
  mergeContents({
    tag: `react-native-camera-kit dependency`,
    src: projectBuildGradle,
    newSrc: `classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version")`,
    anchor: /dependencies/,
    offset: 1,
    comment: '//',
  }).contents

const addKotlinVersionPluginProjectDependency = (projectBuildGradle: string) =>
  mergeContents({
    tag: `react-native-camera-kit version`,
    src: projectBuildGradle,
    newSrc: `if (findProperty('android.kotlinVersion')) {
            kotlin_version = findProperty('android.kotlinVersion')
        }`,
    anchor: /ext/,
    offset: 1,
    comment: '//',
  }).contents



export const withProjectGradle = (expoConfig: ExpoConfig) =>
  withProjectBuildGradle(expoConfig, ({ modResults, ...config }) => {
    if (modResults.language !== 'groovy') {
      throw new Error(
        'Cannot configure react-native-camera-kit in the project gradle because the file is not groovy.'
      )
    }

    modResults.contents = addKotlinVersionPluginProjectDependency(modResults.contents)
    modResults.contents = addKotlinGradlePluginProjectDependency(modResults.contents)

    return { modResults, ...config }
  })
