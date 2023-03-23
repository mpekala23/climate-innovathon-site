/* eslint-disable */

import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <div className="bg-gray-100">
    <Section yPadding="py-6">
    </Section>

    <Section yPadding="pt-20 pb-32">
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
  </div>
);

export { Hero };
