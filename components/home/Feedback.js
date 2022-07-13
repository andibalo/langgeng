import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Container, SectionSpacer, Button } from "../commons";
import feedbackVector from "../../public/feedback.png";

export const Feedback = () => {
  return (
    <div id="feedback" >
      <SectionSpacer>
        <Container>
          <Flex justifyContent={"center"}>
            <Box w="100%" maxW="500px">
              <Image
                data-aos="fade-up"
                src={feedbackVector}
                layout="responsive"
                placeholder="blur"
                alt="shopping vector image"
              />
            </Box>
          </Flex>
          <Box mb="10" data-aos="fade-up">
            <Heading textAlign={"center"} color={"primary.200"} mb="3">
              Terima kasih sudah memercayai Rentout.id.
            </Heading>
            <Text textAlign={"center"}>
              Yuk bantu isi formulir di bawah ini agar kami bisa melayani kalian
              lebih baik!
            </Text>
          </Box>
          <Flex justifyContent={"center"} data-aos="fade-up">
            <Button as="a" target="_blank" href="https://forms.gle/GLDsrjFLaTqxC1hEA">
              Cari Soulmate!
            </Button>
          </Flex>
        </Container>
      </SectionSpacer>
    </div>
  );
};
