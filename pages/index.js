import Head from "next/head";
import { Footer } from "../components/commons";
import {
  Hero,
  HowItWorks,
  HaveSomethingToRent,
  Faq,
  Feedback,
  Contact,
} from "../components/home";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <HaveSomethingToRent />
      <Faq />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}
