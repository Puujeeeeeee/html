import React from "react";

function Top() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed m-16 bottom-4 right-4 ">
      <img
        className="w-12 h-12 cursor-pointer dark:bg-color-black max-md:hidden "
        src="topppp.png"
        alt=""
        onClick={scrollToTop}
      />
    </div>
  );
}

export default Top;
