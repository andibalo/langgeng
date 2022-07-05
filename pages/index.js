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

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
