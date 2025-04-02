import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import emailjs from "emailjs-com";

// Initialize EmailJS with your User ID
const emailjsUserId = import.meta.env.VITE_EMAILJS_USER_ID || 'DNSMvNxpOouque3SH';
emailjs.init(emailjsUserId);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
