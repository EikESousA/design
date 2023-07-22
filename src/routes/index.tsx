import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home, NotPage } from "../pages";

export default function routes() {
  return (
    <Suspense fallback={<h1>Rendering...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
}
