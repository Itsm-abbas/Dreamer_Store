const products = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
    slug: "Hp-M234",
    brand: "HP",
    title: "HP M234",
    reviews: 4,
    desc: "Powerfull Laptop",
    price: 200.25,
    category: "Laptop",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80",
    slug: "Dell-M123",
    brand: "Dell",
    title: "Dell M123",
    reviews: 5,
    desc: "Powerfull Laptop",
    price: 200.25,
    category: "Laptop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    slug: "Apple-3213",
    brand: "Apple",
    title: "Apple3213",
    reviews: 4,
    desc: "Powerfull Laptop",
    price: 400.25,
    category: "Laptop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    slug: "Aspiron-M867",
    brand: "Aspiron",
    title: "Aspiron M867",
    reviews: 3,
    desc: "Powerfull Laptop",
    price: 600.5,
    category: "Laptop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    slug: "HP-M0978",
    brand: "HP",
    title: "HP M0978",
    reviews: 5,
    desc: "Powerfull Laptop",
    price: 700.5,
    category: "Laptop",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
    slug: "Dell-M987",
    brand: "Dell",
    title: "Dell M987",
    reviews: 4,
    desc: "Powerfull Laptop",
    price: 200.5,
    category: "Laptop",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    slug: "Nike-Powerful-Shoe",
    brand: "Nike",
    title: "Nike Shoe",
    reviews: 4,
    desc: "Flexible Shoe",
    price: 200.5,
    category: "Shoes",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    slug: "Nike-fast-shoe",
    brand: "Nike",
    title: "Nike Shoe",
    reviews: 4,
    desc: "Powerfull Shoes",
    price: 200.5,
    category: "Shoes",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    slug: "Sperry Men's Striper",
    brand: "Sperry",
    title: "Sperry Men's Striper",
    reviews: 4,
    desc: "Shaft measures approximately low-top from arch",
    price: 200.5,
    category: "Shoes",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    slug: "New Balance Men's 669 V2 Walking Shoe",
    brand: "Balance",
    title: "New Balance Men's 669 V2 Walking Shoe",
    reviews: 4,
    desc: "Tackle New Terrain: Designed for stability and style, the 669v2 walking shoe from New Balance is a comfortable travel companion that???s always ready to go off-road",
    price: 200.5,
    category: "Shoes",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    slug: "Clarks Men's Tilden",
    brand: "Clarks",
    title: "Clarks Men's Tilden",
    reviews: 4,
    desc: "Thermoplastic Elastomers sole. Heel measures approximately 0.98",
    price: 200.5,
    category: "Shoes",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    slug: "Under Armour Men's",
    brand: "Armour",
    title: "Under Armour Men's",
    reviews: 4,
    desc: "Lightweight mesh upper with 3-color digital print delivers complete breathability Durable leather overlays for stability",
    price: 200.5,
    category: "Shoes",
  },
  {
    id: 12,
    image: "https://m.media-amazon.com/images/I/81zvCluMxQS._AC_UX385_.jpg",
    slug: "Champion T-Shirt",
    brand: "Nike",
    title: "Champion T-Shirt",
    reviews: 4,
    desc: "OFT AND DURABLE - Made of pure ringspun cotton, grown in the U.S., with a higher stitch count and reinforced shoulder seams for long life.",
    price: 200.5,
    category: "Shirts",
  },
  {
    id: 13,
    image: "https://m.media-amazon.com/images/I/51wgCfk0CtL._AC_UX342_.jpg",
    slug: "Carhartt Men's",
    brand: "Carhartt",
    title: "Carhartt Carhartt Men's",
    reviews: 4,
    desc: "60% Cotton, 40% Polyester",
    price: 200.5,
    category: "Shirts",
  },
  {
    id: 14,
    image: "https://m.media-amazon.com/images/I/81IQnaKr3FL._AC_UX342_.jpg",
    slug: "Champion Men's Classic T-Shirt",
    brand: "Classic",
    title: "Champion Men's Classic T-Shirt",
    reviews: 4,
    desc: "SOFT COTTON TO FEEL GOOD ABOUT - Traceable, US-grown, ringspun cotton, produced using less water while yielding an ultra-soft feel.",
    price: 200.5,
    category: "Shirts",
  },
  {
    id: 15,
    image: "https://m.media-amazon.com/images/I/71t-Gl6x6KL._AC_UX385_.jpg",
    slug: "Champion Men's Everyday Fitted",
    brand: "Everyday",
    title: "Champion Men's Everyday Fitted",
    reviews: 4,
    desc: "THE COMFORT OF COTTON - Soft and durable US-grown cotton knit",
    price: 200.5,
    category: "Pants",
  },
  {
    id: 16,
    image: "https://m.media-amazon.com/images/I/81Ok-wv5YTL._AC_UY445_.jpg",
    slug: "Calvin Klein Men's Slim Fit Dress Pant",
    brand: "Slim",
    title: "Calvin Klein Men's Slim Fit Dress Pant",
    reviews: 4,
    desc: "88% Polyester, 11% Rayon-Rayonne,1% Spande Imported",
    price: 200.5,
    category: "Pants",
  },
  {
    id: 17,
    image: "https://m.media-amazon.com/images/I/71BkSasQ3IS._AC_UX342_.jpg",
    slug: "Women's Woven Jogger Pant",
    brand: "Woven",
    title: "Women's Woven Jogger Pant",
    reviews: 4,
    desc: "This comfortable jogger pant was built for gym workouts and weekend wear",
    price: 200.5,
    category: "Pants",
  },
];
export const category = ["All Products", "Laptop", "Shirts", "Pants", "Shoes"];

export default products;
