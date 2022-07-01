import { Stack, Flex, Spacer } from "@chakra-ui/react";
import { Container, Logo, NavLink } from "./index";

const navLinks = [
  {
    text: "Cara Kerja",
    targetId: "howItWorks",
  },
  {
    text: "FAQ",
    targetId: "faq",
  },
  {
    text: "Feedback",
    targetId: "feedback",
  },
  {
    text: "Kontak Kami",
    targetId: "contact",
  },
];

export const Navbar = () => {
  return (
    <Container py="5" px="0">
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <Stack direction="row" spacing="9" display={{base:"none", md:"flex"}}>
          {navLinks.map((link) => (
            <NavLink
              key={link.text}
              text={link.text}
              targetId={link.targetId}
            />
          ))}
        </Stack>
      </Flex>
    </Container>
  );
};
