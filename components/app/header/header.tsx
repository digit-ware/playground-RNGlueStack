import React from "react";
import { ColorSchemeName } from "react-native";

import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { MoonIcon, SunIcon } from "@/components/ui/icon";
import { Button, ButtonIcon } from "@/components/ui/button";

interface Props {
  theme: "light" | "dark";
  onChangeTheme: () => void;
}

const Header: React.FC<Props> = ({ theme, onChangeTheme }) => {
  const isDarkMode = theme === "dark";

  return (
    <Box
      className="p-4 rounded-lg absolute top-0 left-0 right-0 z-10 bg-gray-300 dark:bg-gray-700"
      style={{
        shadowColor: isDarkMode ? "#fff" : "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 1,
        shadowRadius: 7,
        elevation: 34,
      }}
    >
      <HStack space="sm" className="justify-between items-center">
        <Box>
          <Heading size="2xl" numberOfLines={2} isTruncated>
            Hello, welcome to Gluestack
          </Heading>
        </Box>

        <Button onPress={onChangeTheme} size="xl" variant="link">
          <ButtonIcon
            as={isDarkMode ? SunIcon : MoonIcon}
            className="w-8 h-8"
          />
        </Button>
      </HStack>
    </Box>
  );
};

export default Header;
