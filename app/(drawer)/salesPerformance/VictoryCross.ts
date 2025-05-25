import { Platform } from 'react-native';

// For Web use `victory`, for iOS/Android use `victory-native`.
const victoryPkg = Platform.OS === 'web' ? require('victory') : require('victory-native');

export const {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryLine,
  VictoryPie,
  VictoryTooltip,
} = victoryPkg;

