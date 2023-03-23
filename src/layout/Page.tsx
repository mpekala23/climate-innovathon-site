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
      <div className="overscroll-contain flex flex-1 flex-col sm:ml-8 md:max-w-screen-sm md:ml-16 lg:max-w-screen-md lg:ml-32 xl:max-w-screen-md xl:ml-64">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Navbar>
          <li>
            <AwesomeButton type="github">SIGN UP</AwesomeButton>
          </li>
        </Navbar>
        <div className="top-20 overflow-hidden flex flex-1 flex-col mt-20 z-20">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
