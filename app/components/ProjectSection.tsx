import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Foodie pos",
    image: "/images/foodiePos.png",
    description:
      "This is a POS software that facilitates the creation and updating of menus. It encompasses both Backoffice and order app functionalities, supporting CRUD operations, Nextauth Google login, file uploads on AWS space using multerS3, and is deployed on Vercel, utilizing the Render database. The tech stack is > Next.JS,React, MaterialUI, Redux Toolkit,PostgreSQL",
    gitUrl: "https://github.com/KyawZin-Thet/my-foodie-pos",
    previewUrl: "https://my-foodie-pos-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Snakes",
    image: "/images/snakes.jpg",
    description:
      "This is a front-end project about snakes. You can search for snakes by name and click to see details about the snake.The tech stack is > Next.JS,React, MaterialUI, Redux Toolkit",
    gitUrl: "https://github.com/KyawZin-Thet/snakes",
    previewUrl: "https://snakes-rose.vercel.app/",
  },
  {
    id: 3,
    title: "Travel-Guide",
    image: "/images/travelguide.jpg",
    description:
      "This project was created by two developers. It revolves around travel, allowing users to find the city they want to visit. Users can click to view popular places in that city, as well as information about buses and airlines. Additionally, users have the ability to send messages to admins. On the admin side, CRUD operations are implemented, enabling the addition of new cities, places, buses, and airlines. The tech stack is > Next.JS,React, MaterialUI, Redux Toolkit,PostgreSQL",
    gitUrl: "https://github.com/NyiWaingchit7/travel-NextJs-with-Kyaw-Zin-Thet",
    previewUrl: "https://travel-next-js-with-kyaw-zin-thet.vercel.app/",
  },

  {
    id: 4,
    title: "More Projects Are Coming! ",
    image: "/images/comingsoon.jpg",
    description:
      "As I enjoy coding, I love creating new projects with improved ideas and skills.",
    gitUrl: "/",
    previewUrl: "/",
  },
];

export default function ProjectSection() {
  return (
    <section className="mt-7 mb-28 w-full" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="flex justify-center flex-wrap w-full">
        {projectsData.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
}
