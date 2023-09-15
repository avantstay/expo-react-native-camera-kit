import {mergeContents} from "@expo/config-plugins/build/utils/generateCode";
import {ExpoConfig} from "@expo/config-types";
import {withProjectBuildGradle} from "@expo/config-plugins";
import {PluginConfig} from "./types";

const addKotlinGradlePluginProjectDependency = (projectBuildGradle: string) =>
  mergeContents({
    tag: `react-native-camera-kit dependency`,
    src: projectBuildGradle,
    newSrc: `classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version")`,
    anchor: /dependencies/,
    offset: 1,
    comment: '//',
  }).contents

const addKotlinVersionPluginProjectDependency = (projectBuildGradle: string, kotlinVersion: string = '1.7.20') =>
  mergeContents({
    tag: `react-native-camera-kit ensure kotlin_version`,
    src: projectBuildGradle,
    newSrc: `kotlinVersion = findProperty('kotlinVersion') ?: '${kotlinVersion}'\nkotlin_version = kotlinVersion`,
    anchor: /ndkVersion = .+?$/,
    offset: 1,
    comment: '//',
  }).contents


export const withProjectGradle = (expoConfig: ExpoConfig, pluginConfig: PluginConfig) =>
  withProjectBuildGradle(expoConfig, ({ modResults, ...config }) => {
    if (modResults.language !== 'groovy') {
      throw new Error(
        'Cannot configure react-native-camera-kit in the project gradle because the file is not groovy.'
      )
    }

    modResults.contents = addKotlinVersionPluginProjectDependency(modResults.contents, pluginConfig?.kotlinVersion )
    modResults.contents = addKotlinGradlePluginProjectDependency(modResults.contents)

    return { modResults, ...config }
  })
