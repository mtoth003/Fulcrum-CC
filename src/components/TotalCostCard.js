import React from "react";
import { Card } from "react-bootstrap";
import { useEstimate } from "../contexts/EstimateContext";
import { currencyFormatter } from "../currency";

function TotalCostCard() {
  const { laborCosts, materialCosts } = useEstimate();
  const totalCost =
    laborCosts.reduce((total, laborCost) => total + laborCost.cost, 0) +
    materialCosts.reduce((total, materialCost) => total + materialCost.cost, 0);

  return (
    <>
      <Card border="dark">
        <Card.Footer className="d-flex justify-content-between">
          <div className="fs-3">Total Cost:</div>
          <div className="fs-3">{currencyFormatter.format(totalCost)}</div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default TotalCostCard;
