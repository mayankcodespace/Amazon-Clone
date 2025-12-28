export  interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  features?: string[];
}

export const categories = [
  "All Categories",
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Books",
  "Beauty",
  "Toys & Games",
  "Sports",
  "Grocery"
];

export const products: Product[] = [
  {
    id: 1,
    name: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    description: "Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP",
    price: 19999,
    oldPrice: 25999,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Electronics",
    rating: 4.3,
    reviews: 45678,
    stock: 50,
    features: [
      "108MP Camera with EIS",
      "Qualcomm Snapdragon 695 5G",
      "5000 mAh Battery with 67W SUPERVOOC Charging",
      "6.72 Inches Display with 120Hz Adaptive Refresh Rate"
    ]
  },
  {
    id: 2,
    name: "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime",
    description: "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours of playtime per earbud.",
    price: 1099,
    oldPrice: 4490,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Electronics",
    rating: 4.1,
    reviews: 125789,
    stock: 100,
    features: [
      "Up to 42 Hours Total Playtime",
      "BEAST Mode for Low Latency",
      "IPX4 Water Resistance",
      "ENx Technology for Clear Calls"
    ]
  },
  {
    id: 3,
    name: "Prestige Electric Kettle PKOSS 1500 Watts, Steel (1.5L)",
    description: "1500 Watts for fast heating, Auto cut-off function; Wide mouth for easy cleaning; Concealed element; 360 degree swivel base",
    price: 799,
    oldPrice: 1245,
    image: "https://images.unsplash.com/photo-1594224457860-23f466baa4d9?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Home & Kitchen",
    rating: 4.4,
    reviews: 34567,
    stock: 75,
    features: [
      "1500 Watts for fast heating",
      "1.5L capacity",
      "Auto cut-off function for safety",
      "360° swivel base"
    ]
  },
  {
    id: 4,
    name: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
    description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.",
    price: 295,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Books",
    rating: 4.6,
    reviews: 28974,
    stock: 200,
    features: [
      "International Bestseller",
      "Morgan Housel's insights on financial behavior",
      "Timeless lessons on wealth management",
      "Perfect for beginners in personal finance"
    ]
  },
  {
    id: 5,
    name: "Allen Solly Men's Regular Fit Polo",
    description: "Regular fit, Cotton material, Machine wash, Made in India",
    price: 599,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Fashion",
    rating: 4.2,
    reviews: 12568,
    stock: 150,
    features: [
      "100% Cotton fabric",
      "Regular fit polo neck",
      "Ribbed collar and cuffs",
      "Machine wash cold"
    ]
  },
  {
    id: 6,
    name: "Bajaj GX-1 500W Mixer Grinder with 3 Jars",
    description: "Powerful 500W motor for efficient grinding, 3 versatile jars for different grinding needs, Multifunctional blade system, Strong ABS body",
    price: 1999,
    oldPrice: 3499,
    image: "https://images.unsplash.com/photo-1563803835717-5748707f5d43?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Home & Kitchen",
    rating: 4.3,
    reviews: 19873,
    stock: 90,
    features: [
      "Powerful 500W motor",
      "3 stainless steel jars",
      "Multi-function blade system",
      "2-year warranty"
    ]
  },
  {
    id: 7,
    name: "Lakme 9 to 5 Primer + Matte Lipstick",
    description: "Long-lasting matte lipstick with built-in primer for smooth application, Comfortable wear for up to 12 hours, Enriched with Vitamin E",
    price: 450,
    oldPrice: 550,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Beauty",
    rating: 4.4,
    reviews: 32567,
    stock: 200,
    features: [
      "Built-in primer for smooth application",
      "Intense color payoff",
      "Up to 12 hours stay",
      "Enriched with Vitamin E"
    ]
  },
  {
    id: 8,
    name: "ASIAN Men's Wonder-13 Sports Running Shoes",
    description: "Lightweight and comfortable sports shoes with breathable upper, Cushioned sole for excellent support, Perfect for running, walking, and casual wear",
    price: 649,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Fashion",
    rating: 4.0,
    reviews: 45678,
    stock: 150,
    features: [
      "Breathable mesh upper",
      "Cushioned EVA sole",
      "Padded collar for ankle support",
      "Lightweight construction"
    ]
  },
  {
    id: 9,
    name: "JBL Tune 760NC Wireless Over Ear Headphones with Active Noise Cancellation",
    description: "Active Noise Cancellation for immersive audio experience, Up to 50 hours of battery life, Comfortable over-ear design, Voice Assistant compatible",
    price: 4999,
    oldPrice: 7999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Electronics",
    rating: 4.5,
    reviews: 8743,
    stock: 70,
    features: [
      "Active Noise Cancellation",
      "Up to 50 hours battery life",
      "Multi-point connection",
      "Voice Assistant compatible"
    ]
  },
  {
    id: 10,
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    description: "A revolutionary system to get 1% better every day. Learn how tiny changes in behavior can lead to remarkable results over time.",
    price: 499,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Books",
    rating: 4.8,
    reviews: 32149,
    stock: 100,
    features: [
      "International bestseller by James Clear",
      "Practical strategies for habit formation",
      "Easy-to-implement advice",
      "Life-changing approach to self-improvement"
    ]
  },
  {
    id: 11,
    name: "Milton Thermosteel Flip Lid Flask, 500 milliliters, Silver",
    description: "Double-walled vacuum insulated flask that keeps beverages hot or cold for hours, Leak-proof flip lid for easy access, Durable stainless steel construction",
    price: 699,
    oldPrice: 1400,
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Home & Kitchen",
    rating: 4.6,
    reviews: 15628,
    stock: 120,
    features: [
      "500ml capacity",
      "Keeps hot for 24 hours, cold for 24 hours",
      "Leak-proof flip lid design",
      "Double-walled vacuum insulation"
    ]
  },
  {
    id: 12,
    name: "Dabur Honey - 100% Pure, 1kg",
    description: "100% pure honey with no added sugar, Rich in antioxidants and minerals, Immunity booster and natural energy source",
    price: 315,
    oldPrice: 430,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Grocery",
    rating: 4.5,
    reviews: 28932,
    stock: 200,
    features: [
      "100% pure honey",
      "No added sugar or preservatives",
      "Rich in antioxidants",
      "Natural immunity booster"
    ]
  },
  {
    id: 13,
    name: "Funskool Monopoly Classic Board Game",
    description: "Classic property trading game for 2-8 players, Build houses and hotels on your properties, Age 8+ years, Family entertainment",
    price: 599,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1611371805429-12b7187e2d0e?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Toys & Games",
    rating: 4.7,
    reviews: 7651,
    stock: 80,
    features: [
      "Classic property trading game",
      "For 2-8 players",
      "Includes game board, tokens, cards, and play money",
      "Average playtime: 60-180 minutes"
    ]
  },
  {
    id: 14,
    name: "Nivea Body Lotion for Very Dry Skin, 400ml",
    description: "Intensive moisturizing for very dry skin, Enriched with Almond Oil, Provides 48-hour moisture, Non-greasy formula",
    price: 310,
    oldPrice: 425,
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Beauty",
    rating: 4.3,
    reviews: 19573,
    stock: 150,
    features: [
      "Deep moisturization for very dry skin",
      "Enriched with Almond Oil",
      "48-hour moisture lock",
      "Non-greasy formula"
    ]
  },
  {
    id: 15,
    name: "TECHVILLA ABS Heavy Duty Wall Mount Shower Head Holder",
    description: "Heavy-duty ABS plastic construction, Adjustable angle for perfect water flow, Easy installation with strong adhesive, No drilling required",
    price: 249,
    oldPrice: 499,
    image: "https://images.unsplash.com/photo-1604184003097-a8ccc60ff9b2?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Home & Kitchen",
    rating: 4.0,
    reviews: 3254,
    stock: 200,
    features: [
      "Heavy-duty ABS plastic construction",
      "Adjustable angle for perfect water direction",
      "No drilling installation with strong adhesive",
      "Compatible with most shower heads"
    ]
  },
  {
    id: 16,
    name: "Himalaya Purifying Neem Face Wash, 150ml",
    description: "Purifying face wash with natural neem and turmeric, Removes impurities and prevents pimples, Suitable for all skin types, especially acne-prone skin",
    price: 156,
    oldPrice: 200,
    image: "https://images.unsplash.com/photo-1631730583585-4bd4b9004199?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Beauty",
    rating: 4.5,
    reviews: 42976,
    stock: 250,
    features: [
      "Enriched with neem and turmeric",
      "Removes impurities and prevents pimples",
      "Suitable for all skin types",
      "Dermatologically tested"
    ]
  },
  {
    id: 17,
    name: "Nivia Storm Football - Size 5",
    description: "High-quality football with durable PVC outer material, Size 5 - official match size, Water-resistant with excellent bounce and air retention",
    price: 539,
    oldPrice: 699,
    image: "https://images.unsplash.com/photo-1518713661966-c822ee8656b7?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Sports",
    rating: 4.3,
    reviews: 5621,
    stock: 100,
    features: [
      "Size 5 - official match size",
      "Durable PVC outer material",
      "Water-resistant technology",
      "High air retention and bounce"
    ]
  },
  {
    id: 18,
    name: "Tata Sampann Unpolished Toor Dal, 1kg",
    description: "Unpolished toor dal with natural goodness intact, High protein content, No added colors or chemicals, Sourced directly from farms",
    price: 145,
    oldPrice: 180,
    image: "https://images.unsplash.com/photo-1513188732907-5f732b831ca8?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Grocery",
    rating: 4.6,
    reviews: 12543,
    stock: 200,
    features: [
      "Unpolished for better nutrition",
      "High protein content",
      "No artificial colors or chemicals",
      "Farm-sourced quality"
    ]
  },
  {
    id: 19,
    name: "Mee Mee Gentle Baby Soap with Almond & Milk Extracts (75g)",
    description: "Gentle baby soap enriched with almond and milk extracts, Moisturizes delicate skin, Mild pH balanced formula, Free from harmful chemicals",
    price: 68,
    oldPrice: 85,
    image: "https://images.unsplash.com/photo-1600857544200-b2f468e9fed8?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Beauty",
    rating: 4.4,
    reviews: 7562,
    stock: 150,
    features: [
      "Enriched with almond and milk extracts",
      "pH balanced for baby's delicate skin",
      "Free from parabens and harmful chemicals",
      "Dermatologically tested"
    ]
  },
  {
    id: 20,
    name: "Bosch 12V Cordless Drill Driver Kit",
    description: "Powerful 12V cordless drill driver with 2 batteries, Variable speed control for precision work, LED light for better visibility, Comes with multiple drill bits",
    price: 5999,
    oldPrice: 7999,
    image: "https://images.unsplash.com/photo-1578113333761-c5b3dddec5a1?auto=format&fit=crop&q=80&w=500&h=500",
    category: "Home & Kitchen",
    rating: 4.7,
    reviews: 2345,
    stock: 50,
    features: [
      "12V powerful motor",
      "2 lithium-ion batteries included",
      "Variable speed control",
      "LED work light for dark areas"
    ]
  }
];
 