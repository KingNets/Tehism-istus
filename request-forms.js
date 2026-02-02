const ADMIN_EMAIL = "info@tehismõistus.ee";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Attach click handlers to "Saada" buttons in the cards
  const triggers = document.querySelectorAll(".request-trigger-btn");
  triggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // prevent card click
      const card = btn.closest(".request-card");
      const category = card && card.dataset.category ? card.dataset.category : "AI Tools";
      openRequestModal(category);
    });
  });

  // Also allow clicking the whole card if user wants, 
  // but maybe restrict to just the button to avoid accidental clicks? 
  // The previous code had complex stopPropagation logic. 
  // For now, let's stick to the button as the primary trigger, 
  // but we can also add it to the card if acts like a "tool card".
  const requestCards = document.querySelectorAll(".request-card");
  requestCards.forEach(card => {
    card.addEventListener("click", (e) => {
      // If we didn't click the button (which stops prop), handle here
      if (!e.target.closest(".request-trigger-btn")) {
        const category = card.dataset.category || "AI Tools";
        openRequestModal(category);
      }
    });
  });
});

function openRequestModal(category) {
  // Check if modal already exists (we might mistakenly create duplicates if not careful, 
  // but simpler to just remove old one or reuse).
  // Let's reuse if exists, or create new.
  let modal = document.getElementById("request-modal");

  if (!modal) {
    // Create modal structure matching 'auth-modal' from auth.css
    modal = document.createElement("div");
    modal.id = "request-modal";
    modal.className = "auth-modal"; // Reusing login modal styles

    // We inject the HTML. Note: using auth-* classes for consistency.
    modal.innerHTML = `
            <div class="auth-modal-content">
                <button class="auth-modal-close" id="request-modal-close">&times;</button>
                <h2 class="auth-modal-title">Taotle tööriista lisamist</h2>
                <p class="auth-modal-subtitle">Soovita kategooriasse <strong>${category}</strong> uut AI tööriista.</p>
                
                <form id="request-modal-form" class="auth-form">
                    <div class="form-group">
                        <label for="req-tool-name">AI tööriista nimi</label>
                        <input type="text" id="req-tool-name" name="toolName" placeholder="Nt: Midjourney, Claude..." required>
                    </div>

                    <div class="form-group">
                        <label for="req-tool-url">Veebileht (valikuline)</label>
                        <input type="url" id="req-tool-url" name="toolUrl" placeholder="https://...">
                    </div>

                    <div class="form-group">
                        <label for="req-message">Märkus (valikuline)</label>
                        <textarea id="req-message" name="message" rows="3" placeholder="Mida see tööriist teeb, miks lisada..."></textarea>
                    </div>

                    <!-- Hidden styling for styles consistency with textarea in auth form if needed, 
                         but auth-form textarea selector in CSS should handle it -->

                    <div id="request-status-msg" class="auth-error" style="display: none; border-color: #ffd700; background: rgba(255, 215, 0, 0.1); color: #ffd700;"></div>

                    <button type="submit" class="auth-submit-btn">SAADA</button>
                </form>
            </div>
        `;
    document.body.appendChild(modal);

    // Close button handler
    modal.querySelector("#request-modal-close").addEventListener("click", () => {
      closeRequestModal();
    });

    // Click outside to close
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeRequestModal();
      }
    });

    // Current form submission handler
    const form = modal.querySelector("#request-modal-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleRequestSubmit(form, category);
    });
  } else {
    // Update category if reusing
    const subtitle = modal.querySelector(".auth-modal-subtitle strong");
    if (subtitle) subtitle.textContent = category;

    // Clear form
    const form = modal.querySelector("form");
    if (form) form.reset();

    // Update submit handler closure if needed? 
    // Is easier to just re-create the inner HTML or similar. 
    // Or store category in a data attribute on the form.
    if (form) form.dataset.currentCategory = category;
  }

  // Show modal
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeRequestModal() {
  const modal = document.getElementById("request-modal");
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    // Optional: remove from DOM after transition
    setTimeout(() => {
      if (!modal.classList.contains("show")) {
        modal.remove();
      }
    }, 300);
  }
}

function handleRequestSubmit(form, defaultCategory) {
  const category = form.dataset.currentCategory || defaultCategory; // handle reuse
  const toolName = form.querySelector('[name="toolName"]').value.trim();
  const toolUrl = form.querySelector('[name="toolUrl"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();
  const statusMsg = document.getElementById("request-status-msg");

  if (!toolName) {
    showStatus("Palun sisesta tööriista nimi.", true);
    return;
  }

  if (!ADMIN_EMAIL || ADMIN_EMAIL.includes("YOUR_EMAIL_HERE")) {
    showStatus("Admin e-post on seadistamata.", true);
    return;
  }

  const subject = `AI tool request — ${category}`;
  const bodyLines = [
    `Category: ${category}`,
    `Tool name(s): ${toolName}`,
    `Website: ${toolUrl || "-"}`,
    `Notes: ${message || "-"}`,
    "",
    "Sent from Tehismõistus AI tools page."
  ];
  const body = bodyLines.join("\n");
  const mailto = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  showStatus("Avan e-posti...", false);

  // Slight delay to show message
  setTimeout(() => {
    window.location.href = mailto;
    closeRequestModal();
  }, 1000);

  function showStatus(text, isError) {
    if (!statusMsg) return;
    statusMsg.textContent = text;
    statusMsg.style.display = "block";
    // Override styles for non-error distinct look if needed, 
    // but using the yellow/gold style defined inline for info
  }
}
