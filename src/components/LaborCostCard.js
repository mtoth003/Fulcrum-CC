import { useState } from "react";
import { Card, Stack, Button } from "react-bootstrap";
import { useEstimate } from "../contexts/EstimateContext";
import { currencyFormatter } from "../utils";

function LaborCostCard() {
  const { laborCosts, deleteLaborCost } = useEstimate();

  return (
    <Card>
      <Card.Header className="text-center">Labor Costs</Card.Header>
      <Card.Body>
        <Stack direction="vertical" gap={3}>
          {laborCosts.map((laborCost) => (
            <Stack direction="horizontal" gap={2} key={laborCost.id}>
              <div className="me-auto fs-7">{laborCost.description}</div>
              <div className="fs-5">
                {currencyFormatter.format(laborCost.cost)}
              </div>
              <Button
                variant="outline-danger"
                onClick={() => deleteLaborCost(laborCost)}
              >
                &times;
              </Button>
            </Stack>
          ))}
        </Stack>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>Labor Cost:</div>
        <div>
          {currencyFormatter.format(
            laborCosts.reduce((total, laborCost) => {
              return (total += laborCost.cost);
            }, 0)
          )}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default LaborCostCard;
