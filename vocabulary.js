// Czech Vocabulary Trainer Database
const vocabularyDatabase = [
    // Greetings & Basics
    {
        id: "greet_001",
        german: "Hallo",
        czech: "Ahoj",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#FFA500",
        emojiGrid: ["👋", "😊", "👋", "🌞", "💛", "🌞", "👋", "😊", "👋"]
    },
    {
        id: "greet_002",
        german: "Guten Morgen",
        czech: "Dobré ráno",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#FF8C00",
        emojiGrid: ["🌅", "☕", "🏃", "😊", "🥐", "🚌", "📰", "👔", "💼"]
    },
    {
        id: "greet_003",
        german: "Guten Tag",
        czech: "Dobrý den",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#FFB347",
        emojiGrid: ["☀️", "🌤️", "☀️", "👋", "😊", "👋", "☀️", "🌤️", "☀️"]
    },
    {
        id: "greet_004",
        german: "Guten Abend",
        czech: "Dobrý večer",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#FF6347",
        emojiGrid: ["🌆", "🌙", "⭐", "🍽️", "🏠", "📺", "🛋️", "🌃", "💫"]
    },
    {
        id: "greet_005",
        german: "Gute Nacht",
        czech: "Dobrou noc",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#4B0082",
        emojiGrid: ["🌙", "🌙", "🌙", "⭐", "😴", "⭐", "🌙", "🌙", "🌙"]
    },
    {
        id: "greet_006",
        german: "Auf Wiedersehen",
        czech: "Na shledanou",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#DA70D6",
        emojiGrid: ["👋", "🚪", "👋", "😊", "💼", "😊", "👋", "🚶", "👋"]
    },
    {
        id: "basic_001",
        german: "Danke",
        czech: "Děkuji",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#FF69B4",
        emojiGrid: ["🙏", "💝", "🙏", "😊", "🎁", "😊", "🙏", "💝", "🙏"]
    },
    {
        id: "basic_002",
        german: "Bitte",
        czech: "Prosím",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#87CEEB",
        emojiGrid: ["🙏", "🤲", "🙏", "💫", "✨", "💫", "🙏", "🤲", "🙏"]
    },
    {
        id: "basic_003",
        german: "Ja",
        czech: "Ano",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#32CD32",
        emojiGrid: ["✅", "👍", "✅", "😊", "✓", "😊", "✅", "👍", "✅"]
    },
    {
        id: "basic_004",
        german: "Nein",
        czech: "Ne",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#DC143C",
        emojiGrid: ["❌", "👎", "❌", "🚫", "✗", "🚫", "❌", "👎", "❌"]
    },
    {
        id: "basic_005",
        german: "Entschuldigung",
        czech: "Promiňte",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#FFB6C1",
        emojiGrid: ["🙏", "😔", "🙏", "💔", "😢", "💔", "🙏", "😔", "🙏"]
    },

    // Numbers
    {
        id: "num_001",
        german: "eins",
        czech: "jeden",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#1E90FF",
        emojiGrid: ["1️⃣", "☝️", "1️⃣", "🔵", "①", "🔵", "1️⃣", "☝️", "1️⃣"]
    },
    {
        id: "num_002",
        german: "zwei",
        czech: "dva",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#00CED1",
        emojiGrid: ["2️⃣", "✌️", "2️⃣", "🔵", "②", "🔵", "2️⃣", "✌️", "2️⃣"]
    },
    {
        id: "num_003",
        german: "drei",
        czech: "tři",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#4169E1",
        emojiGrid: ["3️⃣", "🤟", "3️⃣", "🔵", "③", "🔵", "3️⃣", "🤟", "3️⃣"]
    },
    {
        id: "num_004",
        german: "vier",
        czech: "čtyři",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#0080FF",
        emojiGrid: ["4️⃣", "🖖", "4️⃣", "🔵", "④", "🔵", "4️⃣", "🖖", "4️⃣"]
    },
    {
        id: "num_005",
        german: "fünf",
        czech: "pět",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#5B9BD5",
        emojiGrid: ["5️⃣", "✋", "5️⃣", "⭐", "⭐", "⭐", "⭐", "⭐", "🔢"]
    },
    {
        id: "num_006",
        german: "sechs",
        czech: "šest",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#6495ED",
        emojiGrid: ["6️⃣", "🖐️", "☝️", "🔵", "⑥", "🔵", "6️⃣", "6️⃣", "6️⃣"]
    },
    {
        id: "num_007",
        german: "sieben",
        czech: "sedm",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#4682B4",
        emojiGrid: ["7️⃣", "🎰", "7️⃣", "🍀", "⑦", "🍀", "7️⃣", "🎰", "7️⃣"]
    },
    {
        id: "num_008",
        german: "acht",
        czech: "osm",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#1C86EE",
        emojiGrid: ["8️⃣", "♾️", "8️⃣", "🔵", "⑧", "🔵", "8️⃣", "♾️", "8️⃣"]
    },
    {
        id: "num_009",
        german: "neun",
        czech: "devět",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#00BFFF",
        emojiGrid: ["9️⃣", "9️⃣", "9️⃣", "🔵", "⑨", "🔵", "9️⃣", "9️⃣", "9️⃣"]
    },
    {
        id: "num_010",
        german: "zehn",
        czech: "deset",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#4B8BBE",
        emojiGrid: ["🔟", "🙌", "🔟", "⭐", "①", "⓪", "🔟", "🙌", "🔟"]
    },

    // Food & Drink
    {
        id: "food_001",
        german: "Bier",
        czech: "pivo",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FFB84D",
        emojiGrid: ["🍺", "🍻", "🍺", "🌾", "💛", "🌾", "🇨🇿", "🍺", "🇩🇪"]
    },
    {
        id: "food_002",
        german: "Wasser",
        czech: "voda",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#87CEEB",
        emojiGrid: ["💧", "🌊", "💧", "🚰", "🥤", "🚰", "💧", "🌊", "💧"]
    },
    {
        id: "food_003",
        german: "Kaffee",
        czech: "káva",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#8B4513",
        emojiGrid: ["☕", "🫘", "☕", "🌡️", "♨️", "🌡️", "☕", "🫘", "☕"]
    },
    {
        id: "food_004",
        german: "Tee",
        czech: "čaj",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#90EE90",
        emojiGrid: ["🍵", "🫖", "🍵", "🌿", "🍃", "🌿", "🍵", "🫖", "🍵"]
    },
    {
        id: "food_005",
        german: "Brot",
        czech: "chléb",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#DEB887",
        emojiGrid: ["🍞", "🥖", "🍞", "🌾", "🔥", "🌾", "🍞", "🥖", "🍞"]
    },
    {
        id: "food_006",
        german: "Milch",
        czech: "mléko",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#F0F8FF",
        emojiGrid: ["🥛", "🐄", "🥛", "💧", "🤍", "💧", "🥛", "🐄", "🥛"]
    },
    {
        id: "food_007",
        german: "Käse",
        czech: "sýr",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FFD700",
        emojiGrid: ["🧀", "🐭", "🧀", "🥪", "💛", "🥪", "🧀", "🐭", "🧀"]
    },
    {
        id: "food_008",
        german: "Fleisch",
        czech: "maso",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#8B0000",
        emojiGrid: ["🥩", "🍖", "🥩", "🔥", "🍽️", "🔥", "🥩", "🍖", "🥩"]
    },
    {
        id: "food_009",
        german: "Fisch",
        czech: "ryba",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#4682B4",
        emojiGrid: ["🐟", "🌊", "🐟", "🎣", "🍽️", "🎣", "🐟", "🌊", "🐟"]
    },
    {
        id: "food_010",
        german: "Apfel",
        czech: "jablko",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FF4500",
        emojiGrid: ["🍎", "🌳", "🍎", "🍏", "❤️", "🍏", "🍎", "🌳", "🍎"]
    },

    // Travel & Directions
    {
        id: "travel_001",
        german: "Bahnhof",
        czech: "nádraží",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#57C4B5",
        emojiGrid: ["🚂", "⬛", "🚂", "🏢", "🚉", "🏢", "🚂", "⬛", "🚂"]
    },
    {
        id: "travel_002",
        german: "Flughafen",
        czech: "letiště",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#00BFFF",
        emojiGrid: ["✈️", "🛫", "✈️", "🏢", "🛬", "🏢", "✈️", "🛫", "✈️"]
    },
    {
        id: "travel_003",
        german: "Hotel",
        czech: "hotel",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#FFB6C1",
        emojiGrid: ["🏨", "🛏️", "🏨", "🔑", "🚪", "🔑", "🏨", "🛏️", "🏨"]
    },
    {
        id: "travel_004",
        german: "links",
        czech: "vlevo",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#FF1493",
        emojiGrid: ["⬅️", "👈", "⬅️", "↖️", "🔙", "↖️", "⬅️", "👈", "⬅️"]
    },
    {
        id: "travel_005",
        german: "rechts",
        czech: "vpravo",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#32CD32",
        emojiGrid: ["➡️", "👉", "➡️", "↗️", "🔜", "↗️", "➡️", "👉", "➡️"]
    },
    {
        id: "travel_006",
        german: "geradeaus",
        czech: "rovně",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#FFD700",
        emojiGrid: ["⬆️", "☝️", "⬆️", "🔝", "⏫", "🔝", "⬆️", "☝️", "⬆️"]
    },
    {
        id: "travel_007",
        german: "Bus",
        czech: "autobus",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#FFA500",
        emojiGrid: ["🚌", "🚍", "🚌", "🎫", "💺", "🎫", "🚌", "🚍", "🚌"]
    },
    {
        id: "travel_008",
        german: "Zug",
        czech: "vlak",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#4169E1",
        emojiGrid: ["🚆", "🚄", "🚆", "🛤️", "💨", "🛤️", "🚆", "🚄", "🚆"]
    },

    // Time & Days
    {
        id: "time_001",
        german: "heute",
        czech: "dnes",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#FFD700",
        emojiGrid: ["📅", "☀️", "📅", "🕐", "⏰", "🕐", "📅", "☀️", "📅"]
    },
    {
        id: "time_002",
        german: "morgen",
        czech: "zítra",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#87CEEB",
        emojiGrid: ["📅", "➡️", "📅", "🌅", "⏭️", "🌅", "📅", "➡️", "📅"]
    },
    {
        id: "time_003",
        german: "gestern",
        czech: "včera",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#708090",
        emojiGrid: ["📅", "⬅️", "📅", "🌆", "⏮️", "🌆", "📅", "⬅️", "📅"]
    },
    {
        id: "time_004",
        german: "Montag",
        czech: "pondělí",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#FF6B6B",
        emojiGrid: ["📅", "1️⃣", "📅", "🌙", "💼", "🌙", "📅", "1️⃣", "📅"]
    },
    {
        id: "time_005",
        german: "Dienstag",
        czech: "úterý",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#FFA500",
        emojiGrid: ["📅", "2️⃣", "📅", "🔥", "💼", "🔥", "📅", "2️⃣", "📅"]
    },

    // Common Verbs
    {
        id: "verb_001",
        german: "sein",
        czech: "být",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#FF69B4",
        emojiGrid: ["🧘", "✨", "🧘", "🌟", "💫", "🌟", "🧘", "✨", "🧘"]
    },
    {
        id: "verb_002",
        german: "haben",
        czech: "mít",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#FFD700",
        emojiGrid: ["🤲", "🎁", "🤲", "💰", "✨", "💰", "🤲", "🎁", "🤲"]
    },
    {
        id: "verb_003",
        german: "gehen",
        czech: "jít",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#32CD32",
        emojiGrid: ["🚶", "➡️", "🚶", "👣", "🏃", "👣", "🚶", "➡️", "🚶"]
    },
    {
        id: "verb_004",
        german: "kommen",
        czech: "přijít",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#87CEEB",
        emojiGrid: ["🚶", "⬅️", "🚶", "👋", "🏠", "👋", "🚶", "⬅️", "🚶"]
    },
    {
        id: "verb_005",
        german: "machen",
        czech: "dělat",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#FF6347",
        emojiGrid: ["🔨", "⚙️", "🔨", "🛠️", "✨", "🛠️", "🔨", "⚙️", "🔨"]
    }
];
