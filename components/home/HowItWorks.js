import { Box, Stack, Heading, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Container, SectionSpacer, SectionHeader, Button } from "../commons";
import formVector from "../../public/fill_form.png";
import onlineDateVector from "../../public/online_dating.png";
import blindDateVector from "../../public/blind_date.png";

export const HowItWorks = () => {
  return (
    <div id="howItWorks">
      <SectionSpacer>
        <Container>
          <SectionHeader data-aos="fade-up" text={"Cara Pendaftaran Blind Date"} />
          <Box
            mb="10"
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              mb={{ base: "12", md: "8" }}
              flex={"1"}
              data-aos="fade-right"
            >
              <Flex
                alignItems={"center"}
                justifyContent={{ base: "center", md: "initial" }}
                flex="0 0 50%"
              >
                <Box w="100%" maxW="500px">
                  <Image
                    src={formVector}
                    layout="responsive"
                    placeholder="blur"
                    alt="shopping vector image"
                  />
                </Box>
              </Flex>
              <Flex alignItems={"center"} flex="0 0 50%">
                <Box maxW="500px">
                  <Heading
                    as="h1"
                    color="secondary.100"
                    mb="3"
                    fontSize={"3xl"}
                  >
                    <Box as="span" color="primary.200">
                      1.
                    </Box>{" "}
                    Isi formulir pendaftaran
                  </Heading>
                  <Text>
                    Pilih tanggal event kemudian isi informasi diri
                  </Text>
                </Box>
              </Flex>
            </Stack>
            <Stack
              direction={{ base: "column-reverse", md: "row" }}
              mb={{ base: "12", md: "8" }}
              flex={"1"}
              data-aos="fade-left"
            >
              <Flex alignItems={"center"} flex="0 0 50%">
                <Box maxW="500px">
                  <Heading
                    as="h1"
                    color="secondary.100"
                    mb="3"
                    fontSize={"3xl"}
                  >
                    <Box as="span" color="primary.200">
                      2.
                    </Box>{" "}
                    Kami akan menghubungi Anda
                  </Heading>
                  <Text>
                    Admin kami akan mengadakan sesi bicara melalui WhatsApp
                    untuk mendiskusikan peminjaman produk lebih lanjut.
                  </Text>
                </Box>
              </Flex>
              <Flex
                alignItems={"center"}
                justifyContent={{ base: "center", md: "initial" }}
                flex="0 0 50%"
              >
                <Box w="100%" maxW="500px">
                  <Image
                    src={onlineDateVector}
                    layout="responsive"
                    placeholder="blur"
                    alt="shopping vector image"
                  />
                </Box>
              </Flex>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} flex={"1"} data-aos="fade-right">
              <Flex
                alignItems={"center"}
                justifyContent={{ base: "center", md: "initial" }}
                flex="0 0 50%"

              >
                <Box w="100%" maxW="500px">
                  <Image
                    src={blindDateVector}
                    layout="responsive"
                    placeholder="blur"
                    alt="shopping vector image"
                  />
                </Box>
              </Flex>
              <Flex alignItems={"center"} flex="0 0 50%">
                <Box maxW="500px">
                  <Heading
                    as="h1"
                    color="secondary.100"
                    mb="3"
                    fontSize={"3xl"}
                  >
                    <Box as="span" color="primary.200">
                      3.
                    </Box>{" "}
                    Tunggu paket Anda tiba!
                  </Heading>
                  <Text>
                    Peminjaman produk yang telah disetujui akan langsung
                    diproses dan dikirimkan kepada Anda.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
          <Flex justifyContent={"center"}>
            <Box data-aos="fade-up">
              <Button
                as="a"
                href="https://forms.gle/KV4GwNSh1brorM2h8"
                target="_blank"
              >
                Cari Soulmate!
              </Button>
            </Box>
          </Flex>
        </Container>
      </SectionSpacer>
    </div>
  );
};
