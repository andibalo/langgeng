import { Box, Stack, Heading, Flex, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { Container, SectionSpacer, Button } from "../commons";
import buildingWebsiteVector from "../../public/building_website.png";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { IG_LINK, WA_LINK } from "../../utils/constants";

export const Contact = () => {
  return (
    <div id="contact">
      <SectionSpacer>
        <Container>
          <Stack direction={{ base: "column", md: "row" }} mb="8" flex={"1"}>
            <Flex
              alignItems={"center"}
              justifyContent={{ base: "center", md: "initial" }}
              flex="0 0 50%"
            >
              <Box w="100%" maxW="500px">
                <Image
                  src={buildingWebsiteVector}
                  layout="responsive"
                  placeholder="blur"
                  alt="shopping vector image"
                />
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={{ base: "center", md: "initial" }}
              flex="0 0 50%"
            >
              <Box maxW="500px">
                <Heading as="h2" color="secondary.100" mb="5">
                  Mulai transaksi pinjam sewa di Rentout.id!
                </Heading>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  justifyContent={{ base: "center", md: "initial" }}
                  mb="10"
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
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  justifyContent={{ base: "center", md: "initial" }}
                  spacing={{ base: "3", sm: "10" }}
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <Icon as={AiOutlineInstagram} boxSize={"8"} />
                    <Text
                      as="a"
                      href={IG_LINK}
                      target={"_blank"}
                      transition={"all 0.2s"}
                      _hover={{ color: "primary.200" }}
                    >
                      @rentout.id
                    </Text>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Icon as={AiOutlineWhatsApp} boxSize={"8"} />
                    <Text
                      as="a"
                      href={WA_LINK}
                      target={"_blank"}
                      transition={"all 0.2s"}
                      _hover={{ color: "primary.200" }}
                    >
                      087745064437
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </SectionSpacer>
    </div>
  );
};
