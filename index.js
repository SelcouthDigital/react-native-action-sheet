import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

import Simple from './examples/Simple'

AppRegistry.registerComponent(appName, () => Simple)
