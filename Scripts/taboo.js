const JsonData = [
  {
    Mainword: "thrifty",
    illegal1: "cheap",
    illegal2: "spend",
    illegal3: "money",
    illegal4: "stingy",
    GoogleAIDesc:
      "Someone who makes careful use of resources and avoids waste.",
    Column1: "Okay",
  },
  {
    Mainword: "double",
    illegal1: "twice",
    illegal2: "number",
    illegal3: "triple",
    illegal4: "amount",
    GoogleAIDesc: "Two times the size or quantity of something.",
    Column1: "Okay",
  },
  {
    Mainword: "tragedy",
    illegal1: "terrible",
    illegal2: "sad",
    illegal3: "victim",
    illegal4: "disaster",
    GoogleAIDesc: "A deeply sorrowful event that brings suffering and loss.",
    Column1: "Okay",
  },
  {
    Mainword: "lawn",
    illegal1: "grass",
    illegal2: "mow",
    illegal3: "green",
    illegal4: "yard",
    GoogleAIDesc: "A level, grassy area surrounding a house or building.",
    Column1: "Illegal",
  },
  {
    Mainword: "arrest",
    illegal1: "jail",
    illegal2: "criminal",
    illegal3: "police",
    illegal4: "handcuffs",
    GoogleAIDesc: "To take someone into custody for a crime.",
    Column1: "Okay",
  },
  {
    Mainword: "educate",
    illegal1: "child",
    illegal2: "teach",
    illegal3: "learn",
    illegal4: "school",
    GoogleAIDesc: "To help someone develop knowledge and skills.",
    Column1: "Okay",
  },
  {
    Mainword: "myth",
    illegal1: "Greek",
    illegal2: "legend",
    illegal3: "history",
    illegal4: "culture",
    GoogleAIDesc:
      "A traditional story, often involving supernatural beings or events, that explains a natural phenomenon or cultural belief.",
    Column1: "Okay",
  },
  {
    Mainword: "measurement",
    illegal1: "unit",
    illegal2: "height",
    illegal3: "distance",
    illegal4: "length",
    GoogleAIDesc: "The process of finding the size or amount of something.",
    Column1: "Okay",
  },
  {
    Mainword: "prescription",
    illegal1: "doctor",
    illegal2: "paper",
    illegal3: "medicine",
    illegal4: "pharmacy",
    GoogleAIDesc:
      "Instructions from a medical professional for a specific treatment.",
    Column1: "Okay",
  },
  {
    Mainword: "grave",
    illegal1: "bury",
    illegal2: "cemetery",
    illegal3: "dig",
    illegal4: "funeral",
    GoogleAIDesc: "A place where a deceased person is buried.",
    Column1: "Okay",
  },
  {
    Mainword: "makeup",
    illegal1: "women",
    illegal2: "lipstick",
    illegal3: "pretty",
    illegal4: "put on",
    GoogleAIDesc: "Substances used to enhance or change one's appearance.",
    Column1: "Okay",
  },
  {
    Mainword: "hunt",
    illegal1: "deer",
    illegal2: "gun",
    illegal3: "woods",
    illegal4: "food",
    GoogleAIDesc: "To search for and capture wild animals.",
    Column1: "Okay",
  },
  {
    Mainword: "surgeon",
    illegal1: "doctor",
    illegal2: "surgery",
    illegal3: "operation",
    illegal4: "hospital",
    GoogleAIDesc: "A medical professional who performs operations.",
    Column1: "Illegal",
  },
  {
    Mainword: "suburb",
    illegal1: "city",
    illegal2: "outside",
    illegal3: "quiet",
    illegal4: "live",
    GoogleAIDesc: "A residential area located on the outskirts of a city.",
    Column1: "Illegal",
  },
  {
    Mainword: "minimum",
    illegal1: "maximum",
    illegal2: "lowest",
    illegal3: "wage",
    illegal4: "amount",
    GoogleAIDesc: "The least possible amount or quantity.",
    Column1: "Illegal",
  },
  {
    Mainword: "sacred",
    illegal1: "holy",
    illegal2: "religious",
    illegal3: "blessed",
    illegal4: "cow",
    GoogleAIDesc: "Something that is considered holy and worthy of respect.",
    Column1: "Illegal",
  },
  {
    Mainword: "warrior",
    illegal1: "soldier",
    illegal2: "war",
    illegal3: "attack",
    illegal4: "battle",
    GoogleAIDesc: "A brave and skilled fighter, often trained for combat.",
    Column1: "Okay",
  },
  {
    Mainword: "retired",
    illegal1: "work",
    illegal2: "relax",
    illegal3: "old",
    illegal4: "pension",
    GoogleAIDesc:
      "Having stopped working permanently, usually after reaching a certain age.",
    Column1: "Illegal",
  },
  {
    Mainword: "survey",
    illegal1: "ask",
    illegal2: "questions",
    illegal3: "opinion",
    illegal4: "fill out",
    GoogleAIDesc:
      "A systematic study or examination of a topic, often involving collecting data from a group of people.",
    Column1: "Okay",
  },
  {
    Mainword: "corruption",
    illegal1: "politician",
    illegal2: "bribe",
    illegal3: "government",
    illegal4: "scandal",
    GoogleAIDesc:
      "Dishonest or fraudulent conduct by those in power, especially in government.",
    Column1: "Illegal",
  },
  {
    Mainword: "hook",
    illegal1: "fishing",
    illegal2: "metal",
    illegal3: "sharp",
    illegal4: "bait",
    GoogleAIDesc:
      "A curved or pointed object used for catching or holding something.",
    Column1: "Okay",
  },
  {
    Mainword: "ankle",
    illegal1: "sprain",
    illegal2: "leg",
    illegal3: "foot",
    illegal4: "break",
    GoogleAIDesc: "The joint connecting the foot to the leg.",
    Column1: "Illegal",
  },
  {
    Mainword: "steep",
    illegal1: "climb",
    illegal2: "mountain",
    illegal3: "hill",
    illegal4: "angle",
    GoogleAIDesc: "Having a very sharp incline or slope.",
    Column1: "Okay",
  },
  {
    Mainword: "spread",
    illegal1: "disease",
    illegal2: "virus",
    illegal3: "infection",
    illegal4: "prevent",
    GoogleAIDesc: "To extend or distribute something over a wider area.",
    Column1: "Okay",
  },
  {
    Mainword: "cooperate",
    illegal1: "together",
    illegal2: "everyone",
    illegal3: "unite",
    illegal4: "work",
    GoogleAIDesc: "To work together towards a common goal.",
    Column1: "Illegal",
  },
  {
    Mainword: "sacrifice",
    illegal1: "human",
    illegal2: "kill",
    illegal3: "ritual",
    illegal4: "blood",
    GoogleAIDesc:
      "To give up something valuable for a greater cause or purpose.",
    Column1: "Okay",
  },
  {
    Mainword: "bubble",
    illegal1: "gum",
    illegal2: "soap",
    illegal3: "blow",
    illegal4: "pop",
    GoogleAIDesc: "A thin film of liquid filled with air, creating a sphere.",
    Column1: "Okay",
  },
  {
    Mainword: "jaw",
    illegal1: "mouth",
    illegal2: "teeth",
    illegal3: "bones",
    illegal4: "chew",
    GoogleAIDesc: "The bony structure in the lower part of the face.",
    Column1: "Okay",
  },
  {
    Mainword: "sail",
    illegal1: "ship",
    illegal2: "boat",
    illegal3: "ocean",
    illegal4: "wind",
    GoogleAIDesc: "A large piece of cloth used to propel a boat by wind.",
    Column1: "Illegal",
  },
  {
    Mainword: "tropical",
    illegal1: "hot",
    illegal2: "storm",
    illegal3: "island",
    illegal4: "exotic",
    GoogleAIDesc:
      "Relating to or characteristic of the tropics, typically warm and humid.",
    Column1: "Okay",
  },
  {
    Mainword: "mushroom",
    illegal1: "white",
    illegal2: "eat",
    illegal3: "fungus",
    illegal4: "sauce",
    GoogleAIDesc: "A fungus with a cap and stalk, often used as food.",
    Column1: "Illegal",
  },
  {
    Mainword: "workout",
    illegal1: "gym",
    illegal2: "weight",
    illegal3: "train",
    illegal4: "exercise",
    GoogleAIDesc: "A period of physical activity intended to improve fitness.",
    Column1: "Okay",
  },
  {
    Mainword: "chew",
    illegal1: "gum",
    illegal2: "food",
    illegal3: "eat",
    illegal4: "teeth",
    GoogleAIDesc: "To grind food with the teeth.",
    Column1: "Illegal",
  },
  {
    Mainword: "fragile",
    illegal1: "delicate",
    illegal2: "break",
    illegal3: "glass",
    illegal4: "careful",
    GoogleAIDesc: "Easily broken or damaged.",
    Column1: "Okay",
  },
  {
    Mainword: "mansion",
    illegal1: "house",
    illegal2: "home",
    illegal3: "live",
    illegal4: "expensive",
    GoogleAIDesc: "A large and luxurious house.",
    Column1: "Illegal",
  },
  {
    Mainword: "crowd",
    illegal1: "people",
    illegal2: "many",
    illegal3: "herd",
    illegal4: "street",
    GoogleAIDesc: "A large number of people gathered together.",
    Column1: "Illegal",
  },
  {
    Mainword: "spit",
    illegal1: "mouth",
    illegal2: "saliva",
    illegal3: "liquid",
    illegal4: "tobacco",
    GoogleAIDesc: "To eject saliva from the mouth.",
    Column1: "Illegal",
  },
  {
    Mainword: "hike",
    illegal1: "walk",
    illegal2: "woods",
    illegal3: "mountain",
    illegal4: "backpack",
    GoogleAIDesc: "To walk for a long distance, especially in the countryside.",
    Column1: "Illegal",
  },
  {
    Mainword: "dinosaur",
    illegal1: "giant",
    illegal2: "extinct",
    illegal3: "lizard",
    illegal4: "Barney",
    GoogleAIDesc: "A prehistoric reptile that lived millions of years ago.",
    Column1: "Okay",
  },
  {
    Mainword: "polite",
    illegal1: "nice",
    illegal2: "smile",
    illegal3: "manners",
    illegal4: "friendly",
    GoogleAIDesc: "Behaving in a respectful and courteous manner.",
    Column1: "Okay",
  },
  {
    Mainword: "fried",
    illegal1: "chicken",
    illegal2: "cook",
    illegal3: "food",
    illegal4: "oil",
    GoogleAIDesc: "Cooked in hot fat or oil.",
    Column1: "Illegal",
  },
  {
    Mainword: "jail",
    illegal1: "prison",
    illegal2: "criminals",
    illegal3: "bars",
    illegal4: "arrest",
    GoogleAIDesc:
      "A place where people accused or convicted of crimes are detained.",
    Column1: "Okay",
  },
  {
    Mainword: "cigar",
    illegal1: "Cuban",
    illegal2: "smoke",
    illegal3: "tobacco",
    illegal4: "cigarette",
    GoogleAIDesc: "A long roll of tobacco leaves wrapped in a leaf.",
    Column1: "Illegal",
  },
  {
    Mainword: "sip",
    illegal1: "drink",
    illegal2: "taste",
    illegal3: "mouth",
    illegal4: "try",
    GoogleAIDesc: "To drink in small quantities.",
    Column1: "Illegal",
  },
  {
    Mainword: "torture",
    illegal1: "prisoner",
    illegal2: "information",
    illegal3: "pain",
    illegal4: "guard",
    GoogleAIDesc: "The infliction of severe pain or suffering.",
    Column1: "Illegal",
  },
  {
    Mainword: "nun",
    illegal1: "Catholic",
    illegal2: "woman",
    illegal3: "priest",
    illegal4: "sister",
    GoogleAIDesc:
      "A member of a religious order of women, typically living a life of prayer and service.",
    Column1: "Okay",
  },
  {
    Mainword: "owl",
    illegal1: "night",
    illegal2: "bird",
    illegal3: "hoot",
    illegal4: "tree",
    GoogleAIDesc: "A nocturnal bird of prey with large, forward-facing eyes.",
    Column1: "Illegal",
  },
  {
    Mainword: "lottery",
    illegal1: "win",
    illegal2: "money",
    illegal3: "ticket",
    illegal4: "gambling",
    GoogleAIDesc:
      "A game of chance in which participants buy tickets for a chance to win a prize.",
    Column1: "Illegal",
  },
  {
    Mainword: "click",
    illegal1: "mouse",
    illegal2: "select",
    illegal3: "tap",
    illegal4: "noise",
    GoogleAIDesc: "A short, sharp sound, often made by a mechanical device.",
    Column1: "Okay",
  },
  {
    Mainword: " hammer",
    illegal1: "nail",
    illegal2: "swing",
    illegal3: "build",
    illegal4: "tool",
    GoogleAIDesc: "A tool with a heavy head used for striking objects.",
    Column1: "Illegal",
  },
  {
    Mainword: "coconut",
    illegal1: "fruit",
    illegal2: "oil",
    illegal3: "white",
    illegal4: "milk",
    GoogleAIDesc:
      "A large, hard-shelled fruit containing a milky liquid and edible flesh.",
    Column1: "Illegal",
  },
  {
    Mainword: "syrup",
    illegal1: "pancakes",
    illegal2: "sweet",
    illegal3: "maple",
    illegal4: "butter",
    GoogleAIDesc: "A thick, sweet liquid made from sugar or other sweeteners.",
    Column1: "Illegal",
  },
  {
    Mainword: "tornado",
    illegal1: "storm",
    illegal2: "wind",
    illegal3: "damage",
    illegal4: "hurricane",
    GoogleAIDesc:
      "A violently rotating column of air that extends from a thunderstorm to the ground.",
    Column1: "Illegal",
  },
  {
    Mainword: "float",
    illegal1: "boat",
    illegal2: "water",
    illegal3: "surface",
    illegal4: "top",
    GoogleAIDesc: "To rest or move on the surface of a liquid.",
    Column1: "Illegal",
  },
  {
    Mainword: "pearl",
    illegal1: "oyster",
    illegal2: "white",
    illegal3: "jewelry",
    illegal4: "diver",
    GoogleAIDesc:
      "A smooth, hard, round object found inside the shell of certain mollusks.",
    Column1: "Okay",
  },
  {
    Mainword: "allergy",
    illegal1: "sneeze",
    illegal2: "itch",
    illegal3: "spring",
    illegal4: "season",
    GoogleAIDesc:
      "An exaggerated immune response to a substance that is normally harmless.",
    Column1: "Okay",
  },
  {
    Mainword: "pirate",
    illegal1: "ship",
    illegal2: "Caribbean",
    illegal3: "Johnny Depp",
    illegal4: "Captain Hook",
    GoogleAIDesc: "A person who attacks ships and steals goods from them.",
    Column1: "Illegal",
  },
  {
    Mainword: "shovel",
    illegal1: "dig",
    illegal2: "hole",
    illegal3: "shed",
    illegal4: "snow",
    GoogleAIDesc:
      "A tool with a long handle and a flat, scoop-shaped blade used for digging.",
    Column1: "Illegal",
  },
  {
    Mainword: "cash",
    illegal1: "money",
    illegal2: "check",
    illegal3: "payment",
    illegal4: "dollar",
    GoogleAIDesc: "Money in the form of bills or coins.",
    Column1: "Okay",
  },
  {
    Mainword: "diaper",
    illegal1: "Pampers",
    illegal2: "Huggies",
    illegal3: "change",
    illegal4: "baby",
    GoogleAIDesc:
      "A garment worn by babies and young children to absorb urine and feces.",
    Column1: "Okay",
  },
  {
    Mainword: "adult",
    illegal1: "child",
    illegal2: "grown up",
    illegal3: "responsibilities",
    illegal4: "mature",
    GoogleAIDesc: "A fully grown person, typically over the age of 18.",
    Column1: "Okay",
  },
  {
    Mainword: "wink",
    illegal1: "eye",
    illegal2: "close",
    illegal3: "look",
    illegal4: "blink",
    GoogleAIDesc: "To close and open one eye quickly, usually as a signal.",
    Column1: "Illegal",
  },
  {
    Mainword: "imported",
    illegal1: "exported",
    illegal2: "foreign",
    illegal3: "expensive",
    illegal4: "product",
    GoogleAIDesc: "Brought in from another country.",
    Column1: "Okay",
  },
  {
    Mainword: "hen",
    illegal1: "rooster",
    illegal2: "chicken",
    illegal3: "farm",
    illegal4: "eggs",
    GoogleAIDesc: "A female chicken.",
    Column1: "Illegal",
  },
  {
    Mainword: "mustache",
    illegal1: "hair",
    illegal2: "beard",
    illegal3: "lip",
    illegal4: "shave",
    GoogleAIDesc: "A strip of hair growing above the upper lip.",
    Column1: "Illegal",
  },
  {
    Mainword: "microwave",
    illegal1: "heat",
    illegal2: "food",
    illegal3: "fast",
    illegal4: "cook",
    GoogleAIDesc: "A device that uses electromagnetic radiation to heat food.",
    Column1: "Illegal",
  },
  {
    Mainword: "grill",
    illegal1: "barbecue",
    illegal2: "cook",
    illegal3: "fire",
    illegal4: "meat",
    GoogleAIDesc:
      "A device for cooking food over a source of heat, typically using bars or a grate.",
    Column1: "Illegal",
  },
  {
    Mainword: "drummer",
    illegal1: "Ringo",
    illegal2: "beat",
    illegal3: "sticks",
    illegal4: "band",
    GoogleAIDesc: "A musician who plays a drum.",
    Column1: "Okay",
  },
  {
    Mainword: "toast",
    illegal1: "bread",
    illegal2: "butter",
    illegal3: "breakfast",
    illegal4: "jelly",
    GoogleAIDesc: "Bread that has been browned by heating.",
    Column1: "Okay",
  },
  {
    Mainword: "chart",
    illegal1: "graph",
    illegal2: "numbers",
    illegal3: "visual",
    illegal4: "data",
    GoogleAIDesc:
      "A visual representation of data, often using lines, bars, or symbols.",
    Column1: "Illegal",
  },
  {
    Mainword: "pajamas",
    illegal1: "bed",
    illegal2: "night",
    illegal3: "sleepover",
    illegal4: "clothes",
    GoogleAIDesc: "Loose-fitting clothing worn for sleeping.",
    Column1: "Okay",
  },
  {
    Mainword: "barber",
    illegal1: "haircut",
    illegal2: "shave",
    illegal3: "scissors",
    illegal4: "hairdresser",
    GoogleAIDesc: "A person whose profession is to cut and style hair.",
    Column1: "Okay",
  },
  {
    Mainword: "barefoot",
    illegal1: "shoes",
    illegal2: "socks",
    illegal3: "summer",
    illegal4: "beach",
    GoogleAIDesc: "Without wearing shoes or socks.",
    Column1: "Illegal",
  },
  {
    Mainword: "donkey",
    illegal1: "gray",
    illegal2: "cart",
    illegal3: "stubborn",
    illegal4: "ride",
    GoogleAIDesc:
      "A domesticated animal related to the horse, but smaller and with long ears.",
    Column1: "Okay",
  },
  {
    Mainword: "blizzard",
    illegal1: "snow",
    illegal2: "cold",
    illegal3: "weather",
    illegal4: "storm",
    GoogleAIDesc: "A severe snowstorm with high winds and low visibility.",
    Column1: "Illegal",
  },
];
