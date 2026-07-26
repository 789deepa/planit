const mockGiftData = [
  {
    id: 1,
    name: "Custom Spotify Acrylic Frame",
    description: "Turn your favorite shared song and polaroid picture into a premium keepsake plaque.",
    budget: "₹699",
    category: "Romantic",
    image: "https://images.unsplash.com/photo-1513829096970-cf9989577a5a?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "aspect-[3/4]",
    estimatedTime: "3 Days",
    tags: [],
    whyItWorks: "It physically binds a song that represents your connection with a visual memory, creating a daily reminder of your bond.",
    materials: [
      "A5 Acrylic Sheet",
      "High-gloss photo print of your polaroid",
      "White permanent paint marker or vinyl lettering",
      "Wooden stand base"
    ],
    presentationGuide: [
      "Place the frame in a linen drawstring bag.",
      "Add a handwritten letter detailing why you chose that specific song.",
      "Gently spray the box with a trace of your perfume."
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/s?k=custom+spotify+acrylic+frame",
      flipkart: "https://www.flipkart.com/search?q=custom+spotify+acrylic+frame"
    },
    extraTip: "Ensure the scannable Spotify code on the frame is high resolution, so they can scan it directly with their phone to play the playlist!"
  },
  {
    id: 2,
    name: "Handwritten Letter & Coffee Date",
    description: "A heartfelt letter paired with their favorite coffee for a simple yet meaningful date.",
    budget: "₹1,200",
    category: "Cozy",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
    estimatedTime: "2 Hours",
    tags: [
      { text: "Cozy", type: "secondary" },
      { text: "₹1,200", type: "primary" }
    ],
    whyItWorks: "Brings back the charm of slow mornings and handwritten promises. High emotional value with zero digital distractions.",
    materials: [
      "Heavy parchment letter paper",
      "Wax seal kit",
      "Single-origin coffee beans or café reservation"
    ],
    presentationGuide: [
      "Deliver the sealed letter over their morning cup of coffee.",
      "Read a section of it aloud if you feel comfortable."
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/s?k=wax+seal+kit",
      flipkart: "https://www.flipkart.com/search?q=wax+seal+kit"
    },
    extraTip: "Write about three specific moments from the past year that you are deeply grateful for."
  },
  {
    id: 3,
    name: "Memory Scrapbook",
    description: "Collect your favorite memories and create a scrapbook they'll cherish forever.",
    budget: "₹999",
    category: "Thoughtful",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "aspect-[4/5]",
    estimatedTime: "4–5 Hours",
    tags: [],
    whyItWorks: "A physical archive of your journey together. The effort put into crafting each page communicates deep love and care.",
    materials: [
      "Kraft paper scrapbook",
      "Polaroid photo prints",
      "Washi tapes & colored pens"
    ],
    presentationGuide: [
      "Present it on an evening anniversary dinner.",
      "Leave the last few pages empty to symbolize your future together."
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/s?k=kraft+scrapbook+diy+album",
      flipkart: "https://www.flipkart.com/search?q=diy+scrapbook"
    },
    extraTip: "Include tickets from movies, concerts, or flights you took together for a nostalgic touch."
  },
  {
    id: 4,
    name: "Luxury Self Care Box",
    description: "A curated box of skincare, candles and pampering essentials for them to relax.",
    budget: "₹1,500–₹2,000",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "aspect-[5/7]",
    estimatedTime: "1 Day",
    tags: [
      { text: "Premium", type: "secondary" },
      { text: "₹1,500 – ₹2,000", type: "primary" }
    ],
    whyItWorks: "Gives them the permission to pause, unwind, and pamper themselves. It shows you care about their peace and well-being.",
    materials: [
      "Scented soy candle (Lavender or Vanilla)",
      "Premium clay mask or body scrub",
      "Plush hand towel & bath bomb"
    ],
    presentationGuide: [
      "Arrange inside a sturdy box filled with paper crinkle.",
      "Tie with a satin ribbon."
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/s?k=luxury+bath+gift+set",
      flipkart: "https://www.flipkart.com/search?q=self+care+gift+box"
    },
    extraTip: "Add a note suggesting they use the box tonight while you handle dinner or chores."
  },
  {
    id: 5,
    name: "Instant Camera",
    description: "Capture spontaneous memories together with a classic instant camera.",
    budget: "₹2,000+",
    category: "Adventurous",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "aspect-[3/4]",
    estimatedTime: "1 Day",
    tags: [
      { text: "Adventurous", type: "secondary" },
      { text: "₹2,000+", type: "primary" }
    ],
    whyItWorks: "Creates tangible memories instantly. It encourages you both to be playful and live in the moment.",
    materials: [
      "Instant camera unit",
      "Twin pack of instant film sheets",
      "Carry strap"
    ],
    presentationGuide: [
      "Take the first photo together immediately after gifting and write the date on it."
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/s?k=fujifilm+instax+mini",
      flipkart: "https://www.flipkart.com/search?q=instax+mini"
    },
    extraTip: "Choose a pastel colored camera body that matches their personal aesthetic."
  },
  {
    id: 6,
    name: "Personalized Book",
    description: "Gift a book with their name or a special message inside.",
    budget: "₹800–₹1,500",
    category: "Bookworm",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
    estimatedTime: "2–3 Days",
    tags: [
      { text: "Bookworm", type: "secondary" },
      { text: "₹800 – ₹1,500", type: "primary" }
    ],
    whyItWorks: "Shows you know their intellectual taste. A custom inscription makes a published book uniquely theirs.",
    materials: [
      "Hardcover copy of their favorite classic or wanted novel",
      "Metallic calligraphy pen for writing the dedication"
    ],
    presentationGuide: [
      "Write a heartfelt message on the inside cover describing how they inspire you."
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/s?k=classic+hardcover+books",
      flipkart: "https://www.flipkart.com/search?q=hardcover+books"
    },
    extraTip: "Leave a custom bookmark placed on a page containing a quote that reminds you of them."
  },
  {
    id: 7,
    name: "Fresh Flower Bouquet",
    description: "A beautiful bouquet can brighten their day instantly.",
    budget: "₹1,000–₹1,800",
    category: "Romantic",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "aspect-[3/4]",
    estimatedTime: "Same Day",
    tags: [
      { text: "Romantic", type: "secondary" },
      { text: "₹1,000 – ₹1,800", type: "primary" }
    ],
    whyItWorks: "A classic gesture that never fails. The vibrant colors and fragrance immediately lift the energy of any space.",
    materials: [
      "Assorted fresh lilies and roses",
      "Kraft wrapping sheet & ribbon"
    ],
    presentationGuide: [
      "Deliver them personally in the morning, or have them surprise-delivered to their workplace."
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/s?k=fresh+flower+delivery",
      flipkart: "https://www.flipkart.com/search?q=fresh+flowers"
    },
    extraTip: "Choose flowers that have a long vase life, such as carnations or lilies, so they last longer."
  }
];

export default mockGiftData;
