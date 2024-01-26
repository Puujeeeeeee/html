import React, { useRef } from "react";
import Head from "@/component/Head";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Skilss from "@/component/Skilss";
import Experience from "@/component/Experience";
import Work from "@/component/Work";
import Contact from "@/component/GetInTouch";
import Footer from "@/component/Footer";

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const skilssRef = useRef(null);
  const aboutHandleClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const skilssHandleClick = () => {
    skilssRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const experienceHandleClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contactHandleClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center max-sm:items-center  ">
      <div className="max-w-[1440px] ">
        <Head
          aboutHandleClick={aboutHandleClick}
          skilssHandleClick={skilssHandleClick}
          experienceHandleClick={experienceHandleClick}
          contactHandleClick={contactHandleClick}
        ></Head>

        <Hero />
        <About aboutRef={aboutRef} />

        <Skilss skilssRef={skilssRef} />
        <Experience experienceRef={experienceRef} />
        <Work workRef={workRef} />
        <Contact contactRef={contactRef} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

// import { useEffect, useState } from "react";
// export default function Home() {
//   const [isDarkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     const isDark = localStorage.getItem("darkMode") === "true";
//     setDarkMode(isDark);
//   }, []);
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//     localStorage.setItem("darkMode", isDarkMode);
//     localStorage.setItem("hello", "leap");
//   }, [isDarkMode]);
//   return (
//     <div>
//       <button onClick={() => setDarkMode((prevState) => !prevState)}>
//         switch dark mode{" "}
//       </button>
//       <p className="dark:bg-green-200">{isDarkMode ? "dark" : "white"}</p>
//     </div>
//   );
// }
