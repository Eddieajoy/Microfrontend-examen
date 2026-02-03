import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;

const sendAlert = (type) => {
  const alert = {
    type,
    message:
      type === "EXAMEN"
        ? "Se ha programado un examen"
        : type === "TAREA"
        ? "Nueva tarea asignada"
        : "Clase cancelada",
  };

  window.parent.postMessage(alert, "*");
};

function App() {
  return (
    <Container>
      <h3>Alert Sender</h3>
      <Button onClick={() => sendAlert("EXAMEN")}>Examen</Button>
      <Button onClick={() => sendAlert("TAREA")}>Tarea</Button>
      <Button onClick={() => sendAlert("CANCELADA")}>
        Clase cancelada
      </Button>
    </Container>
  );
}

export default App;


