function Hero() {
  return (
    <div className="flex-col flex sm:flex-row gap-4  py-8 px-4 sm:px-20">
      <div className="flex flex-col max-w-full sm:max-w-3xl  gap-4 items-start justify-center">
        <h1 className="text-2xl sm:text-4xl font-bold items-start">
          Hi, I’m Puujee 👋
        </h1>
        <p className="text-sm sm:text-base leading-6 items-start text-gray-500">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating exceptional digital experiences that are fast, accessible,
          visually appealing, and responsive. Even though I have been creating
          web applications for over 7 years, I still love it as if it was
          something new.
        </p>

        <div className="flex flex-col  items-start gap-2">
          <div className="flex gap-2">
            <img className="icon-xs font-normal" src="icon.svg" alt="" />
            <span>Ahmedabad, India</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="icon.svg" alt="" />
            <p className="text-xs sm:text-base">Available for new projects</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <img src="ff.svg" alt="" />
          <img src="aa.svg" alt="" />
          <img src="xx.svg" alt="" />
        </div>
      </div>

      <div className="flex min-w-full sm:min-w-96 flex-col justify-center items-end sm:items-center relative sm:mt-4">
        <div>
          <img
            className="w-[200px] h-[220px] sm:w-[280px] sm:h-[320px] absolute z-20 border-slate-200 border-solid max-sm:justify-center max-sm:items:center"
            src="Pic.png"
            alt=""
          />
          <div className="w-[200px] h-[220px] sm:w-[280px] sm:h-[320px] relative bg-slate-200 m-4 sm:m-7 z-10 dark:bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
