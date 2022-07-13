import { Box, Heading, Flex } from "@chakra-ui/react";
import { Container, SectionSpacer, Button } from "../commons";

export const HaveSomethingToRent = () => {
  return (
    <Box bg="primary.100">
      <SectionSpacer>
        <Container>
          <Flex  justifyContent={"center"} alignItems={"center"}>
            <Box data-aos="fade-up"> 
              <Heading textAlign={"center"} mb="2" color="light.200">
                Kesulitan nyari hubungan serius di dating apps lain?
              </Heading>
              <Heading textAlign={"center"} mb="8" color="light.100">
                Cari di Soulmeet aja!
              </Heading>
              <Box textAlign={"center"}>
                <Button
                  btnType="outline"
                  as="a"
                  href="https://forms.gle/7XMhS2FVWi5Fuf4G6"
                  target="_blank"
                >
                  Cari Soulmate!
                </Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </SectionSpacer>
    </Box>
  );
};
