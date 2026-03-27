async function generate() {

  const niche = document.getElementById("niche").value;
  const output = document.getElementById("output");

  if (!niche) {
    alert("Please enter a niche first");
    return;
  }

  output.innerHTML = "⏳ Generating high-converting posts...";

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ niche })
    });

    if (!res.ok) {
      const text = await res.text();
      output.innerHTML = "❌ ERROR: " + text;
      return;
    }

    const data = await res.json();

    const content = data.choices?.[0]?.message?.content;

    output.innerHTML = content || "No response from AI";

  } catch (err) {
    output.innerHTML = "❌ FAILED: " + err.message;
  }
}
