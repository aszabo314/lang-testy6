# 🇨🇿 Czech Vocabulary Trainer 🇩🇪

A fun, interactive web-based flashcard app for learning Czech vocabulary from German. Features emoji-enhanced cards, streak tracking, and intelligent word selection based on your mistakes.

## Features

- **Emoji Flashcards** – Each vocabulary word is presented with a colorful 3×3 emoji grid that provides visual context clues
- **Streak & Score System** – Build streaks for consecutive correct answers and earn increasing points with an exponential multiplier
- **Fuzzy Matching** – "Almost correct" answers (minor typos or missing diacritics) still count toward your streak
- **Smart Word Selection** – Words you struggle with appear more frequently to reinforce learning
- **Mistake Tracking** – A panel shows your most missed words for quick review
- **Keyboard Navigation** – Press Enter to submit answers and advance to the next word

## Getting Started

Simply open `index.html` in any modern web browser – no build step or server required!

```bash
# Clone the repository
git clone https://github.com/aszabo314/lang-testy6.git

# Open in your browser
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

## How to Play

1. A German word and emoji grid are displayed on a colorful card
2. Type the Czech translation in the input field
3. Press **Enter** or click **Submit Answer**
4. Get feedback:
   - ✅ **Perfect** – Exact match, full points, streak continues
   - ⚠️ **Almost** – Close answer (typo or missing diacritics), half points, streak continues
   - ❌ **Wrong** – Incorrect, no points, streak resets
5. Press **Enter** or click **Next Word →** to continue

## Vocabulary Categories

| Category | Examples |
|----------|----------|
| Greetings | Hallo → Ahoj, Wie geht es dir? → Jak se máš? |
| Basics | Danke → Děkuji, Ich verstehe → Rozumím |
| Numbers | eins → jeden/jedna, prices, dates, ages, measurements, time |
| Months | Januar → leden, Februar → únor, März → březen |
| Food & Drink | Bier → pivo, Suppe → polévka, Kuchen → koláč |
| Travel | Bahnhof → nádraží, Haltestelle → zastávka |
| Time & Days | heute → dnes, Montag → pondělí, jetzt → teď |
| Verbs | sein → být, essen → jíst, lernen → učit se |
| Phrases | Das Haus ist groß → Dům je velký |
| Tenses | Ich war dort → Byl jsem tam, Ich werde gehen → Půjdu |
| Persons | Ich bin müde → Jsem unavený, Wir sind Freunde → Jsme přátelé |
| Sayings | Alles Gute! → Všechno nejlepší!, Prost! → Na zdraví! |
| Family | Mutter → matka, Vater → otec, Kind → dítě |
| Places | Schule → škola, Restaurant → restaurace |
| Adjectives | groß → velký, schön → krásný, schnell → rychlý |

## Project Structure

```
lang-testy6/
├── index.html      # Main app with HTML structure and game logic
├── styles.css      # Styling and animations
├── vocabulary.js   # Vocabulary database
└── README.md       # This file
```

## Adding New Vocabulary

Edit `vocabulary.js` and add entries following this format:

```javascript
{
    id: "category_xxx",
    german: "German Word",
    czech: "Czech Translation",  // Can also be an array for multiple forms: ["form1", "form2"]
    category: "category_name",
    categoryColor: "#HEXCOLOR",
    uniqueColor: "#HEXCOLOR",
    emojiGrid: ["🔤", "🔤", "🔤", "🔤", "🔤", "🔤", "🔤", "🔤", "🔤"]
}
```

For words with masculine/feminine variants (like numbers), use an array:
```javascript
czech: ["jeden", "jedna"]  // Both forms are accepted as correct answers
```

## License

This project is open source and available for personal and educational use.