import Fiskill from "./button/Fiskill";

function Skills({ skilssRef }) {
  const skillsData = [
    { src: "icon-express.png", text: "Express" },
    { src: "icon-javscript.png", text: "JavaScript" },
    { src: "icon-nextjs.png", text: "Next.js" },
    { src: "icon-react.png", text: "React" },
    { src: "icon-typescript.png", text: "TypeScript" },
    { src: "icon-nodejs.png", text: "Node.js" },
    { src: "icon-postgresql.jpg", text: "PostgreSQL" },
    { src: "icon-mongodb.png", text: "MongoDB" },
    { src: "icon-tailwindcss.png", text: "Tailwindcss" },
    { src: "icon-figma.png", text: "Figma" },
    { src: "icon-cypress.png", text: "Cypress" },
    { src: "icon-sass.png", text: "Sass" },
    { src: "icon-storybook.png", text: "Storybook" },
    { src: "icon-git.png", text: "Git" },
    { src: "icon-socket.png", text: "Socket" },
    { src: "icon-nest.png", text: "Nest" },
  ];

  return (
    <div ref={skilssRef}>
      <div className="flex flex-col justify-center items-center py-8 px-14">
        <div className="flex flex-col items-center gap-6 ">
          <Fiskill></Fiskill>
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-xl sm:text-2xl font-normal leading-6 sm:leading-7">
              The skills, tools, and technologies I am really good at:
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-20">
            {skillsData.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <img
                  src={skill.src}
                  alt={skill.text}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
                <p className="text-xs sm:text-sm">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
