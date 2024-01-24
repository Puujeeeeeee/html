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
import React from "react";
import useDownloader from "react-use-downloader";

const Head = (props) => {
  const { download } = useDownloader();

  const handleDownload = () => {
    const fileUrl =
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg";
    const filename = "beautiful-carpathia.jpg";
    download(fileUrl, filename);
  };

  return (
    <div className="flex max-md:flex-row px-20 py-6 justify-between sticky top-0 bg-slate-100 z-index:2">
      <h1 className="leading-9 text-3xl">&#60;SS/&#62;</h1>
      <div className="hidden max-md:flex sticky">
        <img src="3zuraas.svg" alt="" />
      </div>
      <div className="flex content-center items-center max-md:hidden">
        <ul className="flex content-center items-center cursor-pointer gap-4 md:gap-9">
          <li className="text-gray-500 hover:text-sky-500 ease-in-out">
            About
          </li>
          <li className="text-gray-500 hover:text-sky-500">Skills</li>
          <li className="text-gray-500 hover:text-sky-500">Experience</li>
          <li className="text-gray-500 hover:text-sky-500">Work</li>
          <li className="text-gray-500 hover:text-sky-500">Contact</li>
          <div className="flex gap-2 md:gap-4 items-center">
            <img src="sunny.svg" alt="" className="hidden md:block" />
            <button
              onClick={handleDownload}
              className="bg-black text-white rounded-lg text-xs px-2 py-2"
            >
              Download CV
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Head;
