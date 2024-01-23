// function Head() {
//   return (
//     <div className="flex px-20 py-6  justify-between items-center  ">
//       <h1 className="text-center leading-9 text-3xl md:auto ">&#60;SS/&#62;</h1>
//       <div className="flex content-center items-center  md:hidden ">
//         <ul className="flex content-center items-center cursor-pointer gap-9  ">
//           <li className="text-gray-500 hover:bg-sky-500 ease-in-out">About</li>
//           <li className="text-gray-500 ">Work</li>
//           <li className="text-gray-500">Testimonials</li>
//           <li className="text-gray-500">Contact</li>
//           <div className="flex gap-4">
//             <img src="sunny.svg" alt="" />
//             <button
//               className="bg-black text-white rounded-lg
//              "
//             >
//               Download CV
//             </button>
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Head;
import React, { useRef } from "react";

function Head() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Define the handleClick function
  const handleClick = (ref) => {
    // Check if the ref is not null before scrolling
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex md:flex-row px-20 py-6 justify-between sticky top-0 bg-slate-100">
      <h1 className="leading-9 text-3xl ">&#60;SS/&#62;</h1>
      <div className="hidden max-md:flex sticky">
        <img src="3zuraas.svg" alt="" />
      </div>
      <div className="flex content-center items-center max-md:hidden">
        <ul className="flex content-center items-center cursor-pointer gap-4 md:gap-9 ">
          <li
            className="text-gray-500 hover:text-sky-500 ease-in-out"
            onClick={() => handleClick(aboutRef)}
          >
            About
          </li>
          <li
            className="text-gray-500 hover:text-sky-500"
            onClick={() => handleClick(skillsRef)}
          >
            Skills
          </li>
          <li
            className="text-gray-500 hover:text-sky-500"
            onClick={() => handleClick(experienceRef)}
          >
            Experience
          </li>
          <li
            className="text-gray-500 hover:text-sky-500"
            onClick={() => handleClick(workRef)}
          >
            Work
          </li>
          <li
            className="text-gray-500 hover:text-sky-500"
            onClick={() => handleClick(contactRef)}
          >
            Contact
          </li>
          <div className="flex gap-2 md:gap-4 items-center">
            <img src="sunny.svg" alt="" className="hidden md:block" />
            <button className="bg-black text-white rounded-lg text-xs px-2 py-2">
              Download CV
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Head;
