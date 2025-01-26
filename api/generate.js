function generateMessages(formData, previousLetter) {
  if (previousLetter) {
    return [
      {
        role: "system",
        content:
          "You are a helpful assistant that generates professional cover letters. The response should be no more than 500 characters and contain only the text of the cover letter. The letter will be sent via email. Do not use [placeholders] or similar. Use only the information I will provide as a basis. Except [Your Name] at the end.",
      },
      {
        role: "user",
        content: `Please refine the following cover letter: ${previousLetter}`,
      },
    ];
  } else {
    return [
      {
        role: "system",
        content:
          "You are a helpful assistant that generates professional cover letters. The response should be no more than 500 characters and contain only the text of the cover letter. The letter will be sent via email. Do not use [placeholders] or similar. Use only the information I will provide as a basis. Except [Your Name] at the end.",
      },
      {
        role: "user",
        content: `Create a cover letter for me based on the following information:
Job Title: ${formData.jobTitle}
Company: ${formData.company}
My skills: ${formData.skills}
Additional details about me: ${formData.additionalDetails}`,
      },
    ];
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { formData, previousLetter } = req.body;

  if (!formData || typeof formData !== "object") {
    return res.status(400).json({ error: "Invalid form data" });
  }

  try {
    const apiKey = process.env.OPEN_AI_APIKEY;
    const apiEndpoint = process.env.OPEN_AI_ENDPOINT;

    if (!apiKey || !apiEndpoint) {
      return res
        .status(500)
        .json({ error: "API key or endpoint not configured" });
    }

    const messages = generateMessages(formData, previousLetter);

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();

    return res
      .status(200)
      .json({ coverLetter: data.choices[0].message.content });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
