async function generate() {

  const niche = document.getElementById("niche").value;
  const output = document.getElementById("output");

  output.innerText = "Generating...";

  try {
   const res = await fetch("/api/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ niche })
});
        model: "meta-llama/llama-3-8b-instruct",
        messages: [{
          role: "user",
          content: `Create 7 LinkedIn posts for ${niche}`
        }]
      })
    });

    const data = await res.json();

    if (!res.ok) {
      output.innerText = "ERROR: " + JSON.stringify(data);
      return;
    }

    output.innerText = data.choices[0].message.content;

  } catch (err) {
    output.innerText = "FAILED: " + err.message;
  }
}
