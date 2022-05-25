import React from "react";
import { Card } from "react-bootstrap";
import { useEstimate } from "../contexts/EstimateContext";
import { currencyFormatter } from "../utils";

function TotalCostCard() {
  const { laborCosts, materialCosts } = useEstimate();
  const totalCost =
    laborCosts.reduce((total, laborCost) => total + laborCost.cost, 0) +
    materialCosts.reduce((total, materialCost) => total + materialCost.cost, 0);

  return (
    <>
      <Card>
        <Card.Footer className="d-flex justify-content-between">
          <div>Total Cost:</div>
          <div>{currencyFormatter.format(totalCost)}</div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default TotalCostCard;
