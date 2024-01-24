const technologieData = [
  { id: 1, name: "SQL" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Tailwind" },
  { id: 4, name: "Sass" },
  { id: 5, name: "HTML" },
  { id: 6, name: "Cypress" },
  { id: 7, name: "Storybook" },
  { id: 8, name: "React" },
  { id: 9, name: "TypeScript" },
  { id: 10, name: "CSS" },
];

function TechnologieItem({ name }) {
  return (
    <div className="px-5 text-slate-600 bg-color-100 py-1 rounded-xl border-solid border-2  bg-gray-200">
      {name}
    </div>
  );
}

function Technologie() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2">
      {technologieData.map((technologie) => (
        <TechnologieItem key={technologie.id} name={technologie.name} />
      ))}
    </div>
  );
}

export default Technologie;
