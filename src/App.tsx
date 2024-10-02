import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./pages/dasboard/dashboard";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage></DashboardPage>
  }
])