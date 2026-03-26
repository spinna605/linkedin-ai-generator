export default async function handler(req, res) {

  const { niche } = req.body;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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

  const data = await response.json();

  res.status(200).json(data);
}
