import { useState } from "react";
import LogoUrl from "../assets/logo.svg";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { CircleUser, Globe } from "lucide-react";

export const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultNavBarScrollClass = "transition-all absolute inset-0 -z-1";
  const navBarScrollClass = scrolled
    ? `${defaultNavBarScrollClass} border-b border-black/10 bg-white/75 backdrop-blur-lg`
    : `${defaultNavBarScrollClass} bg-transparent`;

  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className={navBarScrollClass}></div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative py-4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <img src={LogoUrl} alt="logo" className="h-12 w-12" />
          </div>

          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-4 p-4">
              <li>
                <a href="/" className="text-gray-600">
                  About us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600">
                  Features
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex-row items-center space-x-4 hidden md:flex">
            <CircleUser size={25} cursor="pointer" />
            <Globe size={25} cursor="pointer" />
          </div>

          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
