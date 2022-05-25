import { Container, Button, Stack } from "react-bootstrap";
import EstimateModal from "./components/EstimateModal";
import LaborCostCard from "./components/LaborCostCard";
import MaterialCostCard from "./components/MaterialCostCard";
import { useState } from "react";
import TotalCostCard from "./components/TotalCostCard";

function App() {
  const [showEstimateModal, setShowEstimateModal] = useState(false);

  // const handleShowEstimateModal = () => setShowEstimateModal(true);
  const hideShowEstimateModal = () => setShowEstimateModal(false);

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto">Your Repair Estimate</h1>
          <Button variant="primary" onClick={() => setShowEstimateModal(true)}>
            Create Estimate
          </Button>
        </Stack>
        <MaterialCostCard />
        <LaborCostCard />
        <TotalCostCard />
        <EstimateModal show={showEstimateModal} hide={hideShowEstimateModal} />
      </Container>
    </>
  );
}

export default App;
