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
