import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Design, Nodes, NotPage } from "../pages";

export default function routes() {
  return (
    <Suspense fallback={<h1>Rendering...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design/:type?/:component?" element={<Design />} />
        <Route path="/nodes" element={<Nodes />} />

        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
}
