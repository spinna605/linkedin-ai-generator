async function generate() {

  const niche = document.getElementById("niche").value;

  document.getElementById("output").innerText = "Generating...";

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct",
      messages: [{
        role: "user",
        content: `Create 7 LinkedIn posts for ${niche}`
      }]
    })
  });

  const data = await res.json();

  document.getElementById("output").innerText =
    data.choices[0].message.content;
}
