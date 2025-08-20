const itemCard = [
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772774/classic-cheesecake_szaaie.webp",
    name: "9 Inch Classic Cheesecake",
    minPrice: 60.00,
    description: "Classic cheesecake with optional add-ons",
    category: "Cheesecakes",
    addOns: [
      { name: "Berries", price: 5.00 }
    ],
    flavors: ["Classic"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772775/Banana-Pudding-Cheesecake_uhx1ht.jpg",
    name: "Banana Pudding Cheesecake",
    minPrice: 70.00,
    description: "Banana pudding flavored cheesecake, topped with whipped cream, Chessman cookies & bananas",
    category: "Cheesecakes",
    flavors: ["Banana Pudding"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772773/dozen-cupcakes_lzxika.jpg",
    name: "Dozen Cupcakes",
    minPrice: 45.00,
    description: "12 cupcakes with your choice of flavor",
    category: "Cupcakes",
    flavors: ["Vanilla", "Chocolate", "Strawberry", "Oreo"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772774/box-cupcakes-4_sqyuxr.jpg",
    name: "Box of 4 Cupcakes",
    minPrice: 15.00,
    description: "4 cupcakes with your choice of flavor",
    category: "Cupcakes",
    flavors: ["Vanilla", "Chocolate", "Strawberry", "Oreo"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772773/dozen-chocolate-covered-strawberries_uqx0d3.jpg",
    name: "Dozen Chocolate Covered Strawberries",
    minPrice: 40.00,
    description: "Comes with 12 strawberries",
    category: "Dessert Boxes",
    includes: ["12 Chocolate Covered Strawberries"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772775/assorted-dessert_j54tjc.jpg",
    name: "Assorted Dessert Boxes",
    minPrice: 35.00,
    description: "Includes a mix of chocolate treats",
    category: "Dessert Boxes",
    includes: [
      "Chocolate Covered Oreos",
      "Chocolate Rice Krispies",
      "Chocolate Covered Pretzels"
    ]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772773/largepuddingtray_yzcvnx.jpg",
    name: "Large Pudding Tray",
    minPrice: 55.00,
    description: "Serves 12+",
    category: "Pudding",
    flavors: ["The OG Banana", "Strawberry Shortcake", "Vegan Banana", "Oreo"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772771/puddingtrey_hypuas.jpg",
    name: "Half & Half Tray",
    minPrice: 65.00,
    description: "Choose 2 pudding flavors",
    category: "Pudding",
    flavors: ["The OG Banana", "Strawberry Shortcake", "Vegan Banana", "Oreo"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772772/Puddingozjar_rmqsxf.jpg",
    name: "16oz Mason Jars",
    minPrice: 15.00,
    description: "Single-serve pudding in a mason jar",
    category: "Pudding",
    flavors: ["The OG Banana", "Strawberry Shortcake", "Vegan Banana", "Oreo"]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772775/banana-pudding1_bkqrph.jpg",
    name: "The OG Banana",
    minPrice: 15.00,
    maxPrice: 55.00,
    description: "Vanilla pudding with bananas & Chessman cookies",
    category: "Pudding"
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772772/Strawberry-Shortcake_fhyywb.jpg",
    name: "Strawberry Shortcake",
    minPrice: 15.00,
    maxPrice: 55.00,
    description: "Vanilla pudding with angel food cake, strawberry syrup, strawberries & Chessman cookie crumbs",
    category: "Pudding"
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772772/VeganBanana_p3g5t9.jpg",
    name: "Vegan Banana",
    minPrice: 20.00,
    maxPrice: 75.00,
    description: "Vegan vanilla pudding with vegan vanilla wafers",
    category: "Pudding"
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772772/oreopudding_be9ai0.jpg",
    name: "Oreo",
    minPrice: 15.00,
    maxPrice: 55.00,
    description: "Cookies & cream pudding with crushed Oreos",
    category: "Pudding"
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772772/puddingcups_ofchvy.jpg",
    name: "5oz Mini Cups with Any Flavor Pudding",
    minPrice: 3.00,
    description: "$60 minimum (20 cups). Flavors: The OG Banana, Strawberry Shortcake, Vegan Banana, Oreo",
    category: "Mini Pudding Cups",
    flavors: ["The OG Banana", "Strawberry Shortcake", "Vegan Banana", "Oreo"],
    addOns: [{ name: "Minimum Order", value: "20 cups" }]
  },
  {
    image: "https://res.cloudinary.com/doyqqtsk2/image/upload/v1745772822/cookies-menu_jda8hv.jpg",
    name: "Dozen Cookies",
    minPrice: 35.00,
    description: "Request a custom flavor",
    category: "Cookies",
    flavors: ["Custom / Request Flavor"]
  }
];

export default itemCard;
