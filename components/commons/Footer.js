import { Box, Text } from "@chakra-ui/react";
import { IG_LINK } from "../../utils/constants";

export const Footer = () => {
  return (
    <Box py="5">
      <Text textAlign={"center"} color="secondary.100">
        &copy; Copyright {new Date().getFullYear()}. Made with love by{" "}
        <Box as="a" href={IG_LINK} target={"_blank"} color="primary.200">
          Rentout
        </Box>{" "}
        team
      </Text>
    </Box>
  );
};
