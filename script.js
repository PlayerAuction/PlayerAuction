// Cambiá el email aquí para que se actualice en la página
const DELIVERY_EMAIL = "55wrightd@gmail.com"; // <- editá esto

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("delivery-email");
  const copyBtn = document.getElementById("copy-btn");
  const orderBadge = document.getElementById("order-badge");

  // pone el email en el input
  if (emailInput) emailInput.value = DELIVERY_EMAIL;

  // ejemplo: si querés mostrar un order pasado por query ?order=123
  const urlParams = new URLSearchParams(window.location.search);
  const order = urlParams.get("order");
  if (order && orderBadge) orderBadge.textContent = `Order #${order}`;

  // copiar al portapapeles
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailInput.value);
        copyBtn.textContent = "Copied";
        setTimeout(()=> copyBtn.textContent = "Copy", 1200);
      } catch (e) {
        // fallback
        emailInput.select();
        document.execCommand('copy');
        copyBtn.textContent = "Copied";
        setTimeout(()=> copyBtn.textContent = "Copy", 1200);
      }
    });
  }
});
