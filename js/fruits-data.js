/* One Piece Wiki — Devil Fruit dataset.
   category is one of 'Paramecia' | 'Zoan' | 'Logia'. subtype adds Mythical/Ancient/Special detail.
   users[].status describes the relationship (Current user, Former user, deceased, etc.) and id links to CHARACTERS. */

const FRUITS = [
  {
    id: 'gomu-gomu-no-mi', name: 'Gomu Gomu no Mi', englishName: 'Gum-Gum Fruit',
    category: 'Paramecia', subtype: 'Mythical Zoan — Human-Human Model: Nika', awakened: true, icon: '🥊',
    meaning: '"Gomu" (ゴム) — rubber',
    tagline: 'Turns the user\'s body to rubber — and, once awakened, unleashes the mythical Sun God Nika.',
    description: 'The Gomu Gomu no Mi grants a body of living rubber: immune to blunt force and electricity, capable of stretching to absurd lengths. For over twenty years it was misclassified as an ordinary Paramecia, its true nature hidden by the Celestial Dragons who feared it.',
    history: 'The Gomu Gomu no Mi was stolen from the World Government by Shiki the Golden Lion before Monkey D. Garp intervened; the fruit was later left on a boat where a young Monkey D. Luffy accidentally ate it, believing it was ordinary food. For most of the series it was treated as a fairly ordinary, if unusually versatile, Paramecia power.\n\nDuring the battle against Kaido on Onigashima, Luffy pushed the fruit beyond its known limits and unlocked its true form: the Hito Hito no Mi Model: Nika, the Mythical Zoan fruit of the "Sun God" from ancient legend, said to grant the "most ridiculous power in the world" and to herald the liberation of an oppressed world. The World Government had renamed and hidden records of the fruit for eight hundred years specifically to keep this awakening from ever happening again.',
    powers: [
      'Full-body rubber elasticity — stretching, inflating, and rebounding attacks',
      'Immunity to blunt-force trauma and electricity',
      'Gear Second, Third, Fourth, and Fifth transformations',
      'Nika Awakening: animates the surrounding environment like living rubber, wild size and color shifts, and effortless, gravity-defying combat'
    ],
    strengths: 'Near-total immunity to blunt and electric attacks; post-awakening, Gear 5 grants freeform physics-breaking strength and speed limited mainly by stamina.',
    weaknesses: 'Historically vulnerable to bladed and piercing weapons, and to fire; Gear 5\'s power drains enormous stamina and hunger extremely quickly.',
    users: [{ id: 'monkey-d-luffy', status: 'Current user' }]
  },
  {
    id: 'mera-mera-no-mi', name: 'Mera Mera no Mi', englishName: 'Flame-Flame Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '🔥',
    meaning: '"Mera Mera" — the sound of crackling flame',
    tagline: 'Grants a body of living fire, letting the user become, create, and control flame at will.',
    description: 'A Logia fruit that turns the user\'s body into fire itself, allowing them to generate massive flames, become intangible to physical attacks, and reform after being scattered.',
    history: 'The Mera Mera no Mi was auctioned at the Sabaody Archipelago after being confiscated by the World Government, purchased by the Warlord Donquixote Doflamingo, who gave it to Portgas D. Ace as a gift after recruiting him — Ace refused the offer to join the Donquixote Family but kept the fruit, using it to become Whitebeard\'s Second Division Commander.\n\nAfter Ace\'s death at Marineford, the fruit reappeared years later at the Corrida Colosseum on Dressrosa, entered as the grand prize of a rigged tournament secretly designed to identify and eliminate whoever won it. Sabo, competing under a hidden identity, claimed the fruit and inherited his sworn brother\'s power, using it soon after to duel Admiral Fujitora to a standstill.',
    powers: [
      'Full transformation into fire, becoming immune to physical attacks',
      'Fire generation and long-range projection (Fire Fist / Hiken)',
      'Flame constructs for both offense and propulsion-assisted movement',
      'Total incineration of anything not protected by Haki'
    ],
    strengths: 'As a Logia, near-total physical intangibility while active; devastating offensive range and raw destructive output.',
    weaknesses: 'Vulnerable to Haki-imbued attacks and other Logia users who can overpower or extinguish fire (e.g., magma, which burns hotter).',
    users: [
      { id: 'portgas-d-ace', status: 'Former user (deceased; died at Marineford)' },
      { id: 'sabo', status: 'Current user (inherited after Ace\'s death)' }
    ]
  },
  {
    id: 'ope-ope-no-mi', name: 'Ope Ope no Mi', englishName: 'Op-Op Fruit',
    category: 'Paramecia', subtype: null, awakened: true, icon: '🩺',
    meaning: '"Ope" — from the French/English "opérer/operate"',
    tagline: 'Creates a spherical ROOM in which the user can manipulate anything — objects, wounds, even life itself.',
    description: 'Widely called the "ultimate Devil Fruit," the Ope Ope no Mi grants total control within a spherical field called a ROOM, enabling teleportation, object-swapping, and surgery capable of curing nearly any ailment — at the cost of a technique that can grant eternal youth by taking the user\'s own life.',
    history: 'The fruit\'s original owner is unrecorded; it passed through the Donquixote Family\'s criminal auctions before Rosinante (Corazon), working undercover as a Marine intelligence agent inside his brother Doflamingo\'s crew, stole it to save a dying child, Trafalgar Law, who was slowly succumbing to the deadly Amber Lead Syndrome. Corazon sacrificed his life protecting Law and the fruit from Doflamingo\'s forces at Minion Island.\n\nLaw ate the fruit and used its powers to cure himself, eventually becoming a Warlord and then a Yonko-rank captain of the Heart Pirates. Because the Ope Ope no Mi can perform the legendary Operation Ope Ope — granting eternal life at the cost of the user\'s own — it is hunted by the World Government and the Celestial Dragons alike, who see it as the one power capable of true immortality.',
    powers: [
      'ROOM: designates a spherical territory where the user can manipulate anything inside',
      'Shambles: instant teleportation/swapping of objects and people within ROOM',
      'Injection Shot, Counter Shock and other surgical combat techniques',
      'Curing near-any disease or injury through "surgery"',
      'Operation Ope Ope: grants eternal youth to another at the cost of the user\'s life (theorized/forbidden)'
    ],
    strengths: 'Unmatched utility and battlefield control within ROOM\'s radius; can heal grievous wounds instantly.',
    weaknesses: 'Powers are confined to the ROOM\'s boundary, which the user must maintain; overuse is physically exhausting.',
    users: [
      { id: 'rosinante', status: 'Former user (briefly held it to protect it; deceased)' },
      { id: 'trafalgar-law', status: 'Current user' }
    ]
  },
  {
    id: 'hito-hito-no-mi', name: 'Hito Hito no Mi', englishName: 'Human-Human Fruit',
    category: 'Zoan', subtype: null, awakened: false, icon: '🦌',
    meaning: '"Hito" — human',
    tagline: 'Grants an animal human intelligence, speech, and a human hybrid form.',
    description: 'A rare Zoan fruit that lets a non-human animal transform into, and gain the intelligence of, a human — the reverse of most Zoan fruits, which give humans animal traits.',
    history: 'This particular Hito Hito no Mi was eaten by a wild reindeer on Drum Island who had been shot in the head by a hunter and left for dead. Waking with human intelligence and speech, the reindeer — soon to be named Tony Tony Chopper — was rejected by both his own herd and the humans of Drum Island for looking like neither, until the eccentric doctor Hiriluk took him in and taught him medicine.',
    powers: [
      'Human intelligence, speech, and reasoning in a reindeer body',
      'Multiple hybrid forms between full reindeer and full human',
      'Combined with the experimental Rumble Ball drug: forced access to all forms at once, including the monstrous Monster Point'
    ],
    strengths: 'Unmatched versatility for a doctor-fighter — different forms suit healing, mobility, or brute combat.',
    weaknesses: 'Rumble Ball use is chemically risky and time-limited; overuse or overlapping doses can cause loss of control.',
    users: [{ id: 'tony-tony-chopper', status: 'Current user' }]
  },
  {
    id: 'hana-hana-no-mi', name: 'Hana Hana no Mi', englishName: 'Flower-Flower Fruit',
    category: 'Paramecia', subtype: null, awakened: true, icon: '🌸',
    meaning: '"Hana" — flower (as in things "blooming")',
    tagline: 'Lets the user sprout their own body parts anywhere they can see, in any number.',
    description: 'The Hana Hana no Mi allows the user to sprout copies of their limbs, and eventually their whole body, on any surface within their field of perception, enabling reconnaissance, restraint, and combined-strength attacks.',
    history: 'The fruit\'s prior history is unrecorded. Nico Robin ate it as a child on Ohara, and it became inseparable from her tragic circumstances: the government branded her "Devil Child" for surviving with a devil fruit power at age eight, and she spent twenty years as a fugitive before finding a place with the Straw Hats.\n\nDuring the timeskip, Robin trained with the revolutionary Mr. 2 Bon Clay\'s old contacts and developed advanced techniques that fuse dozens of sprouted limbs into single giant hands (Gigantesco Mano) and even a full giant clone body (Demonio Fleur), turning what was once a purely utility power into a genuine combat force.',
    powers: [
      'Sprouting duplicate limbs (Dos Fleur, Cien Fleur, etc.) on any surface in sight',
      'Gigantesco Mano: fusing many sprouted hands into a single giant limb',
      'Demonio Fleur: forming a full giant humanoid body from sprouted parts',
      'Restraint, reconnaissance, and multi-directional simultaneous attacks'
    ],
    strengths: 'Extreme versatility and range; can attack, defend, and scout simultaneously from many locations at once.',
    weaknesses: 'Sprouted limbs share the user\'s pain sensation and can be individually broken or bound; requires line of sight to the surface.',
    users: [{ id: 'nico-robin', status: 'Current user' }]
  },
  {
    id: 'yomi-yomi-no-mi', name: 'Yomi Yomi no Mi', englishName: 'Revive-Revive Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '💀',
    meaning: '"Yomi" — the underworld/land of the dead in Japanese myth',
    tagline: 'Returns the eater\'s soul to their body after death — once — and grants soul-based combat powers.',
    description: 'One of the rarest known effects among Devil Fruits: rather than granting a living ability, the Yomi Yomi no Mi allows a soul to return to its body after death, so long as the body remains intact enough to inhabit.',
    history: 'Brook ate the Yomi Yomi no Mi as a member of the Rumbar Pirates. When the entire crew was killed by an illness (and, indirectly, a fatal encounter with Gecko Moria\'s crew), Brook\'s soul returned to his body days later to find only his skeleton remained. He spent the next several decades sailing alone on the ghost ship Thousand Sunny\'s predecessor, slowly losing his memories and nearly his sanity, until the Straw Hats found him on Thriller Bark.',
    powers: [
      'One-time revival of the soul into the user\'s own corpse after death',
      'Soul-based techniques (freezing enemies\' souls to numb or paralyze them)',
      'Soul Solid: manipulating the "cold" of the soul into blade attacks',
      'Immunity to cold as a side effect of having no living flesh'
    ],
    strengths: 'Cheats death entirely once; soul-manipulation attacks bypass normal physical defenses.',
    weaknesses: 'The revival only works once, and only if the body is still viable; as a skeleton, vulnerable to blunt strikes that could shatter bone.',
    users: [{ id: 'brook', status: 'Current user' }]
  },
  {
    id: 'nikyu-nikyu-no-mi', name: 'Nikyu Nikyu no Mi', englishName: 'Paw-Paw Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🐾',
    meaning: '"Nikyu" — a play on "nikukyu," a paw pad',
    tagline: 'Turns the user\'s palms into pads that can repel anything they touch — including pain and fatigue.',
    description: 'The Nikyu Nikyu no Mi lets the user repel any physical object, projectile, or force with a touch of their paw-print palms, and — uniquely — repel abstract things like pain, exhaustion, and desires away from a person\'s body.',
    history: 'Bartholomew Kuma, once a king and Revolutionary, ate the fruit before his transformation into a near-mindless Warlord-turned-government weapon. After secretly selling his body and free will to the World Government to pay for his daughter Bonney\'s life, Kuma\'s consciousness was suppressed, but his final free act was to use the fruit\'s paw-power to launch every Straw Hat pirate to safety after the Battle of Marineford, scattering the crew across the world but saving all of their lives.',
    powers: [
      'Repelling any physical object or attack on contact (Pad Ho, Ursus Shock)',
      'Repelling intangible things from a person: pain, fatigue, and even the desire to fight',
      'Launching people or objects vast distances through repelled force'
    ],
    strengths: 'Can neutralize almost any incoming attack and can remove suffering from allies entirely, at will.',
    weaknesses: 'In Kuma\'s case, the man himself lost autonomy after his mechanization, leaving the fruit\'s power in the World Government\'s hands.',
    users: [{ id: 'bartholomew-kuma', status: 'Current user' }]
  },
  {
    id: 'mero-mero-no-mi', name: 'Mero Mero no Mi', englishName: 'Love-Love Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '💘',
    meaning: '"Mero Mero" — smitten, love-struck',
    tagline: 'Turns anyone who feels attraction toward the user, upon being struck, to stone.',
    description: 'The Mero Mero no Mi weaponizes infatuation: anyone who finds the user attractive is turned to stone the instant they are struck by the fruit\'s power, whether by an arrow, a punch, or simply a glance held too long.',
    history: 'Boa Hancock ate the fruit before rising to become the empress of Amazon Lily and captain of the Kuja Pirates. Her legendary beauty makes the fruit devastating in practice — a single Love-Love Arrow, Mero Mero Mellow, or even her Slave Arrow strike leaves nearly any admirer petrified, which contributed heavily to her seat among the Seven Warlords of the Sea.',
    powers: [
      'Petrification of anyone attracted to the user upon contact with the power',
      'Love-Love Beam / Mellow: wide-area petrification blasts',
      'Perfume Femur: summoning a giant living statue from petrified victims'
    ],
    strengths: 'A single successful strike incapacitates almost any opponent instantly and (usually) reversibly.',
    weaknesses: 'Completely ineffective against anyone who feels no attraction to the user — including women, children, or the emotionally guarded.',
    users: [{ id: 'boa-hancock', status: 'Current user' }]
  },
  {
    id: 'mane-mane-no-mi', name: 'Mane Mane no Mi', englishName: 'Clone-Clone Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🎭',
    meaning: '"Mane" — to imitate/copy',
    tagline: 'Lets the user copy the exact face and voice of anyone they touch.',
    description: 'A transformation fruit that grants a perfect facial and vocal copy of any person the user has touched, useful for espionage, infiltration, and — as Bon Clay showed — genuine performance art.',
    history: 'Bentham, known as Mr. 2 Bon Clay, used this fruit as a Baroque Works agent in Alabasta, copying Nefertari Vivi\'s face to sabotage the kingdom from within. After his defeat and friendship with Luffy, he later used the fruit\'s disguise ability to help engineer the Impel Down breakout, copying a warden\'s face to move the escaping prisoners through the prison undetected.',
    powers: [
      'Perfect facial and vocal mimicry of any previously touched person',
      'Retains own combat skill and memory beneath the disguise',
      'Can transform mid-fight to confuse opponents'
    ],
    strengths: 'Excellent for infiltration, misdirection, and psychological warfare in a fight.',
    weaknesses: 'Only changes appearance and voice, not the user\'s own strength, size, or fighting style.',
    users: [{ id: 'bentham', status: 'Current user' }]
  },
  {
    id: 'hie-hie-no-mi', name: 'Hie Hie no Mi', englishName: 'Ice-Ice Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '🧊',
    meaning: '"Hie" — to freeze/chill',
    tagline: 'Grants a body of living ice, able to freeze entire landscapes and seas.',
    description: 'A Logia fruit that lets the user become, generate, and control ice at will, freezing anything from a single limb to the surface of the open ocean.',
    history: 'Kuzan, known as Aokiji, rose to Marine Admiral using this power, freezing half of the sea between islands during his legendary ten-day duel with Sakazuki over who would become the next Fleet Admiral — a fight so destructive it permanently reshaped the island of Punk Hazard, scarring it into a half-frozen, half-scorched wasteland. Kuzan lost the duel and left the Marines soon after, eventually aligning with Blackbeard\'s crew.',
    powers: [
      'Full transformation into ice, immune to most physical attacks',
      'Freezing large bodies of water or terrain solid (Ice Age)',
      'Ice Saber and Ice Block for close-quarters combat',
      'Ice Ball projectiles for rapid ranged freezing'
    ],
    strengths: 'Can freeze massive areas near-instantly, disabling entire fleets or islands at once.',
    weaknesses: 'Vulnerable to intense heat and Haki-empowered strikes, like all Logia against Conqueror\'s or Armament Haki.',
    users: [{ id: 'kuzan', status: 'Current user' }]
  },
  {
    id: 'magu-magu-no-mi', name: 'Magu Magu no Mi', englishName: 'Magma-Magma Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '🌋',
    meaning: '"Magu" — magma',
    tagline: 'Grants a body of living magma, hot enough to overpower even fire.',
    description: 'A Logia fruit granting control over magma, considered a natural counter to fire-based Logia fruits since magma burns hotter and melts through nearly anything.',
    history: 'Sakazuki, known as Akainu, used this fruit\'s overwhelming heat to end the Battle of Marineford, striking down Portgas D. Ace with a magma fist through the chest — a killing blow that also nearly claimed Luffy\'s life and triggered Whitebeard\'s final rampage. Sakazuki\'s subsequent duel with Kuzan for the Fleet Admiral position, fought over ten days on Punk Hazard, ended in his victory and elevation to the Marines\' highest rank.',
    powers: [
      'Full transformation into magma, immune to most physical attacks',
      'Great Eruption: continent-scale magma bursts',
      'Melting through Logia fire and most physical defenses',
      'Magma fist strikes capable of piercing flesh instantly'
    ],
    strengths: 'Overpowers fire-based attacks outright; combines Logia intangibility with extreme, near-unblockable heat damage.',
    weaknesses: 'Like all Logia, vulnerable to Haki; slower and more telegraphed than lighter elemental Logias like light or smoke.',
    users: [{ id: 'sakazuki', status: 'Current user' }]
  },
  {
    id: 'pika-pika-no-mi', name: 'Pika Pika no Mi', englishName: 'Glint-Glint Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '✨',
    meaning: '"Pika" — a flash/glint of light',
    tagline: 'Grants a body of living light, letting the user move and attack at light speed.',
    description: 'A Logia fruit that turns the user into light itself, granting effectively instantaneous movement and attacks limited only by line of sight.',
    history: 'Borsalino, known as Kizaru, wielded this fruit as a Marine Admiral for decades, using its light-speed properties to intervene in conflicts almost the instant they began, from Sabaody Archipelago to the war at Marineford. His famously lazy attitude belies one of the single most dangerous abilities in the entire Marine arsenal.',
    powers: [
      'Full transformation into light, immune to most physical attacks',
      'Light-speed movement and travel across vast distances almost instantly',
      'Yasakani no Magatama: rapid-fire laser bursts',
      'Amaterasu: a massive beam capable of leveling large targets'
    ],
    strengths: 'Effectively unblockable reaction speed and travel time; can strike from anywhere within eyeshot almost instantly.',
    weaknesses: 'Still bound by line of sight and Haki-based countermeasures, despite the speed advantage.',
    users: [{ id: 'borsalino', status: 'Current user' }]
  },
  {
    id: 'moku-moku-no-mi', name: 'Moku Moku no Mi', englishName: 'Smoke-Smoke Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '💨',
    meaning: '"Moku" — the sound/image of billowing smoke',
    tagline: 'Grants a body of living smoke, both a weapon and a means of near-total evasion.',
    description: 'A Logia fruit letting the user become, produce, and manipulate smoke, useful for both offense (choking, blinding, cutting foes) and effectively unstoppable evasion.',
    history: 'Smoker ate this fruit early in his Marine career and rose to become a Vice Admiral, using it to relentlessly pursue Luffy from Loguetown onward without ever quite managing to catch him. His smoke-based jutte combat, infused with Armament Haki, makes him one of the few Marines who can fight Devil Fruit Logia users and ordinary opponents with equal effectiveness.',
    powers: [
      'Full transformation into smoke, immune to most physical attacks',
      'White Blow / White Snake: concentrated smoke strikes that can slice or choke',
      'Large-scale smoke clouds for cover, blinding, or capture',
      'Haki-infused jutte combat, bypassing his own Logia\'s usual weakness'
    ],
    strengths: 'Excellent for both suffocating capture techniques and rapid, near-untouchable evasion or pursuit.',
    weaknesses: 'Like all Logia, vulnerable to Haki-imbued attacks; heavy wind or extreme heat can disperse smoke form more easily.',
    users: [{ id: 'smoker', status: 'Current user' }]
  },
  {
    id: 'zushi-zushi-no-mi', name: 'Zushi Zushi no Mi', englishName: 'Gravity-Gravity Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🌀',
    meaning: '"Zushi" — the weighty sensation of gravity',
    tagline: 'Grants control over gravity itself, up to and including pulling meteors from orbit.',
    description: 'One of the most powerful known Paramecia fruits, letting the user manipulate gravitational force across a wide area — crushing enemies, lifting objects, or even summoning meteors from space.',
    history: 'Admiral Issho, known as Fujitora, wields this fruit despite being blind, guiding his sword and gravity techniques through Observation Haki and instinct alone. He famously called down meteors to devastate Dressrosa during Doflamingo\'s downfall, and his unusually principled sense of justice — openly criticizing the Celestial Dragons — sets him apart from most of his fellow Admirals.',
    powers: [
      'Localized or wide-area gravity manipulation, crushing or lifting targets',
      'Meteor Volcano: pulling meteors from orbit onto a target area',
      'Levitation of the user and allies',
      'Gravity Blade: gravity-enhanced sword strikes'
    ],
    strengths: 'Massive area-of-effect destructive potential; can immobilize entire fleets by crushing or lifting them at once.',
    weaknesses: 'Large-scale techniques like meteor summoning take time to charge, leaving the user briefly vulnerable.',
    users: [{ id: 'issho', status: 'Current user' }]
  },
  {
    id: 'suna-suna-no-mi', name: 'Suna Suna no Mi', englishName: 'Sand-Sand Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '⏳',
    meaning: '"Suna" — sand',
    tagline: 'Grants a body of living sand, able to dehydrate anything it touches.',
    description: 'A Logia fruit that lets the user become, generate, and control sand — and, more dangerously, drain the moisture from anything or anyone it touches.',
    history: 'Crocodile used this fruit as the secret mastermind of Baroque Works, engineering a civil war in Alabasta by supplying arms to rebels while pretending to aid the kingdom as a Warlord of the Sea. His Desert Spada and dehydration techniques nearly killed Princess Vivi\'s kingdom before Luffy — immune to Crocodile\'s intangibility as a fellow Devil Fruit user who could still land solid blows through sheer Haki-less brute force and later Haki — defeated him twice, once in Alabasta and again at Marineford.',
    powers: [
      'Full transformation into sand, immune to most physical attacks',
      'Desert Spada: a wide, blade-like slicing sandstorm',
      'Moisture drain on contact, dehydrating people and objects',
      'Ground Death: a localized desert-summoning technique'
    ],
    strengths: 'Combines Logia intangibility with a debilitating dehydration effect that saps enemies\' strength over time.',
    weaknesses: 'Notably weak to water, which clumps and neutralizes sand form far more effectively than most Logia counters.',
    users: [{ id: 'crocodile', status: 'Current user' }]
  },
  {
    id: 'ito-ito-no-mi', name: 'Ito Ito no Mi', englishName: 'String-String Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🕸️',
    meaning: '"Ito" — thread/string',
    tagline: 'Grants control over razor-sharp strings, strong enough to slice steel or puppeteer entire people.',
    description: 'A Paramecia fruit that lets the user generate and manipulate strings sharp enough to cut through steel and durable enough to control other people\'s bodies like marionettes.',
    history: 'Donquixote Doflamingo, a disgraced former World Noble, used this fruit to build a criminal empire trafficking weapons and artificial SMILE Devil Fruits while secretly ruling Dressrosa as a puppet king for ten years, controlling the previous king\'s corpse with his strings to hide his coup. His "Parasite" ability to control living people directly through implanted strings made him one of the story\'s most oppressive villains until Luffy severed his control for good.',
    powers: [
      'String generation sharp enough to slice through steel and stone',
      'Parasite: full puppeteer control over another person\'s body via strings',
      'Overheat: superheated string attacks',
      "String-based flight and city-scale aerial combat webs"
    ],
    strengths: 'Extreme versatility — cutting, binding, puppeteering, and flight all from a single power; strings are nearly invisible in combat.',
    weaknesses: "Puppeteered victims can theoretically be freed if the controlling strings are cut or the user is sufficiently overwhelmed.",
    users: [{ id: 'donquixote-doflamingo', status: 'Current user' }]
  },
  {
    id: 'kage-kage-no-mi', name: 'Kage Kage no Mi', englishName: 'Shadow-Shadow Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🌑',
    meaning: '"Kage" — shadow',
    tagline: "Lets the user steal, animate, and weaponize other people's and creatures' shadows.",
    description: "A Paramecia fruit that lets the user tear a shadow from any living or dead body and stitch it into a corpse, animating it as an obedient zombie, or use their own shadow as a two-dimensional doorway.",
    history: "Gecko Moria's entire original crew was slaughtered by Kaido, an act that broke him and sent him into decades of obsessive shadow-collecting to build an undead army instead of relying on living crewmates ever again. On Thriller Bark, Moria stole hundreds of shadows — including, briefly, Luffy's own — to animate an army of zombies led by the giant zombie general Oz, until Luffy forced the shadows back and shattered Moria's ambitions along with them.",
    powers: [
      "Stealing another person's shadow, weakening them severely in sunlight",
      "Animating a shadow-stitched corpse into an obedient zombie soldier",
      "Merging multiple shadows into one giant zombie for overwhelming size",
      "Using the user's own shadow as a two-dimensional gateway to slip through gaps"
    ],
    strengths: "Can build an entire army from stolen shadows in a single night; victims of stolen shadows become nearly powerless by day.",
    weaknesses: "Stolen shadows return to their original owners at dawn unless bound; the zombies created are ultimately weaker than the humans whose shadows they used.",
    users: [{ id: 'gecko-moria', status: 'Current user' }]
  },
  {
    id: 'bara-bara-no-mi', name: 'Bara Bara no Mi', englishName: 'Chop-Chop Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🔪',
    meaning: '"Bara Bara" — scattered, in pieces',
    tagline: "Splits the user's body into floating, controllable pieces, immune to slashing.",
    description: "A Paramecia fruit that lets the user separate their body into any number of independently floating parts, all remaining under conscious control and immune to being cut.",
    history: "Buggy ate this fruit as a young cabin boy on Gol D. Roger's ship, long before becoming a bumbling but surprisingly resilient captain in his own right. His immunity to swords and blades has let him survive encounters that would kill nearly anyone else, contributing — almost by accident — to a reputation that eventually carried him to the rank of Warlord and, later, co-founder of the Cross Guild.",
    powers: [
      "Splitting the body into independently floating, controllable parts",
      "Total immunity to slashing and piercing attacks while separated",
      "Buggy Ball: launching detached hands as surprise projectile strikes",
      "Reassembling instantly at will"
    ],
    strengths: "Total immunity to bladed weapons, historically one of the hardest defenses to counter directly.",
    weaknesses: "Still vulnerable to blunt-force trauma, and separated parts can be individually grabbed, restrained, or thrown off course.",
    users: [{ id: 'buggy', status: 'Current user' }]
  },
  {
    id: 'yami-yami-no-mi', name: 'Yami Yami no Mi', englishName: 'Dark-Dark Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '⚫',
    meaning: '"Yami" — darkness',
    tagline: "The only known Devil Fruit power capable of nullifying other Devil Fruit abilities.",
    description: "Considered the most sinister of all Logia fruits: it grants a body of living darkness with immense gravitational pull, and uniquely, nullifies any other Devil Fruit power on contact — including making other Logia users tangible and vulnerable to physical damage.",
    history: "The fruit's original owner is unrecorded. Marshall D. Teach, then a low-ranking member of Whitebeard's crew, murdered his own crewmate Thatch to steal it after learning it had washed ashore, using it to defect to the Marines temporarily before openly declaring himself a pirate. Blackbeard's darkness later proved decisive at Marineford, nullifying Whitebeard's Devil Fruit power just long enough for his crew to finish him off and steal his fruit too.",
    powers: [
      "Full transformation into darkness with crushing gravitational pull (Black Hole)",
      "Nullifying any other Devil Fruit's power on direct contact",
      "Liberation: unleashing previously absorbed gravitational force in a massive shockwave",
      "Rendering other Logia users' bodies solid and vulnerable to physical attack"
    ],
    strengths: "Uniquely able to counter any other Devil Fruit ability, making it the single most feared power among Devil Fruit users.",
    weaknesses: "Unlike other Logia, the user's body remains solid and vulnerable to physical damage even while using its power.",
    users: [{ id: 'marshall-d-teach', status: 'Current user' }]
  },
  {
    id: 'gura-gura-no-mi', name: 'Gura Gura no Mi', englishName: 'Tremor-Tremor Fruit',
    category: 'Paramecia', subtype: 'Special Paramecia — capable of "destroying the world"', awakened: false, icon: '💥',
    meaning: '"Gura Gura" — shaking, trembling',
    tagline: "Grants the power to generate quakes powerful enough to shatter the sky and crack the ocean floor.",
    description: "Regarded as the single most destructive Devil Fruit in the world, letting the user generate vibrations and shockwaves through any medium — air, sea, or solid ground — powerful enough, if unleashed fully, to sink the entire world beneath the waves.",
    history: "Edward Newgate, known as Whitebeard, wielded this fruit for decades as the World's Strongest Man, his quake-fueled fist strikes alone capable of splitting the sky over Marineford during the war to save Ace. He died defending his crew's honor in that battle, still standing even after dozens of grievous wounds, until Blackbeard — who had infiltrated the battlefield specifically to steal it — delivered the final blow and pulled the fruit from his corpse.\n\nBlackbeard became the only known person able to wield two Devil Fruits simultaneously, combining the Gura Gura no Mi's quakes with his own Yami Yami no Mi's darkness to devastating effect, a combination that helped propel him to Yonko status.",
    powers: [
      "Generating shockwaves and vibrations through air, land, or sea at a touch or a punch",
      "Seaquakes powerful enough to summon tsunamis",
      "Fissuring solid ground and shattering the sky itself at full power",
      "Theorized capability to sink the entire world if left unchecked"
    ],
    strengths: "The single highest raw destructive ceiling of any known Devil Fruit, effective at any range through nearly any medium.",
    weaknesses: "Requires immense physical and Haki conditioning to wield safely; extreme output risks catastrophic collateral damage even to the user's allies.",
    users: [
      { id: 'edward-newgate', status: 'Former user (deceased; killed at Marineford)' },
      { id: 'marshall-d-teach', status: 'Current user (stole it after Whitebeard\'s death)' }
    ]
  },
  {
    id: 'suke-suke-no-mi', name: 'Suke Suke no Mi', englishName: 'Clear-Clear Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '👻',
    meaning: '"Suke" — transparent, see-through',
    tagline: "Turns the user, or anything they touch, invisible.",
    description: "A Paramecia fruit that grants total invisibility to the user's body, and can extend the same effect to anything the user touches, at the cost of the user's own clothes needing to come off to stay unseen.",
    history: "Absalom, a zombie officer of Thriller Bark, used this fruit's invisibility to stalk and harass Nico Robin, whom he had become fixated on marrying. During the chaos of Thriller Bark's collapse, his own ally Shiryu murdered him and took the fruit for himself before defecting to the Blackbeard Pirates, where he continues to use its invisibility for reconnaissance and ambush.",
    powers: [
      "Full invisibility of the user's body",
      "Extending invisibility to touched objects or people",
      "Silent, undetectable infiltration and ambush combat"
    ],
    strengths: "Near-perfect stealth for infiltration, assassination, and escape.",
    weaknesses: "Effects are broken by anything revealing position — footprints, scent-tracking, or Observation Haki users who can sense presence regardless of sight.",
    users: [
      { id: 'absalom', status: 'Former user (deceased; killed by Shiryu)' },
      { id: 'shiryu', status: 'Current user (took it from Absalom)' }
    ]
  },
  {
    id: 'neko-neko-no-mi-model-saber-tiger', name: 'Neko Neko no Mi, Model: Saber Tiger', englishName: 'Cat-Cat Fruit, Model: Saber Tiger',
    category: 'Zoan', subtype: 'Saber Tiger hybrid', awakened: false, icon: '🐯',
    meaning: '"Neko" — cat',
    tagline: "Grants a hybrid and full transformation into a prehistoric saber-toothed tiger.",
    description: "A Zoan fruit modeled after the extinct saber-toothed tiger, granting enhanced claws, speed, and predatory strength in hybrid or full-beast form.",
    history: "Catarina Devon, one of the Blackbeard Pirates' newer recruits, joined the crew's assault on Egghead Island during their bid to seize Vegapunk's research. Her saber-tiger form gives her a fighting edge suited to the crew's increasingly aggressive expansion in the New World.",
    powers: [
      "Human, hybrid, and full saber-tiger transformations",
      "Enhanced claws capable of shredding armor",
      "Predatory speed and reflexes in hybrid form"
    ],
    strengths: "Strong close-quarters slashing power and mobility across all three Zoan forms.",
    weaknesses: "Like most Zoan users, most vulnerable in transitional states between forms.",
    users: [{ id: 'catarina-devon', status: 'Current user' }]
  },
  {
    id: 'tori-tori-no-mi-model-phoenix', name: 'Tori Tori no Mi, Model: Phoenix', englishName: 'Bird-Bird Fruit, Model: Phoenix',
    category: 'Zoan', subtype: 'Mythical Zoan', awakened: false, icon: '🔥🦅',
    meaning: '"Tori" — bird',
    tagline: "A Mythical Zoan granting phoenix flames that heal the user's own wounds almost instantly.",
    description: "One of the rarest Mythical Zoan fruits, granting transformation into a phoenix wreathed in blue regenerative flames, capable of healing injuries — including the user's own — in seconds.",
    history: "Marco has wielded this fruit as long as he has served the Whitebeard Pirates, becoming their First Division Commander and Whitebeard's most trusted right hand. His near-unkillable regeneration let him survive direct hits from Admirals at Marineford, and after Whitebeard's death he used the fruit's healing to quietly tend his old crew's wounded in retirement — until the wars against Kaido and Big Mom pulled him back into the fight.",
    powers: [
      "Full and hybrid transformation into a blue-flamed phoenix",
      "Near-instantaneous regeneration of wounds, including lost blood and burns",
      "Flight and flame-based aerial combat",
      "Healing flames can, to a limited degree, mend allies as well"
    ],
    strengths: "Regeneration this fast makes Marco extraordinarily difficult to put down in a straight fight.",
    weaknesses: "Regeneration does not restore stamina or prevent death from a single overwhelming blow; still bound by normal Haki-based countermeasures.",
    users: [{ id: 'marco', status: 'Current user' }]
  },
  {
    id: 'soru-soru-no-mi', name: 'Soru Soru no Mi', englishName: 'Soul-Soul Fruit',
    category: 'Paramecia', subtype: 'Special Paramecia', awakened: false, icon: '👁️',
    meaning: '"Soru" — soul',
    tagline: "Lets the user rip out portions of a person's lifespan as tangible 'soul,' animating objects into living homies.",
    description: "One of the most feared Paramecia fruits, letting the user tear a piece of anyone's soul — and lifespan — from their body, either to shorten their life or to breathe life into inanimate objects as loyal, sentient 'homies.'",
    history: "Charlotte Linlin, known as Big Mom, ate this fruit as a child, and it fed directly into a lifelong, uncontrollable hunger: eating enough food (or people's souls) prevents the emotional \"tantrums\" that once made her a danger to her own hometown as a toddler. As ruler of Totto Land, she built her entire kingdom's infrastructure and army from homies animated from stolen souls, and used the fruit to extend her own life far past its natural span. Her two most powerful homies, Zeus and Napoleon, were later stolen away from her by Nami and Big Mom's own children respectively.",
    powers: [
      "Extracting a portion of a person's soul, shortening their remaining lifespan",
      "Animating any object into a sentient, obedient 'homie' by implanting a soul",
      "Storing extracted souls to extend the user's own life indefinitely",
      "Homies can be extremely powerful in their own right (e.g., Zeus, Napoleon, Prometheus)"
    ],
    strengths: "Can build an entire army and infrastructure from ordinary objects, and can grant the user unnaturally extended life.",
    weaknesses: "A homie separated too long from its stolen soul source, or whose donor dies, can lose its power or return to being an inanimate object.",
    users: [{ id: 'charlotte-linlin', status: 'Current user' }]
  },
  {
    id: 'mochi-mochi-no-mi', name: 'Mochi Mochi no Mi', englishName: 'Mochi-Mochi Fruit',
    category: 'Paramecia', subtype: 'Special Paramecia — functions like a Logia', awakened: false, icon: '🍡',
    meaning: '"Mochi" — a sticky Japanese rice cake',
    tagline: "Grants a body of living mochi, functioning with Logia-like intangibility despite being classified Paramecia.",
    description: "A rare Special Paramecia that behaves almost exactly like a Logia: the user's body becomes mochi, letting them evade attacks, stretch, and engulf enemies in sticky, immobilizing dough.",
    history: "Charlotte Katakuri, Big Mom's most powerful son, has kept this fruit's true nature secret for most of his life, going to extreme lengths — including always covering his mouth — to hide the mochi stains it leaves on his face when he eats. His mastery of both the fruit and advanced Observation Haki, letting him see moments into the future, made his duel with Luffy at Whole Cake Island one of the most tactically respected fights in the series.",
    powers: [
      "Logia-like intangibility via transformation into mochi",
      "Engulfing enemies in sticky, restraining mochi",
      "Stretching and reshaping mochi limbs for both offense and mobility",
      "Zan Giri Mochi and other sharpened mochi-blade techniques"
    ],
    strengths: "Combines Logia-tier evasion with Paramecia-style versatility and physical restraint options.",
    weaknesses: "Still countered by Haki like any Logia-adjacent power; the user can still be struck if hit with sufficient force or precision.",
    users: [{ id: 'charlotte-katakuri', status: 'Current user' }]
  },
  {
    id: 'shibo-shibo-no-mi', name: 'Shibo Shibo no Mi', englishName: 'Wring-Wring Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🧴',
    meaning: '"Shibo(ru)" — to wring out',
    tagline: "Lets the user wring liquid — including blood and vitality — out of anything, or anyone, they touch.",
    description: "A Paramecia fruit that lets the user squeeze liquid out of any object or living being on contact, from wringing water out of clothes to draining an opponent's blood and strength.",
    history: "Charlotte Smoothie governs Fish-Man Island on Big Mom's behalf as one of her Sweet Commanders, using this fruit's draining touch as both a combat weapon and a quiet method of control. Her calm, composed demeanor makes her one of the more calculating members of the Charlotte family.",
    powers: [
      "Wringing liquid out of objects on contact",
      "Draining blood and vitality from living targets, weakening them severely",
      "Reconstituting drained liquid into offensive projectiles"
    ],
    strengths: "Direct contact can incapacitate an opponent by draining their strength almost instantly.",
    weaknesses: "Requires physical contact to activate, limiting it against fast or ranged opponents.",
    users: [{ id: 'charlotte-smoothie', status: 'Current user' }]
  },
  {
    id: 'bisu-bisu-no-mi', name: 'Bisu Bisu no Mi', englishName: 'Biscuit-Biscuit Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🍪',
    meaning: '"Bisu(ketto)" — biscuit',
    tagline: "Lets the user generate and command an army of biscuit soldiers, and wear biscuit armor.",
    description: "A Paramecia fruit that produces biscuit-based matter which the user can shape into soldiers, walls, or personal armor, hardened enough to withstand serious punishment.",
    history: "Charlotte Cracker fought Luffy in a grueling battle of attrition on Whole Cake Island, endlessly regenerating his biscuit soldier army no matter how many Luffy destroyed. Hidden beneath his cloak, his own body is armored in dense biscuit plating, requiring Luffy to escalate all the way to Gear Fourth to finally crack through.",
    powers: [
      "Generating biscuit-soldier constructs for an endlessly renewable army",
      "Biscuit armor worn beneath the user's cloak for personal defense",
      "Shaping biscuit matter into walls, weapons, or shields"
    ],
    strengths: "The army can be regenerated almost indefinitely, making straightforward attrition an ineffective strategy against him.",
    weaknesses: "Individual biscuit soldiers are much weaker than the user himself and can be destroyed relatively easily one at a time.",
    users: [{ id: 'charlotte-cracker', status: 'Current user' }]
  },
  {
    id: 'peto-peto-no-mi', name: 'Peto Peto no Mi', englishName: 'Candy-Candy Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🍬',
    meaning: '"Peto" — from "candy"',
    tagline: "Lets the user create and shape candy at will, from staircases to weapons.",
    description: "A Paramecia fruit that grants full control over candy creation and manipulation, useful for construction, restraint, and offense alike.",
    history: "Charlotte Perospero, Big Mom's eldest son, is one of Totto Land's chief political architects, using this fruit to build candy infrastructure — bridges, staircases, even entire structures — as easily as he uses it to bind enemies in hardened candy chains.",
    powers: [
      "Generating solid candy constructs of nearly any shape",
      "Candy-based restraints and weapons",
      "Rapid construction of large-scale structures"
    ],
    strengths: "Extremely versatile for both battlefield construction and restraint of enemies.",
    weaknesses: "Candy constructs, while hardened, can still be broken with sufficient force.",
    users: [{ id: 'charlotte-perospero', status: 'Current user' }]
  },
  {
    id: 'uo-uo-no-mi-model-seiryu', name: 'Uo Uo no Mi, Model: Seiryu', englishName: 'Fish-Fish Fruit, Model: Azure Dragon',
    category: 'Zoan', subtype: 'Mythical Zoan', awakened: false, icon: '🐉',
    meaning: '"Uo" — fish (broadly, aquatic creature); "Seiryu" — the Azure Dragon of Chinese myth',
    tagline: "Transforms the user into a colossal Eastern dragon, one of the most powerful known Zoan fruits.",
    description: "An extraordinarily rare Mythical Zoan granting transformation into an Azure Dragon, complete with flight, elemental breath, and near-unmatched raw destructive power.",
    history: "Kaido has wielded this fruit for so long that his dragon form became legend even before most pirates ever saw it in person. As one of the Four Emperors ruling Wano in a decades-long alliance with the shogun Orochi, Kaido's dragon rampages leveled cities and shrugged off attacks from entire fleets; his own repeated, failed attempts to end his life through the fruit's near-invulnerability fed a deep nihilism that only broke after his defeat at Onigashima by an alliance led by Luffy and Kid.",
    powers: [
      "Full transformation into a massive Azure Dragon capable of flight",
      "Elemental breath and weather-altering attacks (Boro Breath)",
      "Near-total physical invulnerability in dragon form",
      "Bolo Breath and other massive-scale area attacks"
    ],
    strengths: "Among the most physically durable and destructive Devil Fruits known, able to fight entire armies single-handedly.",
    weaknesses: "Sheer size can be a liability in confined spaces; still vulnerable to sufficiently powerful Conqueror's Haki and Advanced Armament Haki.",
    users: [{ id: 'kaido', status: 'Current user' }]
  },
  {
    id: 'ryu-ryu-no-mi-model-pteranodon', name: 'Ryu Ryu no Mi, Model: Pteranodon', englishName: 'Dragon-Dragon Fruit, Model: Pteranodon',
    category: 'Zoan', subtype: 'Ancient Zoan', awakened: false, icon: '🦅',
    meaning: '"Ryu" — dragon (used broadly for prehistoric reptiles)',
    tagline: "An Ancient Zoan granting transformation into a prehistoric flying pteranodon.",
    description: "An Ancient Zoan fruit, extinct in the modern world for eons, granting flight and aerial combat prowess through a pteranodon hybrid or full transformation.",
    history: "King, the last known survivor of the Lulusia Kingdom — a nation the World Government wiped off the map to bury evidence of illegal Devil Fruit experimentation — became Kaido's most trusted All-Star. He fused his flight-capable Zoan with fire-based attacks learned separately, making him one of the few Beast Pirates able to keep pace with Kaido himself.",
    powers: [
      "Human, hybrid, and full pteranodon transformations",
      "Sustained flight and aerial combat",
      "Fire-augmented strikes in hybrid form (a separately trained skill, not innate to the fruit)"
    ],
    strengths: "Flight grants King total control of the vertical battlefield, especially devastating combined with his fire techniques.",
    weaknesses: "As with most Zoan hybrids, momentary vulnerability exists when shifting between forms mid-combat.",
    users: [{ id: 'king', status: 'Current user' }]
  },
  {
    id: 'ryu-ryu-no-mi-model-brachiosaurus', name: 'Ryu Ryu no Mi, Model: Brachiosaurus', englishName: 'Dragon-Dragon Fruit, Model: Brachiosaurus',
    category: 'Zoan', subtype: 'Ancient Zoan (artificial, SMILE-derived)', awakened: false, icon: '🦕',
    meaning: '"Ryu" — dragon (used broadly for prehistoric reptiles)',
    tagline: "An artificially replicated Ancient Zoan granting a colossal brachiosaurus transformation.",
    description: "Unlike most Devil Fruits, Queen's power was artificially reproduced by Vegapunk's stolen research and administered as a successful SMILE, granting full Zoan control (unlike the malfunctioning SMILEs given to ordinary soldiers) and a massive brachiosaurus form.",
    history: "Queen, the scientist-cyborg behind Kaido's SMILE Devil Fruit factory, used his own successful creation to grant himself a brachiosaurus transformation, towering over most opponents in size and reach. His research also produced the mutated Ice Oni bioweapon he unleashed on Wano as a last resort during the raid on Onigashima.",
    powers: [
      "Full transformation into a massive brachiosaurus",
      "Enormous size and reach advantage in combat",
      "Combined with cyborg body modifications for further durability"
    ],
    strengths: "Sheer scale gives overwhelming physical presence and reach few opponents can match directly.",
    weaknesses: "Size and mass reduce agility compared to smaller, faster Zoan transformations.",
    users: [{ id: 'queen', status: 'Former user (deceased)' }]
  },
  {
    id: 'zou-zou-no-mi-model-mammoth', name: 'Zou Zou no Mi, Model: Mammoth', englishName: 'Elephant-Elephant Fruit, Model: Mammoth',
    category: 'Zoan', subtype: 'Ancient Zoan', awakened: false, icon: '🦣',
    meaning: '"Zou" — elephant',
    tagline: "An Ancient Zoan granting transformation into a colossal woolly mammoth.",
    description: "A prehistoric Ancient Zoan fruit granting a massive mammoth transformation, prized for its sheer size and destructive physical power.",
    history: "Jack commands Kaido's flagship Numancia Mother and led the assault on Zunesha, the giant elephant that carries the island of Zou on its back, attempting to force the Mink tribe into Kaido's service. His mammoth form let him personally battle Zunesha and level parts of Wano in Kaido's name.",
    powers: [
      "Full transformation into a massive woolly mammoth",
      "Devastating trampling and tusk-based physical attacks",
      "Immense size advantage in siege-style combat"
    ],
    strengths: "One of the largest and most physically destructive Zoan forms in the series, ideal for large-scale sieges.",
    weaknesses: "Slower and less maneuverable than smaller Zoan or Paramecia opponents.",
    users: [{ id: 'jack', status: 'Current user' }]
  },
  {
    id: 'hebi-hebi-no-mi-model-yamata-no-orochi', name: 'Hebi Hebi no Mi, Model: Yamata no Orochi', englishName: 'Snake-Snake Fruit, Model: Eight-Headed Serpent',
    category: 'Zoan', subtype: 'Mythical Zoan', awakened: false, icon: '🐍',
    meaning: '"Hebi" — snake; Yamata no Orochi, the eight-headed serpent of Japanese legend',
    tagline: "A Mythical Zoan transforming the user into the legendary eight-headed serpent Yamata no Orochi.",
    description: "A Mythical Zoan modeled after the eight-headed, eight-tailed serpent of Japanese folklore, granting a many-headed dragon-snake form where each head effectively grants the user an extra life.",
    history: "Kurozumi Orochi, the corrupt shogun who conspired with Kaido to seize control of Wano and betray the Kozuki clan, used this fruit's multiple 'lives' to survive assassination attempts for two decades. Each of his eight heads had to be destroyed in turn during his final battle against the people he oppressed, a fittingly drawn-out end for a tyrant who ruled through fear and starvation.",
    powers: [
      "Transformation into an eight-headed serpent-dragon hybrid",
      "Each head functions as an independent 'life,' making the user very hard to kill outright",
      "Venomous bite and constricting serpentine attacks"
    ],
    strengths: "Effectively grants multiple lives in battle, requiring an opponent to defeat all heads to finish the fight.",
    weaknesses: "Once all heads are destroyed, the user has no further recourse; each individual head is not dramatically tougher than an ordinary fighter.",
    users: [{ id: 'kurozumi-orochi', status: 'Former user (deceased)' }]
  },
  {
    id: 'inu-inu-no-mi-model-okuchi-no-makami', name: 'Inu Inu no Mi, Model: Okuchi no Makami', englishName: 'Dog-Dog Fruit, Model: Guardian Deity Wolf',
    category: 'Zoan', subtype: 'Mythical Zoan', awakened: false, icon: '🐺',
    meaning: '"Inu" — dog; Okuchi no Makami, a wolf deity of Japanese legend',
    tagline: "A Mythical Zoan granting transformation into a legendary ice-wielding wolf deity.",
    description: "A rare Mythical Zoan modeled after a guardian wolf deity of Japanese folklore, granting a massive wolf transformation with control over ice and snow.",
    history: "Yamato, child of Kaido, ate this fruit and used its guardian-deity nature as inspiration to reject the identity Kaido tried to force on them, choosing instead to live as Kozuki Oden, the man Yamato idolized after reading his journal as a child. Imprisoned for years for repeated attempts to leave Wano and honor Oden's promise to open the borders, Yamato broke free during the raid on Onigashima and fought alongside the Akazaya Nine to help end Kaido's reign.",
    powers: [
      "Full transformation into a colossal guardian wolf",
      "Ice-based breath and attacks",
      "Enhanced strength and durability befitting a legendary guardian spirit"
    ],
    strengths: "Combines Mythical Zoan raw power with elemental ice attacks, rare among Zoan fruits.",
    weaknesses: "As with other large Zoan forms, size can be a liability in tight quarters.",
    users: [{ id: 'yamato', status: 'Current user' }]
  },
  {
    id: 'horu-horu-no-mi', name: 'Horu Horu no Mi', englishName: 'Hormone-Hormone Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '💉',
    meaning: '"Horu(mon)" — hormone',
    tagline: "Lets the user inject hormones into themselves or others, altering emotions, healing, growth, and even sex.",
    description: "A Paramecia fruit granting mastery over hormone injection, capable of rapid healing, radical body alteration, emotional manipulation, and changing a person's biological sex at will.",
    history: "Emporio Ivankov rules Kamabakka Kingdom and serves as a top Revolutionary Army commander, using this fruit's medical applications to run an entire underground hospital for escaped Impel Down prisoners. Ivankov's Death Wink hormone injection saved Luffy's life after the trauma of witnessing Ace's death, restarting his stopped heart when all conventional options had failed.",
    powers: [
      "Rapid wound healing and stamina restoration via hormone injection",
      "Changing a person's biological sex at will (Face Growth, Death Wink)",
      "Emotional and hormonal manipulation of allies or enemies",
      "Drastically altering body size and musculature temporarily"
    ],
    strengths: "Extremely versatile medical and combat applications, capable of near-miraculous emergency healing.",
    weaknesses: "The most extreme techniques carry real risk to the recipient if used incorrectly or excessively.",
    users: [{ id: 'emporio-ivankov', status: 'Current user' }]
  },
  {
    id: 'neko-neko-no-mi-model-leopard', name: 'Neko Neko no Mi, Model: Leopard', englishName: 'Cat-Cat Fruit, Model: Leopard',
    category: 'Zoan', subtype: null, awakened: false, icon: '🐆',
    meaning: '"Neko" — cat',
    tagline: "Grants a hybrid and full transformation into a leopard, combined with elite martial arts.",
    description: "A Zoan fruit granting leopard-based transformation, prized for speed and lethal claw-based strikes, especially devastating in the hands of a Rokushiki master.",
    history: "Rob Lucci wielded this fruit as CP9's most dangerous agent during the Water 7 and Enies Lobby arcs, nearly killing Luffy in a battle that pushed the young captain to his physical limits. Lucci's continued service to the World Government's CP0 resurfaced years later during the Egghead Incident, proving his loyalty to 'justice,' however brutal, never wavered.",
    powers: [
      "Human, hybrid, and full leopard transformations",
      "Combined with all six Rokushiki techniques (Soru, Shigan, Rankyaku, Geppo, Kami-e, Rokuogan)",
      "Enhanced speed, claws, and reflexes in hybrid form"
    ],
    strengths: "The combination of Zoan physicality with Rokushiki mastery makes Lucci one of the deadliest melee fighters in the series.",
    weaknesses: "Relies heavily on close-range engagement, where Rokushiki and claws are most effective.",
    users: [{ id: 'rob-lucci', status: 'Current user' }]
  },
  {
    id: 'ushi-ushi-no-mi-model-giraffe', name: 'Ushi Ushi no Mi, Model: Giraffe', englishName: 'Ox-Ox Fruit, Model: Giraffe',
    category: 'Zoan', subtype: null, awakened: false, icon: '🦒',
    meaning: '"Ushi" — ox (used broadly for large hoofed animals)',
    tagline: "Grants a hybrid and full transformation into a giraffe, useful for reach and momentum-based strikes.",
    description: "A Zoan fruit granting giraffe-based transformation, providing significant reach advantages in hybrid form.",
    history: "Kaku spent years undercover as a Galley-La shipwright on Water 7 before revealing himself as a CP9 agent alongside Rob Lucci during the Enies Lobby arc. His giraffe hybrid form, combined with Rokushiki mastery, gives him unusual reach for a close-combat specialist.",
    powers: [
      "Human, hybrid, and full giraffe transformations",
      "Extended reach and momentum-based strikes in hybrid form",
      "Combined with Rokushiki techniques"
    ],
    strengths: "Reach advantage in hybrid form pairs unusually well with Rokushiki's speed-based techniques.",
    weaknesses: "Full giraffe form trades combat utility for size, rarely used in serious fights.",
    users: [{ id: 'kaku', status: 'Current user' }]
  },
  {
    id: 'goro-goro-no-mi', name: 'Goro Goro no Mi', englishName: 'Rumble-Rumble Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '⚡',
    meaning: '"Goro Goro" — the rumble of thunder',
    tagline: "Grants a body of living lightning, one of the fastest and most destructive known Logia powers.",
    description: "A Logia fruit letting the user become, generate, and control electricity, capable of near-instant travel along conductive material and devastating lightning-based attacks.",
    history: "Enel used this fruit to declare himself 'god' of the sky island Skypiea, ruling through a combination of raw lightning power and Mantra, an advanced form of Observation Haki that let him predict attacks before they happened. His reign ended the moment he faced Luffy, whose rubber body is naturally immune to electricity — the one common weakness his power could never account for. Exiled from Skypiea, Enel now explores the ruins of the moon in search of humanity's next frontier.",
    powers: [
      "Full transformation into lightning, immune to most physical attacks",
      "El Thor and other massive lightning-strike attacks",
      "Near-instant travel through conductive material",
      "Mantra: advanced precognitive Observation Haki"
    ],
    strengths: "Extreme speed and raw destructive power, further enhanced by near-perfect precognition through Mantra.",
    weaknesses: "Immunity to rubber-bodied opponents like Luffy, whose lack of conductivity nullifies the fruit's electric attacks entirely.",
    users: [{ id: 'enel', status: 'Current user' }]
  },
  {
    id: 'baku-baku-no-mi', name: 'Baku Baku no Mi', englishName: 'Munch-Munch Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🍽️',
    meaning: '"Baku Baku" — the sound of chomping/munching',
    tagline: "Lets the user devour almost anything and fuse it into their own body.",
    description: "A Paramecia fruit granting the ability to eat and absorb virtually any object — weapons, walls, even other people — fusing them into the user's own body to gain their properties.",
    history: "Wapol, the deposed and gluttonous king of Drum Island, used this fruit to fuse cannons, castle gates, and weapons directly into his body, turning himself into a walking arsenal. His cowardice and greed made him a relatively minor threat compared to later villains, but his tyranny over Drum Island set the stage for Chopper's introduction to the Straw Hats.",
    powers: [
      "Devouring and absorbing objects, weapons, or materials into the user's body",
      "Combining absorbed items to create new fused forms",
      "Temporarily gaining the properties of whatever is absorbed (sharpness, hardness, etc.)"
    ],
    strengths: "Extremely adaptable — can theoretically gain almost any physical property by eating the right object.",
    weaknesses: "Absorbed forms are often unwieldy and can be defeated by targeting the user's underlying vulnerabilities, particularly cowardice-driven poor tactics in Wapol's case.",
    users: [{ id: 'wapol', status: 'Current user' }]
  },
  {
    id: 'noro-noro-no-mi', name: 'Noro Noro no Mi', englishName: 'Slow-Slow Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🐌',
    meaning: '"Noro Noro" — sluggishly, slowly',
    tagline: "Emits a beam that slows anything it touches to a crawl for thirty seconds.",
    description: "A Paramecia fruit that fires a 'Noro Noro Beam,' slowing anything it hits — people, objects, even projectiles — to a fraction of their normal speed for a fixed thirty-second window.",
    history: "Foxy used this fruit as the core trick behind his 'Davy Back Fight' ship-and-crew wagering games, slowing opponents just enough to cheat his way to victory without ever needing to fight fair. He briefly won Nico Robin away from the Straw Hats in one such game before Luffy reversed the beam back onto him and reclaimed her, humiliating Foxy in the process.",
    powers: [
      "Firing a beam that slows any struck target to a crawl for thirty seconds",
      "Can be reflected off mirrored or reflective surfaces back onto the user",
      "Effective on objects, projectiles, and living beings alike"
    ],
    strengths: "Extremely disruptive in a fight, opening large windows for follow-up attacks against a slowed target.",
    weaknesses: "The beam can be reflected back at the user with a mirror, and its effect is strictly time-limited.",
    users: [{ id: 'foxy', status: 'Current user' }]
  },
  {
    id: 'gasu-gasu-no-mi', name: 'Gasu Gasu no Mi', englishName: 'Gas-Gas Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '☁️',
    meaning: '"Gasu" — gas',
    tagline: "Grants a body of living gas, capable of generating explosive or toxic clouds at will.",
    description: "A Logia fruit letting the user become, generate, and control gas, useful for both toxic area-denial and, when ignited, explosive attacks.",
    history: "Caesar Clown, a former Marine scientist turned rogue weapons developer, used this fruit's toxic gas to devastate Punk Hazard, experimenting on kidnapped children in the process. His partnership with Doflamingo to mass-produce chemical weapons made him a target for both Law and the Straw Hats, ending in his forced, resentful cooperation with Vegapunk's research team.",
    powers: [
      "Full transformation into gas, immune to most physical attacks",
      "Generating large-scale toxic gas clouds",
      "Igniting gas clouds for explosive area attacks",
      "Compressing gas into concentrated blasts"
    ],
    strengths: "Excellent area-denial and crowd-incapacitation potential through toxicity alone.",
    weaknesses: "Vulnerable to strong winds dispersing the gas, and to Haki-based attacks like all Logia.",
    users: [{ id: 'caesar-clown', status: 'Current user' }]
  },
  {
    id: 'hira-hira-no-mi', name: 'Hira Hira no Mi', englishName: 'Flap-Flap Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🎴',
    meaning: '"Hira Hira" — the fluttering of flat, thin objects',
    tagline: "Lets the user flatten objects and people into two-dimensional, malleable sheets.",
    description: "A Paramecia fruit that turns anything the user's cloak touches into a flat, two-dimensional object, which can then be folded, hidden, or repositioned before being restored to three dimensions.",
    history: "Diamante hosted the rigged Corrida Colosseum tournament on Dressrosa, using his fruit both as a showman's gimmick and a genuinely disorienting combat tool, flattening doorways, terrain, and opponents alike to control the battlefield. His scheme to lure and kill the eventual winner of the tournament, secretly the bounty on the Mera Mera no Mi, was foiled when Sabo won and turned the tables.",
    powers: [
      "Flattening any object or person touched by the user's cloak into two dimensions",
      "Folding, hiding, or repositioning flattened targets",
      "Restoring flattened objects to normal at will",
      "Traveling through gaps by flattening the user's own body"
    ],
    strengths: "Extremely disorienting in combat, capable of erasing normal spatial reference points for opponents.",
    weaknesses: "Requires direct contact with the user's cloak to activate the flattening effect.",
    users: [{ id: 'diamante', status: 'Current user' }]
  },
  {
    id: 'beta-beta-no-mi', name: 'Beta Beta no Mi', englishName: 'Sticky-Sticky Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🧪',
    meaning: '"Beta Beta" — sticky, gooey',
    tagline: "Coats the user's body in a corrosive, adhesive mucus that dissolves anything it traps.",
    description: "A Paramecia fruit that generates a viscous, corrosive slime from the user's body, capable of trapping enemies and slowly dissolving whatever it engulfs.",
    history: "Trebol has served the Donquixote Family since Doflamingo's earliest days as a pirate, making him one of the group's most trusted and longest-standing officers. His mucus can trap and corrode anything caught in it, a grotesque but highly effective tool against enemies unable to escape in time.",
    powers: [
      "Generating corrosive, adhesive mucus from the body",
      "Trapping and slowly dissolving anything caught in the slime",
      "Reshaping the mucus into weapons or restraints"
    ],
    strengths: "Highly effective at both restraining and gradually destroying trapped opponents or objects.",
    weaknesses: "The mucus itself moves relatively slowly and can potentially be avoided with speed or cut away before it fully corrodes a target.",
    users: [{ id: 'trebol', status: 'Current user' }]
  },
  {
    id: 'ishi-ishi-no-mi', name: 'Ishi Ishi no Mi', englishName: 'Stone-Stone Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🗿',
    meaning: '"Ishi" — stone',
    tagline: "Lets the user merge with and control stone, up to and including entire mountains.",
    description: "A Paramecia fruit granting the ability to fuse with any stone structure and control it as an extension of the user's own body, on a scale limited mainly by how much stone is available.",
    history: "Pica commanded entire mountainsides of Dressrosa during the rebellion against Doflamingo, fusing with the island's rock formations to create a giant stone battle form nearly as large as the city itself. His command over the terrain made him one of the hardest single obstacles for Luffy and the rebel forces to overcome, requiring Zoro's precision swordsmanship to finally bring him down.",
    powers: [
      "Merging with any stone structure to control it directly",
      "Forming a giant humanoid battle body from surrounding rock",
      "Traveling through solid stone at will"
    ],
    strengths: "Scale is limited only by the amount of stone available, making it devastating on rocky or urban terrain.",
    weaknesses: "Precision strikes that target the user's actual body hidden within the stone form can bypass the power's defenses entirely.",
    users: [{ id: 'pica', status: 'Current user' }]
  },
  {
    id: 'hoya-hoya-no-mi', name: 'Hoya Hoya no Mi', englishName: 'Genie-Genie Fruit... (Toy-Toy Fruit)', englishNameAlt: 'Toy-Toy Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🧸',
    meaning: '"Hoya" — associated with toys/playthings in the fruit\'s effect',
    tagline: "Turns anyone touched into an obedient, memory-erased living toy.",
    description: "A Paramecia fruit that transforms any person touched by the user into a living toy — a soldier, a doll, an animal — stripping their memory of ever being human in the process.",
    history: "Sugar, a child prodigy within the Donquixote Family, used this power to turn hundreds of Dressrosa's citizens into toys over a decade, erasing their memories and identities to keep the kingdom's true state secret from the outside world. Her eventual collapse and resulting amnesia during the rebellion accidentally reverted every one of her victims back to human, undoing years of suffering in a single moment.",
    powers: [
      "Transforming any touched person into a living toy of the user's choosing",
      "Erasing the victim's memory of their former human life",
      "Toy transformations are undone only if the user loses consciousness or dies"
    ],
    strengths: "An extraordinarily quiet, insidious form of control — victims are rarely even aware anything has been taken from them.",
    weaknesses: "All transformations reverse simultaneously the moment the user is knocked unconscious or killed.",
    users: [{ id: 'sugar', status: 'Current user' }]
  },
  {
    id: 'buki-buki-no-mi', name: 'Buki Buki no Mi', englishName: 'Weapon-Weapon Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🔫',
    meaning: '"Buki" — weapon',
    tagline: "Lets the user transform any part of their own body into a weapon.",
    description: "A Paramecia fruit that turns parts of the user's own body — arms, legs, hair — into functional weapons, from swords to firearms to cannons.",
    history: "Baby 5, raised within the Donquixote Family after being abandoned as a child, uses this fruit in combat with a deep, almost desperate need to prove her usefulness to those she serves. Her weaponized limbs make her a genuinely dangerous combatant despite her conflicted loyalties.",
    powers: [
      "Transforming body parts into bladed or firearm-based weapons",
      "Combining multiple weaponized limbs for combo attacks",
      "Firing projectiles directly from transformed limbs"
    ],
    strengths: "Extremely adaptable in combat, able to switch between weapon types instantly without needing to carry gear.",
    weaknesses: "Transformed limbs remain vulnerable to the same damage an ordinary weapon would take.",
    users: [{ id: 'baby-5', status: 'Current user' }]
  },
  {
    id: 'bari-bari-no-mi', name: 'Bari Bari no Mi', englishName: 'Barrier-Barrier Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🛡️',
    meaning: '"Bari Bari" — a crackling, barrier-like sound',
    tagline: "Lets the user generate unbreakable barriers anywhere around them at will.",
    description: "A Paramecia fruit granting the ability to conjure barriers strong enough to block virtually any attack, from bullets to Haki-imbued strikes, at a range limited only by the user's control.",
    history: "Bartolomeo, an obsessive fan of the Straw Hats since long before meeting them, used this fruit's near-impenetrable barriers to survive and thrive at the brutal Corrida Colosseum tournament on Dressrosa. His barriers later helped protect the Straw Hat Grand Fleet and allies during several large-scale conflicts in the New World.",
    powers: [
      "Generating barriers strong enough to block most physical and Haki-based attacks",
      "Shaping barriers into offensive projectiles (Barrier Cannon)",
      "Barriers can be formed around allies as well as the user"
    ],
    strengths: "Near-total defensive coverage against a huge range of attack types, both physical and supernatural.",
    weaknesses: "Sufficiently powerful, focused attacks (such as from top-tier Haki users) can still eventually break through.",
    users: [{ id: 'bartolomeo', status: 'Current user' }]
  },
  {
    id: 'ryu-ryu-no-mi-model-allosaurus', name: 'Ryu Ryu no Mi, Model: Allosaurus', englishName: 'Dragon-Dragon Fruit, Model: Allosaurus',
    category: 'Zoan', subtype: 'Ancient Zoan', awakened: false, icon: '🦖',
    meaning: '"Ryu" — dragon (used broadly for prehistoric reptiles)',
    tagline: "An Ancient Zoan granting a ferocious allosaurus transformation.",
    description: "A prehistoric Ancient Zoan fruit granting transformation into an allosaurus, prized for raw predatory strength and bite force.",
    history: "X Drake, a former Marine Vice Admiral, staged an elaborate years-long undercover operation as a Worst Generation pirate captain, using his allosaurus form to maintain his cover among the New World's most dangerous rookies. His true Marine loyalties resurfaced during the Wano campaign against Kaido.",
    powers: [
      "Human, hybrid, and full allosaurus transformations",
      "Powerful bite and claw-based attacks",
      "Enhanced predatory speed and strength in hybrid form"
    ],
    strengths: "Raw physical power and bite force make it a strong straightforward brawling transformation.",
    weaknesses: "Less specialized than fruits with elemental or ranged capabilities, relying mainly on physical strength.",
    users: [{ id: 'x-drake', status: 'Current user' }]
  },
  {
    id: 'wara-wara-no-mi', name: 'Wara Wara no Mi', englishName: 'Straw-Straw Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🎎',
    meaning: '"Wara" — straw',
    tagline: "Lets the user transfer damage from their own body into straw effigies bound to them.",
    description: "A Paramecia fruit that creates straw voodoo dolls linked to the user's own body, transferring any damage the dolls take away from the user, and vice versa when used offensively on marked targets.",
    history: "Basil Hawkins, a stoic tarot-reading captain of the 'Worst Generation,' uses this fruit to make himself extraordinarily difficult to kill outright, since damage can be diverted into straw effigies rather than his real body. Hawkins later merged his crew into Eustass Kid's alliance during the assault on Onigashima, betting his own survival on the odds he reads before every fight.",
    powers: [
      "Transferring damage from the user's body into linked straw dolls",
      "Creating effigies of other people to transfer damage onto them instead",
      "Straw-based defensive and offensive constructs"
    ],
    strengths: "Extremely difficult to kill outright, since fatal damage can often be redirected away from the user's real body.",
    weaknesses: "Requires maintaining and protecting the straw dolls themselves; destroying all linked effigies removes the protection.",
    users: [{ id: 'basil-hawkins', status: 'Current user' }]
  },
  {
    id: 'shiro-shiro-no-mi', name: 'Shiro Shiro no Mi', englishName: 'Castle-Castle Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🏰',
    meaning: '"Shiro" — castle',
    tagline: "Turns the user's body into a mobile fortress capable of housing an entire crew.",
    description: "A Paramecia fruit that transforms the user into a walking fortress, complete with interior space large enough to shelter dozens of people and cannons mounted along the exterior.",
    history: "Capone 'Gang' Bege, a mafia-style pirate captain, used this fruit to smuggle his entire Fire Tank Pirates crew inside his own body during a secret assassination plot against Big Mom at Whole Cake Island, working alongside the Straw Hats and Vinsmoke family without ever fully revealing his own agenda.",
    powers: [
      "Transforming the body into a mobile, armed fortress",
      "Housing an entire crew safely within the fortress interior",
      "Mounted cannon attacks fired from the fortress exterior"
    ],
    strengths: "Extremely useful for covert transport and as a mobile base of operations mid-battle.",
    weaknesses: "The fortress form is a large, relatively slow-moving target compared to the user's normal body.",
    users: [{ id: 'capone-bege', status: 'Current user' }]
  },
  {
    id: 'jiki-jiki-no-mi', name: 'Jiki Jiki no Mi', englishName: 'Magnet-Magnet Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🧲',
    meaning: '"Jiki" — magnetism',
    tagline: "Grants control over magnetic force, able to assemble giant weapons from scrap metal.",
    description: "A Paramecia fruit granting control over magnetism, letting the user attract, repel, and assemble metal objects into massive improvised weapons.",
    history: "Eustass Kid, one of the most violent captains of the 'Worst Generation,' built his reputation on tearing apart enemy ships and assembling their metal wreckage into giant fists and cannons. His brutal, take-no-prisoners approach eventually carried him to Yonko-adjacent status, forging an uneasy alliance with Luffy and Law against Kaido and Big Mom.",
    powers: [
      "Attracting and repelling metal objects at will",
      "Assembling scrap metal into giant weaponized limbs (Punk Rock, Damned Punk)",
      "Magnetic manipulation of enemies' metal weapons and armor"
    ],
    strengths: "Can generate overwhelming firepower on the fly from any metal debris in the environment.",
    weaknesses: "Effectiveness is heavily reduced in areas without significant metal to manipulate.",
    users: [{ id: 'eustass-kid', status: 'Current user' }]
  },
  {
    id: 'nobu-nobu-no-mi', name: 'Nobu Nobu no Mi', englishName: 'Spring-Spring Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🌀',
    meaning: '"Nobu(iru)" — to stretch/extend',
    tagline: "Turns the user's limbs into springs, launching devastating rebound attacks.",
    description: "A Paramecia fruit that turns the user's body into springs, allowing powerful compressed-and-released strikes and enhanced jumping mobility.",
    history: "Bellamy mocked Luffy's dream of finding the One Piece before being humiliated in a one-sided fight that shattered his own arrogance. He later resurfaced as a subordinate of Donquixote Doflamingo, given a second chance to prove himself loyal after his old crew's collapse.",
    powers: [
      "Transforming limbs into springs for powerful rebound strikes",
      "Enhanced jumping and mobility via spring-loaded legs",
      "Storing kinetic energy for a single explosive release"
    ],
    strengths: "Compressed spring attacks can deliver surprising one-hit knockout power for a relatively minor fruit.",
    weaknesses: "Requires a wind-up to fully charge the spring effect, telegraphing the attack.",
    users: [{ id: 'bellamy', status: 'Current user' }]
  },
  {
    id: 'doku-doku-no-mi', name: 'Doku Doku no Mi', englishName: 'Poison-Poison Fruit',
    category: 'Logia', subtype: null, awakened: false, icon: '☠️',
    meaning: '"Doku" — poison',
    tagline: "Grants a body of living poison, potent enough to dissolve nearly anything.",
    description: "A Logia fruit letting the user become, generate, and control poison of varying potency, from mild toxins to a hyper-concentrated acid capable of dissolving almost any material.",
    history: "Magellan has served as Impel Down's chief warden for years, his poison powerful enough to be genuinely dangerous even to his own body, requiring frequent, humiliating bouts of self-poisoning digestive trouble as an ironic side effect. His overwhelming toxicity made the great prison break one of the most dangerous operations any of its participants, including Luffy, ever survived.",
    powers: [
      "Full transformation into poison, immune to most physical attacks",
      "Hydra: a massive multi-headed poison serpent attack",
      "Venom Demon: a maximum-potency full-body poison state",
      "Corroding and dissolving nearly any material on contact"
    ],
    strengths: "Among the most lethal Logia fruits purely in terms of the toxicity of what the user's body becomes.",
    weaknesses: "The poison's potency ironically affects the user's own digestive system, a recurring vulnerability for Magellan specifically.",
    users: [{ id: 'magellan', status: 'Current user' }]
  },
  {
    id: 'mato-mato-no-mi', name: 'Mato Mato no Mi', englishName: 'Mark-Mark Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🎯',
    meaning: '"Mato" — target',
    tagline: "Lets the user hurl any object at a marked target, no matter the distance, guaranteeing a hit.",
    description: "A Paramecia fruit that lets the user place an invisible mark on any target they have seen; any object subsequently thrown by the user will unerringly track and strike that marked target, regardless of distance or obstacles.",
    history: "Vander Decken IX has spent a decade obsessively 'courting' Princess Shirahoshi of Fishman Island from a distance, using this fruit to hurl massive objects — ships, buildings, icebergs — across vast stretches of ocean directly at her, undeterred by her repeated refusals or the risk to bystanders.",
    powers: [
      "Marking any previously seen target for guaranteed tracking hits",
      "Thrown objects of any size will curve and travel to strike a marked target",
      "Effective across extreme distances, limited mainly by the size of available objects"
    ],
    strengths: "Guarantees a hit on any marked target regardless of distance, cover, or evasive movement.",
    weaknesses: "Marks can potentially be transferred or the projectile intercepted before reaching the intended target.",
    users: [{ id: 'vander-decken-ix', status: 'Current user' }]
  },
  {
    id: 'nagi-nagi-no-mi', name: 'Nagi Nagi no Mi', englishName: 'Calm-Calm Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '🔇',
    meaning: '"Nagi" — calm, still (as in still water/silence)',
    tagline: "Lets the user create a soundproof field of total silence around any area.",
    description: "A Paramecia fruit that generates a bubble of absolute silence, blocking all sound from entering or escaping a chosen area — useful for stealth, ambush, or, as Corazon showed, saving lives under the cover of total quiet.",
    history: "Rosinante, working undercover inside his own brother Doflamingo's crew as a Marine intelligence agent, used this fruit's silence to secretly cure Trafalgar Law of the Amber Lead Syndrome and to signal Sengoku with critical intelligence, all without his cover being blown. His final act — using the silence field to protect Law and the stolen Ope Ope no Mi during a desperate escape — cost him his life but saved the boy who would carry his legacy forward.",
    powers: [
      "Generating a soundproof field of total silence around a targeted area",
      "Blocking all sound from entering or escaping the silenced zone",
      "Useful for covert operations, ambushes, and hiding critical information exchanges"
    ],
    strengths: "Perfect stealth utility, letting the user act, speak, or move without any risk of being overheard.",
    weaknesses: "Provides no direct offensive or defensive combat power on its own, relying entirely on tactical application.",
    users: [{ id: 'rosinante', status: 'Former user (deceased; used it to protect Law and the Ope Ope no Mi)' }]
  },
  {
    id: 'toshi-toshi-no-mi', name: 'Toshi Toshi no Mi', englishName: 'Age-Age Fruit',
    category: 'Paramecia', subtype: null, awakened: false, icon: '⏱️',
    meaning: '"Toshi" — age/years',
    tagline: "Lets the user alter their own age at will, from infancy to elderly, instantly shifting their physical capabilities.",
    description: "A Paramecia fruit that grants control over the user's own biological age, shifting instantly between a toddler's small frame, an adult's peak strength, or an elder's frailty — each state carrying different physical trade-offs.",
    history: "Jewelry Bonney, daughter of the mechanized former Warlord Bartholomew Kuma, has used this fruit both to survive and to protect her father, most dramatically during the assault on Egghead Island where she pushed the fruit's age-shifting to its most desperate extremes to save him from the World Government's forces.",
    powers: [
      "Shifting the user's own age between infant, child, adult, and elderly states at will",
      "Adult forms grant significant boosts to physical strength and size",
      "Elderly or infant states carry their own situational advantages and drawbacks"
    ],
    strengths: "Extreme physical flexibility — the user can adapt their own body to whatever a situation demands, from raw strength to small-target evasion.",
    weaknesses: "Age states carry real physical trade-offs; prolonged use at extremes can be exhausting or risky to sustain.",
    users: [{ id: 'jewelry-bonney', status: 'Current user' }]
  },
  {
    id: 'hito-hito-no-mi-model-daibutsu', name: 'Hito Hito no Mi, Model: Daibutsu', englishName: 'Human-Human Fruit, Model: Great Buddha',
    category: 'Zoan', subtype: 'Mythical Zoan', awakened: false, icon: '🗿',
    meaning: '"Hito" — human; Daibutsu, a Great Buddha statue',
    tagline: "A Mythical Zoan granting transformation into a colossal golden Buddha.",
    description: "A rare Mythical Zoan fruit granting transformation into a giant golden Buddha-like being, capable of devastating shockwave attacks and immense physical scale.",
    history: "Sengoku wielded this fruit throughout his tenure as the Marines' Fleet Admiral, using its imposing golden form during the war at Marineford to help contain Whitebeard's assault. He carries the weight of that war's outcome — including Ace and Whitebeard's deaths — long after stepping down from active duty.",
    powers: [
      "Full transformation into a massive golden Buddha figure",
      "Shockwave palm strikes capable of leveling large areas",
      "Significant size and durability boost in transformed state"
    ],
    strengths: "Combines huge physical scale with air-splitting shockwave attacks, ideal for large-scale battlefield control.",
    weaknesses: "The form's size can be unwieldy in enclosed spaces or against fast, evasive opponents.",
    users: [{ id: 'sengoku', status: 'Current user' }]
  }
];
