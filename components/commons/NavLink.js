import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

export const NavLink = ({ text, targetId }) => {
  return (
    <Link to={targetId} spy={true} smooth={true} duration={500}>
      <Text
        as="p"
        color="secondary.100"
        fontSize="lg"
        cursor={"pointer"}
        _hover={{ color: "primary.200", transition: "all 0.2s" }}
      >
        {text}
      </Text>
    </Link>
  );
};
