import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

function App() {
  useEffect(() => {
    const handler = (event) => {
      // reenviar mensaje a TODOS los iframes
      const iframes = document.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        iframe.contentWindow.postMessage(event.data, "*");
      });
    };

    window.addEventListener("message", handler);

    return () => {
      window.removeEventListener("message", handler);
    };
  }, []);

  return (
    <Container>
      <h1>Sistema de Alertas Académicas</h1>

      <iframe
        src="http://localhost:5174"
        width="100%"
        height="200"
        title="Alert Sender"
      />

      <iframe
        src="http://localhost:5175"
        width="100%"
        height="200"
        title="Alert Dashboard"
      />
    </Container>
  );
}

export default App;


