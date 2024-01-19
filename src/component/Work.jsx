function Work() {
  return (
    <div className="flex py-28 px-20 flex-col items-center justify-center">
      <div className="flex py-0 px-16 flex-col justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl">
            Some of the noteworthy projects I have built:
          </h1>
        </div>
        <div className="flex w-[1152px ] items-start">
          <div className="flex items-center justify-center p-7 ">
            <img src="he.png" alt="" />
          </div>
          <div className="flex flex-col p-7 items-center gap-6">
            <h1 className="text-xl font-semibold items-start ">Fiskil</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Work;
