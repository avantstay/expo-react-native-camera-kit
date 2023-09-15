import { withPlugins } from "@expo/config-plugins";
import { ExpoConfig } from "@expo/config-types";
import { withRequiredGradleProperties } from "./withRequiredGradleProperties";
import { withProjectGradle } from "./withProjectGradle";
import { withAppBuildGradleExtension } from "./withAppBuildGradleExtension";
import type { PluginConfig } from "./types";

const withCameraKitAndroid = (
  config: ExpoConfig,
  pluginConfigs?: PluginConfig,
) => {
  return withPlugins(config, [
    [withRequiredGradleProperties, pluginConfigs],
    [withProjectGradle, pluginConfigs],
    withAppBuildGradleExtension,
  ]);
};

export default withCameraKitAndroid;
