import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border: 2px solid
    ${({ type }) =>
      type === "EXAMEN"
        ? "blue"
        : type === "TAREA"
        ? "green"
        : "red"};
  color:
    ${({ type }) =>
      type === "EXAMEN"
        ? "blue"
        : type === "TAREA"
        ? "green"
        : "red"};
`;

function App() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      if (event.data?.type) {
        setAlert(event.data);
      }
    };

    window.addEventListener("message", handler);

    return () => {
      window.removeEventListener("message", handler);
    };
  }, []);

  if (!alert) return <p>Sin alertas</p>;

  return (
    <Container type={alert.type}>
      <h3>Alert Dashboard</h3>
      <p><strong>Tipo:</strong> {alert.type}</p>
      <p>{alert.message}</p>
    </Container>
  );
}

export default App;

