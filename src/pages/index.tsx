/* eslint-disable */

import { AwesomeButton } from "react-awesome-button";
import Typewriter from "typewriter-effect";

import Page from "../layout/Page";

export default function Index() {
  return (
    <Page>
      <div className="w-full flex flex-col items-center justify-center z-20 pt-12 pb-24">
        <p className="font-title text-white text-3xl">CLIMATE INNOVATHON</p>
        <p className="text-white text-xl">
          Let's start showing carbon who's boss.
        </p>

        <p className="pt-4 font-title text-white">LEVERETT LIBRARY THEATER</p>
        <p className="font-title text-white">
          28 DeWolfe St, Cambridge, MA 02138
        </p>
        <p className="font-title text-white">APRIL 14th-16th</p>
      </div>
      <div className="z-20 bg-emerald-50 p-8">
        <Typewriter
          options={{
            strings: [
              "$500 IN PRIZES",
              "MEET NEW PEOPLE",
              "SOLVE HARD PROBLEMS",
              "SAVE THE WORLD",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
            delay: 40,
            cursorClassName: "text-2xl font-bold animate-ping text-gray-900",
            wrapperClassName:
              "text-center text-2xl font-bold text-gray-900 font-title",
          }}
        />
        <p className="text-body py-3 text-gray-900">
          Interested in carbon capture? Come work with experts and learn more
          about{" "}
          <span className="underline">
            <a href="https://frontierclimate.com/writing/cdr-gap-database">
              high impact research topics
            </a>
          </span>{" "}
          that one day might save the world.
        </p>
        <div className="py-8">
          <p className="text-sm">Sponsored by...</p>
          <div className="flex justify-between">
            <div
              className="flex flex-1 justify-center items-center hover:cursor-pointer"
              onClick={() => {
                window.open("https://frontierclimate.com/", "_blank");
              }}
            >
              <img
                src="https://frontierclimate.com/logo-87a5ae1c9c0590dfef9f.svg"
                alt="Berkeley Logo"
                className="w-32 h-16"
              />
            </div>
            <div
              className="flex flex-1 justify-center items-center hover:cursor-pointer"
              onClick={() => {
                window.open("https://www.homeworld.bio/", "_blank");
              }}
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/62d6bd9f0475d7268cc3b7ab/1bbeea7b-c2b1-4b25-be7c-e1d9fab586d7/color.png?format=500w"
                alt="Berkeley Logo"
                className="w-16 h-16"
              />
              <p className="pl-2 font-bold font-title">Homeworld COLLECTIVE</p>
            </div>
          </div>
        </div>
        <div className="py-3">
          <p className="font-title font-bold text-xl py-3 text-gray-900">
            Step 1:
            <span
              className="ml-2"
              onClick={() => {
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScUsqlmSselCVs8iPZNkMnQj9UHJk1hpy8akZjz5teW9YPElA/viewform",
                  "_blank"
                );
              }}
            >
              <AwesomeButton
                type="github"
                onPress={() => {
                  // Open in new tab programmatically
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScUsqlmSselCVs8iPZNkMnQj9UHJk1hpy8akZjz5teW9YPElA/viewform",
                    "_blank"
                  );
                }}
              >
                SIGN UP
              </AwesomeButton>
            </span>
          </p>
          <p>
            Assemble a team or ride solo! Fill out a quick questionnaire so we
            can learn a bit about you, your team, and whatever ideas you might
            already have!
          </p>
          <p className="mt-4">
            Don’t have a team yet? Looking for teammates? No problem! We will
            pair you up with a group.
          </p>
        </div>
        <div className="py-3">
          <p className="font-title font-bold text-xl py-3 text-gray-900">
            Step 2: Get Inspired
          </p>
          <p>
            Whether you’re interested in exploring new approaches for an
            established technology or writing a research proposal for an
            unproven concept, your first stop should be the Frontier CDR
            Knowledge Gap Database. This resource is a repository of open
            questions and high value research topics in the field of carbon
            dioxide removal.
          </p>
          <p className="mt-4">
            Not familiar with sustainability or carbon removal? No problem! We
            will be hosting office hours with experts in the field to help
            jumpstart your journey starting on April 14th, the first day of the
            event. Want to learn more before then? Check out these quick links
            to learn more about different pathways for Carbon Dioxide Removal:
          </p>
          <div className="flex flex-col items-center">
            <a
              href="https://frontiergaps.softr.app/"
              className="underline pt-2"
              target="_blank"
            >
              Carbon Removal Knowledge Gap Database
            </a>
            <a
              href="https://www.iea.org/reports/direct-air-capture"
              className="underline pt-2"
              target="_blank"
            >
              Direct Air Capture
            </a>
            <a
              href="https://www.icef.go.jp/pdf/2020/roadmap/roadmap.pdf?0128"
              className="underline pt-2"
              target="_blank"
            >
              Biomass Carbon Removal #1
            </a>
            <a
              href="http://climatechangeacademy.com/courses/carbon-removal/4"
              className="underline pt-2"
              target="_blank"
            >
              Biomass Carbon Removal #2
            </a>
            <a
              href="https://oceanvisions.org/ocean-alkalinity-enhancement/"
              className="underline pt-2"
              target="_blank"
            >
              Ocean Alkalinity Enhancement
            </a>
            <a
              href="https://www.iea.org/reports/co2-transport-and-storage"
              className="underline pt-2"
              target="_blank"
            >
              CO2 Sequestration
            </a>
            <a
              href="https://transparency-partnership.net/sites/default/files/mrv_101_0.pdf"
              className="underline pt-2"
              target="_blank"
            >
              Measurement Reporting and Verification
            </a>
          </div>
        </div>
        <div className="py-3">
          <p className="font-title font-bold text-xl py-3 text-gray-900">
            Step 3: INNOVATE
          </p>
          <p>
            Over the course of three days you and your team will dive into the
            world of CDR. Your job is to come up with the most creative climate
            solution you can based on real world examples—drawn from the
            scientific literature and current industrial applications—and write
            a research proposal to study its efficacy. For example, your
            solution may be to use genetically modified potatoes that develop a
            durable skin that will lock away carbon for thousands of years. In
            this example, your written submission should take the form of a
            research proposal, and outline previous research that supports the
            core tenets of your idea.
          </p>
          <p className="pt-2">Rules:</p>
          <ul className="list-disc list-inside pl-6">
            <li>
              <span className="underline">
                You must be able to show that your solution is (mostly) unique
              </span>
              . If there is a real world example that is too similar to your
              proposed solution, it will be disqualified. Although many
              approaches have already been attempted, all you need to do is
              figure out some way to distinguish your solution from the crowd,
              not reinvent the wheel!
            </li>
            <li>
              <span className="underline">
                Your solution must have some basis in reality
              </span>
              . It’s one thing to propose that potatoes will develop a durable
              skin, and entirely another to explain how it will actually work.
              You may even have to rethink your original plan. Maybe instead of
              recalcitrant potato skin you find that there has been a great deal
              written about the durability of pollen shells (sporopollenin), and
              shift your solution towards that angle.
            </li>
            <li>
              <span className="underline">
                Your written submission must take the form of a research
                proposal
              </span>
              . Since you are not actually building anything over the weekend,
              you have no grounds to definitively claim that your solution will
              actually work. Instead, you will suggest a creative idea related
              to carbon dioxide removal, cite examples of work that support the
              key tenets of your idea and ground it in reality, and then design
              an experimental process to determine its effectiveness.
            </li>
            <li>
              <span className="underline">
                Your solution must be related to carbon dioxide removal
              </span>
              . Although the mounting climate crisis has many sides, the goal of
              this event is singular. If you are worried that you don’t know
              enough about CDR to join this event, our goal is to prove you
              wrong. In sustainability nobody wins alone, and we would like
              nothing more than to see you win. We will be providing support
              throughout the entire weekend to make sure you are able to stay on
              track; we will be holding office hours with experts in the field,
              checking in regularly with each group, and answering any questions
              that you might have.
            </li>
          </ul>
        </div>
        <div className="py-3">
          <p className="font-title font-bold text-xl py-3 text-gray-900">
            Step 4: Present
          </p>
          <p>
            You and your team will give a short presentation on your climate
            solution to our panel of judges. There will be four winning teams! A
            grand prize of $200, and three smaller prizes of $100 will be
            awarded to the winning teams.
          </p>
        </div>
        <p className="font-title font-bold text-xl py-3 text-gray-900">
          Sound like fun?
          <span
            className="ml-2"
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScUsqlmSselCVs8iPZNkMnQj9UHJk1hpy8akZjz5teW9YPElA/viewform",
                "_blank"
              );
            }}
          >
            <AwesomeButton
              type="github"
              onPress={() => {
                // Open in new tab programmatically
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScUsqlmSselCVs8iPZNkMnQj9UHJk1hpy8akZjz5teW9YPElA/viewform",
                  "_blank"
                );
              }}
            >
              SIGN UP
            </AwesomeButton>
          </span>
        </p>
      </div>
    </Page>
  );
}
