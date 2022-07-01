import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import { Container, SectionSpacer, SectionHeader } from "../commons";

export const Faq = () => {
  return (
    <div id="faq">
      <SectionSpacer>
        <Container>
          <SectionHeader text={"Frequently Asked Questions"} />
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Apa itu Rentout.id?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Rentout.id adalah sebuah platform untuk membantu kamu mencari
                kamera yang ingin kamu sewa. Selain itu, kamu juga bisa
                menyewakan kamera yang tidak terpakai di
                Rentout.id!
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Apa saja metode pembayaran yang ditawarkan Rentout.id?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Kami menyediakan berbagai metode pembayaran, seperti GoPay, OVO,
                Dana, M-banking, dan masih banyak lagi.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Kalau saya ingin memasang kamera untuk disewakan, apakah ada
                    biaya pasang di Rentout.id?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Jika kamu punya kamera yang ingin disewakan, jangan khawatir!
                Rentout.id tidak akan memungut biaya apapun. Kamu hanya perlu
                mengisi formulir{" "}
                <Text
                  as="a"
                  color="primary.200"
                  href="https://forms.gle/7XMhS2FVWi5Fuf4G6"
                  target={"_blank"}
                >
                  di sini.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </SectionSpacer>
    </div>
  );
};
