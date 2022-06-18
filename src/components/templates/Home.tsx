/** @jsxImportSource @emotion/react */
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  isIntersecting: string;
};

export const Home: FC<Props> = memo((props) => {
  const { isIntersecting } = props;

  return (
    <Box
      position="absolute"
      bottom="5%"
      left="5%"
      opacity={isIntersecting === "section01" ? "100%" : "0%"}
      transition="opacity 0.3s"
    >
      <Flex align="center">
        <Image
          boxSize={{ base: 100, md: 150 }}
          src={`${String(
            process.env.PUBLIC_URL
          )}/images/profile-logo-white.png`}
          mr={5}
        />
        <Box>
          <Heading as="h1" size={{ base: "lg", md: "xl" }} textAlign="center">
            HIRONAGA
            <br />
            KAWASAKI
          </Heading>
          <Text fontSize={{ base: "sm", md: "xl" }}>front-end engineer</Text>
        </Box>
      </Flex>
    </Box>
  );
});
