function Skills() {
  const skillsData = [
    { src: "icon-express.png", text: "Express " },
    { src: "icon-javascript.png", text: "JavaScript" },
    { src: "icon-nextjs.png", text: "Next.js" },
    { src: "icon-react.png", text: "React" },
    { src: "icon-typescript.png", text: "TypeScript" },
    { src: "icon-nodejs.png", text: "Node.js" },
    { src: "icon-typescript.png", text: "TypeScript" },
    { src: "icon-react.png", text: "React" },
  ];
  const SkillData = [
    { src: "icon-express.png", text: "Express" },
    { src: "icon-javascript.png", text: "JavaScript" },
    { src: "icon-nextjs.png", text: "Next.js" },
    { src: "icon-react.png", text: "React" },
    { src: "icon-typescript.png", text: "TypeScript" },
    { src: "icon-nodejs.png", text: "Node.js" },
    { src: "icon-react.png", text: "React" },
    { src: "icon-typescript.png", text: "TypeScript" },
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
                text={skill.text}
              />
            ))}
          </div>
          <div className="flex justify-between items-center gap-16">
            {SkillData.map((Skills, i) => (
              <img
                key={i}
                className="flex flex-col justify-center items-center gap-2"
                src={Skills.src}
                text={Skills.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
