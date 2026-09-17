/**
 * Image Service for PlanIt
 * Resolves reliable, high-quality images for AI-generated gifts and dates.
 * Follows a 3-tier fallback strategy:
 * 1. Primary query match (based on name / buySearchTerm keywords)
 * 2. Normalized query match (based on category / broad theme)
 * 3. Local/Default curated fallback image
 * 
 * Never returns "noimg", empty string, null, or undefined.
 */

// Curated verified high-resolution images categorized by topic
const THEME_IMAGES = {
  // Photography & Analog
  camera: [
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=600&auto=format&fit=crop"
  ],
  // Music, Records & Spotify frames
  music: [
    "https://images.unsplash.com/photo-1513829096970-cf9989577a5a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop"
  ],
  // Coffee, Tea, Mugs & Cafes
  coffee: [
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop"
  ],
  // Books, Journals, Reading & Writing
  book: [
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=600&auto=format&fit=crop"
  ],
  // Scrapbook, Photo Album & Memories
  scrapbook: [
    "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop"
  ],
  // Flowers, Bouquets & Plants
  flowers: [
    "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop"
  ],
  // Watch, Accessories & Jewelry
  watch: [
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop"
  ],
  // Self Care, Skincare, Candles & Spa
  spa: [
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop"
  ],
  // Perfume & Fragrance
  perfume: [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop"
  ],
  // Food, Chocolates, Dinner & Cooking
  food: [
    "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop"
  ],
  // Outdoor, Adventure, Picnic & Stargazing
  outdoor: [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=600&auto=format&fit=crop"
  ],
  // Arts, Pottery & DIY Workshop
  art: [
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=600&auto=format&fit=crop"
  ],
  // Cinema, Theater & Entertainment
  cinema: [
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop"
  ]
};

// Curated aesthetic fallback images ensuring warm PlanIt aesthetic
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1513829096970-cf9989577a5a?q=80&w=600&auto=format&fit=crop", // Polaroid & keepsake
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop", // Warm coffee
  "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=600&auto=format&fit=crop", // Scrapbook
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600&auto=format&fit=crop", // Gift box
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop", // Vintage camera
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop", // Books
  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop"  // Bouquet
];

// Keyword to theme mapping for primary query
const KEYWORD_MAP = [
  { words: ["camera", "film", "photo", "polaroid", "instax", "snapshot"], theme: "camera" },
  { words: ["spotify", "music", "song", "vinyl", "playlist", "record", "audio"], theme: "music" },
  { words: ["coffee", "mug", "cup", "brew", "espresso", "latte", "roast", "cafe", "tea"], theme: "coffee" },
  { words: ["book", "novel", "read", "reading", "author", "literature", "poem"], theme: "book" },
  { words: ["scrapbook", "album", "journal", "diary", "letter", "handwritten", "stationery"], theme: "scrapbook" },
  { words: ["flower", "bouquet", "rose", "roses", "floral", "plant", "bloom"], theme: "flowers" },
  { words: ["watch", "timepiece", "jewelry", "necklace", "bracelet", "ring"], theme: "watch" },
  { words: ["spa", "skincare", "candle", "bath", "pamper", "relaxation", "soap", "self care"], theme: "spa" },
  { words: ["perfume", "fragrance", "cologne", "scent"], theme: "perfume" },
  { words: ["chocolate", "baking", "cake", "cookie", "dinner", "cooking", "cuisine", "gourmet", "restaurant"], theme: "food" },
  { words: ["picnic", "hike", "hiking", "camp", "outdoor", "walk", "nature", "star", "sunset", "beach"], theme: "outdoor" },
  { words: ["pottery", "paint", "painting", "art", "craft", "diy", "ceramic", "workshop"], theme: "art" },
  { words: ["cinema", "movie", "theater", "theatre", "show", "concert"], theme: "cinema" }
];

// Category to theme mapping for normalized query fallback
const CATEGORY_MAP = {
  romantic: "flowers",
  cozy: "coffee",
  creative: "art",
  thoughtful: "scrapbook",
  bookworm: "book",
  adventurous: "outdoor",
  adventure: "outdoor",
  experience: "outdoor",
  luxury: "watch",
  selfcare: "spa",
  diy: "scrapbook",
  food: "food"
};

/**
 * Normalizes input text into searchable tokens
 */
function normalizeText(text) {
  if (!text || typeof text !== "string") return "";
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Resolves a reliable image URL for a gift or date plan
 * @param {Object} item - Gift or date object from AI
 * @param {number} index - Position index for deterministic rotation
 * @returns {string} Valid, tested image URL
 */
function resolveImage(item, index = 0) {
  const fallback = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  if (!item) return fallback;

  // 1. PRIMARY LOOKUP: Match keywords from name & buySearchTerm
  const primarySearchString = normalizeText(`${item.buySearchTerm || ""} ${item.name || ""} ${item.description || ""}`);

  for (const { words, theme } of KEYWORD_MAP) {
    if (words.some((word) => primarySearchString.includes(word))) {
      const candidates = THEME_IMAGES[theme];
      if (candidates && candidates.length > 0) {
        const selected = candidates[index % candidates.length];
        if (isValidImageUrl(selected)) return selected;
      }
    }
  }

  // 2. NORMALIZED QUERY FALLBACK: Match category
  const normalizedCategory = normalizeText(item.category || "").replace(/\s+/g, "");
  const mappedTheme = CATEGORY_MAP[normalizedCategory];
  if (mappedTheme && THEME_IMAGES[mappedTheme]) {
    const candidates = THEME_IMAGES[mappedTheme];
    const selected = candidates[index % candidates.length];
    if (isValidImageUrl(selected)) return selected;
  }

  // 3. SAFE DEFAULT FALLBACK
  return fallback;
}

/**
 * Validates that an image URL is a real, non-empty HTTP URL
 */
function isValidImageUrl(url) {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim().toLowerCase();
  if (trimmed === "noimg" || trimmed === "undefined" || trimmed === "null" || trimmed === "") {
    return false;
  }
  return trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("/");
}

module.exports = {
  resolveImage,
  FALLBACK_IMAGES,
  isValidImageUrl
};
