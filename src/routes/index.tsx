import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Design,
  Nodes,
  NotPage,
  Administration,
  Campaigns,
  ChatShop,
  Contacts,
  Dashboard,
  GoogleCalendar,
  Reports,
  Tickets,
  Chatbot,
} from "../pages";

export default function routes() {
  return (
    <Suspense fallback={<h1>Rendering...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/googlecalendar" element={<GoogleCalendar />} />
        <Route path="/chatshop" element={<ChatShop />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/administration/chatbot" element={<Chatbot />} />

        <Route path="/design/:component?" element={<Design />} />
        <Route path="/nodes" element={<Nodes />} />

        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
}
