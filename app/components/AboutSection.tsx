import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>Mongodb</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Redux tool kit</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Course Highlights",
    id: "course",
    content: (
      <ul className="list-disc pl-2">
        <li> Turing Programming Training (React 6th batch) </li>
        <li>Msquare Full-stack developer course</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white my-5 sm:mb-5" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-5 px-4 xl:gap-16 sm:py-9 xl:px-10">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          style={{
            borderRadius: "5px",
            overflow: "hidden",
            marginBottom: "30px",
          }}
          alt={"about-image"}
        />
        <div className="my-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Mongodb, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("course")}
              active={tab === "course"}
            >
              Course Highlights
            </TabButton>
          </div>
          <div className=" my-8 h-25 sm:h-9">
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
