// 1. Live Daily Protein Intake Calculator
function calculateProtein() {
  const weightInput = document.getElementById("weight");
  const activitySelect = document.getElementById("activity");
  const proteinDisplay = document.getElementById("proteinValue");

  const weight = parseFloat(weightInput.value);
  const factor = parseFloat(activitySelect.value);

  if (isNaN(weight) || weight < 25 || weight > 250) {
    alert("Please enter a valid body weight between 25 kg and 250 kg.");
    weightInput.focus();
    return;
  }

  const dailyProtein = Math.round(weight * factor);
  proteinDisplay.textContent = dailyProtein + " g / day";
}

// 2. Click-to-Flip support for 3D Meal Cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});

// 3. Consultation & Inquiry Form Submission Handler (Shows Success Banner)
function handleFormSubmit(event, message) {
  event.preventDefault();
  const banner = document.getElementById("statusBanner");
  banner.textContent = "ⓘ " + message;
  banner.style.display = "block";
  event.target.reset();
  window.scrollTo({ top: 0, behavior: "smooth" });
}