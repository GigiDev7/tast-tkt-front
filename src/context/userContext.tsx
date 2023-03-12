import React, { createContext, useState } from "react";

interface IUser {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}

const UserContext = createContext<{
  user: null | IUser;
  updateUser: (user: IUser | null) => void;
}>({ user: null, updateUser: () => {} });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<null | IUser>(null);

  const updateUser = (user: IUser | null) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
