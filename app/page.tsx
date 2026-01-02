import AboutMe from "@/components/AboutMe";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="p-4 space-y-4">
        <AboutMe />
        <hr />
        <Projects />
      </main>
    </>
  );
}
