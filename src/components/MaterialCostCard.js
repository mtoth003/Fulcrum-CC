import { useState } from "react";
import { Card, Stack, Button } from "react-bootstrap";
import { currencyFormatter } from "../utils";
import { useEstimate } from "../contexts/EstimateContext";

function MaterialCostCard() {
  const { materialCosts } = useEstimate();

  return (
    <Card>
      <Card.Header className="text-center">Material Costs</Card.Header>
      <Card.Body>
        <Stack direction="vertical" gap={3}>
          {materialCosts.map((materialCost) => (
            <Stack direction="horizontal" gap={2} key={materialCost.id}>
              <div className="me-auto fs-7">{materialCost.description}</div>
              <div className="fs-5">
                {currencyFormatter.format(materialCost.cost)}
              </div>
              <Button variant="outline-danger">&times;</Button>
            </Stack>
          ))}
        </Stack>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>Material Cost:</div>
        <div>
          {currencyFormatter.format(
            materialCosts.reduce((total, materialCost) => {
              return (total += materialCost.cost);
            }, 0)
          )}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default MaterialCostCard;
