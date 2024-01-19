function Skills() {
  const skillsData = [
    { src: "icon-express.png", alt: "Express " },
    { src: "icon-javascript.png", alt: "JavaScript" },
    { src: "icon-nextjs.png", alt: "Next.js" },
    { src: "icon-react.png", alt: "React" },
    { src: "icon-typescript.png", alt: "TypeScript" },
    { src: "icon-nodejs.png", alt: "Node.js" },
    { src: "icon-typescript.png", alt: "TypeScript" },
    { src: "icon-react.png", alt: "React" },
  ];
  const SkillData = [
    { src: "icon-express.png", alt: "Express" },
    { src: "icon-javascript.png", alt: "JavaScript" },
    { src: "icon-nextjs.png", alt: "Next.js" },
    { src: "icon-react.png", alt: "React" },
    { src: "icon-typescript.png", alt: "TypeScript" },
    { src: "icon-nodejs.png", alt: "Node.js" },
    { src: "icon-react.png", alt: "React" },
    { src: "icon-typescript.png", alt: "TypeScript" },
  ];

  return (
    <div className="flex py-24 px-20 flex-col justify-center items-center">
      <div className="flex px-18 py-0 flex-col items-center gap-12">
        <div className="Row flex flex-col items-start gap-4">
          <div className="Roww flex flex-col justify-center items-center gap-12"></div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-normal leading-7 ">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className="Row flex flex-col items-start gap-12">
          <div className="flex justify-between items-center gap-16">
            {skillsData.map((skill, i) => (
              <img
                key={i}
                className="flex flex-col justify-center items-center gap-2"
                src={skill.src}
                alt={skill.alt}
              />
            ))}
          </div>
          <div className="flex justify-between items-center gap-16">
            {SkillData.map((skill, i) => (
              <img
                key={i}
                className="flex flex-col justify-center items-center gap-2"
                src={skill.src}
                alt={skill.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
