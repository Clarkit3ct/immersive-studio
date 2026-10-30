"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

// Named GA events for the clicks that matter, so they can be marked as key
// events in GA (Admin → Events). Rendered only when GA is on.
//   consultation_click: any link to the free consultation page
//   call_click:         any tel: link
//   email_click:        any mailto: link
// The contact form sends generate_lead itself (components/contact-form.tsx).
export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const params = {
        page_path: window.location.pathname,
        link_text: (link.textContent ?? "").trim().slice(0, 80),
      };
      if (href.startsWith("/free-consultation")) sendGAEvent("event", "consultation_click", params);
      else if (href.startsWith("tel:")) sendGAEvent("event", "call_click", params);
      else if (href.startsWith("mailto:")) sendGAEvent("event", "email_click", params);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
