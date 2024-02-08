import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Foodie pos",
    image: "/images/foodiePos.png",
    gitUrl: "https://github.com/KyawZin-Thet/my-foodie-pos",
    previewUrl: "https://my-foodie-pos-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Snakes",
    image: "/images/snakesProject.jpg",
    gitUrl: "https://github.com/KyawZin-Thet/snakes",
    previewUrl: "https://snakes-rose.vercel.app/",
  },
  {
    id: 3,
    title: "Travel-Guide",
    image: "/images/travelguide.jpg",
    gitUrl: "https://github.com/NyiWaingchit7/travel-NextJs-with-Kyaw-Zin-Thet",
    previewUrl: "https://travel-next-js-with-kyaw-zin-thet.vercel.app/",
  },

  {
    id: 4,
    title: "More Projects Are Coming! ",
    image: "/images/comingsoon.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
];

export default function ProjectSection() {
  return (
    <section className="my-7" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
}
