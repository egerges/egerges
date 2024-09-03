import Timeline from "../components/Timeline";
import { experiences } from "../data/experiences";
import "../styles/Experience.module.css";

export default function Experience() {
  return (
    <section>
      <Timeline data={experiences} />
    </section>
  );
}
