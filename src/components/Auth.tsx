import React, { useState, useContext } from "react";
import ModalWrapper from "./ModalWrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../config";
import UserContext from "../context/userContext";

const Auth: React.FC<{ hideAuth: () => void; isAuthShown: boolean }> = ({
  hideAuth,
}) => {
  const [params, setParams] = useSearchParams();
  const type = params.get("auth");
  const [userData, setUserData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isValidationError, setIsValidationError] = useState("");
  const [passwordsShown, setPasswordsShown] = useState({
    password: false,
    confirmPassword: false,
  });
  const [wasRegistered, setWasRegistered] = useState(false);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleClose = () => {
    setParams(undefined);
    hideAuth();
  };

  const handlePasswordShow = (type: boolean, isConfirm: boolean) => {
    if (isConfirm) {
      setPasswordsShown((prev) => {
        return { ...prev, confirmPassword: type };
      });
    } else {
      setPasswordsShown((prev) => {
        return { ...prev, password: type };
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setUserData((prev) => {
      return { ...prev, [target.name]: target.value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidationError("");
    if (type == "register") {
      const vals = Object.values(userData);
      if (!vals.every((el) => el)) {
        setIsValidationError("Please fill all fields");
        return;
      }
      if (userData.password.length < 6) {
        setIsValidationError("Password must be at least 6 characters");
        return;
      }
      if (userData.password !== userData.confirmPassword) {
        setIsValidationError("Passwords do not match");
        return;
      }
      try {
        const { phone, confirmPassword, ...userInfo } = userData;
        await axios.post(`${BASE_URL}/user/register`, {
          ...userInfo,
          phoneNumber: phone,
        });
        setUserData({
          confirmPassword: "",
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          phone: "",
        });
        setWasRegistered(true);
        setTimeout(() => {
          setWasRegistered(false);
        }, 1500);
        navigate("?auth=login");
      } catch (error: any) {
        setIsValidationError(
          error.response.data.message || "Something went wrong"
        );
      }
    } else if (type == "login") {
      if (!userData.email || !userData.password) {
        setIsValidationError("Please provide email and password");
        return;
      }
      try {
        const { data } = await axios.post(`${BASE_URL}/user/login`, {
          email: userData.email,
          password: userData.password,
        });
        userContext.updateUser(data.user);
        localStorage.setItem("token", data.token);
        hideAuth();
        setParams(undefined);
      } catch (error: any) {
        setIsValidationError(
          error.response.data.message || "Something went wrong"
        );
      }
    }
  };

  return (
    <ModalWrapper>
      <div className="bg-white absolute top-1/2 left-1/2 rounded-md -translate-x-1/2 -translate-y-1/2 z-10">
        <form className="relative flex flex-col gap-5 w-[500px] py-8">
          <AiOutlineClose
            onClick={handleClose}
            className="absolute right-5 top-5 text-xl cursor-pointer"
          />
          <h2 className="capitalize font-semibold mx-auto text-xl">{type}</h2>
          {wasRegistered && (
            <p className="text-green-600 mx-auto">Successfully registered!</p>
          )}
          {type === "register" && (
            <>
              <input
                onChange={(e) => handleInputChange(e)}
                name="firstname"
                value={userData.firstname}
                className="w-4/5 mx-auto border-2 pl-2 py-2 rounded-md"
                type="text"
                placeholder="Firstname"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                name="lastname"
                value={userData.lastname}
                className="w-4/5 mx-auto border-2 pl-2 py-2 rounded-md"
                type="text"
                placeholder="Lastname"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                name="phone"
                value={userData.phone}
                className="w-4/5 mx-auto border-2 pl-2 py-2 rounded-md"
                type="text"
                placeholder="Phone number"
              />
            </>
          )}
          <input
            onChange={(e) => handleInputChange(e)}
            name="email"
            value={userData.email}
            className="w-4/5 mx-auto border-2 pl-2 py-2 rounded-md"
            type="text"
            placeholder="Email"
          />
          <div className="w-4/5 mx-auto relative">
            <input
              onChange={(e) => handleInputChange(e)}
              name="password"
              value={userData.password}
              className="w-full border-2 pl-2 py-2 rounded-md"
              type={passwordsShown.password ? "text" : "password"}
              placeholder="Password"
            />
            {!passwordsShown.password ? (
              <AiOutlineEye
                onClick={() => handlePasswordShow(true, false)}
                className="cursor-pointer absolute right-5 text-xl top-1/2 -translate-y-1/2"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => handlePasswordShow(false, false)}
                className="cursor-pointer absolute right-5 text-xl top-1/2 -translate-y-1/2"
              />
            )}
          </div>
          {type === "register" && (
            <div className="mx-auto w-4/5 relative">
              <input
                onChange={(e) => handleInputChange(e)}
                name="confirmPassword"
                value={userData.confirmPassword}
                className="w-full border-2 pl-2 py-2 rounded-md"
                type={passwordsShown.confirmPassword ? "text" : "password"}
                placeholder="Confirm password"
              />
              {!passwordsShown.confirmPassword ? (
                <AiOutlineEye
                  onClick={() => handlePasswordShow(true, true)}
                  className="cursor-pointer absolute right-5 text-xl top-1/2 -translate-y-1/2"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => handlePasswordShow(false, true)}
                  className="cursor-pointer absolute right-5 text-xl top-1/2 -translate-y-1/2"
                />
              )}
            </div>
          )}
          {isValidationError && (
            <p className="mx-auto text-red-500">{isValidationError}</p>
          )}
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="capitalize bg-blue-500 w-fit px-16 text-white py-2 rounded-md hover:bg-blue-600 mx-auto"
          >
            {type}
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default Auth;
