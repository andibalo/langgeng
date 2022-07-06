import { Box, Heading, Flex } from "@chakra-ui/react";
import { Container, SectionSpacer, Button } from "../commons";

export const HaveSomethingToRent = () => {
  return (
    <Box bg="primary.100">
      <SectionSpacer>
        <Container>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Heading textAlign={"center"} mb="2" color="light.200">
                Punya kamera nganggur di rumah?
              </Heading>
              <Heading textAlign={"center"} mb="8" color="light.100">
                Sewain aja di Rentout.id!
              </Heading>
              <Box textAlign={"center"}>
                <Button
                  as="a"
                  href="https://forms.gle/7XMhS2FVWi5Fuf4G6"
                  target="_blank"
                >
                  Saya seorang pemberi sewa
                </Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </SectionSpacer>
    </Box>
  );
};
