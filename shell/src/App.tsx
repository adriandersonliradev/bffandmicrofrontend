import React, { Suspense } from "react";
import App1 from "microfrontendApp1/Content";
import App2 from "microfrontendApp2/Content";

export function App() {
  return (
    <div>
      <h1
        style={{ textAlign: "center", width: "100%", backgroundColor: "blue" }}
      >
        Shell
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "green",
          padding: "1rem",
        }}
      >
        <div
          style={{ width: "45%", position: "left", backgroundColor: "black" }}
        >
          <Suspense fallback={<div>Carregando Micro-frontend 1...</div>}>
            <App1 />
          </Suspense>
        </div>
        <div
          style={{
            marginLeft: "1rem",
            width: "45%",
            position: "right",
            backgroundColor: "black",
          }}
        >
          <Suspense fallback={<div>Carregando Micro-frontend 2...</div>}>
            <App2 />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
