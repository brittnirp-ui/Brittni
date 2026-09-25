/*
  HIGHEST BIDDER — the lot list.

  Add an item by copying any line below and changing the values:
    name   — what it is (text, in quotes)
    detail — one short line of context (text, in quotes)
    price  — final sale price in US dollars, digits only, no $ or commas
    year   — year it sold
    cat    — category label shown on the card (Music, Sports, Film, Gaming, Comics, Trading Cards, Tech…)

  Every line ends with a comma. Curly quotes inside text are written as “ and ”.
  You never have to assign levels — the game builds them from how close prices are.
  A broken line is skipped instead of breaking the game.
*/
window.HB_ITEMS = [
  // ── Music ──
  { name: "Slash's Guns N' Roses Tour Gibson", detail: "Photo-matched, tour-used Les Paul '59 Custom Shop guitar, autographed", price: 307692, year: 2026, cat: "Music" },
  { name: "Freddie Mercury's Gold Microphone", detail: "Shure 565SD, with direct performance provenance", price: 199584, year: 2026, cat: "Music" },
  { name: "Prince's “Blue Angel” Guitar", detail: "Custom-built Cloud guitar, long thought lost before resurfacing at auction", price: 563000, year: 2020, cat: "Music" },
  { name: "Eric Clapton's “Blackie” Stratocaster", detail: "Clapton's main stage guitar for over a decade, sold for charity", price: 959500, year: 2000, cat: "Music" },
  { name: "“Once Upon a Time in Shaolin”", detail: "The only copy ever pressed of the Wu-Tang Clan's secret album", price: 4000000, year: 2021, cat: "Music" },
  { name: "John Lennon's Songwriting Piano", detail: "The Broadwood upright he used to compose much of Sgt. Pepper's", price: 3247000, year: 2026, cat: "Music" },
  { name: "Kurt Cobain's “Unplugged” Guitar", detail: "The Martin D-18E played at Nirvana's MTV Unplugged in New York", price: 6010000, year: 2020, cat: "Music" },
  { name: "Kurt Cobain's “Unplugged” Cardigan", detail: "The olive-green, cigarette-burned sweater from the same MTV taping", price: 334000, year: 2019, cat: "Music" },
  { name: "David Gilmour's Black Strat", detail: "The Stratocaster behind Dark Side of the Moon and The Wall", price: 3975000, year: 2019, cat: "Music" },
  { name: "Bob Dylan's Newport Stratocaster", detail: "The guitar he “went electric” with at the 1965 Newport Folk Festival", price: 965000, year: 2013, cat: "Music" },
  { name: "Jerry Garcia's “Wolf” Guitar", detail: "Custom Doug Irwin guitar played for years with the Grateful Dead", price: 1900000, year: 2017, cat: "Music" },
  { name: "John Lennon's Lost Gibson J-160E", detail: "Early Beatles acoustic, missing for over 50 years before turning up in an attic", price: 2857000, year: 2024, cat: "Music" },
  { name: "“Like a Rolling Stone” Lyrics", detail: "Bob Dylan's handwritten draft on four sheets of hotel stationery", price: 2045000, year: 2014, cat: "Music" },
  { name: "“A Day in the Life” Lyrics", detail: "John Lennon's handwritten lyric sheet for the Sgt. Pepper's closer", price: 1200000, year: 2010, cat: "Music" },
  { name: "Michael Jackson's “Thriller” Jacket", detail: "The red-and-black leather jacket from the music video", price: 1800000, year: 2011, cat: "Music" },

  // ── Sports ──
  { name: "1952 Topps Mickey Mantle Card", detail: "Mint-condition rookie-era card, found decades ago in a basement box", price: 12600000, year: 2022, cat: "Sports" },
  { name: "T206 Honus Wagner Card", detail: "The “Mona Lisa” of baseball cards, one of the rarest ever printed", price: 7250000, year: 2022, cat: "Sports" },
  { name: "Michael Jordan's 1998 Finals Jersey", detail: "Game-worn in Game 1 of the Bulls' final “Last Dance” title run", price: 10091000, year: 2022, cat: "Sports" },
  { name: "Jordan / Kobe Bryant Dual Logoman", detail: "One-of-one card with both stars' jersey patches and autographs", price: 12932000, year: 2025, cat: "Sports" },
  { name: "Babe Ruth's “Called Shot” Jersey", detail: "Worn for his legendary called-shot home run in the 1932 World Series", price: 24120000, year: 2024, cat: "Sports" },
  { name: "Babe Ruth's 1928–30 Yankees Jersey", detail: "Game-worn road jersey from the height of his career", price: 5640000, year: 2019, cat: "Sports" },
  { name: "Mark McGwire's 70th Home Run Ball", detail: "The ball that capped his record-setting 1998 season", price: 3005000, year: 1999, cat: "Sports" },
  { name: "Barry Bonds' 756th Home Run Ball", detail: "The hit that broke Hank Aaron's all-time record", price: 752467, year: 2007, cat: "Sports" },
  { name: "Shohei Ohtani's 50/50 Ball", detail: "His 50th homer of the season, completing the first-ever 50 HR / 50 steal year", price: 4392000, year: 2024, cat: "Sports" },
  { name: "Aaron Judge's 62nd Home Run Ball", detail: "The homer that set the American League single-season record", price: 1500000, year: 2022, cat: "Sports" },
  { name: "Maradona's “Hand of God” Shirt", detail: "Worn in the 1986 World Cup quarterfinal against England", price: 9280000, year: 2022, cat: "Sports" },
  { name: "Lionel Messi's 2022 World Cup Shirts", detail: "A set of six match-worn shirts from Argentina's title run", price: 7800000, year: 2023, cat: "Sports" },
  { name: "Kobe Bryant's 2008 MVP Jersey", detail: "Game-worn Lakers jersey from his MVP season", price: 5853000, year: 2024, cat: "Sports" },
  { name: "Tom Brady Rookie Card", detail: "2000 Playoff Contenders Championship Ticket, autographed", price: 3107000, year: 2022, cat: "Sports" },
  { name: "LeBron James Rookie Card", detail: "2003 Upper Deck Exquisite Rookie Patch, autographed", price: 5200000, year: 2021, cat: "Sports" },
  { name: "Wayne Gretzky Rookie Card", detail: "1979 O-Pee-Chee, graded a perfect PSA 10", price: 3750000, year: 2021, cat: "Sports" },
  { name: "Michael Jordan Rookie Card", detail: "1986 Fleer, graded a perfect PSA 10", price: 738000, year: 2021, cat: "Sports" },
  { name: "James Naismith's Rules of Basketball", detail: "The original typed 13 rules of the game, from 1891", price: 4338500, year: 2010, cat: "Sports" },

  // ── Film ──
  { name: "R2-D2 Droid", detail: "Screen-used across the original Star Wars trilogy and prequels", price: 2750000, year: 2017, cat: "Film" },
  { name: "Darth Vader's Lightsaber", detail: "Hero prop from The Empire Strikes Back and Return of the Jedi", price: 3600000, year: 2025, cat: "Film" },
  { name: "Marilyn Monroe's White Dress", detail: "The subway-grate dress from The Seven Year Itch", price: 4600000, year: 2011, cat: "Film" },
  { name: "Marilyn Monroe's “Happy Birthday” Dress", detail: "The crystal-covered gown she wore to sing to President Kennedy", price: 4810000, year: 2016, cat: "Film" },
  { name: "Dorothy's Ruby Slippers", detail: "Screen-worn in The Wizard of Oz — stolen from a museum in 2005, later recovered", price: 32500000, year: 2024, cat: "Film" },
  { name: "Dorothy's Blue Gingham Dress", detail: "Screen-worn pinafore from The Wizard of Oz", price: 1565000, year: 2015, cat: "Film" },
  { name: "James Bond's Aston Martin DB5", detail: "One of the original promotional cars from Thunderball, fully gadget-equipped", price: 6385000, year: 2019, cat: "Film" },
  { name: "The Original 1966 Batmobile", detail: "George Barris's car from the Adam West Batman series", price: 4620000, year: 2013, cat: "Film" },
  { name: "The Maltese Falcon Statuette", detail: "Lead prop bird from the 1941 Humphrey Bogart film", price: 4085000, year: 2013, cat: "Film" },
  { name: "Sam's Piano from Casablanca", detail: "The upright where “As Time Goes By” was played again", price: 3400000, year: 2014, cat: "Film" },
  { name: "Steve McQueen's “Bullitt” Mustang", detail: "The hero car from the famous San Francisco chase scene", price: 3740000, year: 2020, cat: "Film" },
  { name: "Back to the Future DeLorean", detail: "A screen-used time machine car from the trilogy", price: 541000, year: 2011, cat: "Film" },
  { name: "The Titanic Door", detail: "The floating panel from the ending — yes, the one that fit two", price: 718750, year: 2024, cat: "Film" },
  { name: "Indiana Jones' Fedora", detail: "Screen-worn in Indiana Jones and the Temple of Doom", price: 630000, year: 2024, cat: "Film" },

  // ── Gaming ──
  { name: "Legend of Zelda, Sealed Copy", detail: "Early-production NES cartridge, factory sealed", price: 870000, year: 2021, cat: "Gaming" },
  { name: "Super Mario 64, Sealed Copy", detail: "A++ graded 1996 N64 cartridge, still in shrink wrap", price: 1560000, year: 2021, cat: "Gaming" },
  { name: "Super Mario Bros., Sealed Copy", detail: "Top-graded 1985 NES cartridge, still sealed", price: 2000000, year: 2021, cat: "Gaming" },
  { name: "Super Mario Bros. 3, Sealed Copy", detail: "Rare early-print NES copy in near-perfect condition", price: 156000, year: 2020, cat: "Gaming" },
  { name: "Nintendo PlayStation Prototype", detail: "The abandoned Sony–Nintendo console, one of the only ones known", price: 360000, year: 2020, cat: "Gaming" },

  // ── Comics & Cards ──
  { name: "Action Comics #1", detail: "Superman's first-ever appearance, in the highest known grade", price: 15000000, year: 2026, cat: "Comics" },
  { name: "Superman #1", detail: "The Man of Steel's first solo title, from 1939", price: 5300000, year: 2022, cat: "Comics" },
  { name: "Amazing Fantasy #15", detail: "Spider-Man's first appearance, graded CGC 9.6", price: 3600000, year: 2021, cat: "Comics" },
  { name: "Detective Comics #27", detail: "Batman's first appearance, from 1939", price: 1740000, year: 2021, cat: "Comics" },
  { name: "Pikachu Illustrator, PSA 10", detail: "The only perfect-grade copy of the rarest Pokémon card in existence", price: 16492000, year: 2026, cat: "Trading Cards" },
  { name: "1st Edition Charizard, PSA 10", detail: "Holographic Base Set Charizard in perfect condition", price: 420000, year: 2022, cat: "Trading Cards" },

  // ── Tech ──
  { name: "Working Apple-1 Computer", detail: "One of about 200 hand-built by Jobs and Wozniak in 1976", price: 905000, year: 2014, cat: "Tech" },
];
