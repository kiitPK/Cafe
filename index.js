/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import AsyncStorageTest from "./components/storage/AsyncStorage";

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => AsyncStorageTest);
