import { useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    // {
    //   name: "Ashen Wijesingha 1",
    //   Address: Gampaha,
    //   TelNumber: "0784464128",
    //   Equipment: Drill,
    // },
  ]);

  let addUser = (user) => {
    setUsers([...users,user])
  }

  let deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  let updateUser = (
    id,
    name,
    address,
    telnumber,
    equipment,
    priority,
    manager
  ) => {
    const affectedUser = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name: name,
          address: address,
          telnumber: telnumber,
          equipment: equipment,
          priority: priority,
          manager: manager,
        };
      }
      return user;
    });
    setUsers(affectedUser);
  };

  return <UserContext.Provider value={{users,addUser,updateUser,deleteUser}}>
    {children}</UserContext.Provider>;
};
