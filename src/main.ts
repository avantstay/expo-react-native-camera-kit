import {withPlugins,} from '@expo/config-plugins'
import {ExpoConfig} from '@expo/config-types';
import {withKotlinVersion} from "./withKotlinVersion";
import {withProjectGradle} from "./withProjectGradle";
import {withAppBuildGradleExtension} from "./withAppBuildGradleExtension";


const withCameraKitAndroid = (config: ExpoConfig) => {
  return withPlugins(config, [
    withKotlinVersion,
    withProjectGradle,
    withAppBuildGradleExtension,
  ])
}

export default withCameraKitAndroid
