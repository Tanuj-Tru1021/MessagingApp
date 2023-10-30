import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from './src/Navigator';


const App = () => {

  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigator />
       </GestureHandlerRootView>
  );
}

export default App;