import React from "react";
import { config } from "./config";
import {
  ColorSchemeName,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  ViewProps,
} from "react-native";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import { colorScheme as colorSchemeNW } from "nativewind";


type ModeType = "light" | "dark" | "system";

const getColorSchemeName = (
  colorScheme: ColorSchemeName,
  mode: ModeType
): "light" | "dark" => {
  if (mode === "system") {
    return colorScheme ?? "light";
  }
  return mode;
};

export function GluestackUIProvider({
  mode = "light",
  ...props
}: {
  mode?: "light" | "dark" | "system";
  children?: React.ReactNode;
  style?: ViewProps["style"];
}) {
  const colorScheme = useColorScheme();

  const colorSchemeName = getColorSchemeName(colorScheme, mode);

  colorSchemeNW.set(mode);

  const isDarkMode = mode === "dark";

  const backgroundColor = isDarkMode ? "#000" : "#fff";

  return (
    <>
      <View
        style={[
          config[colorSchemeName],
          // eslint-disable-next-line react-native/no-inline-styles
          {
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: backgroundColor,
          },
          props.style,
        ]}
      >
        <SafeAreaView>
          <StatusBar
            className="bg-gray-300 dark:bg-gray-700"
            barStyle={isDarkMode ? "light-content" : "dark-content"}
          />

          <OverlayProvider>
            <ToastProvider>{props.children}</ToastProvider>
          </OverlayProvider>
        </SafeAreaView>
      </View>
    </>
  );
}
