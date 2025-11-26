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
        emojiGrid: ["⚖️", "6️⃣", "0️⃣", "🏃", "💪", "🏃", "kg", "⚖️", "🔢"]
    },
    {
        id: "weight_002",
        german: "75 Kilogramm",
        czech: "sedmdesát pět kilogramů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#FA8072",
        emojiGrid: ["⚖️", "7️⃣", "5️⃣", "🏋️", "💪", "🏋️", "kg", "⚖️", "🔢"]
    },
    {
        id: "weight_003",
        german: "80 Kilogramm",
        czech: "osmdesát kilogramů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#E9967A",
        emojiGrid: ["⚖️", "8️⃣", "0️⃣", "🏋️", "💪", "🏋️", "kg", "⚖️", "🔢"]
    },

    // Height (typical human heights)
    {
        id: "height_001",
        german: "165 Zentimeter",
        czech: "sto šedesát pět centimetrů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#87CEFA",
        emojiGrid: ["📏", "1️⃣", "6️⃣", "5️⃣", "👩", "📐", "cm", "📏", "🔢"]
    },
    {
        id: "height_002",
        german: "175 Zentimeter",
        czech: "sto sedmdesát pět centimetrů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#00BFFF",
        emojiGrid: ["📏", "1️⃣", "7️⃣", "5️⃣", "👨", "📐", "cm", "📏", "🔢"]
    },
    {
        id: "height_003",
        german: "180 Zentimeter",
        czech: "sto osmdesát centimetrů",
        category: "numbers",
        categoryColor: "#4ECDC4",
        uniqueColor: "#1E90FF",
        emojiGrid: ["📏", "1️⃣", "8️⃣", "0️⃣", "🧍", "📐", "cm", "📏", "🔢"]
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
    }
];
