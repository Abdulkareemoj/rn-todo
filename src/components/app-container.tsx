import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { theme } from "../theme";
interface Props {
  children: React.ReactNode;
}
// INsupposed to be {props}
export default function AppContainer({ children }: Props): JSX.Element {
  return (
    <NavigationContainer>
      {/* /supposed to be{props.children} 7:17 */}
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
}
