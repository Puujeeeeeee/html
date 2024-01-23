import Fiskill from "./button/Fiskill";
function Experience() {
  const experiences = [
    {
      company: "Upwork",
      position: "Sr. Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Nov 2021 - Present",
    },
    {
      company: "Upwork",
      position: "Team Lead",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Jul 2017 - Oct 2021",
    },
    {
      company: "Upwork",
      position: "Full Stack Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Dec 2015 - May 2017",
    },
  ];
  return (
    <div className="Experience py-24 px-20 flex-col justify-center items-center bg-gray-100 max-md:flex-col max-md:items-start max-md:justify-center max-md:px-0 ">
      <div className="flex px-8 py-0 flex-col justify-center items-center gap-12 self-stretch mb-8 ">
        <Fiskill></Fiskill>
        <div className="flex-col items-start gap-12">
          <div className="flex flex-col justfify-center items-center my-10 ">
            <p className="text-xl font-normal">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex w-full md:w-[896px] p-8 flex-col items-start bg-slate-50 rounded-xl my-10 shadow-xl"
            >
              <div className="flex items-start gap-20">
                <div className="flex flex-col items-start gap-3">
                  <img src="logo-upwork.svg" alt="" />
                </div>
                <div className="flex w-[384px] flex-col items-start gap-4">
                  <h1 className="text-xl leading-6">{experience.position}</h1>
                  <ul className="flex gap-1 flex-col items-start">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-6">
                  <p>{experience.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Experience;
