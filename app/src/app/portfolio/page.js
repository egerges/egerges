import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../styles/Portfolio.module.css";

export default function Portfolio() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
