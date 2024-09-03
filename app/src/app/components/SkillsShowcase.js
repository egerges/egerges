// src/components/SkillsShowcase.js
import React from "react";

const skills = [
  "JavaScript (ES6+)",
  "React",
  "TypeScript",
  "Node.js",
  "Go",
  "Flutter",
  "AWS",
  "Docker",
  "SQL",
  "MongoDB",
];

export default function SkillsShowcase() {
  return (
    <section>
      <h2>Skills Showcase</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
