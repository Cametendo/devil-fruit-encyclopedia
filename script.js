const devilFruits = [
  {
    name: "Gomu Gomu no Mi",
    alias: "True name: Hito Hito no Mi, Model: Nika",
    type: "Mythical Zoan",
    user: "Monkey D. Luffy",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/1/12/Gomu_Gomu_no_Mi_Infobox.png/revision/latest?cb=20221108072550",
    description:
      "Grants a rubber-like body and, after awakening, allows Luffy to fight with extreme freedom and cartoonish physicality.",
    detail:
      "The World Government concealed its real identity for centuries because of its connection to the Sun God Nika.",
    source: "https://onepiece.fandom.com/wiki/Gomu_Gomu_no_Mi",
    meta: [
      ["Category", "Mythical Zoan disguised as Paramecia"],
      ["Current user", "Monkey D. Luffy"],
      ["Notable trait", "Elastic body, explosive awakening versatility"],
    ],
  },
  {
    name: "Mera Mera no Mi",
    alias: "Flame-Flame Fruit",
    type: "Logia",
    user: "Portgas D. Ace, later Sabo",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/8/8c/Mera_Mera_no_Mi_Infobox.png/revision/latest?cb=20240710204632",
    description:
      "Lets the user create, control, and become fire, making it one of the best-known offensive Logias.",
    detail:
      "After Ace's death, the fruit reincarnated and was won by Sabo in Dressrosa's Corrida Colosseum tournament.",
    source: "https://onepiece.fandom.com/wiki/Mera_Mera_no_Mi",
    meta: [
      ["Category", "Logia"],
      ["Current user", "Sabo"],
      ["Previous user", "Portgas D. Ace"],
    ],
  },
  {
    name: "Ope Ope no Mi",
    alias: "Op-Op Fruit",
    type: "Paramecia",
    user: "Trafalgar D. Water Law",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/0/0e/Ope_Ope_no_Mi_Infobox.png/revision/latest?cb=20210409181034",
    description:
      "Creates a spherical ROOM where the user can perform impossible surgeries, spatial cuts, and object manipulation.",
    detail:
      "It is called the Ultimate Devil Fruit by some because it can perform the Perennial Youth Operation at the cost of the user's life.",
    source: "https://onepiece.fandom.com/wiki/Ope_Ope_no_Mi",
    meta: [
      ["Category", "Paramecia"],
      ["Current user", "Trafalgar Law"],
      ["Signature move", "ROOM"],
    ],
  },
  {
    name: "Yami Yami no Mi",
    alias: "Dark-Dark Fruit",
    type: "Logia",
    user: "Marshall D. Teach",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/f/f5/Yami_Yami_no_Mi_Infobox.png/revision/latest?cb=20240627010252",
    description:
      "Controls darkness with a gravity-like pull that absorbs attacks, drags targets in, and can suppress other Devil Fruit powers through contact.",
    detail:
      "Teach hunted this fruit for years before betraying the Whitebeard Pirates to claim it.",
    source: "https://onepiece.fandom.com/wiki/Yami_Yami_no_Mi",
    meta: [
      ["Category", "Logia"],
      ["Current user", "Marshall D. Teach"],
      ["Notable trait", "Can nullify other abilities on contact"],
    ],
  },
  {
    name: "Bara Bara no Mi",
    alias: "Chop-Chop Fruit",
    type: "Paramecia",
    user: "Buggy",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/9/9c/Bara_Bara_no_Mi_Infobox.png/revision/latest?cb=20240421082610",
    description:
      "Allows the user's body to split into floating pieces while keeping control over each part.",
    detail:
      "Buggy is effectively immune to sword slashes, which made him a natural counter to cutting attacks long before he became an Emperor.",
    source: "https://onepiece.fandom.com/wiki/Bara_Bara_no_Mi",
    meta: [
      ["Category", "Paramecia"],
      ["Current user", "Buggy"],
      ["Defense", "Natural resistance to slicing attacks"],
    ],
  },
  {
    name: "Gura Gura no Mi",
    alias: "Tremor-Tremor Fruit",
    type: "Paramecia",
    user: "Marshall D. Teach",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/e/e3/Gura_Gura_no_Mi_Infobox.png/revision/latest?cb=20251002184350",
    description:
      "Creates devastating shockwaves and quakes through the air, sea, and ground on a massive scale.",
    detail:
      "Formerly wielded by Edward Newgate, it was described as having the power to destroy the world.",
    source: "https://onepiece.fandom.com/wiki/Gura_Gura_no_Mi",
    meta: [
      ["Category", "Paramecia"],
      ["Current user", "Marshall D. Teach"],
      ["Previous user", "Edward Newgate"],
    ],
  },
  {
    name: "Hana Hana no Mi",
    alias: "Flower-Flower Fruit",
    type: "Paramecia",
    user: "Nico Robin",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/2/21/Hana_Hana_no_Mi_Infobox.png/revision/latest?cb=20191228120242",
    description:
      "Sprouts replicas of the user's body parts on surfaces, enemies, or even in midair, enabling grapples, mobility, and giant limb techniques.",
    detail:
      "Robin later extends the fruit into full-body manifestations such as Demonio Fleur.",
    source: "https://onepiece.fandom.com/wiki/Hana_Hana_no_Mi",
    meta: [
      ["Category", "Paramecia"],
      ["Current user", "Nico Robin"],
      ["Utility", "Crowd control, scouting, traversal"],
    ],
  },
  {
    name: "Hie Hie no Mi",
    alias: "Ice-Ice Fruit",
    type: "Logia",
    user: "Kuzan",
    image:
      "assets/hie-hie-no-mi.svg",
    description:
      "Lets the user create, control, and become ice, including freezing oceans and opponents over huge areas.",
    detail:
      "Kuzan's ten-day duel with Sakazuki permanently changed Punk Hazard's climate.",
    source: "https://onepiece.fandom.com/wiki/Hie_Hie_no_Mi",
    meta: [
      ["Category", "Logia"],
      ["Current user", "Kuzan"],
      ["Scale", "Can freeze the sea and reshape battlefields"],
    ],
  },
  {
    name: "Uo Uo no Mi, Model: Seiryu",
    alias: "Fish-Fish Fruit, Azure Dragon Model",
    type: "Mythical Zoan",
    user: "Kaido",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/f/f9/Uo_Uo_no_Mi%2C_Model_Seiryu_Infobox.png/revision/latest?cb=20211204205430",
    description:
      "Transforms the user into an enormous azure dragon with flight, flame clouds, wind blades, and elemental attacks.",
    detail:
      "Vegapunk later used Kaido's lineage factor to create an artificial copy eaten by Momonosuke.",
    source: "https://onepiece.fandom.com/wiki/Uo_Uo_no_Mi,_Model:_Seiryu",
    meta: [
      ["Category", "Mythical Zoan"],
      ["Current user", "Kaido"],
      ["Related copy", "Artificial version eaten by Momonosuke"],
    ],
  },
  {
    name: "Mochi Mochi no Mi",
    alias: "Mochi-Mochi Fruit",
    type: "Special Paramecia",
    user: "Charlotte Katakuri",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/2/2c/Mochi_Mochi_no_Mi_Infobox.png/revision/latest?cb=20250826143835",
    description:
      "Produces and manipulates mochi with a body that behaves much like a Logia, especially when paired with advanced Observation Haki.",
    detail:
      "It was initially presented as a Logia before being reclassified as a Special Paramecia.",
    source: "https://onepiece.fandom.com/wiki/Mochi_Mochi_no_Mi",
    meta: [
      ["Category", "Special Paramecia"],
      ["Current user", "Charlotte Katakuri"],
      ["Combat style", "Shape-shifting mochi body and sticky restraint"],
    ],
  },
  {
    name: "Ito Ito no Mi",
    alias: "String-String Fruit",
    type: "Paramecia",
    user: "Donquixote Doflamingo",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/a/ae/Ito_Ito_no_Mi_Infobox.png/revision/latest?cb=20151220070449",
    description:
      "Creates razor-thin strings for slicing, puppeteering, movement through the sky, and enormous techniques like the Birdcage.",
    detail:
      "Doflamingo used awakened strings to turn buildings and streets in Dressrosa into attack vectors.",
    source: "https://onepiece.fandom.com/wiki/Ito_Ito_no_Mi",
    meta: [
      ["Category", "Paramecia"],
      ["Current user", "Donquixote Doflamingo"],
      ["Signature move", "Birdcage"],
    ],
  },
  {
    name: "Mero Mero no Mi",
    alias: "Love-Love Fruit",
    type: "Paramecia",
    user: "Boa Hancock",
    image:
      "https://static.wikia.nocookie.net/onepiece/images/9/98/Mero_Mero_no_Mi_Infobox.png/revision/latest?cb=20230306202058",
    description:
      "Turns targets to stone when they are captivated by the user, and also enables direct petrification through kicks and projectiles.",
    detail:
      "Its lethality comes from both Hancock's beauty and the fruit's ability to petrify without relying on one specific attack pattern.",
    source: "https://onepiece.fandom.com/wiki/Mero_Mero_no_Mi",
    meta: [
      ["Category", "Paramecia"],
      ["Current user", "Boa Hancock"],
      ["Threat", "Mass petrification against susceptible targets"],
    ],
  },
];

