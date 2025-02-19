import styled from "styled-components";
import { NieveEffect } from "../assets/NieveEffect";
import { useRef } from "react";
export function NieveComponente() {
  const canvasRef = useRef(null);
  return (
    <Container >
      <canvas ref={canvasRef}></canvas>
      <NieveEffect canvasRef={canvasRef} />
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
   height: 100vh;
    width: 100%;
  top: 0;
  left: 0;
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
`;