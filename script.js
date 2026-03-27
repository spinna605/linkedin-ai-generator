async function generate() {
  const niche = document.getElementById("niche").value;
  const output = document.getElementById("output");

  output.textContent = "Generating...";

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ niche })
    });

    // Handle non-JSON errors properly
    if (!res.ok) {
      const text = await res.text();
      output.textContent = "ERROR: " + text;
      return;
    }

    const data = await res.json();

    // Extract AI response safely
    const content = data.choices?.[0]?.message?.content;

    output.textContent = content || "No response from AI";

  } catch (err) {
    output.textContent = "FAILED: " + err.message;
  }
}
