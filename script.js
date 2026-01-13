async function generateEmail() {
  const promptInput = document.getElementById("prompt");
  const output = document.getElementById("output");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Please enter a prompt");
    return;
  }

  loading.classList.remove("hidden");
  result.classList.add("hidden");

  try {
    const response = await fetch(
      "https://ai-email-backend-y4px.onrender.com/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      }
    );

    const data = await response.json();

    if (data.generatedText) {
      output.textContent = data.generatedText;
    } else {
      output.textContent = "Error: " + JSON.stringify(data);
    }

    result.classList.remove("hidden");

  } catch (error) {
    output.textContent = "Error connecting to backend";
    result.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
}
