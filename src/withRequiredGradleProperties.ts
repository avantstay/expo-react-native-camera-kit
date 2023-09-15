import {ExpoConfig} from "@expo/config-types";
import {withGradleProperties} from "@expo/config-plugins";

export type PluginConfig = {kotlinVersion?: string, minSdkVersion?: string}


export const withRequiredGradleProperties = (expoConfig: ExpoConfig, pluginConfig?: PluginConfig) =>
  withGradleProperties(expoConfig, async ({ modResults, ...config }) => {
    modResults = modResults || []

    if (pluginConfig?.kotlinVersion) {
      modResults.push({ type: 'property', key: 'android.kotlinVersion', value: pluginConfig?.kotlinVersion })
    }

    if (pluginConfig?.minSdkVersion) {
      modResults.push({ type: 'property', key: 'android.minSdkVersion', value: pluginConfig?.minSdkVersion })
    }



    return { modResults, ...config }
  })
