import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Leadership } from "@/components/Leadership";
import { Teaching } from "@/components/Teaching";
import { Experience } from "@/components/Experience";
import { CaseStudies } from "@/components/CaseStudies";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Events } from "@/components/Events";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Leadership />
        <Teaching />
        <Experience />
        <CaseStudies />
        <Projects />
        <Education />
        <Events />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
