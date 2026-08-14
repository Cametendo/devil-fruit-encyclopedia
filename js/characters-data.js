/* One Piece Wiki — Character dataset (100 characters).
   Each entry links to a Devil Fruit page via `devilFruit` (id into FRUITS), or null if none. */

const CHARACTERS = [
  {
    id: 'monkey-d-luffy', name: 'Monkey D. Luffy', epithet: 'Straw Hat',
    affiliation: 'Straw Hat Pirates', role: 'Captain', origin: 'Foosha Village, East Blue',
    age: 19, height: '174 cm', birthday: 'May 5', bounty: 3000000000, status: 'Alive',
    devilFruit: 'gomu-gomu-no-mi', firstAppearance: 'Chapter 1, "Romance Dawn"',
    abilities: ['Gomu Gomu no Mi / Nika Awakening', "Conqueror's Haki", 'Armament Haki', 'Observation Haki', 'Gear 2, 3, 4 & 5'],
    bio: 'The rubber-bodied captain of the Straw Hat Pirates, sailing to find the One Piece and become King of the Pirates. Raised in spirit by Shanks and Garp, Luffy leads through sheer conviction and an unbreakable loyalty to his crew. His awakening of the Gomu Gomu no Mi revealed its true identity as the mythical Human-Human Model: Nika, the "Sun God" fruit said to herald the world\'s liberation.'
  },
  {
    id: 'roronoa-zoro', name: 'Roronoa Zoro', epithet: 'Pirate Hunter',
    affiliation: 'Straw Hat Pirates', role: 'Combatant / Swordsman', origin: 'Shimotsuki Village, East Blue',
    age: 21, height: '181 cm', birthday: 'November 11', bounty: 1111000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 3, "Romance Dawn"',
    abilities: ['Santoryu (Three-Sword Style)', 'Armament Haki (advanced, Conqueror\'s-level durability)', 'Observation Haki', 'Ittoryu techniques'],
    bio: 'The Straw Hats\' swordsman, honor-bound to become the World\'s Strongest Swordsman in memory of his late friend and rival Kuina. Zoro wields three blades at once, including the legendary black sword Enma, and treats every wound taken for his captain as the cost of his own ambition. His near-fatal duel with Dracule Mihawk before the timeskip forged him into one of the crew\'s heaviest hitters.'
  },
  {
    id: 'nami', name: 'Nami', epithet: 'Cat Burglar',
    affiliation: 'Straw Hat Pirates', role: 'Navigator', origin: 'Cocoyview Village, East Blue',
    age: 20, height: '170 cm', birthday: 'July 3', bounty: 366000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 8, "Friends"',
    abilities: ['Master navigation & weather prediction', 'Clima-Tact / Zeus (sentient cloud, formerly Big Mom\'s)', 'Thunder Lance Tempo, Weather Egg'],
    bio: 'A brilliant navigator who once worked for the fishman pirate Arlong before Luffy freed her village. Nami charts the Straw Hats\' course across the Grand Line with an unmatched read of the weather, and fights with a staff powered by Zeus, a living cloud she inherited from Big Mom. Her dream is to draw a complete map of the world.'
  },
  {
    id: 'usopp', name: 'Usopp', epithet: 'God / Sogeking',
    affiliation: 'Straw Hat Pirates', role: 'Sniper', origin: 'Syrup Village, East Blue',
    age: 19, height: '176 cm', birthday: 'April 1', bounty: 500000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 23, "The Great Liar Usopp"',
    abilities: ['Master marksmanship (Kabuto slingshot)', 'Pop Greens (plant-based ammunition)', 'Observation Haki', 'Engineering & explosives'],
    bio: 'The Straw Hats\' sharpshooter and self-styled "brave warrior of the sea," son of Red-Haired Shanks\' crewmate Yasopp. Usopp grew from a compulsive liar into a genuinely courageous fighter, using invented Pop Green ammunition and precision Haki-infused shots to punch above his weight. His running feud with pride and fear has made him one of the crew\'s most human arcs.'
  },
  {
    id: 'vinsmoke-sanji', name: 'Vinsmoke Sanji', epithet: 'Black Leg',
    affiliation: 'Straw Hat Pirates', role: 'Cook', origin: 'Germa Kingdom / East Blue',
    age: 21, height: '180 cm', birthday: 'March 2', bounty: 1032000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 43, "Sanji, the Politeness King"',
    abilities: ['Black Leg Style (kick-based combat)', 'Diable Jambe (fire kicks)', 'Armament & Observation Haki', 'Raid Suit (Germa technology)'],
    bio: 'The Straw Hats\' cook and youngest son of the Vinsmoke royal family, who fled his engineered upbringing to become a chef who never uses his hands in a fight, refusing to damage the tools that feed people. His Diable Jambe technique lets him fight with fire-hardened kicks, and his genetic modifications grant him an exoskeleton and heat resistance he long tried to hide.'
  },
  {
    id: 'tony-tony-chopper', name: 'Tony Tony Chopper', epithet: 'Cotton Candy Lover',
    affiliation: 'Straw Hat Pirates', role: 'Doctor', origin: 'Drum Island',
    age: 17, height: '90 cm (human form varies)', birthday: 'December 24', bounty: 1000, status: 'Alive',
    devilFruit: 'hito-hito-no-mi', firstAppearance: 'Chapter 172, "Doctor"',
    abilities: ['Hito Hito no Mi (multiple hybrid forms)', 'Rumble Ball (forced transformations)', 'Monster Point'],
    bio: 'A reindeer who ate the Human-Human Fruit and became the Straw Hats\' doctor after training under Dr. Kureha on Drum Island. Chopper shifts between seven forms using his devil fruit and the dangerous Rumble Ball drug, culminating in the monstrous Monster Point. His bounty of a mere 1,000 berries is a running joke, set by marines who refused to believe a "tanuki" could be dangerous.'
  },
  {
    id: 'nico-robin', name: 'Nico Robin', epithet: 'Devil Child / Demon Child',
    affiliation: 'Straw Hat Pirates', role: 'Archaeologist', origin: 'Ohara, West Blue',
    age: 30, height: '188 cm', birthday: 'February 6', bounty: 930000000, status: 'Alive',
    devilFruit: 'hana-hana-no-mi', firstAppearance: 'Chapter 114, "Vivi\'s Chart"',
    abilities: ['Hana Hana no Mi (Dorei/Gigantesco Mano fusions)', 'Archaeology & Poneglyph reading', 'Observation Haki'],
    bio: 'The last survivor of the scholarly island of Ohara, hunted for decades for her ability to read Poneglyphs and her dream of uncovering the True History. Robin\'s Hana Hana no Mi lets her sprout limbs anywhere in range, and her later mastery of giant fused-limb techniques makes her one of the crew\'s most versatile fighters. She finally found a family willing to say "I want to live" with her.'
  },
  {
    id: 'franky', name: 'Franky', epithet: 'Cyborg',
    affiliation: 'Straw Hat Pirates', role: 'Shipwright', origin: 'South Blue',
    age: 36, height: '240 cm', birthday: 'March 9', bounty: 394000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 328, "Adventure in Water Seven"',
    abilities: ['Cyborg body modifications', 'General Franky (giant battle form)', 'Coup de Vent, Radical Beam', 'Shipwright mastery (built the Thousand Sunny)'],
    bio: 'The self-modified cyborg shipwright who built the Thousand Sunny, successor to the legendary Tom\'s Workers of Water 7. Franky rebuilt his own body after a near-fatal train accident and has kept upgrading it ever since, from cola-powered cannons to the giant battle-armor form General Franky. He is fiercely protective of ships as living things deserving respect.'
  },
  {
    id: 'brook', name: 'Brook', epithet: 'Soul King',
    affiliation: 'Straw Hat Pirates', role: 'Musician', origin: 'West Blue (Brook Pirates)',
    age: 90, height: '277 cm', birthday: 'April 3', bounty: 383000000, status: 'Alive',
    devilFruit: 'yomi-yomi-no-mi', firstAppearance: 'Chapter 442, "The Man Who Once Died"',
    abilities: ['Yomi Yomi no Mi (soul manipulation)', 'Swordsmanship (Soul Solid)', 'Devil Fruit-enhanced cold resistance', 'Music'],
    bio: 'A skeleton musician who died decades ago and was returned to life by the Yomi Yomi no Mi after his soul found its way back to his bones, alone for fifty years before meeting the Straw Hats. Brook combines swordsmanship with soul-freezing techniques and never fails to offer to show a lady his panties — which is moot, since he has no skin. His music keeps the memory of his old crew alive.'
  },
  {
    id: 'jinbe', name: 'Jinbe', epithet: 'Knight of the Sea',
    affiliation: 'Straw Hat Pirates', role: 'Helmsman', origin: 'Fishman Island',
    age: 46, height: '301 cm', birthday: 'April 2', bounty: 1100000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 528, "Whitebeard vs. Blackbeard"',
    abilities: ['Fish-Man Karate', 'Water-based combat (Fishman physiology)', 'Armament & Observation Haki'],
    bio: 'A former Warlord of the Sea and Sun Pirates captain who fought to protect fishman-human relations his whole life. Jinbe stood with Whitebeard at Marineford and later joined the Straw Hats as their helmsman, bringing decades of experience and Fish-Man Karate that can shatter the sea itself with a punch.'
  },
  {
    id: 'portgas-d-ace', name: 'Portgas D. Ace', epithet: 'Fire Fist',
    affiliation: 'Whitebeard Pirates (2nd Division Commander)', role: 'Commander', origin: 'South Blue (born at sea)',
    age: 20, height: '185 cm', birthday: 'January 1', bounty: 550000000, status: 'Deceased',
    devilFruit: 'mera-mera-no-mi', firstAppearance: 'Chapter 154, "Fire Fist Ace"',
    abilities: ['Mera Mera no Mi (fire generation)', "Conqueror's Haki", 'Armament Haki', 'Hiken (Fire Fist)'],
    bio: 'The son of Pirate King Gol D. Roger, raised alongside Luffy and Sabo as sworn brothers, who became Whitebeard\'s Second Division Commander. Ace wielded the Mera Mera no Mi with reckless confidence until he died at Marineford shielding Luffy from Akainu\'s magma fist, a loss that reshaped the entire war and the Straw Hats\' journey afterward.'
  },
  {
    id: 'sabo', name: 'Sabo', epithet: 'Chief of Staff',
    affiliation: 'Revolutionary Army', role: 'Chief of Staff', origin: 'Goa Kingdom, East Blue',
    age: 22, height: '187 cm', birthday: 'March 20', bounty: null, status: 'Alive',
    devilFruit: 'mera-mera-no-mi', firstAppearance: 'Chapter 583, "Sabo" (flashback earlier)',
    abilities: ["Mera Mera no Mi (inherited)", "Conqueror's Haki", 'Armament Haki', 'Dragon Claw (martial arts)'],
    bio: 'The third sworn brother of Luffy and Ace, believed dead for years after a Celestial Dragon shot down his boat, but secretly rescued and raised into the Revolutionary Army\'s Chief of Staff. Sabo inherited the Mera Mera no Mi after Ace\'s death at Marineford, and now fights for the Revolutionaries\' cause of dismantling the World Government.'
  },
  {
    id: 'shanks', name: 'Shanks', epithet: 'Red-Haired',
    affiliation: 'Red Hair Pirates', role: 'Captain / Yonko', origin: 'West Blue',
    age: 41, height: '199 cm', birthday: 'March 9', bounty: 4048900000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 1, "Romance Dawn"',
    abilities: ["Conqueror's Haki (advanced)", 'Swordsmanship', 'Advanced Armament & Observation Haki'],
    bio: 'One of the Four Emperors of the sea and the man who gave young Luffy his straw hat, sacrificing an arm to a sea king to save him. Shanks\' calm, easygoing demeanor masks a swordsman powerful enough to stare down Whitebeard and end the Marineford war with a word. His true agenda remains one of the story\'s biggest mysteries.'
  },
  {
    id: 'trafalgar-law', name: 'Trafalgar D. Water Law', epithet: 'Surgeon of Death',
    affiliation: 'Heart Pirates', role: 'Captain', origin: 'Flevance, North Blue',
    age: 26, height: '191 cm', birthday: 'October 6', bounty: 3000000000, status: 'Alive',
    devilFruit: 'ope-ope-no-mi', firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Ope Ope no Mi (ROOM manipulation)', 'Armament, Observation & Conqueror\'s Haki', 'Nodachi swordsmanship'],
    bio: 'A survivor of the deadly Amber Lead poisoning that destroyed his homeland of Flevance, saved as a child by Rosinante (Corazon), who gave his life protecting Law and the Ope Ope no Mi. Law became a Warlord, then a Yonko-rank captain, using ROOM to perform surgery-like manipulation of anything within its range — including his own trademark Shambles teleportation.'
  },
  {
    id: 'boa-hancock', name: 'Boa Hancock', epithet: 'Pirate Empress',
    affiliation: 'Kuja Pirates', role: 'Empress of Amazon Lily', origin: 'Amazon Lily',
    age: 33, height: '191 cm', birthday: 'September 2', bounty: 1659000000, status: 'Alive',
    devilFruit: 'mero-mero-no-mi', firstAppearance: 'Chapter 516, "Amazon Lily"',
    abilities: ['Mero Mero no Mi (petrification)', "Conqueror's Haki", 'Slave Arrow, Perfume Femur'],
    bio: 'The empress of the all-female island of Amazon Lily and captain of the Kuja Pirates, once a Warlord of the Sea despite carrying the scars of her enslavement as a child at the hands of the World Nobles. Her Mero Mero no Mi turns anyone infatuated with her to stone, but it is her devotion to Luffy, who treated her as a person rather than a weapon, that truly defines her arc.'
  },
  {
    id: 'nefertari-vivi', name: 'Nefertari Vivi', epithet: 'Princess of Alabasta',
    affiliation: 'Kingdom of Alabasta', role: 'Princess', origin: 'Alabasta',
    age: 19, height: '165 cm', birthday: 'February 2', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 92, "Vivi"',
    abilities: ['Peacock Slashers (weighted chain fans)', 'Political leadership & diplomacy'],
    bio: 'The princess of Alabasta who infiltrated Baroque Works undercover to save her kingdom from Crocodile\'s civil-war scheme, sailing with the Straw Hats before staying behind to rebuild her country. Though never an official crew member, her flag remains painted on the Thousand Sunny\'s sail as one of them in spirit.'
  },
  {
    id: 'koby', name: 'Koby', epithet: 'Hero of the Marines',
    affiliation: 'Marines', role: 'Captain (rising rank)', origin: 'East Blue',
    age: 19, height: '166 cm', birthday: 'May 30', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 1, "Romance Dawn"',
    abilities: ["Armament, Observation & Conqueror's Haki", 'Marine swordsmanship & combat training'],
    bio: 'Once Alvida\'s frightened cabin boy, freed by Luffy and inspired to join the Marines to fight for genuine justice. Koby trained under Garp alongside Helmeppo and awakened Conqueror\'s Haki, proving that ordinary resolve can rival the world\'s strongest fighters. His public stand for peace at Marineford earned him both admiration and enemies within the Marine hierarchy.'
  },
  {
    id: 'bartholomew-kuma', name: 'Bartholomew Kuma', epithet: 'Tyrant',
    affiliation: 'Revolutionary Army (formerly Warlord)', role: 'Former King of Sorbet Kingdom', origin: 'Sorbet Kingdom',
    age: 47, height: '689 cm', birthday: 'August 2', bounty: 296000000, status: 'Alive (mechanized)',
    devilFruit: 'nikyu-nikyu-no-mi', firstAppearance: 'Chapter 238, "Fake Straw Hat Crew"',
    abilities: ['Nikyu Nikyu no Mi (repel anything, including pain and fatigue)', 'Immense physical strength'],
    bio: 'A former Revolutionary and king who sold his own body and free will to the World Government to fund his adopted daughter Bonney\'s survival, becoming a near-mindless Pacifista-like weapon. Before losing himself, Kuma quietly used the Nikyu Nikyu no Mi to launch the Straw Hats to safety after the Battle of Marineford, scattering the crew but saving every one of their lives.'
  },
  {
    id: 'bentham', name: 'Bentham', epithet: 'Mr. 2 Bon Clay',
    affiliation: 'Baroque Works (formerly) / Revolutionary Army', role: 'Ballerina / Okama', origin: 'Unknown',
    age: 25, height: '175 cm', birthday: 'July 28', bounty: 78000000, status: 'Deceased',
    devilFruit: 'mane-mane-no-mi', firstAppearance: 'Chapter 101, "Mr. 2 Bon Clay"',
    abilities: ['Mane Mane no Mi (face/body transformation)', 'Ballet-based martial arts (Doriki)'],
    bio: 'A flamboyant former Baroque Works agent who can copy the exact face and voice of anyone he has touched. Bon Clay became one of Luffy\'s truest friends after their duel at Alubarna, later sacrificing his own life force to help the Straw Hats escape Impel Down. He died fighting for the Revolutionary Army, loyal to Luffy until the end.'
  },
  {
    id: 'silvers-rayleigh', name: 'Silvers Rayleigh', epithet: 'Dark King',
    affiliation: 'Roger Pirates (former First Mate)', role: 'Retired / Coating Mechanic', origin: 'South Blue',
    age: 78, height: '198 cm', birthday: 'February 15', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 500, "Rayleigh, the Dark King"',
    abilities: ["Advanced Haki mastery (all three types)", 'Swordsmanship', 'Ship coating expertise'],
    bio: 'The first mate of the Pirate King Gol D. Roger, one of the last living men to have sailed the entire Grand Line. Rayleigh spent two years training Luffy on Rusukaina, teaching him the fundamentals of Haki that would carry him through the New World. His calm mastery makes him one of the strongest men alive despite his age.'
  },
  {
    id: 'monkey-d-garp', name: 'Monkey D. Garp', epithet: 'Hero of the Marines',
    affiliation: 'Marines', role: 'Former Vice Admiral', origin: 'East Blue',
    age: 79, height: '227 cm', birthday: 'June 29', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 91, "Vice Admiral Garp"',
    abilities: ["Conqueror's Haki", 'Advanced Armament Haki (Fist of Love)', 'Legendary physical strength'],
    bio: 'The Marine hero who cornered Gol D. Roger without ever capturing him, and grandfather to Luffy, whom he insists on training with brutal "Fist of Love" beatings. Garp refused multiple offers to become an Admiral, preferring the front lines, and remains one of the few people the Marines, the World Government, and pirates alike all fear.'
  },
  {
    id: 'sengoku', name: 'Sengoku', epithet: 'The Buddha',
    affiliation: 'Marines', role: 'Former Fleet Admiral', origin: 'Unknown',
    age: 78, height: '221 cm', birthday: 'February 15', bounty: null, status: 'Alive',
    devilFruit: 'hito-hito-no-mi-model-daibutsu', firstAppearance: 'Chapter 92, "Vivi"',
    abilities: ['Hito Hito no Mi Model: Daibutsu (giant golden Buddha form)', 'Shockwave palm strikes', "Armament Haki"],
    bio: 'The former Fleet Admiral who led the Marines through the Golden Age of Pirates, ending Whitebeard\'s war at Marineford with the fallout of Ace and Whitebeard\'s deaths still on his conscience. His Buddha transformation grants an enormous golden form capable of leveling battlefields with air-splitting shockwave palms.'
  },
  {
    id: 'kuzan', name: 'Kuzan', epithet: 'Aokiji',
    affiliation: 'Blackbeard Pirates (formerly Marine Admiral)', role: 'Former Admiral', origin: 'Unknown',
    age: 54, height: '308 cm', birthday: 'February 1', bounty: null, status: 'Alive',
    devilFruit: 'hie-hie-no-mi', firstAppearance: 'Chapter 106, "Marine Admiral Aokiji"',
    abilities: ['Hie Hie no Mi (Logia, ice generation)', "Advanced Haki", 'Ice Age, Ice Saber'],
    bio: 'A former Marine Admiral who lost the Fleet Admiral succession duel against Akainu, a fight so destructive it reshaped an island. Disillusioned with the Marines\' brand of justice, Kuzan drifted away from the organization and eventually joined Blackbeard\'s crew, his icy Logia power capable of freezing entire seas solid.'
  },
  {
    id: 'sakazuki', name: 'Sakazuki', epithet: 'Akainu',
    affiliation: 'Marines', role: 'Fleet Admiral', origin: 'Unknown',
    age: 57, height: '200 cm', birthday: 'February 5', bounty: null, status: 'Alive',
    devilFruit: 'magu-magu-no-mi', firstAppearance: 'Chapter 550, "Sengoku the Buddha"',
    abilities: ['Magu Magu no Mi (Logia, magma generation)', "Advanced Armament & Conqueror's Haki"],
    bio: 'The uncompromising Fleet Admiral of the Marines who killed Portgas D. Ace at Marineford and embodies "absolute justice," willing to sacrifice civilians and allies alike if the mission demands it. His magma powers burn hotter than fire itself, making him arguably the single most destructive force in the Marine ranks.'
  },
  {
    id: 'borsalino', name: 'Borsalino', epithet: 'Kizaru',
    affiliation: 'Marines (later Blackbeard Pirates)', role: 'Former Admiral', origin: 'Unknown',
    age: 56, height: '198 cm', birthday: 'December 8', bounty: null, status: 'Alive',
    devilFruit: 'pika-pika-no-mi', firstAppearance: 'Chapter 386, "Marine Admiral Kizaru"',
    abilities: ['Pika Pika no Mi (Logia, light generation/light-speed movement)', "Advanced Haki"],
    bio: 'A laid-back Marine Admiral whose Pika Pika no Mi lets him move and attack at the speed of light, making him one of the fastest beings in the world despite his lazy demeanor. His loyalties shifted after the Egghead Incident, joining Blackbeard\'s crew as it grew into a new power on the seas.'
  },
  {
    id: 'smoker', name: 'Smoker', epithet: 'White Hunter',
    affiliation: 'Marines', role: 'Vice Admiral', origin: 'Loguetown, East Blue',
    age: 36, height: '221 cm', birthday: 'December 14', bounty: null, status: 'Alive',
    devilFruit: 'moku-moku-no-mi', firstAppearance: 'Chapter 47, "Captain Smoker of the Marines"',
    abilities: ['Moku Moku no Mi (Logia, smoke generation)', 'Armament Haki', 'Jutte combat (Haki-coated)'],
    bio: 'A relentless Marine officer stationed first in Loguetown and later Punk Hazard, whose smoke body has let Luffy slip through his grasp more than once. Smoker holds an unusually strict but genuine sense of justice, willing to bend the rules of his own organization when he believes it is doing wrong.'
  },
  {
    id: 'tashigi', name: 'Tashigi', epithet: null,
    affiliation: 'Marines', role: 'Captain / Rear Admiral', origin: 'Unknown',
    age: 24, height: '169 cm', birthday: 'June 27', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 47, "Captain Smoker of the Marines"',
    abilities: ['Master swordswoman', 'Sword appraisal expertise'],
    bio: 'A sword-obsessed Marine officer serving under Smoker, whose striking resemblance to the deceased pirate Kuina links her to Zoro\'s past. Tashigi\'s skill as a swordswoman and knowledge of blades make her one of the Marines\' most capable non-Haki fighters.'
  },
  {
    id: 'issho', name: 'Issho', epithet: 'Fujitora',
    affiliation: 'Marines', role: 'Admiral', origin: 'Unknown',
    age: 54, height: '295 cm', birthday: 'October 22', bounty: null, status: 'Alive',
    devilFruit: 'zushi-zushi-no-mi', firstAppearance: 'Chapter 725, "Fujitora"',
    abilities: ['Zushi Zushi no Mi (gravity manipulation, meteor calling)', 'Blind swordsmanship', "Advanced Haki"],
    bio: 'A blind Marine Admiral who fights with a sword guided purely by instinct and Haki, and openly criticizes the corruption of the Celestial Dragons and the Warlord system. Fujitora can warp gravity across an entire region, even pulling meteors from orbit, while personally holding some of the most principled ethics in the Marine hierarchy.'
  },
  {
    id: 'vegapunk', name: 'Dr. Vegapunk', epithet: 'The Genius Scientist',
    affiliation: 'World Government (formerly)', role: 'Scientist', origin: 'Unknown',
    age: 79, height: 'Varies (multiple satellite bodies)', birthday: 'March 3', bounty: null, status: 'Alive (distributed across satellites)',
    devilFruit: null, firstAppearance: 'Chapter 985 (mentioned earlier)',
    abilities: ['Unmatched scientific genius', 'Creator of Pacifistas, Seraphim, and Devil Fruit research'],
    bio: 'Widely regarded as the greatest scientific mind alive, responsible for Pacifista weapons, artificial Devil Fruits (SMILEs), Seraphim clones, and decades of the World Government\'s most advanced technology. Vegapunk split his consciousness across six satellite bodies representing different traits, and his choice to broadcast the world\'s hidden history triggered one of the story\'s largest turning points.'
  },
  {
    id: 'hina', name: 'Hina', epithet: 'Ms. Sunday (undercover) / Handcuffs',
    affiliation: 'Marines', role: 'Vice Admiral', origin: 'Unknown',
    age: 40, height: '190 cm', birthday: 'April 15', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 96, "Governmental Agents"',
    abilities: ['Binding/capture combat techniques', 'Marine leadership'],
    bio: 'A Marine officer who rose from captain to Vice Admiral, known for her binding "Log Log Fruit"-styled capture techniques that predate her later confirmed powers. Hina crossed paths with the Straw Hats in Alabasta and has remained a steady, disciplined presence within Marine ranks.'
  },
  {
    id: 'dracule-mihawk', name: 'Dracule Mihawk', epithet: "Hawk-Eye",
    affiliation: 'Cross Guild (formerly Warlord)', role: 'Swordsman', origin: 'Unknown',
    age: 53, height: '198 cm', birthday: 'June 9', bounty: 3590000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 49, "The Strongest Pirate Hunter"',
    abilities: ['World\'s Strongest Swordsman', 'Yoru (black sword)', "Advanced Haki"],
    bio: 'Recognized as the World\'s Strongest Swordsman, wielding the black blade Yoru with such precision he can slice ships in half from a distance. Mihawk mentored Zoro out of respect for his ambition, later joining Buggy and Crocodile\'s Cross Guild after the Warlord system\'s dissolution, redefining himself outside the government he once served.'
  },
  {
    id: 'crocodile', name: 'Sir Crocodile', epithet: 'Mr. 0 / Desert Spirit',
    affiliation: 'Cross Guild (formerly Warlord / Baroque Works)', role: 'Leader', origin: 'Unknown',
    age: 48, height: '203 cm', birthday: 'September 5', bounty: 1965000000, status: 'Alive',
    devilFruit: 'suna-suna-no-mi', firstAppearance: 'Chapter 143, "Mr. 0"',
    abilities: ['Suna Suna no Mi (Logia, sand generation & dehydration)', "Advanced Haki"],
    bio: 'A former Warlord who orchestrated a secret civil war in Alabasta through his criminal syndicate Baroque Works, defeated by Luffy after his Suna Suna no Mi\'s dehydrating sand nearly killed Vivi\'s kingdom. Years later, Crocodile resurfaced as a founder of the bounty-hunting Cross Guild, still every bit as ruthless.'
  },
  {
    id: 'donquixote-doflamingo', name: 'Donquixote Doflamingo', epithet: 'Heavenly Demon',
    affiliation: 'Donquixote Pirates (formerly Warlord)', role: 'Former King of Dressrosa', origin: 'Mariejois',
    age: 44, height: '305 cm', birthday: 'October 5', bounty: 340000000, status: 'Alive (imprisoned)',
    devilFruit: 'ito-ito-no-mi', firstAppearance: 'Chapter 234, "Mr. 0" (mentioned), Chapter 700 (full debut)',
    abilities: ['Ito Ito no Mi (string manipulation, Parasite puppetry)', "Conqueror's Haki", 'Advanced Armament Haki'],
    bio: 'A disgraced World Noble turned underworld broker of weapons and SMILE fruits, who ruled Dressrosa as a puppet king for a decade using his Ito Ito no Mi to literally control people as marionettes. His fall at Luffy\'s hands ended his criminal empire and exposed the government\'s use of artificial Devil Fruits, though he remains dangerous even in captivity.'
  },
  {
    id: 'gecko-moria', name: 'Gecko Moria', epithet: null,
    affiliation: 'Thriller Bark Pirates (formerly Warlord)', role: 'Captain', origin: 'Unknown',
    age: 55, height: '288 cm', birthday: 'May 1', bounty: 320000000, status: 'Alive',
    devilFruit: 'kage-kage-no-mi', firstAppearance: 'Chapter 442, "The Man Who Once Died"',
    abilities: ['Kage Kage no Mi (shadow stealing & zombie animation)', 'Oz (giant zombie general)'],
    bio: 'A former Warlord whose entire crew was wiped out by Kaido, driving him to obsessively steal shadows to build an undead zombie army on Thriller Bark. Moria\'s Kage Kage no Mi can animate anything given a stolen shadow, including the giant zombie Oz, though his defeat by Luffy shattered both his army and his pride.'
  },
  {
    id: 'buggy', name: 'Buggy', epithet: 'The Clown',
    affiliation: 'Cross Guild (formerly Buggy Pirates)', role: 'Co-leader', origin: 'Unknown',
    age: 39, height: '192 cm', birthday: 'August 8', bounty: 3189000000, status: 'Alive',
    devilFruit: 'bara-bara-no-mi', firstAppearance: 'Chapter 9, "Buggy the Clown"',
    abilities: ['Bara Bara no Mi (body separation)', 'Buggy Ball cannon tricks', "Conqueror's Haki"],
    bio: 'A former cabin boy on Gol D. Roger\'s ship who can split his body into floating pieces, immune to slashing attacks. Through a series of accidents mistaken for genius plans, Buggy stumbled into becoming a Warlord, an Emperor-adjacent power broker, and co-founder of the Cross Guild — one of the story\'s most absurd rises to power.'
  },
  {
    id: 'marshall-d-teach', name: 'Marshall D. Teach', epithet: 'Blackbeard',
    affiliation: 'Blackbeard Pirates', role: 'Captain / Yonko', origin: 'Unknown',
    age: 40, height: '344 cm', birthday: 'August 3', bounty: 3996000000, status: 'Alive',
    devilFruit: 'yami-yami-no-mi', firstAppearance: 'Chapter 223, "Blackbeard"',
    abilities: ['Yami Yami no Mi (darkness, gravity & nullification)', 'Gura Gura no Mi (quakes, stolen second fruit)', "Conqueror's Haki"],
    bio: 'The only known person able to wield two Devil Fruits at once, having murdered his own crewmate Thatch for the Yami Yami no Mi and later stolen the Gura Gura no Mi from a dying Whitebeard at Marineford. Blackbeard\'s rise from Whitebeard\'s lowest-ranked recruit to a fully-fledged Emperor of the Sea makes him one of the story\'s most dangerous wildcards.'
  },
  {
    id: 'jesus-burgess', name: 'Jesus Burgess', epithet: 'Handyman of the Blackbeard Pirates',
    affiliation: 'Blackbeard Pirates', role: 'First Mate', origin: 'Unknown',
    age: 37, height: '265 cm', birthday: 'June 22', bounty: 470000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 434, "Whitebeard\'s Sons"',
    abilities: ['Colossal physical strength (armwrestling champion)', 'Brute-force combat'],
    bio: 'The muscle-bound first mate of the Blackbeard Pirates, famed as an armwrestling champion whose raw physical strength lets him fight on par with Devil Fruit users. Burgess played a key role in the Blackbeard Pirates\' raid on Impel Down and the ambush that let his captain steal the Gura Gura no Mi.'
  },
  {
    id: 'van-augur', name: 'Van Augur', epithet: null,
    affiliation: 'Blackbeard Pirates', role: 'Sniper', origin: 'Unknown',
    age: 34, height: '203 cm', birthday: 'August 9', bounty: 300000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 434, "Whitebeard\'s Sons"',
    abilities: ['World-class marksmanship (extreme range)', 'Rifle & pistol combat'],
    bio: 'The Blackbeard Pirates\' sniper, capable of hitting targets from distances of several kilometers with unnerving precision. Van Augur\'s cold, exacting nature and near-superhuman accuracy make him one of the crew\'s most efficient killers.'
  },
  {
    id: 'shiryu', name: 'Shiryu', epithet: 'Shiryu of the Rain',
    affiliation: 'Blackbeard Pirates (formerly Impel Down warden)', role: 'Combatant', origin: 'Unknown',
    age: 43, height: '288 cm', birthday: 'February 20', bounty: 700000000, status: 'Alive',
    devilFruit: 'suke-suke-no-mi', firstAppearance: 'Chapter 535, "Warden Shiryu"',
    abilities: ['Suke Suke no Mi (invisibility, stolen from Absalom)', 'Swordsmanship'],
    bio: 'A former Impel Down warden who defected to Blackbeard\'s crew during the prison break, later killing Absalom to steal his Suke Suke no Mi. Shiryu\'s invisibility lets him strike from nowhere, making him one of the Blackbeard Pirates\' most unpredictable members.'
  },
  {
    id: 'catarina-devon', name: 'Catarina Devon', epithet: 'Cat Viper',
    affiliation: 'Blackbeard Pirates', role: 'Combatant', origin: 'Unknown',
    age: 32, height: '178 cm', birthday: 'Unknown', bounty: 500000000, status: 'Alive',
    devilFruit: 'neko-neko-no-mi-model-saber-tiger', firstAppearance: 'Chapter 1060 (Egghead arc)',
    abilities: ['Neko Neko no Mi Model: Saber Tiger (Zoan)', 'Claw-based combat'],
    bio: 'One of the Blackbeard Pirates\' newer recruits, a Zoan user who transforms into a saber-toothed tiger hybrid for close-quarters combat. Devon took part in the crew\'s assault on Egghead Island as Blackbeard moved to seize Vegapunk\'s research for himself.'
  },
  {
    id: 'edward-newgate', name: 'Edward Newgate', epithet: 'Whitebeard',
    affiliation: 'Whitebeard Pirates', role: 'Captain / Yonko', origin: 'Unknown',
    age: 72, height: '666 cm', birthday: 'April 6', bounty: 5046000000, status: 'Deceased',
    devilFruit: 'gura-gura-no-mi', firstAppearance: 'Chapter 234, "Mr. 0" (mentioned), Chapter 550 (full debut)',
    abilities: ['Gura Gura no Mi (quake generation)', "Peak Conqueror's Haki"],
    bio: 'Long considered the "World\'s Strongest Man" and captain of the most powerful pirate crew of his era, commanding absolute loyalty from a family of adopted sons rather than blood. Whitebeard died at Marineford defending his crew and Ace\'s memory, his final quake-fueled stand cracking the very structure of the world before Blackbeard finished him off and stole his fruit.'
  },
  {
    id: 'marco', name: 'Marco', epithet: 'The Phoenix',
    affiliation: 'Whitebeard Pirates (former 1st Division Commander)', role: 'Commander', origin: 'Unknown',
    age: 41, height: '221 cm', birthday: 'April 5', bounty: 1374000000, status: 'Alive',
    devilFruit: 'tori-tori-no-mi-model-phoenix', firstAppearance: 'Chapter 550, "Whitebeard vs. Blackbeard"',
    abilities: ['Tori Tori no Mi Model: Phoenix (Mythical Zoan, regeneration & blue flame)', "Advanced Haki"],
    bio: 'Whitebeard\'s most trusted commander, whose Mythical Zoan grants near-instant regeneration through blue phoenix flames. After his captain\'s death, Marco led the remaining Whitebeard Pirates into quiet retirement on their home island, only resurfacing to defend it and later to aid the Straw Hats in the war against Kaido and Big Mom.'
  },
  {
    id: 'jozu', name: 'Jozu', epithet: 'Diamond',
    affiliation: 'Whitebeard Pirates (former 3rd Division Commander)', role: 'Commander', origin: 'Unknown',
    age: 44, height: '288 cm', birthday: 'March 9', bounty: 1000000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 550, "Whitebeard vs. Blackbeard"',
    abilities: ['Body hardening into diamond', 'Immense physical & defensive strength'],
    bio: 'The Whitebeard Pirates\' Third Division Commander, capable of turning parts of his body into an unbreakable diamond state. Jozu\'s defensive power made him one of the pillars of Whitebeard\'s crew during the war at Marineford, where he was gravely wounded protecting his captain.'
  },
  {
    id: 'vista', name: 'Vista', epithet: 'Flower Sword',
    affiliation: 'Whitebeard Pirates (former 5th Division Commander)', role: 'Commander', origin: 'Unknown',
    age: 55, height: '198 cm', birthday: 'October 22', bounty: 800000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 551, "Portgas D. Ace, Executed"',
    abilities: ['Dual-sword swordsmanship (flower-patterned slashes)', 'Advanced Armament Haki'],
    bio: 'The Whitebeard Pirates\' Fifth Division Commander, a dual-wielding swordsman skilled enough to briefly match Dracule Mihawk in a duel at Marineford. Vista remains one of the old crew\'s most composed and formidable veterans.'
  },
  {
    id: 'charlotte-linlin', name: 'Charlotte Linlin', epithet: 'Big Mom',
    affiliation: 'Big Mom Pirates', role: 'Captain / Yonko', origin: 'Unknown (Sweet City / Elbaf-adjacent origins)',
    age: 68, height: '880 cm', birthday: 'February 15', bounty: 4388000000, status: 'Alive',
    devilFruit: 'soru-soru-no-mi', firstAppearance: 'Chapter 651, "Sanji\'s Reply"',
    abilities: ['Soru Soru no Mi (soul manipulation, homies)', "Peak Conqueror's Haki", 'Napoleon & Zeus (living weapons)'],
    bio: 'One of the Four Emperors, ruler of Totto Land, and matriarch of the sprawling Charlotte Family, whose devil fruit lets her rip out and consume portions of people\'s lifespans as "soul" to animate objects into living homies. Big Mom\'s hunger for family, sweets, and power drives near-constant chaos in the New World, and her fractured mind and terrifying tantrums make her one of the most volatile Emperors.'
  },
  {
    id: 'charlotte-katakuri', name: 'Charlotte Katakuri', epithet: null,
    affiliation: 'Big Mom Pirates', role: 'Sweet Commander', origin: 'Whole Cake Island',
    age: 51, height: '1035 cm', birthday: 'January 3', bounty: 1057000000, status: 'Alive',
    devilFruit: 'mochi-mochi-no-mi', firstAppearance: 'Chapter 869, "Sweet Commander Katakuri"',
    abilities: ['Mochi Mochi no Mi (Special Paramecia, Logia-like mochi manipulation)', 'Advanced Observation Haki (future sight)', "Conqueror's Haki"],
    bio: 'Big Mom\'s most powerful son and heir apparent, whose mochi-based Special Paramecia and mastery of Observation Haki let him perceive attacks moments before they happen. Katakuri\'s duel with Luffy at Whole Cake Island, fought to protect his secret mochi-stained mouth from public shame, became one of the series\' most respected rival fights.'
  },
  {
    id: 'charlotte-smoothie', name: 'Charlotte Smoothie', epithet: null,
    affiliation: 'Big Mom Pirates', role: 'Sweet Commander', origin: 'Whole Cake Island',
    age: 40, height: '653 cm', birthday: 'March 3', bounty: 932000000, status: 'Alive',
    devilFruit: 'shibo-shibo-no-mi', firstAppearance: 'Chapter 826, "Smoothie"',
    abilities: ['Shibo Shibo no Mi (squeezing liquid out of anything, including people)', 'Perception Haki'],
    bio: 'One of Big Mom\'s Sweet Commanders and the governor of Fish-Man Island under her rule, capable of wringing the fluids — and vitality — out of any living being she touches. Smoothie\'s calm, calculating presence makes her one of the family\'s most dangerous enforcers.'
  },
  {
    id: 'charlotte-cracker', name: 'Charlotte Cracker', epithet: null,
    affiliation: 'Big Mom Pirates', role: 'Sweet Commander', origin: 'Whole Cake Island',
    age: 36, height: '881 cm', birthday: 'April 4', bounty: 860000000, status: 'Alive',
    devilFruit: 'bisu-bisu-no-mi', firstAppearance: 'Chapter 843, "Cracker"',
    abilities: ['Bisu Bisu no Mi (biscuit soldier golems)', 'Armament Haki-infused biscuit armor'],
    bio: 'A Sweet Commander who fights through an endless army of biscuit soldiers animated from his own devil fruit, wearing a suit of hardened biscuit armor beneath his cloak. Cracker\'s grueling battle with Luffy on Whole Cake Island pushed the young captain to his limit through sheer attrition.'
  },
  {
    id: 'charlotte-perospero', name: 'Charlotte Perospero', epithet: null,
    affiliation: 'Big Mom Pirates', role: 'Eldest Son', origin: 'Whole Cake Island',
    age: 43, height: '698 cm', birthday: 'June 3', bounty: null, status: 'Alive',
    devilFruit: 'peto-peto-no-mi', firstAppearance: 'Chapter 826, "Smoothie"',
    abilities: ['Peto Peto no Mi (candy creation & manipulation)', 'Candy constructs (staircases, weapons, restraints)'],
    bio: 'Big Mom\'s eldest son and a key architect of Totto Land\'s political schemes, able to conjure and shape candy into staircases, chains, or weapons at will. Perospero\'s sharp mind for manipulation makes him one of his mother\'s most trusted advisors.'
  },
  {
    id: 'charlotte-pudding', name: 'Charlotte Pudding', epithet: null,
    affiliation: 'Big Mom Pirates', role: 'Princess', origin: 'Whole Cake Island',
    age: 20, height: '162 cm', birthday: 'July 7', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 825, "Whole Cake Island"',
    abilities: ['Third Eye (memory manipulation Haki)', 'Political scheming'],
    bio: 'A Charlotte princess with a rare third eye that lets her erase and manipulate memories, initially raised to despise humans for her mixed heritage. Pudding\'s planned betrayal of Sanji at their wedding gave way to a genuine change of heart, and she went on to help guide the Thousand Sunny out of Whole Cake Island.'
  },
  {
    id: 'kaido', name: 'Kaido', epithet: "World's Strongest Creature",
    affiliation: 'Beast Pirates (former Yonko)', role: 'Former Captain', origin: 'Unknown',
    age: 60, height: '709 cm', birthday: 'May 1', bounty: 4611100000, status: 'Alive',
    devilFruit: 'uo-uo-no-mi-model-seiryu', firstAppearance: 'Chapter 795 (mentioned), Chapter 909 (full debut)',
    abilities: ['Uo Uo no Mi Model: Seiryu (Mythical Zoan, Azure Dragon)', "Peak Conqueror's Haki", 'Kanabo (iron club)'],
    bio: 'A former Emperor of the sea who ruled Wano as a tyrant for decades in an unholy alliance with the shogun Orochi, using his dragon form to level cities and shrug off attacks that would kill anyone else. Repeated failed suicide attempts fed his nihilism until his defeat by Luffy at the hands of a new generation finally broke his reign.'
  },
  {
    id: 'king', name: 'King', epithet: 'The Wildfire',
    affiliation: 'Beast Pirates', role: 'All-Star', origin: 'Lulusia Kingdom',
    age: 43, height: '332 cm', birthday: 'September 10', bounty: 1390000000, status: 'Alive',
    devilFruit: 'ryu-ryu-no-mi-model-pteranodon', firstAppearance: 'Chapter 803 (silhouette), Chapter 932 (full debut)',
    abilities: ['Ryu Ryu no Mi Model: Pteranodon (Ancient Zoan)', 'Fire-infused flight combat', "Advanced Haki"],
    bio: 'Kaido\'s most trusted subordinate and the last known survivor of the Lulusia Kingdom, destroyed by the World Government to erase evidence of its Devil Fruit experiments. King\'s pteranodon Zoan grants flight and fire-boosted aerial combat, making him one of the toughest fights the Straw Hat alliance faced in Wano.'
  },
  {
    id: 'queen', name: 'Queen', epithet: 'The Plague',
    affiliation: 'Beast Pirates', role: 'All-Star', origin: 'Unknown',
    age: 54, height: '478 cm', birthday: 'July 4', bounty: 1320000000, status: 'Deceased',
    devilFruit: 'ryu-ryu-no-mi-model-brachiosaurus', firstAppearance: 'Chapter 803 (silhouette), Chapter 933 (full debut)',
    abilities: ['Ryu Ryu no Mi Model: Brachiosaurus (artificial SMILE-derived Zoan)', 'Cyborg body modifications', 'Bio-weapon design'],
    bio: 'A cyborg All-Star and the scientist behind Kaido\'s SMILE Devil Fruit and Ice Oni bioweapon programs, whose brachiosaurus Zoan gave him devastating size and reach in battle. Queen\'s deranged sense of showmanship made his final "Death or Live" bioweapon plot against Wano the crew\'s last, most desperate gambit.'
  },
  {
    id: 'jack', name: 'Jack', epithet: 'The Drought',
    affiliation: 'Beast Pirates', role: 'All-Star', origin: 'Unknown',
    age: 45, height: '705 cm', birthday: 'October 2', bounty: 1000000000, status: 'Alive',
    devilFruit: 'zou-zou-no-mi-model-mammoth', firstAppearance: 'Chapter 795 (mentioned), Chapter 819 (full debut)',
    abilities: ['Zou Zou no Mi Model: Mammoth (Ancient Zoan)', 'Massive physical destructive power'],
    bio: 'The captain of Kaido\'s flagship Numancia and commander of the assault on Zunesha, the giant elephant that carries the island of Zou. Jack\'s mammoth transformation makes him a walking siege weapon, brutal and single-minded in service to Kaido\'s conquest.'
  },
  {
    id: 'kozuki-oden', name: 'Kozuki Oden', epithet: null,
    affiliation: 'Kozuki Family / formerly Whitebeard & Roger Pirates', role: 'Daimyo of Kuri', origin: 'Wano Country',
    age: 41, height: '271 cm', birthday: 'November 21', bounty: null, status: 'Deceased',
    devilFruit: null, firstAppearance: 'Chapter 909 (flashback)',
    abilities: ['Oden Nitoryu (two-sword style)', "Advanced Haki"],
    bio: 'The legendary daimyo of Kuri who sailed with both Whitebeard and Gol D. Roger, learning the truth of the Void Century before returning to reform Wano. Betrayed by Orochi and Kaido, Oden was executed by public boiling, a death he endured for an hour while singing to inspire his people — a sacrifice that fueled the entire Wano uprising twenty years later.'
  },
  {
    id: 'kurozumi-orochi', name: 'Kurozumi Orochi', epithet: null,
    affiliation: 'Beast Pirates / Shogunate of Wano', role: 'Former Shogun', origin: 'Wano Country',
    age: 60, height: '210 cm', birthday: 'June 9', bounty: null, status: 'Deceased',
    devilFruit: 'hebi-hebi-no-mi-model-yamata-no-orochi', firstAppearance: 'Chapter 909 (flashback), Chapter 931 (present)',
    abilities: ['Hebi Hebi no Mi Model: Yamato no Orochi (Mythical Zoan, eight-headed serpent, multiple lives)'],
    bio: 'The corrupt shogun who conspired with Kaido to seize Wano and betray the Kozuki clan, ruling through fear and starvation for two decades. His Mythical Zoan grants him eight serpent heads, each functioning as a separate life, though it was ultimately not enough to save him from the people he oppressed.'
  },
  {
    id: 'yamato', name: 'Yamato', epithet: null,
    affiliation: 'Kozuki Family (self-declared)', role: "Kaido's Child (in name)", origin: 'Wano Country',
    age: 28, height: '241 cm', birthday: 'February 2', bounty: null, status: 'Alive',
    devilFruit: 'inu-inu-no-mi-model-okuchi-no-makami', firstAppearance: 'Chapter 933, "O-Tama"',
    abilities: ['Inu Inu no Mi Model: Okuchi no Makami (Mythical Zoan, wolf deity)', "Advanced Armament & Conqueror's Haki", 'Ice-based attacks'],
    bio: "Kaido's child, who rejected that identity entirely to live as Kozuki Oden, the father figure Yamato idolized after reading his journal. Imprisoned for years for attempting to leave Wano, Yamato broke free during the raid and fought alongside the Akazaya Nine, eventually joining the Straw Hats' extended found-family as a wandering ally."
  },
  {
    id: 'kinemon', name: "Kin'emon", epithet: 'Kin the Impermeable',
    affiliation: 'Kozuki Family / Akazaya Nine', role: 'Retainer', origin: 'Wano Country',
    age: 41, height: '183 cm', birthday: 'August 20', bounty: 1000000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 655, "Kinemon of the Foxfire"',
    abilities: ['Samurai swordsmanship', 'Clothes-based illusion technique (Impermeable)', "Advanced Haki"],
    bio: 'One of the Akazaya Nine, Kozuki Oden\'s most loyal retainers, who traveled through time with his allies to reach the era of Wano\'s liberation. Kin\'emon\'s odd "Impermeable" illusion technique lets him disguise anyone\'s clothing convincingly, a quirky power that hides genuinely formidable swordsmanship.'
  },
  {
    id: 'kanjuro', name: 'Kanjuro', epithet: 'Kan the Colorful',
    affiliation: 'Beast Pirates (double agent) / formerly Akazaya Nine', role: 'Traitor', origin: 'Wano Country',
    age: 45, height: '191 cm', birthday: 'October 10', bounty: null, status: 'Deceased',
    devilFruit: null, firstAppearance: 'Chapter 655, "Kinemon of the Foxfire"',
    abilities: ['Paint-based illusion & construct creation (calligraphy brush)'],
    bio: 'A member of the Akazaya Nine who spent decades as a secret informant for Orochi and Kaido, ultimately betraying the Kozuki family at the raid\'s climax. Kanjuro\'s ink-and-paint techniques could conjure convincing illusions, which he used to devastating effect against his former allies before his death.'
  },
  {
    id: 'monkey-d-dragon', name: 'Monkey D. Dragon', epithet: "World's Worst Criminal",
    affiliation: 'Revolutionary Army', role: 'Commander-in-Chief', origin: 'East Blue',
    age: 61, height: '202 cm', birthday: 'October 5', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 96, "Governmental Agents"',
    abilities: ['Suspected wind manipulation (unconfirmed)', 'Revolutionary leadership'],
    bio: "Luffy's estranged father and leader of the Revolutionary Army, dedicated to tearing down the World Government's entire power structure. Dragon appears rarely and says even less, but his mere name is enough to unsettle Marine leadership, and mysterious wind phenomena seem to follow him wherever he goes."
  },
  {
    id: 'emporio-ivankov', name: 'Emporio Ivankov', epithet: 'Okama Queen',
    affiliation: 'Revolutionary Army', role: 'Commander (Kamabakka Kingdom)', origin: 'Unknown',
    age: 42, height: '218 cm', birthday: 'August 12', bounty: null, status: 'Alive',
    devilFruit: 'horu-horu-no-mi', firstAppearance: 'Chapter 543, "The Terrifying Warden"',
    abilities: ['Horu Horu no Mi (hormone manipulation, gender/emotion shifts)', 'Death Wink'],
    bio: 'The ruler of Kamabakka Kingdom and a top Revolutionary commander, whose hormone-based devil fruit can heal wounds, alter emotions, and change a person\'s sex at will. Ivankov broke Luffy out of Impel Down and used newkama medicine to save his life after the trauma of Ace\'s looming execution.'
  },
  {
    id: 'inazuma', name: 'Inazuma', epithet: null,
    affiliation: 'Revolutionary Army', role: 'Commander', origin: 'Unknown',
    age: 44, height: '199 cm', birthday: 'December 25', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 526, "The New Player Emporio Ivankov"',
    abilities: ['Body-morphing weapon transformation (Devil Fruit power unconfirmed)'],
    bio: 'A high-ranking Revolutionary Army commander who can reshape parts of their body into blades and tools. Inazuma served as an Impel Down officer under a false identity before revealing their true Revolutionary allegiance during the great prison break.'
  },
  {
    id: 'rob-lucci', name: 'Rob Lucci', epithet: null,
    affiliation: 'CP0 (formerly CP9)', role: 'Agent', origin: 'Unknown',
    age: 41, height: '190 cm', birthday: 'October 2', bounty: 500000000, status: 'Alive',
    devilFruit: 'neko-neko-no-mi-model-leopard', firstAppearance: 'Chapter 398, "Rob Lucci"',
    abilities: ['Neko Neko no Mi Model: Leopard (Zoan)', 'Rokushiki (all six techniques)', "Conqueror's & Advanced Haki"],
    bio: 'One of the World Government\'s deadliest assassins, a master of every Rokushiki technique whose leopard Zoan form nearly killed Luffy at Enies Lobby. Lucci\'s cold devotion to "justice" as defined by the government he serves has made him a recurring, near-unkillable threat, later resurfacing with CP0 at Egghead.'
  },
  {
    id: 'kaku', name: 'Kaku', epithet: null,
    affiliation: 'CP0 (formerly CP9)', role: 'Agent', origin: 'Unknown',
    age: 41, height: '198 cm', birthday: 'August 26', bounty: null, status: 'Alive',
    devilFruit: 'ushi-ushi-no-mi-model-giraffe', firstAppearance: 'Chapter 331, "Adventure in Water Seven"',
    abilities: ['Ushi Ushi no Mi Model: Giraffe (Zoan)', 'Rokushiki', 'Shipwright expertise'],
    bio: 'A former Galley-La shipwright secretly embedded as a CP9 spy, revealed to be a skilled Rokushiki user and giraffe Zoan fighter during the Water 7 and Enies Lobby arcs. Kaku\'s long neck and limbs in Zoan form give him an unusual but effective reach advantage in combat.'
  },
  {
    id: 'spandam', name: 'Spandam', epithet: null,
    affiliation: 'World Government (CP9 director)', role: 'Former Director', origin: 'Unknown',
    age: 32, height: '178 cm', birthday: 'January 26', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 343, "Iceburg\'s Past"',
    abilities: ['Access to the Ancient Weapon Pluton blueprints', 'Funkfreed (living sword cane)'],
    bio: 'The cowardly, cruel director of CP9 during the Water 7 and Enies Lobby arcs, who tortured Robin and burned the Merry\'s flag while claiming credit for his agents\' work. Spandam\'s humiliating defeat at Luffy\'s hands became one of the most satisfying comeuppances in the series.'
  },
  {
    id: 'arlong', name: 'Arlong', epithet: 'Saw-Tooth',
    affiliation: 'Arlong Pirates', role: 'Former Captain', origin: 'Fishman Island',
    age: 39, height: '224 cm', birthday: 'January 7', bounty: 20000000, status: 'Unknown',
    devilFruit: null, firstAppearance: 'Chapter 69, "Fishman Arlong"',
    abilities: ['Fish-Man Karate', 'Superhuman aquatic strength', 'Saw-nose weapon'],
    bio: 'A fishman supremacist who occupied Nami\'s village for years, forcing her to buy her people\'s freedom through theft, until Luffy tore his map room apart and ended his reign. Arlong\'s hatred of humans, rooted in generations of fishman discrimination, made him one of the earliest arcs to give the series real emotional stakes.'
  },
  {
    id: 'enel', name: 'Enel', epithet: 'God',
    affiliation: 'None (former ruler of Skypiea)', role: 'Self-proclaimed God', origin: 'Fairy Vearth (Birka)',
    age: 39, height: '198 cm', birthday: 'July 10', bounty: 500000000, status: 'Alive (on the moon)',
    devilFruit: 'goro-goro-no-mi', firstAppearance: 'Chapter 240, "Enel"',
    abilities: ['Goro Goro no Mi (Logia, lightning generation)', 'Mantra (advanced Observation Haki)'],
    bio: 'The self-declared "god" who ruled Skypiea through his lightning Logia and Mantra precognition before Luffy, immune to electricity as a rubber user, became the one opponent his powers couldn\'t touch. Exiled to the moon after his defeat, Enel now searches its ancient ruins for the means to build a new civilization among the stars.'
  },
  {
    id: 'wapol', name: 'Wapol', epithet: null,
    affiliation: 'Former King of Drum Kingdom', role: 'Deposed King', origin: 'Drum Island',
    age: 44, height: '154 cm', birthday: 'February 27', bounty: null, status: 'Alive',
    devilFruit: 'baku-baku-no-mi', firstAppearance: 'Chapter 141, "Doctor Kureha"',
    abilities: ['Baku Baku no Mi (devouring & fusing objects/weapons into his body)'],
    bio: 'The gluttonous, deposed king of Drum Island who can devour almost anything and fuse it into his own body, from castle gates to cannons. Wapol\'s cowardice and greed made him a lightweight villain compared to later arcs, but his defeat helped set Chopper on the path to becoming a Straw Hat.'
  },
  {
    id: 'foxy', name: 'Foxy', epithet: 'The Silver Fox',
    affiliation: 'Foxy Pirates', role: 'Captain', origin: 'Unknown',
    age: 39, height: '270 cm', birthday: 'September 9', bounty: 24000000, status: 'Alive',
    devilFruit: 'noro-noro-no-mi', firstAppearance: 'Chapter 302, "Davy Back Fight"',
    abilities: ['Noro Noro no Mi (slow-beam projection)', 'Sleight-of-hand trickery'],
    bio: 'A theatrical pirate captain who challenges rivals to the "Davy Back Fight" games rather than open combat, using his slowing beam to cheat opponents at range. Foxy\'s crew lost Robin to the Straw Hats in one such game before Luffy reclaimed her by winning fair and square.'
  },
  {
    id: 'absalom', name: 'Absalom', epithet: null,
    affiliation: 'Thriller Bark Pirates', role: 'Zombie Officer', origin: 'Unknown',
    age: 42, height: '288 cm', birthday: 'April 20', bounty: null, status: 'Deceased',
    devilFruit: 'suke-suke-no-mi', firstAppearance: 'Chapter 456, "Zombie"',
    abilities: ['Suke Suke no Mi (invisibility)', 'Zombie physiology'],
    bio: "A zombie officer of Thriller Bark who used his invisibility to spy on and harass Nico Robin, obsessed with making her his \"bride.\" Absalom was killed by his own ally Shiryu, who stole his devil fruit to join the Blackbeard Pirates during the chaos of Thriller Bark's collapse."
  },
  {
    id: 'hogback', name: 'Hogback', epithet: null,
    affiliation: 'Thriller Bark Pirates', role: 'Surgeon', origin: 'Unknown',
    age: 40, height: '196 cm', birthday: 'November 10', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 445, "Thriller Bark"',
    abilities: ['Advanced surgical & reanimation science', 'Zombie creation (with Moria\'s shadows)'],
    bio: 'A brilliant but morally bankrupt surgeon who partnered with Gecko Moria to reanimate corpses into zombies using stolen shadows. Hogback\'s guilt over the death of a young patient, Cindry, drove him to create a zombie body for her using giant animal parts, one of Thriller Bark\'s stranger tragedies.'
  },
  {
    id: 'caesar-clown', name: 'Caesar Clown', epithet: 'Master Scientist',
    affiliation: 'Formerly Doflamingo / Kaido allied', role: 'Scientist', origin: 'Unknown',
    age: 39, height: '210 cm', birthday: 'June 20', bounty: 300000000, status: 'Alive',
    devilFruit: 'gasu-gasu-no-mi', firstAppearance: 'Chapter 675, "Caesar Clown"',
    abilities: ['Gasu Gasu no Mi (Logia, toxic gas generation)', 'Weapons & poison-gas research'],
    bio: 'A former Marine scientist turned rogue weapons developer, responsible for the poison gas that devastated Punk Hazard and the children experimented on there. Caesar\'s gas Logia and total disregard for human life made him one of Law and Luffy\'s early joint targets, ending in his forced cooperation with Vegapunk.'
  },
  {
    id: 'vergo', name: 'Vergo', epithet: null,
    affiliation: 'Donquixote Pirates (double agent, formerly Marine)', role: 'Officer', origin: 'Unknown',
    age: 42, height: '235 cm', birthday: 'March 20', bounty: null, status: 'Deceased',
    devilFruit: null, firstAppearance: 'Chapter 677, "Monster"',
    abilities: ['Extreme Armament Haki mastery', 'Bo staff combat'],
    bio: 'A Marine G-5 officer secretly loyal to Doflamingo, whose mastery of Armament Haki let him harden his body to an almost impenetrable degree. Vergo\'s betrayal nearly cost Law his life on Punk Hazard before Smoker exposed and defeated him.'
  },
  {
    id: 'diamante', name: 'Diamante', epithet: null,
    affiliation: 'Donquixote Pirates', role: 'Officer (Corrida Colosseum host)', origin: 'Unknown',
    age: 41, height: '361 cm', birthday: 'March 3', bounty: 340000000, status: 'Unknown',
    devilFruit: 'hira-hira-no-mi', firstAppearance: 'Chapter 707, "The Man Called Diamante"',
    abilities: ['Hira Hira no Mi (flattening objects/space into 2D)', 'Cloth-cloak combat'],
    bio: 'A Donquixote Family officer who hosted the rigged Corrida Colosseum tournament for the Mera Mera no Mi as bait to lure and kill the winner. Diamante\'s ability to flatten anything, including doorways and people, made him a uniquely disorienting opponent for Luffy.'
  },
  {
    id: 'trebol', name: 'Trebol', epithet: null,
    affiliation: 'Donquixote Pirates', role: 'Officer', origin: 'Unknown',
    age: 62, height: '201 cm', birthday: 'March 8', bounty: 200000000, status: 'Unknown',
    devilFruit: 'beta-beta-no-mi', firstAppearance: 'Chapter 701, "The Fated Two"',
    abilities: ['Beta Beta no Mi (sticky, corrosive mucus)'],
    bio: 'One of Doflamingo\'s oldest and most trusted subordinates, coating his body in a corrosive slime that dissolves anything it touches. Trebol\'s grotesque appearance hides genuine tactical cunning, having served the Donquixote Family since Doflamingo\'s early days as a pirate.'
  },
  {
    id: 'pica', name: 'Pica', epithet: null,
    affiliation: 'Donquixote Pirates', role: 'Officer', origin: 'Unknown',
    age: 38, height: '691 cm', birthday: 'August 1', bounty: 220000000, status: 'Unknown',
    devilFruit: 'ishi-ishi-no-mi', firstAppearance: 'Chapter 706, "Rebellion"',
    abilities: ['Ishi Ishi no Mi (merging with & controlling stone)', 'Giant statue combat form'],
    bio: 'A Donquixote officer who can fuse with and animate any stone structure, turning entire mountainsides of Dressrosa into a giant fighting body. Pica\'s command over the island\'s very rock made him one of the hardest obstacles for the Straw Hat-led rebellion to overcome.'
  },
  {
    id: 'sugar', name: 'Sugar', epithet: null,
    affiliation: 'Donquixote Pirates', role: 'Officer', origin: 'Unknown',
    age: 10, height: '106 cm', birthday: 'May 5', bounty: 60000000, status: 'Alive',
    devilFruit: 'hoya-hoya-no-mi', firstAppearance: 'Chapter 707, "The Man Called Diamante"',
    abilities: ['Hoya Hoya no Mi (turning people into obedient toys)'],
    bio: 'A child prodigy in the Donquixote Family whose touch turns anyone into a living, memory-erased toy, the power behind Dressrosa\'s decade of silent suffering. Sugar\'s eventual collapse and amnesia during the rebellion reverted her victims back to human, ending the family\'s toy-slave trade.'
  },
  {
    id: 'baby-5', name: 'Baby 5', epithet: null,
    affiliation: 'Donquixote Pirates', role: 'Officer', origin: 'Unknown',
    age: 27, height: '183 cm', birthday: 'May 5', bounty: null, status: 'Alive',
    devilFruit: 'buki-buki-no-mi', firstAppearance: 'Chapter 700, "Corazon"',
    abilities: ['Buki Buki no Mi (transforming body parts into weapons)'],
    bio: 'A Donquixote Family officer able to turn any part of her body into a weapon, from guns to cannons, driven by a deep-seated need to feel "needed" by others. Baby 5\'s loyalty to the family that raised her often puts her at odds with her own better judgment.'
  },
  {
    id: 'bartolomeo', name: 'Bartolomeo', epithet: 'Cannibal',
    affiliation: 'Barto Club', role: 'Captain', origin: 'North Blue',
    age: 24, height: '191 cm', birthday: 'March 24', bounty: 375000000, status: 'Alive',
    devilFruit: 'bari-bari-no-mi', firstAppearance: 'Chapter 700, "Corazon"',
    abilities: ['Bari Bari no Mi (unbreakable barrier generation)'],
    bio: 'An obsessive Straw Hat fanboy whose Bari Bari no Mi lets him conjure barriers strong enough to block even the fiercest attacks unscathed. Bartolomeo\'s brash, foul-mouthed demeanor hides a genuinely useful ally, having fought for Luffy\'s side at both the Corrida Colosseum and beyond.'
  },
  {
    id: 'cavendish', name: 'Cavendish', epithet: 'The White Horse Prince/Hakuba',
    affiliation: 'Beautiful Pirates', role: 'Captain', origin: 'Unknown',
    age: 25, height: '191 cm', birthday: 'August 24', bounty: 330000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 701, "The Fated Two"',
    abilities: ['Swordsmanship (Durandal)', 'Alternate murderous persona "Hakuba"'],
    bio: 'A vain, self-obsessed swordsman captain who blacks out during real combat, letting a ruthless alternate persona named Hakuba take over and slaughter his enemies. Cavendish\'s vanity is matched only by his genuine skill with his talking sword Durandal.'
  },
  {
    id: 'x-drake', name: 'X Drake', epithet: 'Red Flag',
    affiliation: 'Marines (undercover, formerly pirate)', role: 'Rear Admiral', origin: 'North Blue',
    age: 33, height: '292 cm', birthday: 'October 24', bounty: 222000000, status: 'Alive',
    devilFruit: 'ryu-ryu-no-mi-model-allosaurus', firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Ryu Ryu no Mi Model: Allosaurus (Ancient Zoan)', 'Marine intelligence tactics'],
    bio: 'A former Marine Vice Admiral who staged his own defection to become a Worst Generation pirate as an undercover intelligence operation, later revealed during the Wano campaign. Drake\'s dinosaur Zoan gives him primal strength that belies his careful, strategic mind.'
  },
  {
    id: 'basil-hawkins', name: 'Basil Hawkins', epithet: 'Magician',
    affiliation: 'Kid Pirates (formerly captain of Hawkins Pirates)', role: 'Officer', origin: 'North Blue',
    age: 32, height: '210 cm', birthday: 'January 14', bounty: 320000000, status: 'Alive',
    devilFruit: 'wara-wara-no-mi', firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Wara Wara no Mi (straw-doll damage transfer)', 'Tarot-card fortune telling'],
    bio: 'A stoic fortune-teller whose devil fruit transfers damage from his body into straw effigies, making him extraordinarily difficult to kill outright. Hawkins reads the odds of every battle through tarot before committing, and later merged his crew into Eustass Kid\'s alliance during the war against Kaido.'
  },
  {
    id: 'capone-bege', name: 'Capone "Gang" Bege', epithet: null,
    affiliation: 'Fire Tank Pirates', role: 'Captain', origin: 'West Blue',
    age: 42, height: '344 cm', birthday: 'October 10', bounty: 350000000, status: 'Alive',
    devilFruit: 'shiro-shiro-no-mi', firstAppearance: 'Chapter 90, "Vivi" (cameo), Chapter 902 (full role)',
    abilities: ['Shiro Shiro no Mi (transforming into a mobile fortress)', 'Mafia-style tactics & firearms'],
    bio: 'A mafia-boss pirate captain who can turn his own body into a walking fortress capable of housing his entire crew inside it. Bege played a double game during the Whole Cake Island arc, secretly plotting to assassinate Big Mom alongside the Straw Hats.'
  },
  {
    id: 'urouge', name: 'Urouge', epithet: 'Mad Monk',
    affiliation: 'Fallen Monk Pirates', role: 'Captain', origin: 'North Blue',
    age: 26, height: '230 cm', birthday: 'April 9', bounty: 108000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Self-destructive/regenerative "berserker" combat style'],
    bio: 'A hulking monk-pirate whose fighting style channels self-inflicted damage into explosive bursts of strength. One of the "Worst Generation" captains who rose to prominence at Sabaody Archipelago alongside Luffy and Law.'
  },
  {
    id: 'scratchmen-apoo', name: 'Scratchmen Apoo', epithet: null,
    affiliation: 'On Air Pirates (later Blackbeard-aligned)', role: 'Captain', origin: 'South Blue',
    age: 34, height: '298 cm', birthday: 'June 27', bounty: 350000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Sound-based long-range combat (body as instrument)'],
    bio: 'A "Worst Generation" pirate whose body doubles as a musical weapon, launching sound-based attacks at range. Apoo betrayed his old ally Kid during the raid on Onigashima, aligning himself with Kaido and later Blackbeard\'s growing power base.'
  },
  {
    id: 'eustass-kid', name: 'Eustass Kid', epithet: 'Captain',
    affiliation: 'Kid Pirates', role: 'Captain / Yonko-rank', origin: 'South Blue',
    age: 23, height: '205 cm', birthday: 'January 10', bounty: 3000000000, status: 'Alive',
    devilFruit: 'jiki-jiki-no-mi', firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Jiki Jiki no Mi (magnetism manipulation)', "Conqueror's Haki", 'Armament Haki'],
    bio: 'One of the "Worst Generation" and later a Yonko-rank captain, whose magnetic powers let him assemble massive scrap-metal weapons and giant armored fists. Kid\'s brutal, take-no-prisoners approach to piracy made him a natural rival to Luffy, culminating in their uneasy alliance against Kaido and Big Mom.'
  },
  {
    id: 'killer', name: 'Killer', epithet: 'Massacre Soldier',
    affiliation: 'Kid Pirates', role: 'First Mate', origin: 'South Blue',
    age: 25, height: '204 cm', birthday: 'January 20', bounty: 1000000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Dual scythe-blade combat (Punk Gibson)', 'High-speed footwork', "Advanced Haki"],
    bio: "Eustass Kid's loyal first mate, fighting with twin roller-bladed scythes at blinding speed. Killer's unwavering devotion to his captain has carried him through some of the bloodiest fights of the New World, including the war on Onigashima."
  },
  {
    id: 'gol-d-roger', name: 'Gol D. Roger', epithet: 'Pirate King',
    affiliation: 'Roger Pirates', role: 'Captain', origin: 'Loguetown, East Blue',
    age: 53, height: '198 cm', birthday: 'December 31', bounty: 5564800000, status: 'Deceased',
    devilFruit: null, firstAppearance: 'Chapter 1, "Romance Dawn" (mentioned)',
    abilities: ["Peak Conqueror's Haki", 'Legendary swordsmanship', 'First to conquer the Grand Line'],
    bio: 'The only pirate to ever reach Laugh Tale and claim the title of Pirate King, whose public execution and final words about the One Piece ignited the Great Age of Pirates. Roger died of an incurable illness rather than in battle, leaving behind a legacy — and a son, Ace — that still shapes the entire world decades later.'
  },
  {
    id: 'bellamy', name: 'Bellamy', epithet: 'Hyena',
    affiliation: 'Donquixote Pirates (formerly Bellamy Pirates)', role: 'Subordinate', origin: 'Unknown',
    age: 26, height: '198 cm', birthday: 'April 1', bounty: 55000000, status: 'Alive',
    devilFruit: 'nobu-nobu-no-mi', firstAppearance: 'Chapter 296, "The Man Called Bellamy the Hyena"',
    abilities: ['Nobu Nobu no Mi (spring-loaded limbs)'],
    bio: 'A brash pirate who once mocked Luffy\'s dream of finding the "make-believe" One Piece before being humiliated in a one-sided beatdown. Bellamy later resurfaced as one of Doflamingo\'s subordinates, given a second chance to prove his worth after his old crew\'s downfall.'
  },
  {
    id: 'magellan', name: 'Magellan', epithet: null,
    affiliation: 'Impel Down (Chief Warden)', role: 'Chief Warden', origin: 'Unknown',
    age: 40, height: '666 cm', birthday: 'August 24', bounty: null, status: 'Alive',
    devilFruit: 'doku-doku-no-mi', firstAppearance: 'Chapter 528, "The Great Jailbreak"',
    abilities: ['Doku Doku no Mi (Logia, poison generation)'],
    bio: 'The feared chief warden of Impel Down, whose poison Logia is potent enough to dissolve nearly anything it touches, including his own digestive system. Magellan\'s brutal efficiency made the great prison break one of the most dangerous operations any of its participants ever attempted.'
  },
  {
    id: 'shirahoshi', name: 'Shirahoshi', epithet: 'Mermaid Princess',
    affiliation: 'Ryugu Kingdom', role: 'Princess', origin: 'Fishman Island',
    age: 17, height: '1000 cm', birthday: 'August 8', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 609, "Sea Monster Street"',
    abilities: ['Ability to summon and command Sea Kings'],
    bio: 'The mermaid princess of Fishman Island, sole daughter of King Neptune, whose innate ability to call Sea Kings makes her one of the most strategically important people in the world. Long confined out of fear for her safety, Shirahoshi found genuine confidence through her friendship with the Straw Hats.'
  },
  {
    id: 'carrot', name: 'Carrot', epithet: null,
    affiliation: 'Mink Tribe / Straw Hat Grand Fleet', role: 'Guardian of Zou', origin: 'Zou',
    age: 19, height: '150 cm', birthday: 'June 22', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 803, "Mokomo Dukedom"',
    abilities: ['Sulong transformation (full-moon Mink power boost)', 'Electro (learned from Nami)'],
    bio: 'An energetic Mink rabbit-warrior from Zou who joined the Straw Hats\' journey through Wano, capable of the rare Sulong form that grants Minks moonlight-fueled power. Carrot\'s enthusiasm and combat skill made her a valuable, if temporary, addition to the crew\'s allies.'
  },
  {
    id: 'pekoms', name: 'Pekoms', epithet: null,
    affiliation: 'Big Mom Pirates / Mink Tribe', role: 'Officer', origin: 'Zou',
    age: 33, height: '235 cm', birthday: 'February 25', bounty: 330000000, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 651, "Sanji\'s Reply"',
    abilities: ['Mink physical combat (lion-type)', 'Sulong transformation'],
    bio: 'A lion Mink serving as one of Big Mom\'s enforcers, tasked with delivering Sanji\'s marriage summons to the Straw Hats. Pekoms\' loyalty to Big Mom is genuine, even as he quietly respects the crew he was sent to threaten.'
  },
  {
    id: 'vander-decken-ix', name: 'Vander Decken IX', epithet: null,
    affiliation: 'Flying Dutchman Pirates', role: 'Captain', origin: 'Unknown',
    age: 41, height: '355 cm', birthday: 'March 9', bounty: 220000000, status: 'Alive',
    devilFruit: 'mato-mato-no-mi', firstAppearance: 'Chapter 619, "The Ruler of Fishman Island"',
    abilities: ['Mato Mato no Mi (curse-marked long-range projectile targeting)'],
    bio: 'A pirate captain who has spent a decade obsessively "courting" Princess Shirahoshi from afar, hurling cursed objects that track any target he has ever marked, no matter the distance. Decken\'s single-minded obsession made him a recurring menace to Fishman Island\'s royal family.'
  },
  {
    id: 'rosinante', name: 'Rosinante', epithet: 'Corazon',
    affiliation: 'Donquixote Pirates (secretly Marine intelligence)', role: 'Undercover Agent', origin: 'Mariejois',
    age: null, height: '398 cm', birthday: 'December 26', bounty: 5000000, status: 'Deceased',
    devilFruit: 'nagi-nagi-no-mi', firstAppearance: 'Chapter 699, "Corazon"',
    abilities: ['Nagi Nagi no Mi (silence field generation)', 'Marine intelligence tradecraft'],
    bio: 'Doflamingo\'s younger brother, secretly a Marine intelligence agent who infiltrated the Donquixote Family to gather evidence against them. Corazon rescued the dying Trafalgar Law from the Amber Lead disease and gave his life protecting the boy and the Ope Ope no Mi from his own brother.'
  },
  {
    id: 'vinsmoke-judge', name: 'Vinsmoke Judge', epithet: null,
    affiliation: 'Germa Kingdom', role: 'King', origin: 'Germa Kingdom',
    age: 61, height: '200 cm', birthday: 'February 10', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 838, "Vinsmoke Judge"',
    abilities: ['Genetic engineering (Germa 66 super-soldiers)', 'Military command'],
    bio: 'The militaristic king of the Germa Kingdom and Sanji\'s father, who genetically modified his children into super-soldiers, cutting Sanji out of the process for showing too much heart. Judge\'s alliance-driven ambitions repeatedly put him at odds with the son who rejected everything he stood for.'
  },
  {
    id: 'vinsmoke-reiju', name: 'Vinsmoke Reiju', epithet: 'Poison Pink',
    affiliation: 'Germa Kingdom', role: 'Princess', origin: 'Germa Kingdom',
    age: 23, height: '167 cm', birthday: 'July 27', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 838, "Vinsmoke Judge"',
    abilities: ['Poison generation & immunity (genetic modification)', 'Raid Suit combat'],
    bio: 'Sanji\'s older sister, whose genetic modifications let her generate and resist poison at will. Reiju was the only Vinsmoke sibling to show Sanji kindness growing up, and she risked her father\'s wrath to help him escape his arranged marriage on Whole Cake Island.'
  },
  {
    id: 'stussy', name: 'Stussy', epithet: null,
    affiliation: 'CP0 / Vegapunk laboratory', role: 'Agent', origin: 'Unknown (clone)',
    age: null, height: '178 cm', birthday: 'Unknown', bounty: null, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 906 (cameo), Chapter 1057 (full role)',
    abilities: ['CP0 combat & espionage training', 'Multiple identical bodies (clone network)'],
    bio: 'A CP0 agent revealed during the Egghead Incident to be one of many identical clone bodies connected to Vegapunk\'s research, blurring the line between assassin and science experiment. Stussy\'s true loyalties, and the full scope of what she is, remain one of the arc\'s lingering mysteries.'
  },
  {
    id: 'jewelry-bonney', name: 'Jewelry Bonney', epithet: null,
    affiliation: 'Bonney Pirates', role: 'Captain', origin: 'South Blue',
    age: 24, height: '141 cm (variable via her fruit)', birthday: 'August 1', bounty: 3125000000, status: 'Alive',
    devilFruit: 'toshi-toshi-no-mi', firstAppearance: 'Chapter 498, "Trafalgar Law"',
    abilities: ['Toshi Toshi no Mi (age alteration, self & others)'],
    bio: "The daughter of the Revolutionary-aligned former Warlord Bartholomew Kuma, searching for the truth behind her father's mechanized fate. Bonney's devil fruit lets her transform her own age at will, from a toddler to an elder, a power she used to devastating effect during the assault on Egghead Island to protect her father."
  },
  {
    id: 'kozuki-momonosuke', name: 'Kozuki Momonosuke', epithet: null,
    affiliation: 'Kozuki Family', role: 'Shogun of Wano', origin: 'Wano Country',
    age: 8, height: '105 cm', birthday: 'December 3', bounty: 100, status: 'Alive',
    devilFruit: null, firstAppearance: 'Chapter 655, "Kinemon of the Foxfire"',
    abilities: ['Occasional forced dragon transformation (via SMILE-derived drug)', 'Rightful claim to Wano\'s shogunate'],
    bio: 'The son of Kozuki Oden, thrust into leadership as Wano\'s new shogun after twenty years frozen in time by Toki\'s Devil Fruit. Momonosuke\'s reluctant, often terrified heroism during the raid on Onigashima, including flying into battle as a dragon, marked his growth into the heir his father hoped he would become.'
  },
  {
    id: 'uta', name: 'Uta', epithet: "World's Greatest Diva",
    affiliation: 'Independent (raised by the Red Hair Pirates)', role: 'Singer', origin: "Raised aboard Shanks' ship, later Elbaf",
    age: 18, height: '156 cm', birthday: 'March 8', bounty: null, status: 'Deceased',
    devilFruit: 'uta-uta-no-mi', firstAppearance: 'One Piece Film: Red (2022)',
    abilities: ['Uta Uta no Mi (trapping listeners inside Uta no Sekai)', 'World-renowned singing voice', 'Advanced physical combat (implied Haki)'],
    bio: "The secret daughter of \"Red-Haired\" Shanks and Luffy's closest childhood friend, hidden away and raised on Elbaf after Shanks told her he had died, so she would never be tempted to follow him into a pirate's life. Uta grew up to become the most famous singer in the world, performing behind a hidden identity. At her debut concert on the Island of Elegia, grief and a desire to end all suffering drove her to use her Devil Fruit to try to trap humanity inside a permanent dream world, a plan called \"New Genesis\" that only Luffy — and her father — could stop. She died in Shanks' arms soon after, her heart unable to bear the strain the power had placed on it since childhood. (Appears in One Piece Film: Red, a movie storyline outside the main manga/anime continuity.)"
  }
];
