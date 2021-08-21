import Link from 'next/link';

import { Background } from '../components/Background';
import { Button } from '../components/Button';
import { HeroOneButton } from '../components/Hero';
import { Section } from '../layouts/Section';

const Hero = () => (
  <Background color="bg-red-100">
    <Section className="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
