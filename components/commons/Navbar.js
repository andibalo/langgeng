import { Stack, Flex, Spacer, IconButton, Slide } from "@chakra-ui/react";
import { Container, Logo, NavLink } from "./index";
import { GoThreeBars, GoX } from "react-icons/go";
import { useState } from "react";

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
  const [showSidebar, setShowSidebar] = useState(false)

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Container py="5" px="0">
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <Stack direction="row" spacing="9" display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.text}
              text={link.text}
              targetId={link.targetId}
            />
          ))}
        </Stack>
        <IconButton
          aria-label="Open Menu"
          icon={<GoThreeBars />}
          display={{ base: "flex", lg: "none", md: "none" }}
          onClick={handleShowSidebar}
        />
      </Flex>
      <Slide
        in={showSidebar}
        direction='right'
        style={{ zIndex: 10 }}>
        <Flex
          w="50vw"
          bgColor="gray.100"
          h="100vh"
          pos="fixed"
          top="0"
          right="0"
          flexDir="column">
          <Flex justify="flex-end">
            <IconButton
              mt={5}
              mr={4}
              aria-label="Close Menu"
              icon={<GoX />}
              display={{ base: "flex", lg: "none", md: "none" }}
              onClick={handleShowSidebar}
            />
          </Flex>
          <Stack
            spacing={10}
            align="center"
            direction="column"
            pt="20vh">
            {navLinks.map((link) => (
              <NavLink
                key={link.text}
                text={link.text}
                targetId={link.targetId}
              />
            ))}
          </Stack>
        </Flex>
      </Slide>
    </Container>
  );
};
