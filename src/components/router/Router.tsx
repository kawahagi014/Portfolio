import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main";

export const Router: FC = memo(() => (
  <Routes>
    <Route path="/" element={<Main />} />
  </Routes>
));
