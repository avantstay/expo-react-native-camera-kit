import {ExpoConfig} from "@expo/config-types";
import {withGradleProperties} from "@expo/config-plugins";

export const withKotlinVersion = (expoConfig: ExpoConfig) =>
  withGradleProperties(expoConfig, async ({ modResults, ...config }) => {
    modResults = modResults || []
    modResults.push({ type: 'property', key: 'android.kotlinVersion', value: '1.7.20' })

    return { modResults, ...config }
  })
