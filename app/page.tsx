import AboutMe from "@/components/AboutMe";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="p-4 space-y-4 bg-neutral-50/90 text-neutral-950 min-h-screen pt-20">
        <AboutMe />
        <hr />
        <Projects />
        <hr />
        <Experience />
        <hr />
        <Skills />
        <hr />
        <ContactMe />
      </main>
    </>
  );
}
