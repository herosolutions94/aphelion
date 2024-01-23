import React from "react";
import ReactDOMClient from "react-dom/client";
import "./assets/css/bootstrap.min.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "./App.scss";
import App from "./App.jsx";

ReactDOMClient.createRoot(document.getElementById("root")).render(<App />);
