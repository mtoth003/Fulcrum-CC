import { Container, Button, Stack } from "react-bootstrap";
import EstimateModal from "./components/EstimateModal";
import LaborCostCard from "./components/LaborCostCard";
import MaterialCostCard from "./components/MaterialCostCard";
import TotalCostCard from "./components/TotalCostCard";
import { useEstimate } from "./contexts/EstimateContext";

function App() {
  const {
    showEstimateModal,
    setShowEstimateModal,
    hideShowEstimateModal,
    laborCosts,
    materialCosts,
  } = useEstimate();

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto">Repair Cost Estimate</h1>
          {laborCosts.length || materialCosts.length > 0 ? (
            <Button
              variant="primary"
              onClick={() => setShowEstimateModal(true)}
            >
              Edit Estimate
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => setShowEstimateModal(true)}
            >
              Create Estimate
            </Button>
          )}
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
