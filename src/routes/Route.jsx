import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import App from "../App";

import NIDVerification from "../pages/Government/NIDVerification";
import NIDServices from "../pages/Government/NIDServices";
import DataProtection from "../pages/Government/DataProtection";
import GenerateEncryptedNID from "../pages/Government/GenerateEncryptedNID";
import Contact from "../pages/Government/Contact";
import Home from "../pages/Government/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "nid-verification",
        element: <NIDVerification />,
      },
      {
        path: "nid-services",
        element: <NIDServices />,
      },
      {
        path: "data-protection",
        element: <DataProtection />,
      },
      {
        path: "generate-encrypted-nid",
        element: <GenerateEncryptedNID />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
