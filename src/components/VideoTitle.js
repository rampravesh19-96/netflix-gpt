import React from "react";
import { IoPlay } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-20 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className=" flex gap-3">
        <button className="bg-white text-black text-xl p-4 px-12 gap-1  flex items-center rounded-lg hover:bg-opacity-80">
          <IoPlay /> Play
        </button>
        <button className="bg-gray-500 text-white text-xl p-4 px-12 gap-1  flex items-center bg-opacity-50 rounded-lg">
          <IoIosInformationCircleOutline /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
