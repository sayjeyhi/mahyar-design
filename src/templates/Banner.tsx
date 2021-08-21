import Link from 'next/link';

import { CTABanner } from '../components/Banner';
import { Button } from '../components/Button';
import { Section } from '../layouts/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Banner - Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
