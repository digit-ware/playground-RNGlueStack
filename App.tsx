/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

import { ScrollView } from "react-native";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";

import Header from "@/components/app/header";

function App(): React.JSX.Element {
  const [colorMode, setColorMode] = useState<"light" | "dark">("dark");

  return (
    <GluestackUIProvider mode={colorMode}>
      <Header
        theme={colorMode}
        onChangeTheme={() =>
          setColorMode(colorMode === "light" ? "dark" : "light")
        }
      />
      <Box className="mt-[70px]">
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {[1, 2, 3, 4, 5].map((item) => (
            <Card key={item} className="p-4 rounded-2xl m-3 bg-background-300">
              <Image
                source={{
                  uri: "https://gluestack.github.io/public-blog-video-assets/yoga.png",
                }}
                className="mb-6 h-[240px] w-full rounded-lg"
                alt="image"
              />
              <Text className="text-sm font-normal mb-2 text-typography-700">
                May 15, 2023
              </Text>
              <Heading size="md">
                The Power of Positive Thinking
              </Heading>
            </Card>
          ))}
        </ScrollView>
      </Box>
    </GluestackUIProvider>
  );
}

export default App;
