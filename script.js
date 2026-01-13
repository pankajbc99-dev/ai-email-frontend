const generateBtn = document.getElementById("generateBtn");
const promptInput = document.getElementById("prompt");
const resultBox = document.getElementById("result");
const loading = document.getElementById("loading");

const API_URL = "https://ai-email-backend-y4px.onrender.com/api/generate";

generateBtn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Please enter a prompt.");
    return;
  }

  resultBox.textContent = "";
  loading.classList.remove("hidden");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (data.email) {
      resultBox.textContent = data.email;
    } else {
      resultBox.textContent = "❌ Error generating email.";
    }

  } catch (error) {
    console.error(error);
    resultBox.textContent = "⚠️ Server error. Please try again.";
  } finally {
    loading.classList.add("hidden");
  }
});
