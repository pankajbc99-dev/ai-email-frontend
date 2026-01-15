:root {
  --blue-primary: #2563eb;
  --blue-secondary: #1e40af;
  --bg-dark: #020617;
  --glass-bg: rgba(255, 255, 255, 0.08);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  min-height: 100vh;
  background: var(--bg-dark);
  color: #ffffff;
}

/* Background glow */
.bg-gradient {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top, #2563eb, transparent 45%),
    radial-gradient(circle at bottom, #1e40af, transparent 45%);
  filter: blur(140px);
  z-index: -1;
}

/* Layout */
.app-container {
  max-width: 900px;
  margin: auto;
  padding: 48px 20px;
}

/* Header */
.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
}

.hero p {
  margin-top: 12px;
  opacity: 0.85;
  font-size: 1.1rem;
}

/* Glass cards */
.card {
  border-radius: 20px;
  padding: 28px;
  margin-bottom: 28px;
}

.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(22px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.4);
}

/* Input */
label {
  font-weight: 600;
  margin-bottom: 10px;
  display: block;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 16px;
  border-radius: 14px;
  border: none;
  resize: none;
  font-size: 1rem;
  background: rgba(0,0,0,0.45);
  color: #fff;
  outline: none;
}

/* Button */
button {
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(
    135deg,
    var(--blue-primary),
    var(--blue-secondary)
  );
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
}

/* Loader */
#loader {
  margin-top: 14px;
  text-align: center;
  opacity: 0.85;
}

.hidden {
  display: none;
}

/* Output */
.output h3 {
  margin-bottom: 12px;
}

#result {
  background: rgba(0,0,0,0.45);
  padding: 18px;
  border-radius: 14px;
  min-height: 140px;
  white-space: pre-wrap;
  line-height: 1.6;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 40px;
  opacity: 0.6;
  font-size: 0.9rem;
}
