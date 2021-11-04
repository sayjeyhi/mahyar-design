import React, { Fragment, useState } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import { useRouter } from "next/router";

import Link from "components/Link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const MobileMenu = () => (
  <Transition
    as={Fragment}
    enter="duration-150 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel
      focus
      className="p-2 transform origin-top inset-x-0 transition top-0 absolute md:hidden"
    >
      <div className="bg-white rounded-lg shadow-md ring-black ring-1 ring-opacity-5 overflow-hidden">
        <div className="flex px-5 pt-4 items-center justify-between">
          <div>
            <img
              className="h-8 w-auto"
              src="/assets/images/Icon-text-black.svg"
              alt="logo"
            />
          </div>
          <div className="-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 text-gray-400 inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-2 focus:ring-cyan-600">
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="pt-5 pb-6">
          <div className="space-y-1 px-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md font-medium text-base py-2 px-3 text-gray-900 block hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
);

const Navbar = () => {
  const router = useRouter();
  const [hideBG, setHideBG] = useState(true);
  const onIndex = router.pathname === "/";

  useScrollPosition(({ currPos }) => setHideBG(currPos.y > -50));

  return (
    <Popover
      as="nav"
      className={cn(
        "fixed z-50 w-full py-4 transition-colors duration-500 bg-white",
        {
          "bg-transparent": hideBG && onIndex,
        }
      )}
    >
      <div
        className="flex mx-auto max-w-7xl px-4 relative items-center justify-between sm:px-6"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center justify-between">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link to="/" className="text-primary-yellow py-2 px-4">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 text-primary-red w-auto sm:h-10"
                src={
                  hideBG && onIndex
                    ? "/assets/images/Icon-white.svg"
                    : "/assets/images/Icon-text-black.svg"
                }
                alt="Logo"
              />
            </Link>
            <div className="flex -mr-2 items-center md:hidden">
              <Popover.Button className="bg-background rounded-md p-2 text-gray-400 inline-flex items-center justify-center focus-ring-inset focus:outline-none focus:ring-white focus:ring-2">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="space-x-8 hidden md:flex md:ml-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-base font-medium hover:underline transition-colors duration-500",
                  {
                    "text-white": hideBG && onIndex,
                  }
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <MobileMenu />
    </Popover>
  );
};

export default Navbar;
