import React, { useCallback } from "react";
import * as Linking from "expo-linking";
import { Button, type IButtonProps } from "native-base";

interface Props extends IButtonProps {
  href: string;
}

const LinkButton = ({ href, ...props }: Props) => {
  const handlePress = useCallback(() => {
    void Linking.openURL(href);
  }, [href]);
  return <Button {...props} onPress={handlePress} />;
};

export default LinkButton;
