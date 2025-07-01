import { X, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center bg-[rgba(255,_255,_255,_0.04)] backdrop-filter backdrop-blur-xl py-6 px-4">
      <div className="flex justify-between items-center max-w-[1406px] w-full mx-auto">
        <img src="assets/logo.svg" alt="logo" width={197} height={36} />
        <div className="flex gap-5 font-[Inter] max-md:hidden">
          <a
            onClick={(e) => smoothScroll(e, "partners")}
            href="#partners"
            className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer"
          >
            Nurwin Partners
          </a>
          <a
            onClick={(e) => smoothScroll(e, "benefits")}
            href="#benefits"
            className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
          >
            Benefits
          </a>
          <a
            onClick={(e) => smoothScroll(e, "cooperation-models")}
            href="#cooperation-models"
            className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
          >
            Cooperation Models
          </a>
          <a
            onClick={(e) => smoothScroll(e, "about-us")}
            href="#about-us"
            className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            onClick={(e) => smoothScroll(e, "faq")}
            href="#faq"
            className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            onClick={(e) => smoothScroll(e, "contacts")}
            href="#contacts"
            className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors"
          >
            Contacts
          </a>
        </div>
        <div className="hidden max-md:flex gap-4 items-center">
          <a
            href="https://my.nurwin.partners/registration"
            className="button-mobile"
          >
            <img src="assets/account.svg" alt="account" />
          </a>
          <button onClick={toggleMenu} className="z-50">
            {isMenuOpen ? (
              <X size={50} color="white" />
            ) : (
              <Menu size={50} color="white" />
            )}
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-[#1C1F42] z-40 transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } max-md:flex flex-col hidden pt-24 px-4 h-fit pb-6 rounded-b-2xl`}
        >
          <div className="flex flex-col gap-6 items-center">
            <a
              onClick={(e) => {
                smoothScroll(e, "partners");
                toggleMenu();
              }}
              href="#partners"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase"
            >
              Nurwin Partners
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "benefits");
                toggleMenu();
              }}
              href="#benefits"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase"
            >
              Benefits
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "cooperation-models");
                toggleMenu();
              }}
              href="#cooperation-models"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase"
            >
              Cooperation Models
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "about-us");
                toggleMenu();
              }}
              href="#about-us"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase"
            >
              About Us
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "faq");
                toggleMenu();
              }}
              href="#faq"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase"
            >
              FAQ
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "contacts");
                toggleMenu();
              }}
              href="#contacts"
              className="text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase"
            >
              Contacts
            </a>
          </div>
        </div>
        <div className="max-md:hidden">
          <a className="button" href="https://my.nurwin.partners/registration">
            My Account
          </a>
        </div>
      </div>
    </header>
  );
}
