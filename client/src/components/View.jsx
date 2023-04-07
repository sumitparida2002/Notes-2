import React, { useEffect } from "react";
import notepadImg from "../constant/image.js";

const View = ({ currentNote }) => {
  // useEffect(() => {
  //   console.log("render");
  //   if (currentNote) {
  //     console.log(currentNote.title);
  //   }
  // }, [currentNote]);

  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-16 px-6 mx-auto max-w-screen-xl grid grid-cols-2 ">
        {!currentNote.title ? (
          <div className="font-light">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#6B9080]">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4 text-[#6B9080]">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
          </div>
        ) : (
          <div className="font-light">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#6B9080]">
              {currentNote.title}
            </h2>
            <p className="mb-4 text-[#6B9080]">{currentNote.message}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={notepadImg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default View;
