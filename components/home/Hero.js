import { Box, Stack, Heading, Flex } from "@chakra-ui/react";
import { Container, Navbar, Button } from "../commons";
import Image from "next/image";
import cameraVector from "../../public/camera.png";

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
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <Heading
              as="h1"
              color="secondary.100"
              fontSize={{ base: "3xl", sm: "4xl" }}
              mb="10"
              textAlign={{ base: "center", md: "initial" }}
            >
              Nyewa kamera <Box as="span" color="primary.200">berkualitas</Box> dengan <Box as="span" color="primary.200">keamanan terjamin</Box>? <br/>Di <Box as="span" color="primary.200">Rentout.id</Box> aja!
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
               Sewa kamera
              </Button>
              <Button
                as="a"
                href="https://forms.gle/7XMhS2FVWi5Fuf4G6"
                target="_blank"
                btnType="outline"
              >
                Saya seorang pemberi sewa
              </Button>
            </Stack>
          </Box>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", md: "initial" }}
          flex="0 0 50%"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Box w="100%" maxW="600px">
            <Image
              src={cameraVector}
              layout="responsive"
              placeholder="blur"
              alt="shopping vector image"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
