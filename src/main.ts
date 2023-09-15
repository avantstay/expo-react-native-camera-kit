import {withPlugins,} from '@expo/config-plugins'
import {ExpoConfig} from '@expo/config-types';
import {PluginConfig, withRequiredGradleProperties} from "./withRequiredGradleProperties";
import {withProjectGradle} from "./withProjectGradle";
import {withAppBuildGradleExtension} from "./withAppBuildGradleExtension";


const withCameraKitAndroid = (config: ExpoConfig, pluginConfigs?: PluginConfig) => {
  return withPlugins(config, [
    [withRequiredGradleProperties, pluginConfigs],
    withProjectGradle,
    withAppBuildGradleExtension,
  ])
}

export default withCameraKitAndroid
