import React, { useState } from "react";
import ModalWrapper from "../components/ModalWrapper";
import { AiOutlineClose } from "react-icons/ai";
import useModal from "../hooks/useModal";
import axios from "axios";
import { BASE_URL } from "../config";

const Admin = () => {
  const { hideModal, showModal, isShown } = useModal();
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      !eventData.date ||
      !eventData.location ||
      !eventData.time ||
      !eventData.title
    ) {
      return;
    }

    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(`${BASE_URL}/events`, eventData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      hideModal();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between w-[70%]">
        <button
          onClick={showModal}
          className="h-fit py-3 px-8 bg-blue-500 hover:bg-blue-600  rounded-3xl text-white"
        >
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
      {isShown && (
        <ModalWrapper>
          <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] flex justify-center py-8 bg-white z-10 absolute">
            <AiOutlineClose
              onClick={hideModal}
              className="absolute right-5 text-xl cursor-pointer"
            />
            <form className="flex flex-col gap-5 w-[200px] items-center">
              <h2 className=" font-medium">Add new event</h2>
              <input
                onChange={(e) => handleInputChange(e)}
                name="title"
                placeholder="Title"
                className="w-full border-[1px] border-black rounded-xl py-2 pl-2"
                type="text"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                name="location"
                placeholder="Location"
                className="w-full border-[1px] border-black rounded-xl py-2 pl-2"
                type="text"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                name="date"
                className="w-full border-[1px] border-black rounded-xl py-2 pl-2"
                type="date"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                name="time"
                className="w-full border-[1px] border-black rounded-xl py-2 pl-2"
                type="time"
              />
              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-blue-500 hover:bg-blue-600 rounded-xl px-14 py-2 text-white"
              >
                Add
              </button>
            </form>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default Admin;
