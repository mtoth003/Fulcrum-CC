import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const EstimateContext = React.createContext();

export function useEstimate() {
  return useContext(EstimateContext);
}

export const EstimateProvider = ({ children }) => {
  const initialLaborCost = [
    { id: uuidv4(), description: "Uninstall Old Windows", cost: 600 },
    { id: uuidv4(), description: "Install New Windows", cost: 600 },
    { id: uuidv4(), description: "Remove Old Shingles", cost: 1000 },
    { id: uuidv4(), description: "Lay New Shingles", cost: 500 },
  ];

  const initialMaterialCost = [
    { id: uuidv4(), description: "Windows (x12)", cost: 1000 },
    { id: uuidv4(), description: "Shingles", cost: 3000 },
    { id: uuidv4(), description: "Misc Materials", cost: 800 },
  ];

  const [laborCosts, setLaborCosts] = useState(initialLaborCost);
  const [materialCosts, setMaterialCosts] = useState(initialMaterialCost);
  const [showEstimateModal, setShowEstimateModal] = useState(false);

  function addLaborCost({ description, cost }) {
    setLaborCosts((prevLaborCosts) => {
      return [...prevLaborCosts, { id: uuidv4(), description, cost }];
    });
  }

  function addMaterialCost({ description, cost }) {
    setMaterialCosts((prevMaterialCosts) => {
      return [...prevMaterialCosts, { id: uuidv4(), description, cost }];
    });
  }

  function deleteLaborCost({ id }) {
    setLaborCosts((prevLaborCosts) => {
      return prevLaborCosts.filter((laborCost) => laborCost.id !== id);
    });
  }

  function deleteMaterialCost({ id }) {
    setMaterialCosts((prevMaterialCosts) => {
      return prevMaterialCosts.filter((materialCost) => materialCost.id !== id);
    });
  }

  const hideShowEstimateModal = () => setShowEstimateModal(false);

  return (
    <EstimateContext.Provider
      value={{
        laborCosts,
        materialCosts,
        addLaborCost,
        addMaterialCost,
        deleteLaborCost,
        deleteMaterialCost,
        setShowEstimateModal,
        showEstimateModal,
        hideShowEstimateModal,
      }}
    >
      {children}
    </EstimateContext.Provider>
  );
};
