// Czech Vocabulary Trainer Database
// Note: 'czech' can be a string or an array of strings for words with multiple acceptable forms
// (e.g., masculine/feminine variants). The first element is the primary form shown in prompts.
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

    // Numbers (basic 1-10)
    // Note: "jeden/jedna" and "dva/dvě" have masculine/feminine forms
    {
        id: "num_001",
        german: "eins",
        czech: ["jeden", "jedna"],
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#1E90FF",
        emojiGrid: ["1️⃣", "☝️", "1️⃣", "🔵", "①", "🔵", "1️⃣", "☝️", "1️⃣"]
    },
    {
        id: "num_002",
        german: "zwei",
        czech: ["dva", "dvě"],
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

    // Numbers (teens and tens)
    {
        id: "num_011",
        german: "elf",
        czech: "jedenáct",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#20B2AA",
        emojiGrid: ["1️⃣", "1️⃣", "🔢", "⬛", "🔵", "⬛", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_012",
        german: "zwölf",
        czech: "dvanáct",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#48D1CC",
        emojiGrid: ["1️⃣", "2️⃣", "🔢", "🕛", "🎄", "🕛", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_013",
        german: "fünfzehn",
        czech: "patnáct",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#5F9EA0",
        emojiGrid: ["1️⃣", "5️⃣", "🔢", "⬛", "🔵", "⬛", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_014",
        german: "zwanzig",
        czech: "dvacet",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#00868B",
        emojiGrid: ["2️⃣", "0️⃣", "🔢", "⬛", "🔵", "⬛", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_015",
        german: "fünfundzwanzig",
        czech: "dvacet pět",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#008B8B",
        emojiGrid: ["2️⃣", "5️⃣", "🔢", "⬛", "🔵", "⬛", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_016",
        german: "dreißig",
        czech: "třicet",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#2F4F4F",
        emojiGrid: ["3️⃣", "0️⃣", "🔢", "⬛", "🔵", "⬛", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_017",
        german: "fünfzig",
        czech: "padesát",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#008080",
        emojiGrid: ["5️⃣", "0️⃣", "🔢", "⬛", "🔵", "⬛", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_018",
        german: "hundert",
        czech: "sto",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#40E0D0",
        emojiGrid: ["1️⃣", "0️⃣", "0️⃣", "💯", "🔵", "💯", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_019",
        german: "zweihundert",
        czech: "dvě stě",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#00CED1",
        emojiGrid: ["2️⃣", "0️⃣", "0️⃣", "💯", "💯", "🔵", "🔢", "🔢", "🔢"]
    },
    {
        id: "num_020",
        german: "tausend",
        czech: "tisíc",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#7FFFD4",
        emojiGrid: ["1️⃣", "0️⃣", "0️⃣", "0️⃣", "🔵", "💫", "🔢", "🔢", "🔢"]
    },

    // Product prices in crowns (CZK)
    {
        id: "price_czk_001",
        german: "49 Kronen",
        czech: "čtyřicet devět korun",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#DAA520",
        emojiGrid: ["💰", "🇨🇿", "💰", "4️⃣", "9️⃣", "🪙", "💵", "💵", "💵"]
    },
    {
        id: "price_czk_002",
        german: "99 Kronen",
        czech: "devadesát devět korun",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#B8860B",
        emojiGrid: ["💰", "🇨🇿", "💰", "9️⃣", "9️⃣", "🪙", "💵", "💵", "💵"]
    },
    {
        id: "price_czk_003",
        german: "199 Kronen",
        czech: "sto devadesát devět korun",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#CD853F",
        emojiGrid: ["💰", "🇨🇿", "💰", "1️⃣", "9️⃣", "9️⃣", "💵", "💵", "💵"]
    },
    {
        id: "price_czk_004",
        german: "299 Kronen",
        czech: "dvě stě devadesát devět korun",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#D2691E",
        emojiGrid: ["💰", "🇨🇿", "💰", "2️⃣", "9️⃣", "9️⃣", "💵", "💵", "💵"]
    },
    {
        id: "price_czk_005",
        german: "499 Kronen",
        czech: "čtyři sta devadesát devět korun",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#8B4513",
        emojiGrid: ["💰", "🇨🇿", "💰", "4️⃣", "9️⃣", "9️⃣", "💵", "💵", "💵"]
    },

    // Product prices in euros (EUR)
    {
        id: "price_eur_001",
        german: "5 Euro",
        czech: "pět euro",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#003399",
        emojiGrid: ["💶", "🇪🇺", "💶", "5️⃣", "🔵", "💵", "💶", "💶", "💶"]
    },
    {
        id: "price_eur_002",
        german: "10 Euro",
        czech: "deset euro",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#0047AB",
        emojiGrid: ["💶", "🇪🇺", "💶", "1️⃣", "0️⃣", "💵", "💶", "💶", "💶"]
    },
    {
        id: "price_eur_003",
        german: "25 Euro",
        czech: "dvacet pět euro",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#0057B8",
        emojiGrid: ["💶", "🇪🇺", "💶", "2️⃣", "5️⃣", "💵", "💶", "💶", "💶"]
    },
    {
        id: "price_eur_004",
        german: "50 Euro",
        czech: "padesát euro",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#4169E1",
        emojiGrid: ["💶", "🇪🇺", "💶", "5️⃣", "0️⃣", "💵", "💶", "💶", "💶"]
    },
    {
        id: "price_eur_005",
        german: "100 Euro",
        czech: "sto euro",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#1E90FF",
        emojiGrid: ["💶", "🇪🇺", "💶", "1️⃣", "0️⃣", "0️⃣", "💶", "💶", "💶"]
    },

    // Years (dates)
    {
        id: "year_001",
        german: "2024",
        czech: "dva tisíce dvacet čtyři",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#9932CC",
        emojiGrid: ["📅", "🗓️", "📅", "2️⃣", "0️⃣", "2️⃣", "4️⃣", "📆", "🎉"]
    },
    {
        id: "year_002",
        german: "2000",
        czech: "dva tisíce",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#8B008B",
        emojiGrid: ["📅", "🗓️", "📅", "2️⃣", "0️⃣", "0️⃣", "0️⃣", "📆", "🎊"]
    },
    {
        id: "year_003",
        german: "1990",
        czech: "tisíc devět set devadesát",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#9400D3",
        emojiGrid: ["📅", "🗓️", "📅", "1️⃣", "9️⃣", "9️⃣", "0️⃣", "📆", "🎵"]
    },

    // Day and month dates
    {
        id: "date_001",
        german: "der erste Januar",
        czech: "prvního ledna",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FF6B6B",
        emojiGrid: ["📅", "1️⃣", "📅", "🎆", "🎊", "🎆", "❄️", "⛄", "❄️"]
    },
    {
        id: "date_002",
        german: "der fünfzehnte März",
        czech: "patnáctého března",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#98FB98",
        emojiGrid: ["📅", "1️⃣", "5️⃣", "🌸", "🌱", "🌸", "🌷", "🌼", "🌷"]
    },
    {
        id: "date_003",
        german: "der vierundzwanzigste Dezember",
        czech: "dvacátého čtvrtého prosince",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#228B22",
        emojiGrid: ["📅", "2️⃣", "4️⃣", "🎄", "🎁", "🎄", "⭐", "🌟", "⭐"]
    },
    {
        id: "date_004",
        german: "der einunddreißigste Dezember",
        czech: "třicátého prvního prosince",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FFD700",
        emojiGrid: ["📅", "3️⃣", "1️⃣", "🎆", "🍾", "🎆", "🎊", "🥂", "🎊"]
    },

    // Typical ages
    {
        id: "age_001",
        german: "18 Jahre alt",
        czech: "osmnáct let",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FF69B4",
        emojiGrid: ["🎂", "1️⃣", "8️⃣", "🎉", "🎓", "🎉", "🚗", "🗳️", "🍾"]
    },
    {
        id: "age_002",
        german: "25 Jahre alt",
        czech: "dvacet pět let",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FF1493",
        emojiGrid: ["🎂", "2️⃣", "5️⃣", "🎉", "👔", "🎉", "💼", "🏠", "💍"]
    },
    {
        id: "age_003",
        german: "30 Jahre alt",
        czech: "třicet let",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#C71585",
        emojiGrid: ["🎂", "3️⃣", "0️⃣", "🎉", "👨‍👩‍👧", "🎉", "🏡", "💪", "🎊"]
    },
    {
        id: "age_004",
        german: "50 Jahre alt",
        czech: "padesát let",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#DB7093",
        emojiGrid: ["🎂", "5️⃣", "0️⃣", "🎉", "🎊", "🎉", "👴", "👵", "🎂"]
    },
    {
        id: "age_005",
        german: "65 Jahre alt",
        czech: "šedesát pět let",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#DDA0DD",
        emojiGrid: ["🎂", "6️⃣", "5️⃣", "🎉", "🧓", "🎉", "🏖️", "🌴", "✈️"]
    },

    // Weight (typical human weights)
    {
        id: "weight_001",
        german: "60 Kilogramm",
        czech: "šedesát kilogramů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FFA07A",
        emojiGrid: ["⚖️", "6️⃣", "0️⃣", "🏃", "💪", "🏃", "🏋️", "⚖️", "🔢"]
    },
    {
        id: "weight_002",
        german: "75 Kilogramm",
        czech: "sedmdesát pět kilogramů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FA8072",
        emojiGrid: ["⚖️", "7️⃣", "5️⃣", "🏋️", "💪", "🏋️", "🏋️", "⚖️", "🔢"]
    },
    {
        id: "weight_003",
        german: "80 Kilogramm",
        czech: "osmdesát kilogramů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#E9967A",
        emojiGrid: ["⚖️", "8️⃣", "0️⃣", "🏋️", "💪", "🏋️", "🏋️", "⚖️", "🔢"]
    },

    // Height (typical human heights)
    {
        id: "height_001",
        german: "165 Zentimeter",
        czech: "sto šedesát pět centimetrů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#87CEFA",
        emojiGrid: ["📏", "1️⃣", "6️⃣", "5️⃣", "👩", "📐", "📏", "📐", "🔢"]
    },
    {
        id: "height_002",
        german: "175 Zentimeter",
        czech: "sto sedmdesát pět centimetrů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#00BFFF",
        emojiGrid: ["📏", "1️⃣", "7️⃣", "5️⃣", "👨", "📐", "📏", "📐", "🔢"]
    },
    {
        id: "height_003",
        german: "180 Zentimeter",
        czech: "sto osmdesát centimetrů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#1E90FF",
        emojiGrid: ["📏", "1️⃣", "8️⃣", "0️⃣", "🧍", "📐", "📏", "📐", "🔢"]
    },

    // Time of day
    {
        id: "time_clock_001",
        german: "8 Uhr",
        czech: "osm hodin",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FFD700",
        emojiGrid: ["🕗", "8️⃣", "🕗", "☀️", "🌅", "☀️", "☕", "🥐", "💼"]
    },
    {
        id: "time_clock_002",
        german: "12 Uhr",
        czech: "dvanáct hodin",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FFA500",
        emojiGrid: ["🕛", "1️⃣", "2️⃣", "☀️", "🌞", "☀️", "🍽️", "🥗", "🍴"]
    },
    {
        id: "time_clock_003",
        german: "18 Uhr",
        czech: "osmnáct hodin",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FF8C00",
        emojiGrid: ["🕕", "1️⃣", "8️⃣", "🌆", "🏠", "🌆", "🍽️", "👨‍👩‍👧", "📺"]
    },
    {
        id: "time_clock_004",
        german: "22 Uhr",
        czech: "dvacet dva hodin",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#4B0082",
        emojiGrid: ["🕙", "2️⃣", "2️⃣", "🌙", "🌃", "🌙", "📺", "🛋️", "😴"]
    },

    // Durations
    {
        id: "duration_001",
        german: "30 Minuten",
        czech: "třicet minut",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#32CD32",
        emojiGrid: ["⏱️", "3️⃣", "0️⃣", "⏰", "🏃", "⏰", "🚶", "⌛", "🔢"]
    },
    {
        id: "duration_002",
        german: "eine Stunde",
        czech: ["jedna hodina", "hodina"],
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#228B22",
        emojiGrid: ["⏱️", "1️⃣", "🕐", "⏰", "📚", "⏰", "🎬", "⌛", "🔢"]
    },
    {
        id: "duration_003",
        german: "zwei Stunden",
        czech: ["dvě hodiny", "2 hodiny"],
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#006400",
        emojiGrid: ["⏱️", "2️⃣", "🕑", "⏰", "🎬", "⏰", "✈️", "⌛", "🔢"]
    },
    {
        id: "duration_004",
        german: "ein Tag",
        czech: ["jeden den", "den"],
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#9ACD32",
        emojiGrid: ["📅", "1️⃣", "☀️", "🌅", "☀️", "🌆", "🌙", "⌛", "🔢"]
    },
    {
        id: "duration_005",
        german: "eine Woche",
        czech: ["jeden týden", "týden"],
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#6B8E23",
        emojiGrid: ["📅", "7️⃣", "🗓️", "📆", "📅", "📆", "🗓️", "⌛", "🔢"]
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
    },

    // Months
    {
        id: "month_001",
        german: "Januar",
        czech: "leden",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#E8F4EA",
        emojiGrid: ["📅", "1️⃣", "📅", "❄️", "⛄", "❄️", "🎆", "🥶", "🌨️"]
    },
    {
        id: "month_002",
        german: "Februar",
        czech: "únor",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#FFB6C1",
        emojiGrid: ["📅", "2️⃣", "📅", "❄️", "💕", "❄️", "🌨️", "❤️", "⛄"]
    },
    {
        id: "month_003",
        german: "März",
        czech: "březen",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#98FB98",
        emojiGrid: ["📅", "3️⃣", "📅", "🌱", "🌸", "🌱", "🌷", "☘️", "🌼"]
    },
    {
        id: "month_004",
        german: "April",
        czech: "duben",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#90EE90",
        emojiGrid: ["📅", "4️⃣", "📅", "🌧️", "🌈", "🌧️", "🌷", "🐣", "🌸"]
    },
    {
        id: "month_005",
        german: "Mai",
        czech: "květen",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#32CD32",
        emojiGrid: ["📅", "5️⃣", "📅", "🌸", "🌺", "🌸", "🌻", "🌹", "🌷"]
    },
    {
        id: "month_006",
        german: "Juni",
        czech: "červen",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#00FA9A",
        emojiGrid: ["📅", "6️⃣", "📅", "☀️", "🌞", "☀️", "🍓", "🌻", "🏖️"]
    },
    {
        id: "month_007",
        german: "Juli",
        czech: "červenec",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#FFD700",
        emojiGrid: ["📅", "7️⃣", "📅", "☀️", "🏖️", "☀️", "🌴", "🍦", "⛱️"]
    },
    {
        id: "month_008",
        german: "August",
        czech: "srpen",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#FFA500",
        emojiGrid: ["📅", "8️⃣", "📅", "☀️", "🌻", "☀️", "🌽", "🍉", "🏊"]
    },
    {
        id: "month_009",
        german: "September",
        czech: "září",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#FF8C00",
        emojiGrid: ["📅", "9️⃣", "📅", "🍂", "📚", "🍂", "🎒", "🍎", "🍁"]
    },
    {
        id: "month_010",
        german: "Oktober",
        czech: "říjen",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#D2691E",
        emojiGrid: ["📅", "🔟", "📅", "🍂", "🎃", "🍂", "🍁", "🌰", "👻"]
    },
    {
        id: "month_011",
        german: "November",
        czech: "listopad",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#8B4513",
        emojiGrid: ["📅", "1️⃣", "1️⃣", "🍂", "🌫️", "🍂", "🍁", "🦃", "🌧️"]
    },
    {
        id: "month_012",
        german: "Dezember",
        czech: "prosinec",
        category: "months",
        categoryColor: "#B8E0D2",
        uniqueColor: "#1E90FF",
        emojiGrid: ["📅", "1️⃣", "2️⃣", "❄️", "🎄", "❄️", "🎁", "⛄", "🎅"]
    },

    // ============================================================
    // EXTENDED VOCABULARY - Day-to-day words
    // ============================================================

    // More Greetings & Common Expressions
    {
        id: "greet_007",
        german: "Wie geht es dir?",
        czech: "Jak se máš?",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#FF7F50",
        emojiGrid: ["👋", "❓", "😊", "🤔", "💭", "🤔", "👋", "❓", "😊"]
    },
    {
        id: "greet_008",
        german: "Es geht mir gut",
        czech: "Mám se dobře",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#00FF7F",
        emojiGrid: ["😊", "👍", "😊", "✨", "💚", "✨", "😊", "👍", "😊"]
    },
    {
        id: "greet_009",
        german: "Freut mich",
        czech: "Těší mě",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#FFB6C1",
        emojiGrid: ["🤝", "😊", "🤝", "💫", "❤️", "💫", "🤝", "😊", "🤝"]
    },
    {
        id: "greet_010",
        german: "Willkommen",
        czech: "Vítejte",
        category: "greetings",
        categoryColor: "#FFD700",
        uniqueColor: "#9370DB",
        emojiGrid: ["🏠", "👋", "🏠", "🎉", "✨", "🎉", "🏠", "👋", "🏠"]
    },

    // More Basic Words
    {
        id: "basic_006",
        german: "Ich verstehe",
        czech: "Rozumím",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#4CAF50",
        emojiGrid: ["💡", "🧠", "💡", "✅", "👍", "✅", "💡", "🧠", "💡"]
    },
    {
        id: "basic_007",
        german: "Ich verstehe nicht",
        czech: "Nerozumím",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#E91E63",
        emojiGrid: ["❓", "🤷", "❓", "🧠", "❌", "🧠", "❓", "🤷", "❓"]
    },
    {
        id: "basic_008",
        german: "Wie bitte?",
        czech: "Prosím?",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#9C27B0",
        emojiGrid: ["👂", "❓", "👂", "🔊", "🤔", "🔊", "👂", "❓", "👂"]
    },
    {
        id: "basic_009",
        german: "Hilfe",
        czech: "Pomoc",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#F44336",
        emojiGrid: ["🆘", "🙋", "🆘", "❗", "🚨", "❗", "🆘", "🙋", "🆘"]
    },
    {
        id: "basic_010",
        german: "Ich weiß nicht",
        czech: "Nevím",
        category: "basics",
        categoryColor: "#98D8C8",
        uniqueColor: "#607D8B",
        emojiGrid: ["🤷", "❓", "🤷", "🧠", "💭", "🧠", "🤷", "❓", "🤷"]
    },

    // More Food & Drink
    {
        id: "food_011",
        german: "Suppe",
        czech: "polévka",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FF9800",
        emojiGrid: ["🍲", "🥄", "🍲", "♨️", "🫕", "♨️", "🍲", "🥄", "🍲"]
    },
    {
        id: "food_012",
        german: "Salat",
        czech: "salát",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#8BC34A",
        emojiGrid: ["🥗", "🥬", "🥗", "🥒", "🍅", "🥒", "🥗", "🥬", "🥗"]
    },
    {
        id: "food_013",
        german: "Ei",
        czech: "vejce",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FFF8DC",
        emojiGrid: ["🥚", "🐔", "🥚", "🍳", "☀️", "🍳", "🥚", "🐔", "🥚"]
    },
    {
        id: "food_014",
        german: "Kartoffel",
        czech: "brambor",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#D2B48C",
        emojiGrid: ["🥔", "🌱", "🥔", "🍟", "🥔", "🍟", "🥔", "🌱", "🥔"]
    },
    {
        id: "food_015",
        german: "Reis",
        czech: "rýže",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FFFACD",
        emojiGrid: ["🍚", "🌾", "🍚", "🍛", "🥢", "🍛", "🍚", "🌾", "🍚"]
    },
    {
        id: "food_016",
        german: "Wein",
        czech: "víno",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#722F37",
        emojiGrid: ["🍷", "🍇", "🍷", "🍾", "🥂", "🍾", "🍷", "🍇", "🍷"]
    },
    {
        id: "food_017",
        german: "Zucker",
        czech: "cukr",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FFFFFF",
        emojiGrid: ["🧊", "☕", "🧊", "🍬", "✨", "🍬", "🧊", "☕", "🧊"]
    },
    {
        id: "food_018",
        german: "Salz",
        czech: "sůl",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#E8E8E8",
        emojiGrid: ["🧂", "🍽️", "🧂", "🥄", "✨", "🥄", "🧂", "🍽️", "🧂"]
    },
    {
        id: "food_019",
        german: "Butter",
        czech: "máslo",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#FFEB3B",
        emojiGrid: ["🧈", "🍞", "🧈", "🐄", "💛", "🐄", "🧈", "🍞", "🧈"]
    },
    {
        id: "food_020",
        german: "Kuchen",
        czech: "koláč",
        category: "food",
        categoryColor: "#FF6B6B",
        uniqueColor: "#D2691E",
        emojiGrid: ["🍰", "🎂", "🍰", "🍫", "🍓", "🍫", "🍰", "🎂", "🍰"]
    },

    // More Travel
    {
        id: "travel_009",
        german: "Ticket",
        czech: "jízdenka",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#FFC107",
        emojiGrid: ["🎫", "🚌", "🎫", "🚂", "✈️", "🚂", "🎫", "🚌", "🎫"]
    },
    {
        id: "travel_010",
        german: "Straße",
        czech: "ulice",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#9E9E9E",
        emojiGrid: ["🛤️", "🚗", "🛤️", "🏢", "🚶", "🏢", "🛤️", "🚗", "🛤️"]
    },
    {
        id: "travel_011",
        german: "Brücke",
        czech: "most",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#795548",
        emojiGrid: ["🌉", "🌊", "🌉", "🚗", "🏞️", "🚗", "🌉", "🌊", "🌉"]
    },
    {
        id: "travel_012",
        german: "Stadtmitte",
        czech: "centrum",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#673AB7",
        emojiGrid: ["🏙️", "🏢", "🏙️", "🛍️", "⭐", "🛍️", "🏙️", "🏢", "🏙️"]
    },
    {
        id: "travel_013",
        german: "Haltestelle",
        czech: "zastávka",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#2196F3",
        emojiGrid: ["🚏", "🚌", "🚏", "⏰", "👥", "⏰", "🚏", "🚌", "🚏"]
    },
    {
        id: "travel_014",
        german: "Taxi",
        czech: "taxi",
        category: "travel",
        categoryColor: "#95E1D3",
        uniqueColor: "#FFEB3B",
        emojiGrid: ["🚕", "🚖", "🚕", "📱", "💵", "📱", "🚕", "🚖", "🚕"]
    },

    // More Time & Days
    {
        id: "time_006",
        german: "Mittwoch",
        czech: "středa",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#4CAF50",
        emojiGrid: ["📅", "3️⃣", "📅", "🌤️", "💼", "🌤️", "📅", "3️⃣", "📅"]
    },
    {
        id: "time_007",
        german: "Donnerstag",
        czech: "čtvrtek",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#2196F3",
        emojiGrid: ["📅", "4️⃣", "📅", "⚡", "💼", "⚡", "📅", "4️⃣", "📅"]
    },
    {
        id: "time_008",
        german: "Freitag",
        czech: "pátek",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#9C27B0",
        emojiGrid: ["📅", "5️⃣", "📅", "🎉", "🍻", "🎉", "📅", "5️⃣", "📅"]
    },
    {
        id: "time_009",
        german: "Samstag",
        czech: "sobota",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#E91E63",
        emojiGrid: ["📅", "6️⃣", "📅", "🛒", "🎮", "🛒", "📅", "6️⃣", "📅"]
    },
    {
        id: "time_010",
        german: "Sonntag",
        czech: "neděle",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#FF5722",
        emojiGrid: ["📅", "7️⃣", "📅", "⛪", "😴", "⛪", "📅", "7️⃣", "📅"]
    },
    {
        id: "time_011",
        german: "jetzt",
        czech: "teď",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#00BCD4",
        emojiGrid: ["⏰", "👆", "⏰", "🔔", "⚡", "🔔", "⏰", "👆", "⏰"]
    },
    {
        id: "time_012",
        german: "später",
        czech: "později",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#795548",
        emojiGrid: ["⏰", "➡️", "⏰", "🕐", "💭", "🕐", "⏰", "➡️", "⏰"]
    },
    {
        id: "time_013",
        german: "früh",
        czech: "brzy",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#FFEB3B",
        emojiGrid: ["🌅", "☀️", "🌅", "🐓", "⏰", "🐓", "🌅", "☀️", "🌅"]
    },
    {
        id: "time_014",
        german: "spät",
        czech: "pozdě",
        category: "time",
        categoryColor: "#9D84B7",
        uniqueColor: "#3F51B5",
        emojiGrid: ["🌙", "⏰", "🌙", "😴", "🦉", "😴", "🌙", "⏰", "🌙"]
    },

    // More Verbs
    {
        id: "verb_006",
        german: "essen",
        czech: "jíst",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#FF5722",
        emojiGrid: ["🍽️", "🍴", "🍽️", "😋", "🍕", "😋", "🍽️", "🍴", "🍽️"]
    },
    {
        id: "verb_007",
        german: "trinken",
        czech: "pít",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#03A9F4",
        emojiGrid: ["🥤", "💧", "🥤", "☕", "🍺", "☕", "🥤", "💧", "🥤"]
    },
    {
        id: "verb_008",
        german: "schlafen",
        czech: "spát",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#673AB7",
        emojiGrid: ["😴", "🛏️", "😴", "🌙", "💤", "🌙", "😴", "🛏️", "😴"]
    },
    {
        id: "verb_009",
        german: "arbeiten",
        czech: "pracovat",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#795548",
        emojiGrid: ["💼", "💻", "💼", "📊", "⚙️", "📊", "💼", "💻", "💼"]
    },
    {
        id: "verb_010",
        german: "sprechen",
        czech: "mluvit",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#9C27B0",
        emojiGrid: ["💬", "🗣️", "💬", "👥", "🎤", "👥", "💬", "🗣️", "💬"]
    },
    {
        id: "verb_011",
        german: "lesen",
        czech: "číst",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#4CAF50",
        emojiGrid: ["📖", "📚", "📖", "👓", "🧠", "👓", "📖", "📚", "📖"]
    },
    {
        id: "verb_012",
        german: "schreiben",
        czech: "psát",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#2196F3",
        emojiGrid: ["✍️", "📝", "✍️", "✏️", "📄", "✏️", "✍️", "📝", "✍️"]
    },
    {
        id: "verb_013",
        german: "kaufen",
        czech: "koupit",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#E91E63",
        emojiGrid: ["🛒", "💵", "🛒", "🛍️", "💳", "🛍️", "🛒", "💵", "🛒"]
    },
    {
        id: "verb_014",
        german: "wohnen",
        czech: "bydlet",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#FF9800",
        emojiGrid: ["🏠", "🏡", "🏠", "🔑", "🛋️", "🔑", "🏠", "🏡", "🏠"]
    },
    {
        id: "verb_015",
        german: "lernen",
        czech: "učit se",
        category: "verbs",
        categoryColor: "#38A3A5",
        uniqueColor: "#00BCD4",
        emojiGrid: ["📚", "🧠", "📚", "✏️", "💡", "✏️", "📚", "🧠", "📚"]
    },

    // ============================================================
    // DESCRIPTIVE PHRASES - "The [noun/person] is [adjective]"
    // ============================================================
    {
        id: "desc_001",
        german: "Das Haus ist groß",
        czech: "Dům je velký",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#E64A19",
        emojiGrid: ["🏠", "📏", "🏠", "⬆️", "🏰", "⬆️", "🏠", "📏", "🏠"]
    },
    {
        id: "desc_002",
        german: "Der Mann ist alt",
        czech: "Muž je starý",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#795548",
        emojiGrid: ["👨", "👴", "👨", "📅", "🧓", "📅", "👨", "👴", "👨"]
    },
    {
        id: "desc_003",
        german: "Die Frau ist jung",
        czech: "Žena je mladá",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#E91E63",
        emojiGrid: ["👩", "✨", "👩", "🌸", "💃", "🌸", "👩", "✨", "👩"]
    },
    {
        id: "desc_004",
        german: "Das Kind ist klein",
        czech: "Dítě je malé",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#FFC107",
        emojiGrid: ["👶", "📏", "👶", "⬇️", "🧒", "⬇️", "👶", "📏", "👶"]
    },
    {
        id: "desc_005",
        german: "Das Wetter ist schön",
        czech: "Počasí je krásné",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#03A9F4",
        emojiGrid: ["☀️", "🌈", "☀️", "⛅", "😊", "⛅", "☀️", "🌈", "☀️"]
    },
    {
        id: "desc_006",
        german: "Das Essen ist gut",
        czech: "Jídlo je dobré",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#4CAF50",
        emojiGrid: ["🍽️", "👍", "🍽️", "😋", "⭐", "😋", "🍽️", "👍", "🍽️"]
    },
    {
        id: "desc_007",
        german: "Der Hund ist freundlich",
        czech: "Pes je přátelský",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#8BC34A",
        emojiGrid: ["🐕", "❤️", "🐕", "🤗", "🐶", "🤗", "🐕", "❤️", "🐕"]
    },
    {
        id: "desc_008",
        german: "Das Auto ist schnell",
        czech: "Auto je rychlé",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#F44336",
        emojiGrid: ["🚗", "💨", "🚗", "🏎️", "⚡", "🏎️", "🚗", "💨", "🚗"]
    },
    {
        id: "desc_009",
        german: "Die Stadt ist schön",
        czech: "Město je krásné",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#9C27B0",
        emojiGrid: ["🏙️", "✨", "🏙️", "🌆", "😍", "🌆", "🏙️", "✨", "🏙️"]
    },
    {
        id: "desc_010",
        german: "Der Kaffee ist heiß",
        czech: "Káva je horká",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#FF5722",
        emojiGrid: ["☕", "🔥", "☕", "♨️", "🌡️", "♨️", "☕", "🔥", "☕"]
    },
    {
        id: "desc_011",
        german: "Das Bier ist kalt",
        czech: "Pivo je studené",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#2196F3",
        emojiGrid: ["🍺", "❄️", "🍺", "🧊", "💙", "🧊", "🍺", "❄️", "🍺"]
    },
    {
        id: "desc_012",
        german: "Der Film ist interessant",
        czech: "Film je zajímavý",
        category: "phrases",
        categoryColor: "#FF8A65",
        uniqueColor: "#673AB7",
        emojiGrid: ["🎬", "🤔", "🎬", "🎥", "⭐", "🎥", "🎬", "🤔", "🎬"]
    },

    // ============================================================
    // TENSE PHRASES - Past, Present, Future
    // ============================================================
    
    // Past Tense
    {
        id: "tense_past_001",
        german: "Ich war dort",
        czech: "Byl jsem tam",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#607D8B",
        emojiGrid: ["👤", "⬅️", "📍", "🕐", "✓", "🕐", "👤", "⬅️", "📍"]
    },
    {
        id: "tense_past_002",
        german: "Ich habe gegessen",
        czech: "Jedl jsem",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#795548",
        emojiGrid: ["👤", "⬅️", "🍽️", "🕐", "✓", "🕐", "👤", "⬅️", "🍽️"]
    },
    {
        id: "tense_past_003",
        german: "Er hat gearbeitet",
        czech: "Pracoval",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#455A64",
        emojiGrid: ["👨", "⬅️", "💼", "🕐", "✓", "🕐", "👨", "⬅️", "💼"]
    },
    {
        id: "tense_past_004",
        german: "Sie ist gekommen",
        czech: "Přišla",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#546E7A",
        emojiGrid: ["👩", "⬅️", "🚶", "🕐", "✓", "🕐", "👩", "⬅️", "🚶"]
    },
    {
        id: "tense_past_005",
        german: "Wir haben gesprochen",
        czech: "Mluvili jsme",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#78909C",
        emojiGrid: ["👥", "⬅️", "💬", "🕐", "✓", "🕐", "👥", "⬅️", "💬"]
    },
    {
        id: "tense_past_006",
        german: "Ich habe geschlafen",
        czech: "Spal jsem",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#37474F",
        emojiGrid: ["👤", "⬅️", "😴", "🕐", "✓", "🕐", "👤", "⬅️", "😴"]
    },
    
    // Future Tense
    {
        id: "tense_future_001",
        german: "Ich werde gehen",
        czech: "Půjdu",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#00BCD4",
        emojiGrid: ["👤", "➡️", "🚶", "🕐", "🔮", "🕐", "👤", "➡️", "🚶"]
    },
    {
        id: "tense_future_002",
        german: "Ich werde kommen",
        czech: "Přijdu",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#4DD0E1",
        emojiGrid: ["👤", "➡️", "🏠", "🕐", "🔮", "🕐", "👤", "➡️", "🏠"]
    },
    {
        id: "tense_future_003",
        german: "Er wird arbeiten",
        czech: "Bude pracovat",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#26C6DA",
        emojiGrid: ["👨", "➡️", "💼", "🕐", "🔮", "🕐", "👨", "➡️", "💼"]
    },
    {
        id: "tense_future_004",
        german: "Sie wird kochen",
        czech: "Bude vařit",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#00ACC1",
        emojiGrid: ["👩", "➡️", "🍳", "🕐", "🔮", "🕐", "👩", "➡️", "🍳"]
    },
    {
        id: "tense_future_005",
        german: "Wir werden fahren",
        czech: "Pojedeme",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#0097A7",
        emojiGrid: ["👥", "➡️", "🚗", "🕐", "🔮", "🕐", "👥", "➡️", "🚗"]
    },
    {
        id: "tense_future_006",
        german: "Morgen werde ich essen",
        czech: "Zítra budu jíst",
        category: "tenses",
        categoryColor: "#90A4AE",
        uniqueColor: "#00838F",
        emojiGrid: ["📅", "➡️", "🍽️", "🕐", "🔮", "🕐", "📅", "➡️", "🍽️"]
    },

    // ============================================================
    // PERSON PHRASES - Different grammatical persons
    // ============================================================
    
    // First Person Singular (I)
    {
        id: "person_1s_001",
        german: "Ich bin müde",
        czech: "Jsem unavený",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#9C27B0",
        emojiGrid: ["👤", "😴", "👤", "🥱", "💤", "🥱", "👤", "😴", "👤"]
    },
    {
        id: "person_1s_002",
        german: "Ich lerne Tschechisch",
        czech: "Učím se česky",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#7B1FA2",
        emojiGrid: ["👤", "📚", "🇨🇿", "✏️", "🧠", "✏️", "👤", "📚", "🇨🇿"]
    },
    {
        id: "person_1s_003",
        german: "Ich wohne in Prag",
        czech: "Bydlím v Praze",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#6A1B9A",
        emojiGrid: ["👤", "🏠", "🏰", "🌉", "🇨🇿", "🌉", "👤", "🏠", "🏰"]
    },
    
    // Second Person Singular (You informal)
    {
        id: "person_2s_001",
        german: "Du bist schön",
        czech: "Jsi krásný",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#E91E63",
        emojiGrid: ["👆", "✨", "💕", "😍", "🌹", "😍", "👆", "✨", "💕"]
    },
    {
        id: "person_2s_002",
        german: "Du sprichst gut",
        czech: "Mluvíš dobře",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#C2185B",
        emojiGrid: ["👆", "💬", "👍", "🗣️", "⭐", "🗣️", "👆", "💬", "👍"]
    },
    
    // Third Person Singular (He/She)
    {
        id: "person_3s_001",
        german: "Er arbeitet viel",
        czech: "Pracuje hodně",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#2196F3",
        emojiGrid: ["👨", "💼", "📊", "⏰", "💪", "⏰", "👨", "💼", "📊"]
    },
    {
        id: "person_3s_002",
        german: "Sie singt schön",
        czech: "Zpívá krásně",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#1976D2",
        emojiGrid: ["👩", "🎤", "🎵", "🎶", "✨", "🎶", "👩", "🎤", "🎵"]
    },
    {
        id: "person_3s_003",
        german: "Es regnet",
        czech: "Prší",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#1565C0",
        emojiGrid: ["🌧️", "💧", "🌧️", "☔", "💦", "☔", "🌧️", "💧", "🌧️"]
    },
    
    // First Person Plural (We)
    {
        id: "person_1p_001",
        german: "Wir gehen ins Kino",
        czech: "Jdeme do kina",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#4CAF50",
        emojiGrid: ["👥", "🚶", "🎬", "🎥", "🍿", "🎥", "👥", "🚶", "🎬"]
    },
    {
        id: "person_1p_002",
        german: "Wir essen zusammen",
        czech: "Jíme spolu",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#388E3C",
        emojiGrid: ["👥", "🍽️", "🤝", "🍕", "❤️", "🍕", "👥", "🍽️", "🤝"]
    },
    {
        id: "person_1p_003",
        german: "Wir sind Freunde",
        czech: "Jsme přátelé",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#2E7D32",
        emojiGrid: ["👥", "🤝", "❤️", "👬", "✨", "👬", "👥", "🤝", "❤️"]
    },
    
    // Third Person Plural (They)
    {
        id: "person_3p_001",
        german: "Sie kommen morgen",
        czech: "Přijdou zítra",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#FF9800",
        emojiGrid: ["👥", "➡️", "📅", "🚶", "🌅", "🚶", "👥", "➡️", "📅"]
    },
    {
        id: "person_3p_002",
        german: "Sie spielen Fußball",
        czech: "Hrají fotbal",
        category: "persons",
        categoryColor: "#CE93D8",
        uniqueColor: "#F57C00",
        emojiGrid: ["👥", "⚽", "🏃", "🥅", "🏆", "🥅", "👥", "⚽", "🏃"]
    },

    // ============================================================
    // COMMON SAYINGS & PROVERBS
    // ============================================================
    {
        id: "saying_001",
        german: "Alles Gute!",
        czech: "Všechno nejlepší!",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#FF5722",
        emojiGrid: ["🎉", "🎂", "🎉", "✨", "🎁", "✨", "🎉", "🎂", "🎉"]
    },
    {
        id: "saying_002",
        german: "Guten Appetit!",
        czech: "Dobrou chuť!",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#E64A19",
        emojiGrid: ["🍽️", "😋", "🍽️", "🍴", "🥗", "🍴", "🍽️", "😋", "🍽️"]
    },
    {
        id: "saying_003",
        german: "Prost!",
        czech: "Na zdraví!",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#D84315",
        emojiGrid: ["🍻", "🥂", "🍻", "🎉", "💫", "🎉", "🍻", "🥂", "🍻"]
    },
    {
        id: "saying_004",
        german: "Gesundheit!",
        czech: "Na zdraví!",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#BF360C",
        emojiGrid: ["🤧", "💫", "🤧", "✨", "💚", "✨", "🤧", "💫", "🤧"]
    },
    {
        id: "saying_005",
        german: "Viel Glück!",
        czech: "Hodně štěstí!",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#4CAF50",
        emojiGrid: ["🍀", "✨", "🍀", "🤞", "⭐", "🤞", "🍀", "✨", "🍀"]
    },
    {
        id: "saying_006",
        german: "Es tut mir leid",
        czech: "Je mi to líto",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#9E9E9E",
        emojiGrid: ["😔", "💔", "😔", "🙏", "😢", "🙏", "😔", "💔", "😔"]
    },
    {
        id: "saying_007",
        german: "Ich liebe dich",
        czech: "Miluji tě",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#E91E63",
        emojiGrid: ["❤️", "😍", "❤️", "💕", "💘", "💕", "❤️", "😍", "❤️"]
    },
    {
        id: "saying_008",
        german: "Das macht nichts",
        czech: "To nevadí",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#607D8B",
        emojiGrid: ["🤷", "👌", "🤷", "✅", "😌", "✅", "🤷", "👌", "🤷"]
    },
    {
        id: "saying_009",
        german: "Zeit ist Geld",
        czech: "Čas jsou peníze",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#FFC107",
        emojiGrid: ["⏰", "💰", "⏰", "💵", "⌛", "💵", "⏰", "💰", "⏰"]
    },
    {
        id: "saying_010",
        german: "Besser spät als nie",
        czech: "Lepší pozdě než nikdy",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#795548",
        emojiGrid: ["⏰", "✅", "⏰", "👍", "🐢", "👍", "⏰", "✅", "⏰"]
    },
    {
        id: "saying_011",
        german: "Übung macht den Meister",
        czech: "Cvičení dělá mistra",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#FF9800",
        emojiGrid: ["📚", "🏆", "📚", "💪", "⭐", "💪", "📚", "🏆", "📚"]
    },
    {
        id: "saying_012",
        german: "Aller Anfang ist schwer",
        czech: "Každý začátek je těžký",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#673AB7",
        emojiGrid: ["🏁", "💪", "🏁", "🧗", "⛰️", "🧗", "🏁", "💪", "🏁"]
    },
    {
        id: "saying_013",
        german: "Wer wagt, gewinnt",
        czech: "Kdo riskuje, vyhrává",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#F44336",
        emojiGrid: ["🎲", "🏆", "🎲", "💪", "⭐", "💪", "🎲", "🏆", "🎲"]
    },
    {
        id: "saying_014",
        german: "Morgenstund hat Gold im Mund",
        czech: "Ranní ptáče dál doskáče",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#FFEB3B",
        emojiGrid: ["🌅", "🐦", "🌅", "⭐", "💰", "⭐", "🌅", "🐦", "🌅"]
    },
    {
        id: "saying_015",
        german: "Stille Wasser sind tief",
        czech: "Tichá voda břehy mele",
        category: "sayings",
        categoryColor: "#FFAB91",
        uniqueColor: "#3F51B5",
        emojiGrid: ["💧", "🤫", "💧", "🌊", "🧠", "🌊", "💧", "🤫", "💧"]
    },

    // ============================================================
    // ADDITIONAL COMMON VOCABULARY
    // ============================================================
    
    // Family
    {
        id: "family_001",
        german: "Mutter",
        czech: "matka",
        category: "family",
        categoryColor: "#F48FB1",
        uniqueColor: "#E91E63",
        emojiGrid: ["👩", "❤️", "👩", "🤱", "💕", "🤱", "👩", "❤️", "👩"]
    },
    {
        id: "family_002",
        german: "Vater",
        czech: "otec",
        category: "family",
        categoryColor: "#F48FB1",
        uniqueColor: "#1976D2",
        emojiGrid: ["👨", "❤️", "👨", "👔", "💙", "👔", "👨", "❤️", "👨"]
    },
    {
        id: "family_003",
        german: "Kind",
        czech: "dítě",
        category: "family",
        categoryColor: "#F48FB1",
        uniqueColor: "#FFC107",
        emojiGrid: ["👶", "🎈", "👶", "🧸", "💛", "🧸", "👶", "🎈", "👶"]
    },
    {
        id: "family_004",
        german: "Bruder",
        czech: "bratr",
        category: "family",
        categoryColor: "#F48FB1",
        uniqueColor: "#2196F3",
        emojiGrid: ["👦", "🤝", "👦", "⚽", "💙", "⚽", "👦", "🤝", "👦"]
    },
    {
        id: "family_005",
        german: "Schwester",
        czech: "sestra",
        category: "family",
        categoryColor: "#F48FB1",
        uniqueColor: "#9C27B0",
        emojiGrid: ["👧", "🤝", "👧", "💕", "💜", "💕", "👧", "🤝", "👧"]
    },
    {
        id: "family_006",
        german: "Großmutter",
        czech: "babička",
        category: "family",
        categoryColor: "#F48FB1",
        uniqueColor: "#FF8A65",
        emojiGrid: ["👵", "❤️", "👵", "🍪", "🧶", "🍪", "👵", "❤️", "👵"]
    },
    {
        id: "family_007",
        german: "Großvater",
        czech: "dědeček",
        category: "family",
        categoryColor: "#F48FB1",
        uniqueColor: "#795548",
        emojiGrid: ["👴", "❤️", "👴", "📰", "🎣", "📰", "👴", "❤️", "👴"]
    },

    // Places
    {
        id: "place_001",
        german: "Schule",
        czech: "škola",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#FFC107",
        emojiGrid: ["🏫", "📚", "🏫", "✏️", "🎒", "✏️", "🏫", "📚", "🏫"]
    },
    {
        id: "place_002",
        german: "Krankenhaus",
        czech: "nemocnice",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#F44336",
        emojiGrid: ["🏥", "⚕️", "🏥", "💊", "🩺", "💊", "🏥", "⚕️", "🏥"]
    },
    {
        id: "place_003",
        german: "Supermarkt",
        czech: "supermarket",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#4CAF50",
        emojiGrid: ["🛒", "🏪", "🛒", "🥫", "🍎", "🥫", "🛒", "🏪", "🛒"]
    },
    {
        id: "place_004",
        german: "Restaurant",
        czech: "restaurace",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#FF5722",
        emojiGrid: ["🍽️", "🏪", "🍽️", "🍕", "🍷", "🍕", "🍽️", "🏪", "🍽️"]
    },
    {
        id: "place_005",
        german: "Bank",
        czech: "banka",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#3F51B5",
        emojiGrid: ["🏦", "💰", "🏦", "💳", "💵", "💳", "🏦", "💰", "🏦"]
    },
    {
        id: "place_006",
        german: "Apotheke",
        czech: "lékárna",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#4CAF50",
        emojiGrid: ["💊", "🏪", "💊", "💉", "🩹", "💉", "💊", "🏪", "💊"]
    },
    {
        id: "place_007",
        german: "Kirche",
        czech: "kostel",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#795548",
        emojiGrid: ["⛪", "✝️", "⛪", "🔔", "🙏", "🔔", "⛪", "✝️", "⛪"]
    },
    {
        id: "place_008",
        german: "Park",
        czech: "park",
        category: "places",
        categoryColor: "#81D4FA",
        uniqueColor: "#8BC34A",
        emojiGrid: ["🌳", "🌺", "🌳", "🏞️", "🦆", "🏞️", "🌳", "🌺", "🌳"]
    },

    // Adjectives
    {
        id: "adj_001",
        german: "groß",
        czech: "velký",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#4CAF50",
        emojiGrid: ["📏", "⬆️", "📏", "🏔️", "💪", "🏔️", "📏", "⬆️", "📏"]
    },
    {
        id: "adj_002",
        german: "klein",
        czech: "malý",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#8BC34A",
        emojiGrid: ["📏", "⬇️", "📏", "🐜", "🔍", "🐜", "📏", "⬇️", "📏"]
    },
    {
        id: "adj_003",
        german: "neu",
        czech: "nový",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#00BCD4",
        emojiGrid: ["✨", "🆕", "✨", "🎁", "⭐", "🎁", "✨", "🆕", "✨"]
    },
    {
        id: "adj_004",
        german: "alt",
        czech: "starý",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#795548",
        emojiGrid: ["📜", "🏛️", "📜", "⏳", "🕰️", "⏳", "📜", "🏛️", "📜"]
    },
    {
        id: "adj_005",
        german: "schön",
        czech: "krásný",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#E91E63",
        emojiGrid: ["✨", "😍", "✨", "🌹", "💕", "🌹", "✨", "😍", "✨"]
    },
    {
        id: "adj_006",
        german: "gut",
        czech: "dobrý",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#2196F3",
        emojiGrid: ["👍", "✅", "👍", "⭐", "😊", "⭐", "👍", "✅", "👍"]
    },
    {
        id: "adj_007",
        german: "schlecht",
        czech: "špatný",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#F44336",
        emojiGrid: ["👎", "❌", "👎", "😞", "💔", "😞", "👎", "❌", "👎"]
    },
    {
        id: "adj_008",
        german: "schnell",
        czech: "rychlý",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#FF9800",
        emojiGrid: ["💨", "🏃", "💨", "⚡", "🚀", "⚡", "💨", "🏃", "💨"]
    },
    {
        id: "adj_009",
        german: "langsam",
        czech: "pomalý",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#9E9E9E",
        emojiGrid: ["🐢", "🚶", "🐢", "⏳", "🦥", "⏳", "🐢", "🚶", "🐢"]
    },
    {
        id: "adj_010",
        german: "teuer",
        czech: "drahý",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#FFC107",
        emojiGrid: ["💰", "💎", "💰", "💵", "🏷️", "💵", "💰", "💎", "💰"]
    },
    {
        id: "adj_011",
        german: "billig",
        czech: "levný",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#4CAF50",
        emojiGrid: ["💵", "📉", "💵", "🏷️", "✅", "🏷️", "💵", "📉", "💵"]
    },
    {
        id: "adj_012",
        german: "kalt",
        czech: "studený",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#03A9F4",
        emojiGrid: ["❄️", "🥶", "❄️", "🧊", "⛄", "🧊", "❄️", "🥶", "❄️"]
    },
    {
        id: "adj_013",
        german: "warm",
        czech: "teplý",
        category: "adjectives",
        categoryColor: "#A5D6A7",
        uniqueColor: "#FF5722",
        emojiGrid: ["🌡️", "☀️", "🌡️", "🔥", "😊", "🔥", "🌡️", "☀️", "🌡️"]
    }
];
