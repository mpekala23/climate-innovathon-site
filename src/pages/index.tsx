/* eslint-disable */

import { AwesomeButton } from 'react-awesome-button';
import Typewriter from 'typewriter-effect';

import Page from '../layout/Page';

export default function Index() {
  return (
    <Page>
      <div className="w-full flex flex-col items-center justify-center z-20 pt-12 pb-24">
        <p className="font-title text-white text-3xl">CLIMATE INNOVATHON</p>
        <p className="text-white text-xl">
          Let's start showing carbon who's boss.
        </p>

        <p className="pt-4 font-title text-white">LEVERETT LIBRARY THEATER</p>
        <p className="font-title text-white">APRIL 14th-16th</p>
      </div>
      <div className="z-20 bg-emerald-50 p-8">
        <Typewriter
          options={{
            strings: [
              '$500 IN PRIZES',
              'MEET NEW PEOPLE',
              'SOLVE HARD PROBLEMS',
              'SAVE THE WORLD',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
            delay: 40,
            cursorClassName: 'text-2xl font-bold animate-ping text-gray-900',
            wrapperClassName:
              'text-center text-2xl font-bold text-gray-900 font-title',
          }}
        />
        <p className="text-body py-4 text-gray-900">
          Interested in carbon capture? Come work with experts and learn more
          about{' '}
          <span className="underline">
            <a href="https://frontierclimate.com/writing/cdr-gap-database">
              high impact research topics
            </a>
          </span>{' '}
          that one day might save the world.
        </p>
        <div className="py-8">
          <p className="text-sm">Sponsored by...</p>
          <div className="flex justify-between">
            <div className="flex flex-1 justify-center items-center">
              <img
                src="https://frontierclimate.com/logo-87a5ae1c9c0590dfef9f.svg"
                alt="Berkeley Logo"
                className="w-32 h-16"
              />
            </div>
            <div className="flex flex-1 justify-center items-center">
              <img
                src="https://images.squarespace-cdn.com/content/v1/62d6bd9f0475d7268cc3b7ab/1bbeea7b-c2b1-4b25-be7c-e1d9fab586d7/color.png?format=500w"
                alt="Berkeley Logo"
                className="w-16 h-16"
              />
              <p className="pl-2 font-bold font-title">Homeworld COLLECTIVE</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="font-title font-bold text-xl py-4 text-gray-900">
            Step 1:
            <span className="ml-2">
              <AwesomeButton type="github">SIGN UP</AwesomeButton>
            </span>
          </p>
          <p>
            Assemble a team or ride solo and let us know topics you might be
            interested in.
          </p>
        </div>
        <div className="py-4">
          <p className="font-title font-bold text-xl py-4 text-gray-900">
            Step 2: Get Inspired
          </p>
          <p>
            Take a look through{' '}
            <a href="/" className="underline">
              our curated list of topics
            </a>{' '}
            and find something that speaks to you.
          </p>
        </div>
        <div className="py-4">
          <p className="font-title font-bold text-xl py-4 text-gray-900">
            Step 3: INNOVATE
          </p>
          <p>
            Over the weekend from April 14th - April 16th attend events with
            experts and document the research you've done. We'll be holding
            office hours, workshops, and more.
          </p>
          <p className="pt-2">Oh. And free food too.</p>
        </div>
        <div className="py-4">
          <p className="font-title font-bold text-xl py-4 text-gray-900">
            Step 4: Present
          </p>
          <p>
            Share what you've done with a community of like-minded individuals.
            You might take home some money, too!
          </p>
        </div>
      </div>
    </Page>
  );
}
