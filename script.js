const btn = document.getElementById("generateBtn");
const promptInput = document.getElementById("prompt");
const result = document.getElementById("result");
const loader = document.getElementById("loader");

// 🔗 Your backend API
const API_URL = "https://ai-email-backend-y4px.onrender.com/api/generate";

btn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Please enter an email description.");
    return;
  }

  loader.classList.remove("hidden");
  result.textContent = "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    result.textContent = data.email || "Failed to generate email.";

  } catch (err) {
    result.textContent = "Server error. Please try again later.";
  } finally {
    loader.classList.add("hidden");
  }
});
