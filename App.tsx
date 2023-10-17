import AppContainer from "./src/components/app-container";
import React from "react";
import MainScreen from "./src/screens/main";
export default function App(): JSX.Element {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  );
}
