import React from "react";

const Admin = () => {
  return (
    <div className="flex justify-between w-[70%]">
      <button className="h-fit py-3 px-8 bg-blue-500 hover:bg-blue-600  rounded-3xl text-white">
        Add Event
      </button>
      <div className="flex flex-col gap-5 items-center">
        <input
          placeholder="Search event..."
          className="w-[500px] py-3 border-[1px] pl-3 border-black rounded-3xl"
          type="text"
        />
        <button className="w-fit bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-3xl text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Admin;
