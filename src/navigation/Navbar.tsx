/* eslint-disable */

import { ReactNode, createRef, useEffect } from 'react';

import Link from 'next/link';
import * as THREE from 'three';

// @ts-ignore
import BIRDS from '../vanta/vanta.birds.min';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => {
  const vantaRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const vantaEff = (BIRDS as any)({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundAlpha: 0.0,
      separation: 80,
      color1: 0x34d399,
      color2: 0x34d399,
      THREE,
    });
    return () => {
      vantaEff.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        className="fixed z-10 w-full h-full bg-emerald-900"
      ></div>
      <div
        className={`
        flex flex-wrap justify-between px-8 items-center fixed bg-emerald-900 bg-opacity-90 backdrop-blur-sm h-20 z-50  w-full
      `}
      >
        <div>
          <Link href="/">
            <a className="font-bold font-title text-white">
              🌲 CLIMATE INNOVATHON 🌲
            </a>
          </Link>
        </div>

        <nav>
          <ul className="navbar flex items-center font-medium text-xl text-gray-800">
            {props.children}
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
    </>
  );
};

export { Navbar };
