import { Button as ChakraButton } from "@chakra-ui/react";

const primaryBtnStyles = { backgroundColor: "primary.200", color: "white" };

const outlinePrimaryBtnStyles = {
  backgroundColor: "primary.200",
  color: "white",
  borderWidth: "3px",
  borderStyle: "solid",
  borderColor: "primary.200",
  backgroundColor: "white",
  color: "primary.200",
};

const buttonSxMapper = {
  solid: primaryBtnStyles,
  outline: outlinePrimaryBtnStyles,
};

export const Button = ({ btnType = "solid", children, ...rest }) => {
  return (
    <ChakraButton
      variant={btnType}
      size="md"
      sx={buttonSxMapper[btnType]}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};
