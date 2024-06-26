import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import App from "@/routes";

import "@/styles/index.css";
import "@/styles/bubble.css";

import { InboxProvider } from "@/utils/context/inbox-context";
import { InteractionProvider } from "@/utils/context/interaction-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <InboxProvider>
    <InteractionProvider>
      <App />
      <Toaster />
    </InteractionProvider>
  </InboxProvider>
);
