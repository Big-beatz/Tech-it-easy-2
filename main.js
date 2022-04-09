// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//1a
// Maak een variabele om de namen in op te slaan
// schrijf de code om de namen uit de objecten te halen
const inventoryNames = inventory.map((inventoryName) => {
  return inventoryName.name
});

// console.log(inventoryNames);

//1b
// *maak een variabele om de verwachte uitkomst in op te slaan
// schrijf de code die bij elk object de original stock vergelijkt met de verkochte stock
const inventorySoldOut = inventory.filter((inventorySold) => {
  return inventorySold.originalStock === inventorySold.sold
})

// console.log(inventorySoldOut)

//1c
// Maak een variabele om de verwachte uitkomst in op te slaan
// schrijf de code die alle objecten met ambilight verzamelt

const hasAmbilight = inventory.filter((optionAmbilight)=> {
  return optionAmbilight.options.ambiLight === true
})

// console.log(hasAmbilight)

//1d
//Maak een variabele om de verwachte uitkomst in op te slaan
//Schrijf de code die de objecten sorteert in prijs van laag naar hoog

const inventoryByPrice = inventory.sort((a, b) => {
  return a.price - b.price
})

// console.log(inventoryByPrice)

//Opdracht 2
//2a
// Maak een variabele om het aantal verkochte tv's in op te slaan
// Schrijf de code om het aantal verkochte tv's te berekenen

let totalSold = 0

for (let i = 0; i < inventory.length; i++){
  totalSold += inventory[i].sold
}

// console.log(totalSold)

//2b
//Maak het referentie element aan in HTML
//koppel de uitkomst van totalSold aan dit element en implementeer het in de html
//verander de kleur via css
const verkocht = document.getElementById("verkocht")
verkocht.textContent = totalSold

//2c
// Maak een variabele om de original stock in op te slaan
// Schrijf de code om deze op te slaan

let originalStock = 0

for(let i = 0; i < inventory.length; i++){
  originalStock += inventory[i].originalStock
}

// console.log(originalStock)

// 2d
// Maak het referentie element aan in html
// koppel de uitkomst van originalStock aan dit element en implementeer dit in de html
// verander de kleur in css

const opgekocht = document.getElementById("opgekocht")
opgekocht.textContent = originalStock

// 2e
// Maak een variabele om de het aantal verkochte tv's in op te slaan
// Schrijf de code om dit uit te rekenen
// Maak het referentie element aan in html
// koppel de uitkomst van inStock aan dit element en implementeer dit in de html
// verander de kleur in css

let totalInStock = 0
for (let i = 0; i < inventory.length; i++){
  let lefInStock = inventory[i].originalStock - inventory[i].sold
  totalInStock += lefInStock
}

const voorraad = document.getElementById("voorraad")
voorraad.innerText = totalInStock

//Opdracht 3
// 3a
//Maak een div om deze lijst in aan te maken
// Gebruik een array map functie om alle merken te sorteren
// Maak een loop die voor elke entry van de nieuwe array een <li> implementeert op de html pagina

// const listOfBrands = inventory.map((brands) => {
//   return brands.brand
// })
//
// console.log(listOfBrands)
// const merken = document.getElementById("merken")
//
// for (let i = 0; i < listOfBrands.length; i++){
//   merken.innerHTML += `<li> ${listOfBrands[i]} </li>`
// }

//3b
//Zet bovenstaande code in een overkoepelende functie
function brandsToHTML(stocklist) {
  const listOfBrands = inventory.map((brands) => {
    return brands.brand
  })

  console.log(listOfBrands)
  const merken = document.getElementById("merken")

  for (let i = 0; i < listOfBrands.length; i++) {
    merken.innerHTML += `<li> ${listOfBrands[i]} </li>`
  }
}

brandsToHTML(inventory)

//4