const fruitGrid = document.querySelector("#fruit-grid");
const template = document.querySelector("#fruit-card-template");
const fruitCount = document.querySelector("#fruit-count");

fruitCount.textContent = String(devilFruits.length);

for (const fruit of devilFruits) {
  const card = template.content.firstElementChild.cloneNode(true);
  const image = card.querySelector("img");
  const title = card.querySelector("h3");
  const type = card.querySelector(".fruit-type");
  const subtitle = card.querySelector(".subtitle");
  const meta = card.querySelector(".fruit-meta");
  const description = card.querySelector(".description");
  const detail = card.querySelector(".extra-detail");
  const source = card.querySelector(".source-link");

  image.src = fruit.image;
  image.alt = `${fruit.name} Devil Fruit`;
  image.loading = "lazy";
  image.decoding = "async";
  image.referrerPolicy = "no-referrer";
  title.textContent = fruit.name;
  type.textContent = fruit.type;
  subtitle.textContent = fruit.alias;
  description.textContent = fruit.description;
  detail.textContent = fruit.detail;
  source.href = fruit.source;
  source.textContent = "Open wiki entry";

  for (const [label, value] of fruit.meta) {
    const item = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = `${label}:`;
    item.append(strong, ` ${value}`);
    meta.append(item);
  }

  fruitGrid.append(card);
}
