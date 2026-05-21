import React from "react";

import ReactDOM from "react-dom/client";

import {
  RouterProvider,
} from "react-router-dom";

import {
  Toaster,
} from "react-hot-toast";

import router from "./routes/Router";

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import "animate.css";

import "./index.css";

import AuthProvider from "./providers/AuthProvider";

import ThemeProvider from "./providers/ThemeProvider";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ThemeProvider>

      <AuthProvider>

        <RouterProvider
          router={router}
        />

        <Toaster
          position="top-right"
          toastOptions={{

            duration: 3000,

            style: {

              borderRadius: "12px",

              background: "#0f172a",

              color: "#fff",

              padding: "14px 18px",

              fontSize: "15px",
            },
          }}
        />

      </AuthProvider>

    </ThemeProvider>

  </React.StrictMode>
);