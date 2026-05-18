import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import router from "./routes/Router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "animate.css";
import "./index.css";

import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

      <Toaster position="top-right" />
    </AuthProvider>
  </React.StrictMode>
);