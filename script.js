async function generateEmail() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  if (!prompt) {
    output.innerText = "Please enter a prompt.";
    return;
  }

  output.innerText = "Generating...";

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

    if (data.email) {
      output.innerText = data.email;
    } else {
      output.innerText = JSON.stringify(data, null, 2);
    }
  } catch (error) {
    output.innerText = "Error connecting to backend.";
  }
}
