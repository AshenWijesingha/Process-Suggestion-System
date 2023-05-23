import { useState } from "react";
import { EquipmentContext } from "../context/EquipmentContext"

export const EquipmeProvider = ({ children }) => {
  const [equipments, setEquipment] = useState([
    // {
    //   name: "Ashen Wijesingha 1",
    //   Address: Gampaha,
    //   TelNumber: 0784464128,
    //   Equipment: Drill,
    // },
    // {
    //   name: "Ashen Wijesingha 2",
    //   Address: Gampaha,
    //   TelNumber: 0784464128,
    //   Equipment: Drill,
    // },
    // {
    //   name: "Ashen Wijesingha 3",
    //   Address: Gampaha,
    //   TelNumber: 0784464128,
    //   Equipment: Drill,
    // },
    // {
    //   name: "Ashen Wijesingha 4",
    //   Address: Gampaha,
    //   TelNumber: 0784464128,
    //   Equipment: Drill,
    // },
  ]);

  let addEquipment = (equipment) => {
    setEquipments([...equipments, equipment]);
  };

  let deleteEquipment = (id) => {
    setEquipments(equipments.filter((equipment) => equipment.id !== id));
  };

  let updateEquipment = (id, name, description, rentalprice, availability) => {
    const affectedEquipment = equipments.map((equipment) => {
      if (equipment.id === id) {
        return {
          ...equipment,
          name: name,
          description: description,
          rentalprice: rentalprice,
          availability: availability,
        };
      }
      return equipment;
    });
    setEquipments(affectedEquipment);
  };

  return (
    <EquipmentContext.Provider value={{ Equipments, addEquipment, updateEquipment, deleteEquipment }}>
      {children}
    </EquipmentContext.Provider>
  );
};
