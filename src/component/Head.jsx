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
import Work from "./Work";
import About from "./About";
import { useRef } from "react";

function Head() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex md:flex-row px-20 py-6 justify-between">
      <h1 className="leading-9 text-3xl ">&#60;SS/&#62;</h1>
      <div className="hidden max-md:flex">
        <img src="3zuraas.svg" alt="" />
      </div>
      <div className="flex content-center items-center max-md:hidden">
        <ul className="flex content-center items-center cursor-pointer gap-4 md:gap-9 ">
          <li className="text-gray-500 hover:text-sky-500 ease-in-out ">
            <div onClick={() => handleClick(aboutRef)}> About</div>
            <div aboutRef={About}></div>
          </li>
          <li className="text-gray-500 hover:text-sky-500">
            <div onClick={() => handleClick(workRef)}>Work</div>
            <div workRef={Work}></div>
          </li>
          <li className="text-gray-500 hover:text-sky-500">Testimonials</li>
          <li className="text-gray-500 hover:text-sky-500">Contact</li>
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
