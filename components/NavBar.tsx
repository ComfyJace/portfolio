import Link from "next/link";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-gray-800 px-6 text-white flex items-center space-x-4">
      <a
        href="https://github.com/ComfyJace"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold"
      >
        ComfyJace
      </a>
      <Link href="/" className="text-sm">
        Home
      </Link>
      <Link href="/#about-me" className="text-sm">
        About Me
      </Link>
      <Link href="/#projects" className="text-sm">
        Projects
      </Link>
      <Link href="/#experience" className="text-sm">
        Experience
      </Link>
      <Link href="/#skills" className="text-sm">
        Skills
      </Link>
      <Link href="/#contact-me" className="text-sm">
        Contact
      </Link>
      <a href="/" className="text-sm">
        Resume
      </a>
    </nav>
  );
}

export default NavBar;
