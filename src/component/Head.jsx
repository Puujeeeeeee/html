function Head() {
  return (
    <div className="flex px-20 py-6  justify-between items-center ">
      <h1 className="text-center leading-9 text-3xl">&#60;SS/&#62;</h1>
      <div className="flex content-center items-center ">
        <ul className="flex content-center items-center  gap-9 ">
          <li className="text-gray-500">About</li>
          <li className="text-gray-500">Work</li>
          <li className="text-gray-500">Testimonials</li>
          <li className="text-gray-500">Contact</li>
          <div className="flex gap-4">
            <img src="Icon.svg" alt="" />
            <button
              className="bg-black text-white rounded-lg
             "
            >
              Download CV
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Head;
