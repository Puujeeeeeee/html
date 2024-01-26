import React, { useState, useEffect } from "react";
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

  {
    const [isDarkMode, setDarkMode] = useState(false);
    useEffect(() => {
      const isDark = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDark);
    }, []);
    useEffect(() => {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("darkMode", isDarkMode);
      localStorage.setItem("hello", "leap");
    }, [isDarkMode]);
    return (
      <div>
        <div className="flex max-md:flex-row px-20 py-6  justify-between sticky top-0 bg-slate-100 z-10 gap-16 max-md:p-0 dark:bg-gray-800 ">
          <h1 className="leading-9 max-sm:hidden text-3xl">&#60;SS/&#62;</h1>
          <div className="flex items-center max-sm:hidden">
            <ul className="flex items-center gap-4 md:gap-9 dark:color-white-800">
              <li className="text-gray-500 hover:text-sky-500">
                <button onClick={aboutHandleClick}>About</button>
              </li>
              <li className="text-gray-500 hover:text-sky-500">
                <button onClick={skilssHandleClick}>Skills</button>
              </li>
              <li className="text-gray-500 hover:text-sky-600">
                <button onClick={experienceHandleClick}>Experience</button>
              </li>
              <li className="text-gray-500 hover:text-sky-500">
                <button onClick={contactHandleClick}>Contact</button>
              </li>
              <div className="flex gap-2 md:gap-4 items-center">
                <img
                  onClick={() => setDarkMode((prevState) => !prevState)}
                  src="sunny.svg"
                  alt="Sun Icon"
                />
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
        <div className="hidden max-sm:flex h-[100vh] justify-end">
          <div className="h-[10vh] p-3 flex  w-[100vw] justify-between relative ">
            <div></div>
            <button
              onClick={toggleMenu}
              className="h-[40px] w-[40px] border-red-300 rounded-md border-[2px] text-center items-center justify-center"
            >
              <img src="3zuraas.svg" alt="" />
            </button>
          </div>

          {showMenu && (
            <div className="bg-black bg-opacity-30 w-[110vw] h-[100vh]  absolute  flex justify-end">
              <div className="bg-white h-[100vh] w-[85%] absolute p-8  shadow-2xl">
                <div className="flex justify-between">
                  <h2 className="text-4xl font-bold ">&#60;SS/&#62;</h2>
                  <button
                    onClick={toggleMenu}
                    className="h-[40px] w-[40px] border-red-300 rounded-md border-[2px]"
                  >
                    X
                  </button>
                </div>

                <div className="flex p-4 flex-col items-start gap-4 shadow-xl">
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
                </div>
                <div
                  className="flex p-4 flex-col items-start gap-4  justify-center
                          "
                >
                  <div className="flex gap-20 md:gap-4 items-center text-2xl ">
                    Switch Theme
                    <img />
                  </div>

                  <button
                    onClick={handleDownload}
                    className="bg-black w-[380px] rounded-md justify-center text-white flex py-1.5 px-4 items-center gap "
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};
export default Head;
