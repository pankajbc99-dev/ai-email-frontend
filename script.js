async function generateEmail() {
  const prompt = document.getElementById("prompt").value;

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
  document.getElementById("output").innerText =
    data.email || JSON.stringify(data, null, 2);
}
