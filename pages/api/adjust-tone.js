const apiEndpointGroq = "https://api.groq.com/openai/v1/chat/completions";
const headersGroq = {
  Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
  "Content-Type": "application/json",
};

async function adjustToneHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { texts, tones } = req.body;

    if (!texts || !texts.length || !tones || !tones.length) {
      return res.status(400).json({ error: "Invalid input" });
    }

    if (
      !Array.isArray(tones) ||
      !tones.every(
        (t) => typeof t.tone === "string" && typeof t.weight === "number"
      )
    ) {
      return res.status(400).json({ error: "Invalid tones format" });
    }

    const inputText = texts[0].text;
    const toneDescriptions = tones
      .map((t) => `${t.tone} (weight: ${t.weight})`)
      .join(" and ");

    if (inputText.length < 3) {
      return res
        .status(400)
        .json({ error: "Input text must be at least 4 letters long" });
    }

    const systemMessage = `You are a skilled writer tasked with rewriting text to match specific tones. 
    Adjust the input text to reflect the following tones: ${toneDescriptions}. 
    Maintain the original meaning and intent of the text while adapting its style and language to match the specified tones.
    JUST REPLY WITH THE CORRECTED TEXT AND DO NOT BE WORDY KEEP IT SHORT AND DONT NOT TELL "Here is the rewrittern sentence text" AND DONT GIVE THE RESPONSE IN A QUOTES
    `;

    const userMessage = `TEXT : "${inputText}"
    TONES : ${toneDescriptions}`;

    const requestDataGroq = {
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
    };

    const responseGroq = await fetch(apiEndpointGroq, {
      method: "POST",
      headers: headersGroq,
      body: JSON.stringify(requestDataGroq),
    });

    if (!responseGroq.ok) {
      throw new Error(`Groq API responded with status ${responseGroq.status}`);
    }

    const data = await responseGroq.json();
    const adjustedText = data.choices[0].message.content.trim();

    res.status(200).json({ adjustedText });
  } catch (error) {
    console.error("Error in adjust-tone API:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adjusting the tone" });
  }
}

export default adjustToneHandler;
