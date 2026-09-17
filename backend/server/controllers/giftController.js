const aiService = require("../services/aiService");
const imageService = require("../services/imageService");

async function generateGifts(req, res) {
  try {
    let { person, occasion, interests } = req.body;

    // Trim whitespace
    person = person ? person.trim() : "";
    occasion = occasion ? occasion.trim() : "";
    interests = interests ? interests.trim() : "";

    // Validation
    if (!person || !occasion || !interests) {
      return res.status(400).json({
        error: "Person, occasion and interests are required."
      });
    }

    // Call AI Service
    const rawAiResponse = await aiService.generateGiftIdeas(person, occasion, interests);

    // Clean up code fences if present in the raw string response
    let cleanJsonString = rawAiResponse.trim();
    if (cleanJsonString.startsWith("```json")) {
      cleanJsonString = cleanJsonString.replace(/^```json/, "").replace(/```$/, "").trim();
    } else if (cleanJsonString.startsWith("```")) {
      cleanJsonString = cleanJsonString.replace(/^```/, "").replace(/```$/, "").trim();
    }

    // Try parsing
    let parsedData;
    try {
      parsedData = JSON.parse(cleanJsonString);
    } catch (parseError) {
      console.error("AI response parsing failed. Raw response:", rawAiResponse, parseError);
      return res.status(502).json({
        error: "AI returned an invalid response. Please try again."
      });
    }

    // Ensure gifts property exists
    if (!parsedData || !Array.isArray(parsedData.gifts)) {
      console.error("Invalid AI response schema:", parsedData);
      return res.status(502).json({
        error: "AI returned an invalid structure. Please try again."
      });
    }

    // Map AI response schema to frontend expected schema
    const aspectRatios = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[5/7]", "aspect-square", "aspect-[3/2]"];

    const mappedGifts = parsedData.gifts.map((item, index) => {
      const aspectIndex = index % aspectRatios.length;
      const resolvedImageUrl = imageService.resolveImage(item, index);

      return {
        id: index + 1,
        name: item.name,
        description: item.description,
        category: item.category,
        budget: item.budget,
        estimatedTime: item.preparationTime || "1 Day",
        tags: [
          { text: item.category, type: "secondary" },
          { text: item.budget, type: "primary" }
        ],
        image: resolvedImageUrl,
        aspectRatio: aspectRatios[aspectIndex],
        whyItWorks: item.whyItWorks,
        materials: item.materials || [],
        presentationGuide: item.steps || [],
        buyLinks: {
          amazon: `https://www.amazon.in/s?k=${encodeURIComponent(item.buySearchTerm || item.name)}`,
          flipkart: `https://www.flipkart.com/search?q=${encodeURIComponent(item.buySearchTerm || item.name)}`
        },
        extraTip: item.surpriseTip || ""
      };
    });


    // Return structured, mapped JSON
    return res.json({ gifts: mappedGifts });
  } catch (error) {
    console.error("Error in generateGifts controller:", error);
    return res.status(500).json({
      error: error.message || "An error occurred while generating gift ideas."
    });
  }
}

async function generateDates(req, res) {
  try {
    let { occasion, budget, location, vibe } = req.body;

    // Trim whitespace
    occasion = occasion ? occasion.trim() : "";
    budget = budget ? budget.trim() : "";
    location = location ? location.trim() : "";
    vibe = vibe ? vibe.trim() : "";

    // Validation
    if (!occasion || !budget || !location || !vibe) {
      return res.status(400).json({
        error: "Occasion, budget, location and vibe are required."
      });
    }

    // Call AI Service
    const rawAiResponse = await aiService.generateDateIdeas(occasion, budget, location, vibe);

    // Clean up code fences if present in the raw string response
    let cleanJsonString = rawAiResponse.trim();
    if (cleanJsonString.startsWith("```json")) {
      cleanJsonString = cleanJsonString.replace(/^```json/, "").replace(/```$/, "").trim();
    } else if (cleanJsonString.startsWith("```")) {
      cleanJsonString = cleanJsonString.replace(/^```/, "").replace(/```$/, "").trim();
    }

    // Try parsing
    let parsedData;
    try {
      parsedData = JSON.parse(cleanJsonString);
    } catch (parseError) {
      console.error("AI response parsing failed. Raw response:", rawAiResponse, parseError);
      return res.status(502).json({
        error: "AI returned an invalid response. Please try again."
      });
    }

    // Ensure gifts property exists
    if (!parsedData || !Array.isArray(parsedData.gifts)) {
      console.error("Invalid AI response schema:", parsedData);
      return res.status(502).json({
        error: "AI returned an invalid structure. Please try again."
      });
    }

    // Map AI response schema to frontend expected schema
    const aspectRatios = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[5/7]", "aspect-square", "aspect-[3/2]"];

    const mappedDates = parsedData.gifts.map((item, index) => {
      const aspectIndex = index % aspectRatios.length;
      const resolvedImageUrl = imageService.resolveImage(item, index);

      return {
        id: index + 1,
        name: item.name,
        description: item.description,
        category: item.category,
        budget: item.budget,
        estimatedTime: item.preparationTime || "1 Day",
        tags: [
          { text: item.category, type: "secondary" },
          { text: item.budget, type: "primary" }
        ],
        image: resolvedImageUrl,
        aspectRatio: aspectRatios[aspectIndex],
        whyItWorks: item.whyItWorks,
        materials: item.materials || [],
        presentationGuide: item.steps || [],
        buyLinks: {
          amazon: `https://www.amazon.in/s?k=${encodeURIComponent(item.buySearchTerm || item.name)}`,
          flipkart: `https://www.flipkart.com/search?q=${encodeURIComponent(item.buySearchTerm || item.name)}`
        },
        extraTip: item.surpriseTip || ""
      };
    });


    // Return structured, mapped JSON
    return res.json({ gifts: mappedDates });
  } catch (error) {
    console.error("Error in generateDates controller:", error);
    return res.status(500).json({
      error: error.message || "An error occurred while generating date ideas."
    });
  }
}

module.exports = {
  generateGifts,
  generateDates,
};

