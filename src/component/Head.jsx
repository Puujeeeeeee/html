// // function Head() {
// //   return (
// //     <div className="flex px-20 py-6  justify-between items-center  ">
// //       <h1 className="text-center leading-9 text-3xl md:auto ">&#60;SS/&#62;</h1>
// //       <div className="flex content-center items-center  md:hidden ">
// //         <ul className="flex content-center items-center cursor-pointer gap-9  ">
// //           <li className="text-gray-500 hover:bg-sky-500 ease-in-out">About</li>
// //           <li className="text-gray-500 ">Work</li>
// //           <li className="text-gray-500">Testimonials</li>
// //           <li className="text-gray-500">Contact</li>
// //           <div className="flex gap-4">
// //             <img src="sunny.svg" alt="" />
// //             <button
// //               className="bg-black text-white rounded-lg
// //              "
// //             >
// //               Download CV
// //             </button>
// //           </div>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }m

// // export default Head;
// import React, { useState } from "react";
// import useDownloader from "react-use-downloader";

// const Head = () => {
//   const { download } = useDownloader();
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleDownload = () => {
//     const fileUrl =
//       "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg";
//     const filename = "beautiful-carpathia.jpg";
//     download(fileUrl, filename);
//   };

//   return (
//     <div className="max-sm:bg-gray-600 max-sm:h-[100vh]">
//       <div className="flex max-md:flex-row px-20 py-6 justify-between sticky top-0 bg-slate-100 z-index:2 max-md:justify-between">
//         <h1 className="leading-9 text-3xl">&#60;SS/&#62;</h1>
//         <div
//           onClick={toggleMenu}
//           className="hidden max-md:flex sticky max-sm:justify-between"
//         >
//           <img src="3zuraas.svg" alt="" />
//         </div>

//         {showMenu && (
//           <div className="bg-red-600 max-sm:bg-opacity-25 h-[100vh] flex content-center items-center max-md:hidden">
//             <ul className="flex content-center items-center cursor-pointer gap-4 md:gap-9">
//               <li className="text-gray-500 hover:text-sky-500 ease-in-out">
//                 About
//               </li>
//               <li className="text-gray-500 hover:text-sky-500">Skills</li>
//               <li className="text-gray-500 hover:text-sky-500">Experience</li>
//               <li className="text-gray-500 hover:text-sky-500">Work</li>
//               <li className="text-gray-500 hover:text-sky-500">Contact</li>
//               <div className="flex gap-2 md:gap-4 items-center">
//                 <img src="sunny.svg" alt="" className="hidden md:block" />
//                 <button
//                   onClick={handleDownload}
//                   className="bg-black text-white rounded-lg text-xs px-2 py-2"
//                 >
//                   Download CV
//                 </button>
//               </div>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Head;
import { useState } from "react";
const Head = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div  className="bg-gray-600 h-[100vh] w-[100vw] flex justify-between">
      <div>heeloooooo</div>
      <button
        onClick={toggleMenu}
        className="h-[140px] border-white border-[2px]"
      >
        showMenu
      </button>
      {showMenu && (
        <div
         
          className={`bg-red-600 bg-opacity-25 absolute top-0 left-0  h-[100vh] w-[100vw] flex justify-end  shadow-2xl`}
        >
          hiiiii
          <div className="w-[80%] bg-white">
            <p>hello</p>
            <p>hello</p>

            <p>hello</p>
            <p>hello</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Head;
