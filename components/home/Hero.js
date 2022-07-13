import { Box, Stack, Heading, Flex } from "@chakra-ui/react";
import { Container, Navbar, Button } from "../commons";
import Image from "next/image";
import heroVector from "../../public/hero.png";

export const Hero = () => {
  return (
    <Container minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent={{ base: "center", md: "initial" }}
        flex={"1"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", md: "initial" }}
          flex="0 0 50%"
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Heading
              as="h1"
              color="black"
              fontSize={{ base: "3xl", sm: "4xl" }}
              mb="10"
              textAlign={{ base: "center", md: "initial" }}
            >
              Platform bagi kamu yang <Box as="span" color="primary.100">serius nyari pasangan</Box> untuk <Box as="span" color="primary.100">bertemu</Box> dan <Box as="span" color="primary.100">ngomong langsung</Box> dengan future <Box fontStyle="italic" as="span" color="primary.100">soulmate</Box> kamu!
            </Heading>
            <Stack
              direction={{ base: "column", sm: "row" }}
              justifyContent={{ base: "center", md: "initial" }}
            >
              <Button
                as="a"
                href="https://forms.gle/KV4GwNSh1brorM2h8"
                target="_blank"
              >
                Cari Soulmate!
              </Button>
              <Button
                btnType="outline"
                as="a"
                href="https://forms.gle/KV4GwNSh1brorM2h8"
                target="_blank"
              >
                Pelajari lebih
              </Button>
            </Stack>
          </Box>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", md: "initial" }}
          flex="0 0 50%"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Box w="100%" maxW="600px">
            <Image
              src={heroVector}
              layout="responsive"
              placeholder="blur"
              alt="hero vector image"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
