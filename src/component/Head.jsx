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
function Head() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-20 py-6 justify-between items-center min-[320px]:text-center max-[600px]:bg-sky-300 ">
      <h1 className="text-center md:text-left leading-9 text-3xl md:auto mb-4 md:mb-0">
        &#60;SS/&#62;
      </h1>
      <div className="flex content-center items-center max-[600px ]:hidden ">
        <ul className="flex content-center items-center cursor-pointer gap-4 md:gap-9 ">
          <li className="text-gray-500 hover:text-sky-500 ease-in-out">
            About
          </li>
          <li className="text-gray-500 hover:text-sky-500">Work</li>
          <li className="text-gray-500 hover:text-sky-500">Testimonials</li>
          <li className="text-gray-500 hover:text-sky-500">Contact</li>
          <div className="flex gap-2 md:gap-4 items-center">
            <img src="sunny.svg" alt="" className="hidden md:block" />
            <button className="bg-black text-white rounded-lg">
              Download CV
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Head;
