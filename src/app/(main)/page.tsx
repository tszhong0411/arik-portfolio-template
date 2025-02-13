import About from "@/components/home/about";
import CTA from "@/components/home/cta";
import Hero from "@/components/home/hero";
import Logos from "@/components/home/logos";
import Process from "@/components/home/process";
import SelectedWork from "@/components/home/selected-work";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Services />
      <SelectedWork />
      <Process />
      <Testimonials />
      <About />
      <CTA />
    </>
  );
}
