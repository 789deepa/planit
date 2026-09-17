const { GoogleGenerativeAI } = require("@google/generative-ai");

// Fetch API Key from env
const getApiKey = () => process.env.GEMINI_API_KEY;

// Active stable Gemini models to handle temporary Google 503 high-demand spikes
const CANDIDATE_MODELS = ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.5-flash-lite"];

async function generateContentWithFallback(genAI, config) {
  let lastError = null;
  for (const modelName of CANDIDATE_MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      return await model.generateContent(config);
    } catch (err) {
      lastError = err;
      const isTemporary = err.message && (err.message.includes("503") || err.message.includes("high demand"));
      if (isTemporary) {
        console.warn(`[AI Service] ${modelName} encountered 503 spike. Trying alternative model...`);
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

async function generateGiftIdeas(person, occasion, interests) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("Gemini API key is not configured. Please set GEMINI_API_KEY in the backend .env file.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);



  const prompt = `You are PlanIt's expert gift planning assistant.
Your job is to help people turn their feelings into thoughtful, realistic actions.
Generate personalized gift ideas based on the recipient, occasion and interests.
The user is located in India.
Recommendations should be realistic and relevant to Indian users.
Prefer a mixture of:
- thoughtful handmade ideas
- personalized gifts
- practical gifts
- experience-based gifts
- purchasable gifts

Avoid generic recommendations.
Each recommendation should feel specifically chosen for the recipient.

Generate exactly 5 gift ideas.
Return ONLY valid JSON matching the schema below.
No markdown formatting.
No explanation outside the JSON.

JSON Schema:
{
  "gifts": [
    {
      "name": "string",
      "description": "string",
      "category": "string",
      "budget": "string",
      "preparationTime": "string",
      "whyItWorks": "string",
      "materials": [
        "string"
      ],
      "steps": [
        "string"
      ],
      "buySearchTerm": "string",
      "surpriseTip": "string"
    }
  ]
}

Input details:
Recipient/Person: ${person}
Occasion: ${occasion}
Interests: ${interests}
`;

  const result = await generateContentWithFallback(genAI, {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  return result.response.text();
}

async function generateDateIdeas(occasion, budget, location, vibe) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("Gemini API key is not configured. Please set GEMINI_API_KEY in the backend .env file.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);


  const prompt = `You are PlanIt's expert date planning assistant.
Your job is to help people turn their feelings into thoughtful, realistic actions.
Generate personalized date plans based on the occasion, budget, location, and vibe.
The user is located in India.
Recommendations should be realistic and relevant to Indian users.
Prefer a mixture of:
- indoor cozy dates
- outdoor adventurous dates
- romantic dinner plans
- creative classes or workshops
- pocket-friendly local explorations

Avoid generic recommendations.
Each recommendation should feel specifically chosen for the recipient.

Generate exactly 5 date ideas.
Return ONLY valid JSON matching the schema below.
No markdown formatting.
No explanation outside the JSON.

JSON Schema:
{
  "gifts": [
    {
      "name": "string",
      "description": "string",
      "category": "string",
      "budget": "string",
      "preparationTime": "string",
      "whyItWorks": "string",
      "materials": [
        "string"
      ],
      "steps": [
        "string"
      ],
      "buySearchTerm": "string",
      "surpriseTip": "string"
    }
  ]
}

Input details:
Occasion: ${occasion}
Budget: ${budget}
Location/Setting: ${location}
Vibe: ${vibe}
`;

  const result = await generateContentWithFallback(genAI, {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  return result.response.text();
}



module.exports = {
  generateGiftIdeas,
  generateDateIdeas,
};

