import React from 'react';

import Link from 'next/link';

import { Section } from '../layouts/Section';
import { Logo } from '../templates/Logo';

const Navbar = () => (
  <Section className="py-6 w-full">
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <Link href="/">
          <a>
            <Logo xl />
          </a>
        </Link>
      </div>

      <nav>
        <ul className="navbar flex items-center font-medium text-xl text-gray-800">
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  </Section>
);

export { Navbar };
