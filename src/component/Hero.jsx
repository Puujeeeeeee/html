function Hero() {
  return (
    <div className="flex-col flex md:flex-row gap-12 py-8 px-4 md:px-20">
      <div className="flex flex-col max-w-full md:max-w-3xl justify-center gap-6  max-md:items-center max-md:justify-center max-md:px-10 relative ">
        <h1 className="text-4xl md:text-6xl font-bold max-md:items-start ">
          Hi, I’m Puujee 👋
        </h1>
        <p className="text-base leading-6 items-start text-gray-500">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating exceptional digital experiences that are fast, accessible,
          visually appealing, and responsive. Even though I have been creating
          web applications for over 7 years, I still love it as if it was
          something new.
        </p>

        <div className="flex flex-col md:flex-row   items-center max-md:items-start gap-2">
          <div className="flex  gap-2">
            <img className="icon-xs font-normal" src="icon.svg" alt="" />
            <span>Ahmedabad, India</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="icon.svg" alt="" />
            <p className="text-base">Available for new projects</p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <img src="ff.svg" alt="" />
          <img src="aa.svg" alt="" />
          <img src="xx.svg" alt="" />
        </div>
      </div>

      <div className="flex min-w-full md:min-w-96 flex-col justify-center items-end max-md:items-center ">
        <div>
          <img
            className="w-[280px] h-[320px] absolute z-20 border-slate-200 border-solid "
            src="Pic.png"
            alt=" "
          />
          <div className="w-[280px] h-[320px] relative bg-slate-200 m-7 z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
