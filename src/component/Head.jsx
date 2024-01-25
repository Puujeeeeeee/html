import React, { useState } from "react";
import useDownloader from "react-use-downloader";

const Head = ({
  aboutHandleClick,
  skilssHandleClick,
  experienceHandleClick,
  contactHandleClick,
}) => {
  const { download } = useDownloader();

  const handleDownload = () => {
    const fileUrl =
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg";
    const filename = "beautiful-carpathia.jpg";
    download(fileUrl, filename);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex max-md:flex-row px-20 py-6 justify-between sticky top-0 bg-slate-100 z-10 gap:16">
      <h1 className="leading-9 text-3xl">&#60;SS/&#62;</h1>

      <div className="flex items-center">
        <ul className="flex items-center gap-4 md:gap-9">
          <li className="text-gray-500 hover:text-sky-500">
            <button onClick={aboutHandleClick}>About</button>
          </li>
          <li className="text-gray-500 hover:text-sky-500">
            <button onClick={skilssHandleClick}>Skills</button>
          </li>
          <li className="text-gray-500 hover:text-sky-500">
            <button onClick={experienceHandleClick}>Experience</button>
          </li>
          <li className="text-gray-500 hover:text-sky-500">
            <button onClick={contactHandleClick}>Contact</button>
          </li>
          <div className="flex gap-2 md:gap-4 items-center">
            <img src="sunny.svg" alt="Sun Icon" />
            <button
              onClick={handleDownload}
              className="bg-black text-white rounded-lg text-xs px-2 py-2"
            >
              Download CV
            </button>
            <div className="hidden max-md:flex">
              <img onClick={toggleMenu} src="3zuraas.svg" alt="Menu" />
            </div>
          </div>
        </ul>

        {showMenu && (
          <div className="w-[85%] flex absolute justify-end">
            <div className="flex">
              <h1>&#60;SS/&#62;</h1>
              <button onClick={toggleMenu}>X</button>
            </div>
            <div>
              <p>Skills</p>
              <p>Experience</p>
              <p>Work</p>
              <p>Contact</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;
