import {ExpoConfig} from "@expo/config-types";
import {withGradleProperties} from "@expo/config-plugins";
import type {PluginConfig} from "./types";

export const withRequiredGradleProperties = (expoConfig: ExpoConfig, pluginConfig?: PluginConfig) =>
  withGradleProperties(expoConfig, async ({ modResults, ...config }) => {
    modResults = modResults || []

    if (pluginConfig?.minSdkVersion) {
      modResults.push({ type: 'property', key: 'android.minSdkVersion', value: pluginConfig?.minSdkVersion })
    }

    return { modResults, ...config }
  })
