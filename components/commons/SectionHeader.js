import { Box, Heading } from "@chakra-ui/react";

export const SectionHeader = ({ text, ...rest }) => {
  return (
    <Box {...rest}>
      <Heading mb="10" as="h2" textAlign={"center"} color="primary.200">{text}</Heading>
    </Box>
  );
};
