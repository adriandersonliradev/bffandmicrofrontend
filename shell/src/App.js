import React, { Suspense } from "react";
import App1 from "microfrontendApp1/Content";
import App2 from "microfrontendApp2/Content";
export function App() {
    return (React.createElement("div", null,
        React.createElement("h1", { style: { textAlign: "center", width: "100%", backgroundColor: "blue" } }, "Shell"),
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "green",
                padding: "1rem",
            } },
            React.createElement("div", { style: { width: "45%", position: "left", backgroundColor: "black" } },
                React.createElement(Suspense, { fallback: React.createElement("div", null, "Carregando Micro-frontend 1...") },
                    React.createElement(App1, null))),
            React.createElement("div", { style: {
                    marginLeft: "1rem",
                    width: "45%",
                    position: "right",
                    backgroundColor: "black",
                } },
                React.createElement(Suspense, { fallback: React.createElement("div", null, "Carregando Micro-frontend 2...") },
                    React.createElement(App2, null))))));
}
