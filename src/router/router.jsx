import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import Frequent from "../pages/Frequent/Frequent";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route element={<TermsAndConditions />} path="/terms" />
      <Route element={<Frequent />} path="/frequent" />
    </Route>
  )
);
