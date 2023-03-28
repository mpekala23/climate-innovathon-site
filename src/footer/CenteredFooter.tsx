import { ReactNode } from 'react';

import Link from 'next/link';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center text-white">
    <Link href="/">
      <a className="font-bold font-title text-white">
        🌲 CLIMATE INNOVATHON 🌲
      </a>
    </Link>
    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>

    {/*
    <div className=" flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>
    */}

    <div className="text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
