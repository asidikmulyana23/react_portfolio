

import logo from "../assets/MeAndSun.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-5 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-10" src={logo} alt="logo" />
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/a-sidik-mulyana-3b6898249/">
    <FaLinkedin />
    </a>

    <a href="https://github.com/asidikmulyana23 target=">
    <FaGithub />
    </a>

    <FaSquareXTwitter />

    <a href="https://www.instagram.com/as.sidikk/">
    <FaInstagram  />
    </a>
    
    
  </div>
</nav>
}

export default Navbar