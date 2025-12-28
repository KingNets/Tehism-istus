const ADMIN_EMAIL = "YOUR_EMAIL_HERE@example.com";

document.addEventListener("DOMContentLoaded", () => {

  const requestCards = document.querySelectorAll(".request-card");
  requestCards.forEach((card) => {
    const form = card.querySelector(".request-form");

    if (form) {
      const stopBubble = (e) => {
        e.stopPropagation();
      };

      ["click", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart"].forEach((evt) => {
        form.addEventListener(evt, stopBubble, false);
      });

      // Also stop keyboard events from bubbling (Enter/Space triggering card actions)
      form.addEventListener(
        "keydown",
        (e) => {
          e.stopPropagation();
        },
        false
      );
    }

    const blockCardBackground = (e) => {
      const isInsideForm = !!e.target.closest(".request-form");
      if (isInsideForm) return; // let form/input events continue normally

      // Block any card-open behavior.
      e.preventDefault();
      e.stopImmediatePropagation();
    };

    ["click", "pointerup", "mouseup"].forEach((evt) => {
      card.addEventListener(evt, blockCardBackground, true);
    });
  });

  const forms = document.querySelectorAll(".request-form");
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const card = form.closest(".request-card");
      const category = (card && card.dataset && card.dataset.category) ? card.dataset.category : "AI Tools";

      const toolName = (form.querySelector('[name="toolName"]')?.value || "").trim();
      const toolUrl = (form.querySelector('[name="toolUrl"]')?.value || "").trim();
      const message = (form.querySelector('[name="message"]')?.value || "").trim();
      const status = form.querySelector(".request-status");

      if (!toolName) {
        if (status) status.textContent = "Palun sisesta tööriista nimi.";
        return;
      }

      if (!ADMIN_EMAIL || ADMIN_EMAIL.includes("YOUR_EMAIL_HERE")) {
        if (status) status.textContent = "Admin e‑post on seadistamata. Muuda ADMIN_EMAIL väärtus request-forms.js failis.";
        return;
      }

      const subject = `AI tool request — ${category}`;
      const bodyLines = [
        `Category: ${category}`,
        `Tool name(s): ${toolName}`,
        `Website: ${toolUrl || "-"}`,
        `Notes: ${message || "-"}`,
        "",
        "Sent from Aetherfield AI tools page."
      ];
      const body = bodyLines.join("\n");

      const mailto = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (status) status.textContent = "Avan e‑posti…";
      window.location.href = mailto;

    });
  });
});
