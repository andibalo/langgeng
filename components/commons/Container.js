import { Container as ChakraContainer } from "@chakra-ui/react";

export const Container = ({ children, ...rest }) => {
  return (
    <ChakraContainer maxW="container.xl" {...rest}>
      {children}
    </ChakraContainer>
  );
};
