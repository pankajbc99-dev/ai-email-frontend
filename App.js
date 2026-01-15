const btn = document.getElementById("generateBtn");
const promptInput = document.getElementById("prompt");
const result = document.getElementById("result");
const loader = document.getElementById("loader");

const API_URL = "https://ai-email-backend-y4px.onrender.com/api/generate";

btn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();
  if (!prompt) return alert("Please enter a prompt");

  loader.classList.remove("hidden");
  result.textContent = "";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    result.textContent = data.email || "AI failed to generate response.";

  } catch (err) {
    result.textContent = "Server error. Please try again.";
  } finally {
    loader.classList.add("hidden");
  }
});
