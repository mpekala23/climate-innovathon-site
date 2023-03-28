import { AwesomeButton } from 'react-awesome-button';

import { Meta } from './Meta';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../templates/Footer';
import { AppConfig } from '../utils/AppConfig';

interface Props {
  children: React.ReactNode;
}

export default function Index({ children }: Props) {
  return (
    <div className="w-full min-h-screen flex antialiased bg-emerald-50">
      <div className="overscroll-contain flex flex-1 flex-col">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Navbar>
          <li>
            <AwesomeButton
              type="github"
              onPress={() => {
                // Open in new tab programmatically
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLScUsqlmSselCVs8iPZNkMnQj9UHJk1hpy8akZjz5teW9YPElA/viewform',
                  '_blank'
                );
              }}
            >
              SIGN UP
            </AwesomeButton>
          </li>
        </Navbar>
        <div className="top-20 overflow-hidden flex flex-1 flex-col mt-20 z-20 sm:pl-8 md:max-w-screen-sm md:ml-16 lg:max-w-screen-md lg:ml-32 xl:max-w-screen-md xl:ml-64">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
